import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigation } from "@/components/Navigation";
import TyreDashboard from "@/components/tyre/TyreDashboard";
import BlockchainStatus from "@/components/BlockchainStatus";
import { BarChart3, Package, Recycle, AlertTriangle, TrendingUp, Database, Users, ShieldCheck, Factory, DollarSign, Globe2, Activity, Building, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, BarChart, Bar } from "recharts";
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

  // Mock chart data (replace with Supabase queries)
  const operationsData = [
    { month: "Jan", registered: 80, recycled: 20 },
    { month: "Feb", registered: 95, recycled: 25 },
    { month: "Mar", registered: 110, recycled: 30 },
    { month: "Apr", registered: 90, recycled: 28 },
    { month: "May", registered: 130, recycled: 35 },
  ];

  const lifecycleData = [
    { stage: "Active", count: 892 },
    { stage: "Removed", count: 210 },
    { stage: "Recycled", count: 245 },
    { stage: "Disposed", count: 45 },
  ];

  const complianceData = [
    { label: "Compliant", value: 92 },
    { label: "At Risk", value: 6 },
    { label: "Non-Compliant", value: 2 },
  ];

  const financialData = [
    { month: "Jan", revenue: 3200, cost: 2100 },
    { month: "Feb", revenue: 3500, cost: 2150 },
    { month: "Mar", revenue: 4200, cost: 2400 },
    { month: "Apr", revenue: 3900, cost: 2300 },
    { month: "May", revenue: 4500, cost: 2550 },
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <Helmet>
          <title>TLRS Dashboard - Tyre Lifecycle Analytics</title>
          <meta name="description" content="Unified tyre lifecycle dashboard with operations, compliance, financial and ecosystem analytics." />
          <link rel="canonical" href={`${window.location.origin}/dashboard`} />
        </Helmet>
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

        {/* Role Selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Choose Your Role</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/retailer-dashboard">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <Building className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold">Tyre Retailer</h3>
                    <p className="text-sm text-muted-foreground">Manage sales and compliance</p>
                  </div>
                </div>
                <p className="text-sm">Track sales, inventory, and disposal compliance requirements.</p>
              </Card>
            </Link>

            <Link to="/recycler-dashboard">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <Recycle className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold">Recycling Facility</h3>
                    <p className="text-sm text-muted-foreground">Process and recycle tyres</p>
                  </div>
                </div>
                <p className="text-sm">Monitor collections, processing capacity, and environmental impact.</p>
              </Card>
            </Link>

            <Link to="/government-dashboard">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold">Government/Regulator</h3>
                    <p className="text-sm text-muted-foreground">Oversee compliance</p>
                  </div>
                </div>
                <p className="text-sm">Track industry compliance and environmental targets.</p>
              </Card>
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
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tyres">Operations</TabsTrigger>
            <TabsTrigger value="lifecycle">Lifecycle</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
            <TabsTrigger value="financial">Financial</TabsTrigger>
            <TabsTrigger value="ecosystem">Ecosystem</TabsTrigger>
            <TabsTrigger value="partners">Partners</TabsTrigger>
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
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <TyreDashboard businessId="mock-business-id" />
              </div>
              <div className="lg:col-span-1">
                <BlockchainStatus />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="lifecycle" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-environmental">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" /> Lifecycle Distribution
                  </CardTitle>
                  <CardDescription>Current counts across lifecycle stages</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      active: { label: "Active", color: "hsl(var(--primary))" },
                      removed: { label: "Removed", color: "hsl(var(--warning))" },
                      recycled: { label: "Recycled", color: "hsl(var(--accent))" },
                      disposed: { label: "Disposed", color: "hsl(var(--destructive))" },
                    }}
                    className="w-full h-64"
                  >
                    <BarChart data={lifecycleData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="stage" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="count" fill="hsl(var(--primary))" radius={[6,6,0,0]} />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card className="shadow-environmental">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Factory className="h-5 w-5" /> Throughput (Monthly)
                  </CardTitle>
                  <CardDescription>Registrations vs Recycling</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      registered: { label: "Registered", color: "hsl(var(--primary))" },
                      recycled: { label: "Recycled", color: "hsl(var(--accent))" },
                    }}
                    className="w-full h-64"
                  >
                    <LineChart data={operationsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line type="monotone" dataKey="registered" stroke="hsl(var(--primary))" strokeWidth={2} />
                      <Line type="monotone" dataKey="recycled" stroke="hsl(var(--accent))" strokeWidth={2} />
                    </LineChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="compliance" className="space-y-6 mt-6">
            <Card className="shadow-environmental">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5" /> Compliance Posture
                </CardTitle>
                <CardDescription>Audit readiness across the fleet</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    compliant: { label: "Compliant", color: "hsl(var(--success))" },
                    risk: { label: "At Risk", color: "hsl(var(--warning))" },
                    non: { label: "Non-Compliant", color: "hsl(var(--destructive))" },
                  }}
                  className="w-full h-64"
                >
                  <BarChart data={complianceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="label" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="value" fill="hsl(var(--success))" radius={[6,6,0,0]} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="financial" className="space-y-6 mt-6">
            <Card className="shadow-environmental">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" /> Financial Overview
                </CardTitle>
                <CardDescription>Revenue vs costs trend</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    revenue: { label: "Revenue", color: "hsl(var(--primary))" },
                    cost: { label: "Cost", color: "hsl(var(--muted-foreground))" },
                  }}
                  className="w-full h-64"
                >
                  <LineChart data={financialData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2} />
                    <Line type="monotone" dataKey="cost" stroke="hsl(var(--muted-foreground))" strokeWidth={2} />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ecosystem" className="space-y-6 mt-6">
            <Card className="shadow-environmental">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe2 className="h-5 w-5" /> Ecosystem Metrics
                </CardTitle>
                <CardDescription>High-level partner and circularity indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <p className="text-2xl font-bold text-primary">18</p>
                    <p className="text-sm text-muted-foreground">Active Regions</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-accent">74%</p>
                    <p className="text-sm text-muted-foreground">Circularity Index</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-success">42</p>
                    <p className="text-sm text-muted-foreground">Collection Partners</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-warning">5</p>
                    <p className="text-sm text-muted-foreground">Supply Risks</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="partners" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-environmental">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" /> Retailer Network
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