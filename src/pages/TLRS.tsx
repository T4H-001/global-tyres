import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import Papa from "papaparse";

interface Scheme { id: string; name: string; country: string }
interface Manufacturer { id: string; name: string }
interface TyreRow {
  id: string;
  tyre_id: string;
  status: string;
  country: string;
  current_location: string | null;
  scheme_id: string | null;
  manufacturer_id: string | null;
  created_at: string;
}

const statuses = [
  { value: "new", label: "New" },
  { value: "in_use", label: "In Use" },
  { value: "collected", label: "Collected" },
  { value: "recycled", label: "Recycled" },
  { value: "disposed", label: "Disposed" },
];

function toCSV(rows: TyreRow[]) {
  const headers = [
    "tyre_id",
    "status",
    "country",
    "current_location",
    "created_at",
  ];
  const csv = [headers.join(",")].concat(
    rows.map((r) =>
      [r.tyre_id, r.status, r.country, r.current_location ?? "", r.created_at]
        .map((v) => `"${String(v).replaceAll('"', '""')}"`)
        .join(",")
    )
  );
  return csv.join("\n");
}

const TLRSApp = () => {
  const [schemes, setSchemes] = useState<Scheme[]>([]);
  const [manufacturers, setManufacturers] = useState<Manufacturer[]>([]);
  const [loading, setLoading] = useState(true);

  // Register form state
  const [tyreId, setTyreId] = useState("");
  const [country, setCountry] = useState("");
  const [schemeId, setSchemeId] = useState<string | undefined>();
  const [manufacturerId, setManufacturerId] = useState<string | undefined>();
  const [status, setStatus] = useState("new");
  const [location, setLocation] = useState("");
  const [dot, setDot] = useState("");
  const [productionDate, setProductionDate] = useState("");

  // Status update state
  const [updateTyreId, setUpdateTyreId] = useState("");
  const [updateStatus, setUpdateStatus] = useState("in_use");
  const [updateLocation, setUpdateLocation] = useState("");
  const [updateNotes, setUpdateNotes] = useState("");

  // Dashboard state
  const [filterId, setFilterId] = useState("");
  const [filterStatus, setFilterStatus] = useState<string | undefined>();
  const [filterLocation, setFilterLocation] = useState("");
  const [rows, setRows] = useState<TyreRow[]>([]);
  const [tableLoading, setTableLoading] = useState(false);

  useEffect(() => {
    document.title = "TLRS | Tyre Lifecycle Registration System";
  }, []);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const [{ data: s }, { data: m }] = await Promise.all([
        supabase.from("tyre_schemes").select("id,name,country").order("name"),
        supabase.from("manufacturers").select("id,name").order("name"),
      ]);
      setSchemes(s ?? []);
      setManufacturers(m ?? []);
      setLoading(false);
    };
    load();
  }, []);

  const fetchRows = async () => {
    setTableLoading(true);
    let query = supabase.from("tyres").select("id,tyre_id,status,country,current_location,scheme_id,manufacturer_id,created_at").order("created_at", { ascending: false }).limit(200);
    if (filterId) query = query.ilike("tyre_id", `%${filterId}%`);
    if (filterStatus) query = query.eq("status", filterStatus);
    if (filterLocation) query = query.ilike("current_location", `%${filterLocation}%`);
    const { data, error } = await query;
    setTableLoading(false);
    if (error) {
      toast({ title: "Failed to load tyres", description: error.message });
    } else {
      setRows(data ?? []);
    }
  };

  useEffect(() => {
    fetchRows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredRows = useMemo(() => rows, [rows]);

  const handleRegister = async () => {
    if (!tyreId || !country) {
      toast({ title: "Missing fields", description: "Tyre ID and Country are required." });
      return;
    }

    // Ensure user is authenticated
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      toast({ title: "Not authenticated", description: "Please sign in to register tyres." });
      return;
    }

    const registeredBy = user.id;

    const { error } = await supabase.from("tyres").insert({
      tyre_id: tyreId,
      country,
      scheme_id: schemeId ?? null,
      manufacturer_id: manufacturerId ?? null,
      status,
      current_location: location || null,
      dot_code: dot || null,
      production_date: productionDate || null,
      registered_by: registeredBy,
      metadata: null,
    });

    if (error) {
      // Common RLS hint
      toast({ title: "Register failed", description: error.message });
    } else {
      toast({ title: "Tyre registered", description: `Tyre ${tyreId} added` });
      setTyreId("");
      setLocation("");
      setDot("");
      setProductionDate("");
      fetchRows();
    }
  };

  const handleStatusUpdate = async () => {
    if (!updateTyreId) {
      toast({ title: "Missing Tyre ID" });
      return;
    }
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      toast({ title: "Not authenticated", description: "Please sign in." });
      return;
    }
    const { data: tyre } = await supabase
      .from("tyres")
      .select("id,status")
      .eq("tyre_id", updateTyreId)
      .maybeSingle();
    if (!tyre) {
      toast({ title: "Tyre not found" });
      return;
    }

    const updatedBy = user.id;

    const { error: updErr } = await supabase.from("status_updates").insert({
      tyre_id: tyre.id,
      previous_status: tyre.status,
      new_status: updateStatus,
      location: updateLocation || null,
      updated_by: updatedBy,
      notes: updateNotes || null,
    });
    if (updErr) {
      toast({ title: "Update failed", description: updErr.message });
      return;
    }

    const { error: tyreErr } = await supabase
      .from("tyres")
      .update({ status: updateStatus, current_location: updateLocation || null })
      .eq("id", tyre.id);
    if (tyreErr) {
      toast({ title: "Tyre update failed", description: tyreErr.message });
    } else {
      toast({ title: "Status updated" });
      setUpdateNotes("");
      fetchRows();
    }
  };

  return (
    <main className="min-h-screen bg-gradient-earth">
      <header className="border-b bg-background/70 backdrop-blur">
        <div className="container flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold">TLRS</h1>
          <div className="flex items-center gap-2">
            <Button variant="ghost" onClick={() => (window.location.href = "/faq")}>FAQ</Button>
            <Button variant="secondary" onClick={() => (window.location.href = "/")}>Home</Button>
            <Button variant="outline" onClick={async () => { await supabase.auth.signOut(); window.location.href = "/"; }}>Logout</Button>
          </div>
        </div>
      </header>

      <div className="container py-10">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold">Tyre Lifecycle Registration</h2>
          <p className="text-muted-foreground">Register tyres, update status, and export reports aligned with TSA/EPR programs.</p>
        </div>

        <Tabs defaultValue="register">
          <TabsList>
            <TabsTrigger value="register">Register Tyre</TabsTrigger>
            <TabsTrigger value="update">Update Status</TabsTrigger>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          </TabsList>

          <TabsContent value="register" className="mt-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Tyre Registration</CardTitle>
                <CardDescription>Enter tyre identifiers and program details</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Tyre ID (DOT/QR)</Label>
                  <Input value={tyreId} onChange={(e) => setTyreId(e.target.value)} placeholder="DOT-4A3Y-1234-2525" />
                </div>
                <div>
                  <Label>Country</Label>
                  <Input value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Australia" />
                </div>
                <div>
                  <Label>Scheme</Label>
                  <Select value={schemeId} onValueChange={setSchemeId}>
                    <SelectTrigger><SelectValue placeholder={loading ? "Loading..." : "Select scheme"} /></SelectTrigger>
                    <SelectContent>
                      {schemes.map((s) => (
                        <SelectItem key={s.id} value={s.id}>{s.name} — {s.country}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Manufacturer</Label>
                  <Select value={manufacturerId} onValueChange={setManufacturerId}>
                    <SelectTrigger><SelectValue placeholder={loading ? "Loading..." : "Select manufacturer"} /></SelectTrigger>
                    <SelectContent>
                      {manufacturers.map((m) => (
                        <SelectItem key={m.id} value={m.id}>{m.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Status</Label>
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger><SelectValue placeholder="Select status" /></SelectTrigger>
                    <SelectContent>
                      {statuses.map((s) => (
                        <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Location</Label>
                  <Input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Sydney, NSW" />
                </div>
                <div>
                  <Label>DOT Code</Label>
                  <Input value={dot} onChange={(e) => setDot(e.target.value)} placeholder="4A3Y 1234 2525" />
                </div>
                <div>
                  <Label>Production Date</Label>
                  <Input type="date" value={productionDate} onChange={(e) => setProductionDate(e.target.value)} />
                </div>
                <div className="md:col-span-2 flex gap-2">
                  <Button onClick={handleRegister}>Register Tyre</Button>
                  <Button variant="outline" onClick={() => {
                    const sample = [
                      ["tyre_id","country","status","current_location","scheme","manufacturer","dot_code","production_date"],
                      ["DOT-EXAMPLE-0001","Australia","new","Brisbane, QLD","TSA","Michelin","4A3Y 1234 2525","2025-01-10"]
                    ];
                    const csv = sample.map(r => r.join(",")).join("\n");
                    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = "tlrs-sample-upload.csv";
                    a.click();
                    URL.revokeObjectURL(url);
                  }}>Download sample CSV</Button>
                  <label className="inline-flex items-center gap-2 cursor-pointer">
                    <input type="file" accept=".csv" className="hidden" onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      const { data: { user } } = await supabase.auth.getUser();
                      if (!user) { toast({ title: "Sign in required" }); return; }

                      const schemeMap = new Map(schemes.map(s => [s.name.toLowerCase(), s.id]));
                      const manuMap = new Map(manufacturers.map(m => [m.name.toLowerCase(), m.id]));

                      Papa.parse(file, {
                        header: true,
                        skipEmptyLines: true,
                        complete: async (results) => {
                          const rows = (results.data as any[]).filter(Boolean);
                          if (!rows.length) { toast({ title: "No rows found" }); return; }

                          const allowed = new Set(statuses.map(s => s.value));
                          const inserts = rows.map(r => ({
                            tyre_id: String(r.tyre_id || r.Tyre_ID || "").trim(),
                            country: String(r.country || r.Country || "").trim(),
                            status: allowed.has(String(r.status || r.Status || "new").toLowerCase()) ? String(r.status || r.Status).toLowerCase() : "new",
                            current_location: (r.current_location || r.Location || "").trim() || null,
                            scheme_id: (schemeMap.get(String(r.scheme || r.Scheme || "").toLowerCase()) ?? null),
                            manufacturer_id: (manuMap.get(String(r.manufacturer || r.Manufacturer || "").toLowerCase()) ?? null),
                            dot_code: (r.dot_code || r.DOT || "").trim() || null,
                            production_date: (r.production_date || r.ProductionDate || "").trim() || null,
                            registered_by: user.id,
                            metadata: null,
                          })).filter(i => i.tyre_id && i.country);

                          if (!inserts.length) { toast({ title: "No valid rows" }); return; }
                          const { error } = await supabase.from("tyres").insert(inserts);
                          if (error) {
                            toast({ title: "Bulk upload failed", description: error.message });
                          } else {
                            toast({ title: "Bulk upload complete", description: `${inserts.length} tyres added` });
                            fetchRows();
                          }
                        },
                        error: (err) => toast({ title: "Parse error", description: String(err) })
                      });
                    }} />
                    <Button type="button" variant="ghost">Upload CSV</Button>
                  </label>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="update" className="mt-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Update Tyre Status</CardTitle>
                <CardDescription>Track lifecycle transitions with timestamp</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Tyre ID</Label>
                  <Input value={updateTyreId} onChange={(e) => setUpdateTyreId(e.target.value)} placeholder="Enter Tyre ID" />
                </div>
                <div>
                  <Label>New Status</Label>
                  <Select value={updateStatus} onValueChange={setUpdateStatus}>
                    <SelectTrigger><SelectValue placeholder="Select status" /></SelectTrigger>
                    <SelectContent>
                      {statuses.map((s) => (
                        <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Location</Label>
                  <Input value={updateLocation} onChange={(e) => setUpdateLocation(e.target.value)} placeholder="City / Site" />
                </div>
                <div>
                  <Label>Notes</Label>
                  <Input value={updateNotes} onChange={(e) => setUpdateNotes(e.target.value)} placeholder="Optional notes" />
                </div>
                <div className="md:col-span-2">
                  <Button onClick={handleStatusUpdate}>Record Update</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dashboard" className="mt-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Tyre Dashboard</CardTitle>
                <CardDescription>Search, filter and export to CSV</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <Label>Tyre ID</Label>
                    <Input value={filterId} onChange={(e) => setFilterId(e.target.value)} placeholder="Search by ID" />
                  </div>
                  <div>
                    <Label>Status</Label>
                    <Select value={filterStatus} onValueChange={setFilterStatus}>
                      <SelectTrigger><SelectValue placeholder="All" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All</SelectItem>
                        {statuses.map((s) => (
                          <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Location</Label>
                    <Input value={filterLocation} onChange={(e) => setFilterLocation(e.target.value)} placeholder="City / Site" />
                  </div>
                  <div className="flex items-end gap-2">
                    <Button onClick={fetchRows} disabled={tableLoading}>{tableLoading ? "Loading" : "Apply"}</Button>
                    <Button variant="outline" onClick={() => {
                      const blob = new Blob([toCSV(filteredRows)], { type: "text/csv;charset=utf-8;" });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement("a");
                      a.href = url;
                      a.download = `tlrs-tyres-${new Date().toISOString().slice(0,10)}.csv`;
                      a.click();
                      URL.revokeObjectURL(url);
                    }}>Export CSV</Button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b">
                        <th className="py-2">Tyre ID</th>
                        <th className="py-2">Status</th>
                        <th className="py-2">Country</th>
                        <th className="py-2">Location</th>
                        <th className="py-2">Registered</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredRows.map((r) => (
                        <tr key={r.id} className="border-b">
                          <td className="py-2 font-medium">{r.tyre_id}</td>
                          <td className="py-2">{r.status}</td>
                          <td className="py-2">{r.country}</td>
                          <td className="py-2">{r.current_location ?? ""}</td>
                          <td className="py-2">{new Date(r.created_at).toLocaleString()}</td>
                        </tr>
                      ))}
                      {!filteredRows.length && (
                        <tr>
                          <td colSpan={5} className="py-6 text-center text-muted-foreground">No tyres found</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default TLRSApp;
