import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Package, MapPin, Factory } from "lucide-react";

export const TyreRegistration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    tyreId: "",
    manufacturer: "",
    size: "",
    dotCode: "",
    scheme: "",
    location: "",
    status: "New",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with Supabase
    toast({
      title: "Tyre Registered Successfully",
      description: `Tyre ${formData.tyreId} has been registered in the system.`,
    });
    
    // Reset form
    setFormData({
      tyreId: "",
      manufacturer: "",
      size: "",
      dotCode: "",
      scheme: "",
      location: "",
      status: "New",
      notes: ""
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
          <Package className="h-8 w-8 text-primary" />
          Register New Tyre
        </h1>
        <p className="text-muted-foreground">Add a new tyre to the lifecycle tracking system</p>
      </div>

      <Card className="shadow-environmental">
        <CardHeader>
          <CardTitle>Tyre Information</CardTitle>
          <CardDescription>
            Enter the tyre details to begin lifecycle tracking
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tyre ID */}
              <div className="space-y-2">
                <Label htmlFor="tyreId">Tyre ID / Serial Number *</Label>
                <Input
                  id="tyreId"
                  value={formData.tyreId}
                  onChange={(e) => setFormData({...formData, tyreId: e.target.value})}
                  placeholder="TYR-001234 or scan QR code"
                  required
                  className="border-input focus:ring-primary"
                />
              </div>

              {/* DOT Code */}
              <div className="space-y-2">
                <Label htmlFor="dotCode">DOT Code</Label>
                <Input
                  id="dotCode"
                  value={formData.dotCode}
                  onChange={(e) => setFormData({...formData, dotCode: e.target.value})}
                  placeholder="DOT-4A3Y-1234-2525"
                  className="border-input focus:ring-primary"
                />
              </div>

              {/* Manufacturer */}
              <div className="space-y-2">
                <Label htmlFor="manufacturer">Manufacturer *</Label>
                <Select onValueChange={(value) => setFormData({...formData, manufacturer: value})}>
                  <SelectTrigger className="border-input focus:ring-primary">
                    <SelectValue placeholder="Select manufacturer" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="michelin">Michelin</SelectItem>
                    <SelectItem value="bridgestone">Bridgestone</SelectItem>
                    <SelectItem value="goodyear">Goodyear</SelectItem>
                    <SelectItem value="continental">Continental</SelectItem>
                    <SelectItem value="pirelli">Pirelli</SelectItem>
                    <SelectItem value="dunlop">Dunlop</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Tyre Size */}
              <div className="space-y-2">
                <Label htmlFor="size">Tyre Size *</Label>
                <Input
                  id="size"
                  value={formData.size}
                  onChange={(e) => setFormData({...formData, size: e.target.value})}
                  placeholder="205/55R16 91V"
                  required
                  className="border-input focus:ring-primary"
                />
              </div>

              {/* Scheme */}
              <div className="space-y-2">
                <Label htmlFor="scheme">Stewardship Scheme</Label>
                <Select onValueChange={(value) => setFormData({...formData, scheme: value})}>
                  <SelectTrigger className="border-input focus:ring-primary">
                    <SelectValue placeholder="Select scheme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tsa">TSA (Australia)</SelectItem>
                    <SelectItem value="epr-eu">EPR (European Union)</SelectItem>
                    <SelectItem value="jatma">JATMA (Japan)</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Location *
                </Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  placeholder="Sydney, Australia"
                  required
                  className="border-input focus:ring-primary"
                />
              </div>
            </div>

            {/* Status */}
            <div className="space-y-2">
              <Label htmlFor="status">Initial Status</Label>
              <Select value={formData.status} onValueChange={(value) => setFormData({...formData, status: value})}>
                <SelectTrigger className="border-input focus:ring-primary">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="New">New</SelectItem>
                  <SelectItem value="In Use">In Use</SelectItem>
                  <SelectItem value="Collected">Collected</SelectItem>
                  <SelectItem value="Recycled">Recycled</SelectItem>
                  <SelectItem value="Disposed">Disposed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                placeholder="Any additional information about this tyre..."
                rows={3}
                className="border-input focus:ring-primary"
              />
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit" className="bg-gradient-primary hover:opacity-90 flex-1">
                <Factory className="mr-2 h-4 w-4" />
                Register Tyre
              </Button>
              <Button type="button" variant="outline" className="px-8">
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default TyreRegistration;