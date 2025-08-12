import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, Package, Recycle, AlertTriangle, TrendingUp } from "lucide-react";
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
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Track tyre lifecycle and environmental impact</p>
        </div>
        <Link to="/register">
          <Button className="bg-gradient-primary hover:opacity-90">
            Register New Tyre
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-card">
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

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Registrations</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{stats.activeRegistrations.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Currently in use</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recycled</CardTitle>
            <Recycle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">{stats.recycledTyres.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Environmental impact positive</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
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

      {/* Recent Activity */}
      <Card className="shadow-card">
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
    </div>
  );
};

export default Dashboard;