import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Store, CheckCircle, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

export default function RetailerOnboarding() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    businessType: "",
    expectedReferrals: "",
    marketingChannels: ""
  });

  useEffect(() => {
    document.title = "Retailer Onboarding - TLRS";
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate submission
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you within 24 hours.",
    });

    // Redirect to retailer portal after brief delay
    setTimeout(() => {
      navigate('/retailer');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-earth">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Store className="h-4 w-4 mr-2" />
              Partner Application
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              Become a TLRS Retailer
            </h1>
            <p className="text-xl text-muted-foreground">
              Join our partner network and earn commissions by referring individual customers to TLRS
            </p>
          </div>

          {/* Benefits */}
          <Card className="shadow-environmental mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                Partner Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Commission Structure</h4>
                  <p className="text-sm text-muted-foreground">Earn $35-55 per successful registration</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Marketing Support</h4>
                  <p className="text-sm text-muted-foreground">Branded materials and co-marketing opportunities</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Dedicated Portal</h4>
                  <p className="text-sm text-muted-foreground">Track referrals and manage your commissions</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Fast Payouts</h4>
                  <p className="text-sm text-muted-foreground">Monthly commission payments via bank transfer</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Application Form */}
          <Card className="shadow-environmental">
            <CardHeader>
              <CardTitle>Application Form</CardTitle>
              <CardDescription>
                Tell us about your business and how you plan to promote TLRS
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name *</Label>
                    <Input
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => handleInputChange('businessName', e.target.value)}
                      placeholder="Your company name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Contact Name *</Label>
                    <Input
                      id="contactName"
                      value={formData.contactName}
                      onChange={(e) => handleInputChange('contactName', e.target.value)}
                      placeholder="Primary contact person"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="contact@yourbusiness.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+61 xxx xxx xxx"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    value={formData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                    placeholder="https://yourbusiness.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessType">Business Type *</Label>
                  <Input
                    id="businessType"
                    value={formData.businessType}
                    onChange={(e) => handleInputChange('businessType', e.target.value)}
                    placeholder="e.g., Automotive dealer, Fleet management, Marketing agency"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="expectedReferrals">Expected Monthly Referrals</Label>
                  <Input
                    id="expectedReferrals"
                    value={formData.expectedReferrals}
                    onChange={(e) => handleInputChange('expectedReferrals', e.target.value)}
                    placeholder="Estimated number of customers per month"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="marketingChannels">Marketing Channels</Label>
                  <Textarea
                    id="marketingChannels"
                    value={formData.marketingChannels}
                    onChange={(e) => handleInputChange('marketingChannels', e.target.value)}
                    placeholder="How do you plan to promote TLRS to your customers?"
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full">
                  Submit Application
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}