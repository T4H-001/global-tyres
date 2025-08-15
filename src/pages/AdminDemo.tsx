import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { EmailService } from "@/services/emailService";
import { Badge } from "@/components/ui/badge";

interface UploadResult {
  processed: number;
  inserted: number;
  failed: number;
  errors?: Array<{ index: number; error: string; serial?: string }>;
}

interface LifecycleEvent {
  id?: string;
  tyre_registration_id: string;
  event_type: string;
  event_date?: string;
  notes?: string;
}

const STATES = ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"] as const;
const BRANDS = ["Goodyear", "Bridgestone", "Michelin", "Pirelli", "Continental", "Kumho", "Hankook"] as const;
const SIZES = ["205/55R16", "215/60R16", "225/45R17", "235/45R18", "245/40R19", "265/60R18"] as const;
const STATUSES = ["active", "removed", "recycled", "disposed"] as const;

const randomPick = <T,>(arr: readonly T[]) => arr[Math.floor(Math.random() * arr.length)];

const AdminDemo: React.FC = () => {
  const { toast } = useToast();
  const [businessId, setBusinessId] = useState<string>(localStorage.getItem("demo_business_id") || "demo-business-001");
  const [recordCount, setRecordCount] = useState<number>(5000);
  const [alertEmail, setAlertEmail] = useState<string>(localStorage.getItem("demo_alert_email") || "demo-alerts@example.com");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<UploadResult | null>(null);

  const [kpis, setKpis] = useState({ total: 0, recycled: 0, disposed: 0, active: 0, removed: 0 });
  const recyclingRate = useMemo(() => (kpis.total ? Math.round((kpis.recycled / kpis.total) * 100) : 0), [kpis]);

  const [events, setEvents] = useState<LifecycleEvent[]>([]);

  useEffect(() => {
    localStorage.setItem("demo_business_id", businessId);
  }, [businessId]);

  useEffect(() => {
    localStorage.setItem("demo_alert_email", alertEmail);
  }, [alertEmail]);

  const generateRecords = useCallback((count: number) => {
    const now = Date.now();
    const records = Array.from({ length: count }).map((_, i) => {
      const serial = `TLRS-${now}-${i.toString().padStart(5, "0")}`;
      const state = randomPick(STATES);
      // Slightly bias towards active/recycled to look realistic
      const statusWeights: Record<typeof STATUSES[number], number> = {
        active: 55, removed: 10, recycled: 25, disposed: 10,
      };
      const statusPool: string[] = [];
      (STATUSES as readonly string[]).forEach((s) => {
        for (let j = 0; j < statusWeights[s as keyof typeof statusWeights]; j++) statusPool.push(s);
      });
      const status = randomPick(statusPool) as (typeof STATUSES)[number];

      return {
        tyre_serial: serial,
        brand: randomPick(BRANDS),
        size: randomPick(SIZES),
        location_state: state,
        location_postcode: String(2000 + Math.floor(Math.random() * 4000)),
        status,
      };
    });
    return records;
  }, []);

  const refreshKpis = useCallback(async () => {
    const total = (await supabase.from("tyre_registrations").select("id", { count: "exact", head: true })).count || 0;
    const recycled = (await supabase.from("tyre_registrations").select("id", { count: "exact", head: true }).eq("status", "recycled")).count || 0;
    const disposed = (await supabase.from("tyre_registrations").select("id", { count: "exact", head: true }).eq("status", "disposed")).count || 0;
    const active = (await supabase.from("tyre_registrations").select("id", { count: "exact", head: true }).eq("status", "active")).count || 0;
    const removed = (await supabase.from("tyre_registrations").select("id", { count: "exact", head: true }).eq("status", "removed")).count || 0;
    setKpis({ total, recycled, disposed, active, removed });
  }, []);

  const loadActivity = useCallback(async () => {
    const { data } = await supabase
      .from("tyre_lifecycle_events")
      .select("id, tyre_registration_id, event_type, event_date, notes")
      .order("event_date", { ascending: false })
      .limit(50);
    setEvents(data || []);
  }, []);

  useEffect(() => {
    refreshKpis();
    loadActivity();

    // Realtime updates for activity feed
    const channel = supabase
      .channel("schema-db-changes")
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "tyre_lifecycle_events" }, () => {
        loadActivity();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [refreshKpis, loadActivity]);

  const runAlerts = useCallback(async (inserted: number) => {
    // Simple demo rule: if many disposed tyres, raise an alert
    if (inserted >= 100 && alertEmail) {
      await EmailService.sendAlertEmail(alertEmail, "NSW", Math.min(inserted, 500));
      toast({ title: "Alert triggered", description: `High disposal rate detected. Email sent to ${alertEmail}.` });
    }
  }, [alertEmail, toast]);

  const seedData = useCallback(async () => {
    if (!businessId) {
      toast({ title: "Business ID required", description: "Please provide a business ID before seeding." });
      return;
    }
    setLoading(true);
    setResult(null);
    try {
      const records = generateRecords(recordCount);
      const { data, error } = await supabase.functions.invoke<UploadResult>("tyres-bulk-upload", {
        body: { businessId, source: "demo-seeder", records },
      });
      if (error) throw error;
      setResult(data || null);
      toast({ title: "Seeding complete", description: `${data?.inserted || 0} records inserted (${data?.failed || 0} failed).` });
      await refreshKpis();
      await runAlerts(data?.inserted || 0);
    } catch (e: any) {
      console.error(e);
      toast({ title: "Seeding failed", description: e.message || "Unknown error" });
    } finally {
      setLoading(false);
    }
  }, [businessId, recordCount, generateRecords, toast, refreshKpis, runAlerts]);

  const [chatInput, setChatInput] = useState("");
  const [chatLog, setChatLog] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const sendChat = useCallback(async () => {
    if (!chatInput.trim()) return;
    const message = chatInput.trim();
    setChatLog((l) => [...l, { role: "user", content: message }]);
    setChatInput("");
    try {
      const { data, error } = await supabase.functions.invoke("perplexity-chat", {
        body: { message },
      });
      if (error) throw error;
      const reply = (data as any)?.generatedText || (data as any)?.answer || JSON.stringify(data);
      setChatLog((l) => [...l, { role: "assistant", content: reply }]);
    } catch (e: any) {
      console.error(e);
      setChatLog((l) => [...l, { role: "assistant", content: `Error: ${e.message || "Check PERPLEXITY_API_KEY secret"}` }]);
    }
  }, [chatInput]);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Admin Demo Console | TLRS</title>
        <meta name="description" content="Seed demo data, view KPIs, activity feed, alerts, and internal Copilot chat for TLRS." />
        <link rel="canonical" href="/admin/demo" />
      </Helmet>

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Admin Demo Console</h1>
          <p className="text-muted-foreground">One-click demo seeding, KPIs, activity feed, alerts, and Copilot.</p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Demo Data Seeder</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="biz">Business ID</Label>
                <Input id="biz" value={businessId} onChange={(e) => setBusinessId(e.target.value)} placeholder="demo-business-001" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="count">Records</Label>
                <Input id="count" type="number" min={1} max={20000} value={recordCount} onChange={(e) => setRecordCount(parseInt(e.target.value || "0", 10))} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Alert recipient (email)</Label>
                <Input id="email" type="email" value={alertEmail} onChange={(e) => setAlertEmail(e.target.value)} placeholder="alerts@yourco.com" />
              </div>
              <Button onClick={seedData} disabled={loading} className="w-full">
                {loading ? "Seeding..." : `Seed ${recordCount.toLocaleString()} Records`}
              </Button>
              {result && (
                <div className="text-sm text-muted-foreground">
                  Processed {result.processed.toLocaleString()} • Inserted {result.inserted.toLocaleString()} • Failed {result.failed.toLocaleString()}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>KPIs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">Total</div>
                  <div className="text-2xl font-semibold">{kpis.total.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Recycled</div>
                  <div className="text-2xl font-semibold">{kpis.recycled.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Disposed</div>
                  <div className="text-2xl font-semibold">{kpis.disposed.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Recycling Rate</div>
                  <div className="text-2xl font-semibold">{recyclingRate}%</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rules & Alerts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">Demo rule: trigger alert email when large seeding completes.</p>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Email</Badge>
                <Badge variant="secondary">Toast</Badge>
              </div>
              <Button variant="outline" onClick={() => runAlerts(200)}>
                Test alert now
              </Button>
            </CardContent>
          </Card>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="order-2 lg:order-1">
            <CardHeader>
              <CardTitle>Live Activity Feed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Event</TableHead>
                      <TableHead>Tyre</TableHead>
                      <TableHead>When</TableHead>
                      <TableHead>Notes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {events.map((e) => (
                      <TableRow key={e.id}>
                        <TableCell className="font-medium capitalize">{e.event_type}</TableCell>
                        <TableCell className="text-muted-foreground">{e.tyre_registration_id.slice(0, 8)}…</TableCell>
                        <TableCell>{e.event_date ? new Date(e.event_date).toLocaleString() : "—"}</TableCell>
                        <TableCell className="text-muted-foreground">{e.notes || ""}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <Card className="order-1 lg:order-2">
            <CardHeader>
              <CardTitle>Internal Copilot (Perplexity)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm text-muted-foreground">Ask anything about the dataset or demo flow. Requires PERPLEXITY_API_KEY secret.</div>
              <div className="flex gap-2">
                <Input value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="e.g., Summarize disposal trends in NSW" onKeyDown={(e) => e.key === 'Enter' && sendChat()} />
                <Button onClick={sendChat}>Send</Button>
              </div>
              <div className="border rounded-md p-3 h-64 overflow-auto bg-muted/30">
                {chatLog.map((m, idx) => (
                  <div key={idx} className="mb-2">
                    <span className="text-xs uppercase text-muted-foreground">{m.role}</span>
                    <div className="whitespace-pre-wrap">{m.content}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default AdminDemo;
