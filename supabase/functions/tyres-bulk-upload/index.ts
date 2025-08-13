import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { parse } from "https://deno.land/std@0.224.0/csv/parse.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
  return chunks;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY");
    if (!supabaseUrl || !supabaseAnonKey) {
      return new Response(JSON.stringify({ error: "Missing Supabase env" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const authHeader = req.headers.get("Authorization") ?? "";
    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } },
    });

    let businessId: string | null = null;
    let sourceLabel = "api";
    let records: any[] = [];

    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      const body = await req.json();
      businessId = body.businessId ?? null;
      sourceLabel = body.source ?? sourceLabel;
      records = Array.isArray(body.records) ? body.records : [];
    } else if (contentType.includes("text/csv")) {
      const text = await req.text();
      const parsed = parse(text, { skipFirstRow: false, columns: true });
      records = Array.isArray(parsed) ? parsed : [];
      const url = new URL(req.url);
      businessId = url.searchParams.get("businessId");
      sourceLabel = url.searchParams.get("source") || sourceLabel;
    } else if (contentType.includes("multipart/form-data")) {
      const form = await req.formData();
      const file = form.get("file");
      businessId = (form.get("businessId") as string) || null;
      sourceLabel = (form.get("source") as string) || sourceLabel;
      if (file && typeof file === "object" && "text" in file) {
        const text = await (file as File).text();
        const parsed = parse(text, { skipFirstRow: false, columns: true });
        records = Array.isArray(parsed) ? parsed : [];
      }
    } else {
      return new Response(JSON.stringify({ error: "Unsupported Content-Type" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    if (!businessId) {
      return new Response(JSON.stringify({ error: "businessId is required" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    // Basic validation and normalization
    const allowedStates = new Set(["NSW","VIC","QLD","WA","SA","TAS","ACT","NT"]);
    const allowedStatus = new Set(["active","removed","recycled","disposed"]);

    const normalized = records.map((r) => {
      const n: any = { ...r };
      // Normalize headers to snake_case expectations
      const mapKey = (k: string) => k.trim().toLowerCase().replaceAll(" ", "_");
      const tmp: Record<string, any> = {};
      for (const [k, v] of Object.entries(n)) tmp[mapKey(k)] = v;

      return {
        business_id: businessId,
        tyre_serial: tmp.tyre_serial || tmp.serial || tmp.tire_serial,
        dot_code: tmp.dot_code ?? null,
        brand: tmp.brand ?? null,
        size: tmp.size ?? null,
        manufacture_date: tmp.manufacture_date ?? null,
        install_date: tmp.install_date ?? null,
        vehicle_registration: tmp.vehicle_registration || tmp.registration || null,
        location_state: tmp.location_state && String(tmp.location_state).toUpperCase(),
        location_postcode: tmp.location_postcode ? String(tmp.location_postcode) : null,
        status: tmp.status ? String(tmp.status).toLowerCase() : "active",
        qr_code_url: tmp.qr_code_url ?? null,
        session_id: "bulk",
      };
    });

    const errors: Array<{ index: number; error: string; serial?: string }> = [];
    const validRows = normalized.filter((row, idx) => {
      if (!row.tyre_serial) {
        errors.push({ index: idx, error: "Missing tyre_serial" });
        return false;
      }
      if (row.location_state && !allowedStates.has(row.location_state)) {
        errors.push({ index: idx, error: `Invalid location_state: ${row.location_state}`, serial: row.tyre_serial });
        return false;
      }
      if (row.status && !allowedStatus.has(row.status)) {
        errors.push({ index: idx, error: `Invalid status: ${row.status}`, serial: row.tyre_serial });
        return false;
      }
      return true;
    });

    let inserted = 0;
    let failed = errors.length;

    // Chunk insert to avoid payload limits
    const CHUNK_SIZE = 1000;
    for (const batch of chunkArray(validRows, CHUNK_SIZE)) {
      const { data, error } = await supabase
        .from("tyre_registrations")
        .insert(batch)
        .select("id, tyre_serial");

      if (error) {
        failed += batch.length;
        errors.push({ index: -1, error: `Batch insert error: ${error.message}` });
        continue;
      }

      inserted += data?.length ?? 0;

      // Insert lifecycle events for the successfully inserted rows
      const events = (data || []).map((r: any) => ({
        tyre_registration_id: r.id,
        event_type: "registered",
        event_date: new Date().toISOString(),
        notes: `Bulk import (${sourceLabel})`,
        recorded_by: "bulk-uploader",
        session_id: "bulk",
      }));

      if (events.length) {
        const { error: evErr } = await supabase.from("tyre_lifecycle_events").insert(events);
        if (evErr) {
          errors.push({ index: -1, error: `Lifecycle insert error: ${evErr.message}` });
        }
      }
    }

    const resp = { processed: records.length, inserted, failed, errors };
    return new Response(JSON.stringify(resp), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (e: any) {
    console.error("tyres-bulk-upload error", e);
    return new Response(JSON.stringify({ error: e.message || "Unknown error" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
