import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Database, Search, Plus, BarChart3, FileText, Settings } from "lucide-react";

export default function TLRS() {
  return (
    <div className="min-h-screen bg-gradient-earth">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
            <Database className="h-4 w-4 mr-2" />
            TLRS Dashboard
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tyre Lifecycle Registration System
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tracking and management platform for tyre stewardship and compliance
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center shadow-environmental">
            <CardHeader className="pb-4">
              <CardTitle className="text-3xl font-bold text-primary">0</CardTitle>
              <p className="text-muted-foreground">Registered Tyres</p>
            </CardHeader>
          </Card>
          <Card className="text-center shadow-environmental">
            <CardHeader className="pb-4">
              <CardTitle className="text-3xl font-bold text-success">0</CardTitle>
              <p className="text-muted-foreground">Active Schemes</p>
            </CardHeader>
          </Card>
          <Card className="text-center shadow-environmental">
            <CardHeader className="pb-4">
              <CardTitle className="text-3xl font-bold text-warning">0</CardTitle>
              <p className="text-muted-foreground">Pending Updates</p>
            </CardHeader>
          </Card>
          <Card className="text-center shadow-environmental">
            <CardHeader className="pb-4">
              <CardTitle className="text-3xl font-bold text-accent">0%</CardTitle>
              <p className="text-muted-foreground">Compliance Rate</p>
            </CardHeader>
          </Card>
        </div>

        {/* Main Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Plus className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Register New Tyre</CardTitle>
                  <p className="text-sm text-muted-foreground">Add tyres to the system</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button className="w-full" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center group-hover:bg-success/20 transition-colors">
                  <Search className="h-6 w-6 text-success" />
                </div>
                <div>
                  <CardTitle className="text-lg">Search & Track</CardTitle>
                  <p className="text-sm text-muted-foreground">Find and monitor tyres</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <BarChart3 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-lg">Analytics</CardTitle>
                  <p className="text-sm text-muted-foreground">View insights and reports</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center group-hover:bg-warning/20 transition-colors">
                  <FileText className="h-6 w-6 text-warning" />
                </div>
                <div>
                  <CardTitle className="text-lg">Compliance Reports</CardTitle>
                  <p className="text-sm text-muted-foreground">Generate regulatory reports</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Settings className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Settings</CardTitle>
                  <p className="text-sm text-muted-foreground">Configure your system</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Development Notice */}
        <Card className="border-2 border-dashed border-primary/30 bg-primary/5">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-4">🚧 System Under Development</CardTitle>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The TLRS platform is currently being built with full functionality for tyre registration, 
              tracking, and compliance reporting. Complete your onboarding to get notified when features become available.
            </p>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}