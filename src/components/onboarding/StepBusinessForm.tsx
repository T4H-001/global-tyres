
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useSessionId } from "@/hooks/useSessionId";

type Props = {
  onComplete: (businessId: string) => void;
};

// Strict Australian state codes
type AUState = "NSW" | "VIC" | "QLD" | "WA" | "SA" | "TAS" | "ACT" | "NT";

export default function StepBusinessForm({ onComplete }: Props) {
  const [loading, setLoading] = useState(false);
  const sessionId = useSessionId();

  // form fields
  const [businessName, setBusinessName] = useState("");
  const [role, setRole] = useState<"retailer" | "supplier" | "fleet" | "mechanic" | "recycler" | "admin">("retailer");
  const [abn, setAbn] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState<AUState>("QLD");
  const [suburb, setSuburb] = useState("");

  const handleSubmit = async () => {
    if (!sessionId) {
      toast({ title: "Session not ready", description: "Please wait a moment and try again." });
      return;
    }
    if (!businessName.trim()) {
      toast({ title: "Business name is required" });
      return;
    }
    setLoading(true);
    console.log("Creating business...", { businessName, role, abn, phone, state, suburb });
    
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      toast({ title: "Authentication required", description: "Please log in to continue." });
      return;
    }

    const { data, error } = await (supabase as any)
      .from("lrs_businesses")
      .insert({
        business_name: businessName.trim(),
        role,
        abn: abn || null,
        phone: phone || null,
        state: state || null,
        suburb: suburb || null,
        session_id: sessionId,
        owner_user_id: user.id,
      })
      .select()
      .maybeSingle();
    setLoading(false);

    if (error) {
      console.error(error);
      toast({ title: "Could not save business", description: error.message });
      return;
    }
    if (!data) {
      toast({ title: "No response from server" });
      return;
    }
    onComplete(data.id);
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Business name</Label>
          <Input value={businessName} onChange={(e) => setBusinessName(e.target.value)} placeholder="e.g., Onyx Tyres & Auto" />
        </div>
        <div className="space-y-2">
          <Label>Role</Label>
          <select
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={role}
            onChange={(e) => setRole(e.target.value as any)}
          >
            <option value="retailer">Retailer</option>
            <option value="supplier">Supplier</option>
            <option value="fleet">Fleet</option>
            <option value="mechanic">Mechanic</option>
            <option value="recycler">Recycler</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label>ABN</Label>
          <Input value={abn} onChange={(e) => setAbn(e.target.value)} placeholder="ABN (optional)" />
        </div>
        <div className="space-y-2">
          <Label>Phone</Label>
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="e.g., 0400 000 000" />
        </div>
        <div className="space-y-2">
          <Label>State</Label>
          <select
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={state}
            onChange={(e) => setState(e.target.value as AUState)}
          >
            <option>QLD</option>
            <option>NSW</option>
            <option>VIC</option>
            <option>SA</option>
            <option>WA</option>
            <option>TAS</option>
            <option>NT</option>
            <option>ACT</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label>Suburb</Label>
          <Input value={suburb} onChange={(e) => setSuburb(e.target.value)} placeholder="e.g., Southport" />
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={handleSubmit} disabled={loading || !sessionId}>
          {loading ? "Saving..." : "Save & Continue"}
        </Button>
      </div>
    </div>
  );
}
