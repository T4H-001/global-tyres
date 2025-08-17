import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Helmet } from "react-helmet";
import { 
  Shield, 
  FileText, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Building,
  Users,
  BarChart3
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

// Mock data for government dashboard
const complianceData = [
  { region: 'NSW', retailers: 145, compliant: 138, rate: 95 },
  { region: 'VIC', retailers: 120, compliant: 112, rate: 93 },
  { region: 'QLD', retailers: 98, compliant: 91, rate: 93 },
  { region: 'WA', retailers: 67, compliant: 63, rate: 94 },
  { region: 'SA', retailers: 45, compliant: 42, rate: 93 },
  { region: 'TAS', retailers: 23, compliant: 22, rate: 96 }
];

const recyclingTrends = [
  { month: 'Jan', target: 5000, actual: 4800, percentage: 96 },
  { month: 'Feb', target: 5000, actual: 5100, percentage: 102 },
  { month: 'Mar', target: 5200, actual: 4950, percentage: 95 },
  { month: 'Apr', target: 5200, actual: 5350, percentage: 103 },
  { month: 'May', target: 5400, actual: 5250, percentage: 97 },
  { month: 'Jun', target: 5400, actual: 5480, percentage: 101 }
];

const recentAlerts = [
  { id: 'ALT-001', type: 'compliance', message: 'Metro Tyres missed disposal deadline', priority: 'high', date: '2024-01-15' },
  { id: 'ALT-002', type: 'capacity', message: 'NSW recycling facilities at 95% capacity', priority: 'medium', date: '2024-01-14' },
  { id: 'ALT-003', type: 'registration', message: '12 new retailers registered this week', priority: 'low', date: '2024-01-13' },
  { id: 'ALT-004', type: 'audit', message: 'Quarterly audit reports due next week', priority: 'medium', date: '2024-01-12' }
];

export default function GovernmentDashboard() {
  return (
    <>
      <Helmet>
        <title>Government Dashboard - TLRS</title>
        <meta name="description" content="Government regulatory dashboard for monitoring tyre lifecycle compliance and environmental impact" />
      </Helmet>
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">Regulatory Portal</Badge>
          </div>
          <h1 className="text-4xl font-bold mb-2">Government Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor industry compliance, track environmental targets, and oversee tyre lifecycle regulations
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Registered Businesses</CardTitle>
              <Building className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">498</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline h-3 w-3 mr-1" />
                +12 new this month
              </p>
              <div className="flex gap-1 mt-2">
                <Badge variant="default" className="text-xs">340 Retailers</Badge>
                <Badge variant="secondary" className="text-xs">158 Recyclers</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Compliance Rate</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94%</div>
              <Progress value={94} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-1">
                463 of 498 businesses compliant
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Recycling Target</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">101%</div>
              <Progress value={101} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-1">
                5,480 of 5,400 tonnes target
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <div className="flex gap-1 mt-2">
                <Badge variant="destructive" className="text-xs">2 High</Badge>
                <Badge variant="secondary" className="text-xs">5 Medium</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Regional Compliance */}
          <Card>
            <CardHeader>
              <CardTitle>Regional Compliance</CardTitle>
              <CardDescription>Compliance rates by state/territory</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={complianceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="region" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value, name) => [
                      name === 'compliant' ? `${value} compliant` : `${value} total`,
                      name === 'compliant' ? 'Compliant' : 'Total'
                    ]}
                  />
                  <Bar dataKey="retailers" fill="hsl(var(--muted))" />
                  <Bar dataKey="compliant" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Recycling Trends */}
          <Card>
            <CardHeader>
              <CardTitle>Recycling Performance</CardTitle>
              <CardDescription>Monthly targets vs actual recycling</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={recyclingTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="target" 
                    stroke="hsl(var(--muted-foreground))" 
                    strokeDasharray="5 5"
                    name="Target (tonnes)"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="actual" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    name="Actual (tonnes)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Alerts & Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Alerts</CardTitle>
              <CardDescription>System notifications and compliance updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <AlertTriangle className={`h-5 w-5 ${
                        alert.priority === 'high' ? 'text-destructive' : 
                        alert.priority === 'medium' ? 'text-yellow-500' : 'text-muted-foreground'
                      }`} />
                      <div>
                        <p className="font-medium">{alert.message}</p>
                        <p className="text-sm text-muted-foreground">{alert.id} • {alert.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge 
                        variant={
                          alert.priority === 'high' ? 'destructive' : 
                          alert.priority === 'medium' ? 'secondary' : 'outline'
                        }
                      >
                        {alert.priority}
                      </Badge>
                      <p className="text-sm text-muted-foreground">{alert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Regulatory Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Regulatory Tools</CardTitle>
              <CardDescription>Administrative functions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                Generate Report
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Shield className="mr-2 h-4 w-4" />
                Audit Schedule
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="mr-2 h-4 w-4" />
                Review Applications
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <CheckCircle className="mr-2 h-4 w-4" />
                Policy Updates
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}