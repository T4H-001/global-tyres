import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigation } from "@/components/Navigation";
import TyreDashboard from "@/components/tyre/TyreDashboard";
import { BarChart3, Package, Recycle, AlertTriangle, TrendingUp, Database, Users } from "lucide-react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  // Mock data - will be replaced with Supabase queries
  const stats = {
    totalTyres: 1247,
    activeRegistrations: 892,
    recycledTyres: 245,
    pendingCollection: 110
  };

  const recentActivity = [
    { id: "TYR-001234", status: "Collected", location: "Sydney, AU", date: "2 hours ago" },
    { id: "TYR-001235", status: "In Use", location: "Melbourne, AU", date: "4 hours ago" },
    { id: "TYR-001236", status: "Recycled", location: "Brisbane, AU", date: "6 hours ago" }
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
            <Database className="h-4 w-4 mr-2" />
            Unified Dashboard
          </Badge>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-foreground">TLRS Dashboard</h1>
              <p className="text-xl text-muted-foreground">Complete tyre lifecycle management and tracking</p>
            </div>
            <Link to="/tyres">
              <Button className="bg-gradient-primary hover:opacity-90">
                Manage Tyres
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-environmental">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Tyres</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.totalTyres.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline h-3 w-3 mr-1" />
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-environmental">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Registrations</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">{stats.activeRegistrations.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Currently in use</p>
            </CardContent>
          </Card>

          <Card className="shadow-environmental">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Recycled</CardTitle>
              <Recycle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{stats.recycledTyres.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Environmental impact positive</p>
            </CardContent>
          </Card>

          <Card className="shadow-environmental">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Collection</CardTitle>
              <AlertTriangle className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">{stats.pendingCollection.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Requires attention</p>
            </CardContent>
          </Card>
        </div>

        {/* Dashboard Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">System Overview</TabsTrigger>
            <TabsTrigger value="tyres">Tyre Management</TabsTrigger>
            <TabsTrigger value="partners">Partner Network</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6 mt-6">
            <Card className="shadow-environmental">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest tyre status updates across the system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-4 border border-border rounded-lg bg-muted/30">
                      <div className="flex items-center space-x-4">
                        <div>
                          <p className="font-medium text-foreground">{activity.id}</p>
                          <p className="text-sm text-muted-foreground">{activity.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge 
                          variant={
                            activity.status === "Recycled" ? "default" :
                            activity.status === "Collected" ? "secondary" : 
                            "outline"
                          }
                          className={
                            activity.status === "Recycled" ? "bg-success hover:bg-success/80" :
                            activity.status === "Collected" ? "bg-warning hover:bg-warning/80" : 
                            ""
                          }
                        >
                          {activity.status}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{activity.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tyres" className="mt-6">
            <TyreDashboard businessId="mock-business-id" />
          </TabsContent>

          <TabsContent value="partners" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-environmental">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Retailer Network
                  </CardTitle>
                  <CardDescription>Manage partner relationships and referrals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-2xl font-bold text-primary">23</p>
                        <p className="text-sm text-muted-foreground">Active Partners</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-success">156</p>
                        <p className="text-sm text-muted-foreground">Referrals This Month</p>
                      </div>
                    </div>
                    <Link to="/retailer">
                      <Button className="w-full">Manage Partners</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-environmental">
                <CardHeader>
                  <CardTitle>Become a Partner</CardTitle>
                  <CardDescription>Join our retailer network and earn commissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Marketing brands and individual owners can join our partner program to earn commissions
                      by referring customers to TLRS.
                    </p>
                    <Link to="/onboarding/retailer">
                      <Button variant="outline" className="w-full">Apply Now</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;