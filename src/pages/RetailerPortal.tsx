import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Navigation } from "@/components/Navigation";
import { Copy, Users, Link, BarChart3, Zap, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function RetailerPortal() {
  const { toast } = useToast();
  const [retailerCode, setRetailerCode] = useState<string>("");
  const [stats, setStats] = useState({
    totalReferrals: 45,
    activeCustomers: 32,
    pendingRegistrations: 8,
    totalCommission: 2340
  });

  useEffect(() => {
    document.title = "Retailer Portal - TLRS";
    // Generate or load retailer code
    const storedCode = localStorage.getItem('retailerCode');
    if (storedCode) {
      setRetailerCode(storedCode);
    } else {
      const newCode = `RET-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
      setRetailerCode(newCode);
      localStorage.setItem('retailerCode', newCode);
    }
  }, []);

  const copyReferralLink = () => {
    const link = `${window.location.origin}/register/${retailerCode}`;
    navigator.clipboard.writeText(link);
    toast({
      title: "Link Copied!",
      description: "Referral link copied to clipboard",
    });
  };

  const copyReferralCode = () => {
    navigator.clipboard.writeText(retailerCode);
    toast({
      title: "Code Copied!",
      description: "Retailer code copied to clipboard",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-earth">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
            <Users className="h-4 w-4 mr-2" />
            Retailer Dashboard (Demo)
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Partner Portal
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Manage your customer referrals and track commissions from individual owner registrations
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-environmental">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Referrals</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.totalReferrals}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="shadow-environmental">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">{stats.activeCustomers}</div>
              <p className="text-xs text-muted-foreground">Currently registered</p>
            </CardContent>
          </Card>

          <Card className="shadow-environmental">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">{stats.pendingRegistrations}</div>
              <p className="text-xs text-muted-foreground">Awaiting completion</p>
            </CardContent>
          </Card>

          <Card className="shadow-environmental">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Commission</CardTitle>
              <Plus className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">${stats.totalCommission}</div>
              <p className="text-xs text-muted-foreground">This quarter</p>
            </CardContent>
          </Card>
        </div>

        {/* Referral Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-environmental">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Link className="h-5 w-5" />
                Referral Link
              </CardTitle>
              <CardDescription>
                Share this link with potential customers to track referrals
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="referral-link">Your Referral Link</Label>
                <div className="flex gap-2">
                  <Input
                    id="referral-link"
                    value={`${window.location.origin}/register/${retailerCode}`}
                    readOnly
                    className="font-mono text-sm"
                  />
                  <Button onClick={copyReferralLink} size="sm">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="retailer-code">Retailer Code</Label>
                <div className="flex gap-2">
                  <Input
                    id="retailer-code"
                    value={retailerCode}
                    readOnly
                    className="font-mono text-sm"
                  />
                  <Button onClick={copyReferralCode} size="sm" variant="outline">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-environmental">
            <CardHeader>
              <CardTitle>Marketing Resources</CardTitle>
              <CardDescription>
                Tools and assets to promote TLRS to your customers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full" variant="outline">
                Download Marketing Kit
              </Button>
              <Button className="w-full" variant="outline">
                Branded Registration Pages
              </Button>
              <Button className="w-full" variant="outline">
                Commission Structure
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Referrals */}
        <Card className="shadow-environmental">
          <CardHeader>
            <CardTitle>Recent Referrals</CardTitle>
            <CardDescription>Latest customer registrations through your referral link</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: "REF-001", customer: "Green Fleet Logistics", date: "2 hours ago", status: "Completed", commission: "$45" },
                { id: "REF-002", customer: "EcoTyre Solutions", date: "1 day ago", status: "Pending", commission: "$35" },
                { id: "REF-003", customer: "Urban Transport Co.", date: "3 days ago", status: "Completed", commission: "$55" }
              ].map((referral) => (
                <div key={referral.id} className="flex items-center justify-between p-4 border border-border rounded-lg bg-muted/30">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="font-medium text-foreground">{referral.customer}</p>
                      <p className="text-sm text-muted-foreground">{referral.id} • {referral.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge 
                      variant={referral.status === "Completed" ? "default" : "secondary"}
                      className={referral.status === "Completed" ? "bg-success hover:bg-success/80" : ""}
                    >
                      {referral.status}
                    </Badge>
                    <span className="text-sm font-medium text-accent">{referral.commission}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}