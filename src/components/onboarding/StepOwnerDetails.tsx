
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { useSessionId } from "@/hooks/useSessionId";

type Props = {
  onBack: () => void;
  onComplete: (ownerData?: { email: string; name: string }) => void;
};

export default function StepOwnerDetails({ onBack, onComplete }: Props) {
  const [loading, setLoading] = useState(false);
  const sessionId = useSessionId();

  // Form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicleMake, setVehicleMake] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleYear, setVehicleYear] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [consentMarketing, setConsentMarketing] = useState(false);
  const [consentTerms, setConsentTerms] = useState(false);

  const handleSubmit = async () => {
    if (!sessionId) {
      toast({ title: "Session not ready", description: "Please wait a moment and try again." });
      return;
    }
    
    if (!fullName.trim() || !consentTerms) {
      toast({ title: "Please fill in required fields and accept terms" });
      return;
    }

    setLoading(true);
    
    try {
      // Only include user_id if an authenticated user exists; otherwise omit it so DB default applies
      const { data: userResp } = await supabase.auth.getUser();
      const userId = userResp?.user?.id;

      const payload: any = {
        full_name: fullName.trim(),
        email: email || null,
        phone: phone || null,
        vehicle_make: vehicleMake || null,
        vehicle_model: vehicleModel || null,
        vehicle_year: vehicleYear ? parseInt(vehicleYear) : null,
        license_plate: licensePlate || null,
        consent_marketing: consentMarketing,
        consent_terms: consentTerms,
      };

      if (userId) {
        payload.user_id = userId;
      }

      const { error } = await supabase
        .from("owner_profiles")
        .insert(payload);

      if (error) {
        console.error("Error saving owner profile:", error);
        toast({ title: "Could not save details", description: error.message });
        return;
      }

      toast({ title: "Profile saved successfully!" });
      
      // Pass owner data for welcome email
      onComplete({
        email: email || '',
        name: fullName
      });
    } catch (error: any) {
      console.error("Failed to save owner profile:", error);
      toast({ title: "Error", description: "Failed to save profile. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">Complete Your Profile</h3>
        <p className="text-muted-foreground">
          Help us personalize your tyre tracking experience
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Full Name *</Label>
          <Input 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)} 
            placeholder="e.g., John Smith" 
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label>Email</Label>
          <Input 
            type="email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="john@example.com" 
          />
        </div>
        
        <div className="space-y-2">
          <Label>Phone</Label>
          <Input 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            placeholder="0400 000 000" 
          />
        </div>
        
        <div className="space-y-2">
          <Label>License Plate</Label>
          <Input 
            value={licensePlate} 
            onChange={(e) => setLicensePlate(e.target.value)} 
            placeholder="ABC123" 
          />
        </div>
        
        <div className="space-y-2">
          <Label>Vehicle Make</Label>
          <Input 
            value={vehicleMake} 
            onChange={(e) => setVehicleMake(e.target.value)} 
            placeholder="e.g., Toyota" 
          />
        </div>
        
        <div className="space-y-2">
          <Label>Vehicle Model</Label>
          <Input 
            value={vehicleModel} 
            onChange={(e) => setVehicleModel(e.target.value)} 
            placeholder="e.g., Camry" 
          />
        </div>
        
        <div className="space-y-2">
          <Label>Vehicle Year</Label>
          <Input 
            type="number"
            value={vehicleYear} 
            onChange={(e) => setVehicleYear(e.target.value)} 
            placeholder="2020" 
            min="1980"
            max="2025"
          />
        </div>
      </div>

      <div className="space-y-4 pt-4">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="consent-terms" 
            checked={consentTerms}
            onCheckedChange={(checked) => setConsentTerms(checked === true)}
          />
          <Label htmlFor="consent-terms" className="text-sm">
            I agree to the Terms of Service and Privacy Policy *
          </Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="consent-marketing" 
            checked={consentMarketing}
            onCheckedChange={(checked) => setConsentMarketing(checked === true)}
          />
          <Label htmlFor="consent-marketing" className="text-sm">
            I'd like to receive updates about new features and tyre safety tips
          </Label>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="ghost" onClick={onBack}>
          Back
        </Button>
        <Button 
          onClick={handleSubmit} 
          disabled={loading || !sessionId || !fullName.trim() || !consentTerms}
        >
          {loading ? "Saving..." : "Complete Setup"}
        </Button>
      </div>
    </div>
  );
}
