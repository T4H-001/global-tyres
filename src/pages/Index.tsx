import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Recycle, Shield, Globe, BarChart3, ArrowRight, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-earth">
      {/* Hero Section */}
      <div className="bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Tyre Lifecycle Registration System
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Combat illegal tyre dumping with comprehensive tracking. 
            Track tyres from manufacture to recycling across global stewardship programs.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Register First Tyre
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Why TLRS?</h2>
          <p className="text-xl text-muted-foreground">Addressing the global tyre waste crisis</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-environmental">
            <CardHeader>
              <Shield className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Combat Illegal Dumping</CardTitle>
              <CardDescription>
                Track 60-65% of tyres with unknown fates. Prevent environmental damage through comprehensive monitoring.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="shadow-environmental">
            <CardHeader>
              <Globe className="h-12 w-12 text-success mb-4" />
              <CardTitle>Global Compliance</CardTitle>
              <CardDescription>
                Compatible with TSA (Australia), EPR (EU), JATMA (Japan), and other stewardship programs worldwide.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="shadow-environmental">
            <CardHeader>
              <BarChart3 className="h-12 w-12 text-accent mb-4" />
              <CardTitle>Real-time Analytics</CardTitle>
              <CardDescription>
                Monitor recycling rates, track environmental impact, and generate compliance reports instantly.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Statistics */}
        <Card className="shadow-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Global Impact</CardTitle>
            <CardDescription>Current system coverage and environmental benefits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">537K</div>
                <p className="text-muted-foreground">Tonnes tracked annually</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-success">66%</div>
                <p className="text-muted-foreground">Recovery rate achieved</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">95%</div>
                <p className="text-muted-foreground">EU compliance rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-warning">800M+</div>
                <p className="text-muted-foreground">Tyres tracked globally</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Features */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Unique tyre identification (DOT codes, QR codes)",
              "Multi-status lifecycle tracking",
              "Global stewardship scheme integration", 
              "Real-time dashboard and analytics",
              "Compliance reporting for TSA, EPR, JATMA",
              "Searchable database with export capabilities"
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
