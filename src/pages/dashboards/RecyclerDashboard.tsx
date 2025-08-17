import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Helmet } from "react-helmet";
import { 
  Recycle, 
  Truck, 
  Factory, 
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Leaf,
  Target
} from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

// Mock data for recycler dashboard
const processingData = [
  { month: 'Jan', processed: 1200, capacity: 1500 },
  { month: 'Feb', processed: 1350, capacity: 1500 },
  { month: 'Mar', processed: 1180, capacity: 1500 },
  { month: 'Apr', processed: 1420, capacity: 1500 },
  { month: 'May', processed: 1480, capacity: 1500 },
  { month: 'Jun', processed: 1390, capacity: 1500 }
];

const environmentalImpact = [
  { month: 'Jan', co2_saved: 45, energy_recovered: 1200 },
  { month: 'Feb', co2_saved: 52, energy_recovered: 1350 },
  { month: 'Mar', co2_saved: 48, energy_recovered: 1180 },
  { month: 'Apr', co2_saved: 58, energy_recovered: 1420 },
  { month: 'May', co2_saved: 61, energy_recovered: 1480 },
  { month: 'Jun', co2_saved: 57, energy_recovered: 1390 }
];

const recentCollections = [
  { id: 'COL-001', location: 'Smith Tyres Brisbane', tyres: 150, status: 'collected', date: '2024-01-15' },
  { id: 'COL-002', location: 'Metro Automotive Sydney', tyres: 85, status: 'scheduled', date: '2024-01-16' },
  { id: 'COL-003', location: 'Highway Tyres Melbourne', tyres: 200, status: 'processing', date: '2024-01-14' },
  { id: 'COL-004', location: 'City Fleet Brisbane', tyres: 120, status: 'completed', date: '2024-01-13' }
];

export default function RecyclerDashboard() {
  return (
    <>
      <Helmet>
        <title>Recycler Dashboard - TLRS</title>
        <meta name="description" content="Tyre recycling facility dashboard for managing collections, processing, and environmental impact" />
      </Helmet>
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">Recycling Facility</Badge>
          </div>
          <h1 className="text-4xl font-bold mb-2">Recycler Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor collections, track processing efficiency, and measure environmental impact
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Processing</CardTitle>
              <Recycle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,390</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline h-3 w-3 mr-1" />
                tyres processed this month
              </p>
              <Progress value={93} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-1">93% of capacity</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Collections</CardTitle>
              <Truck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45</div>
              <p className="text-xs text-muted-foreground">
                collections this month
              </p>
              <div className="flex gap-1 mt-2">
                <Badge variant="default" className="text-xs">32 completed</Badge>
                <Badge variant="secondary" className="text-xs">13 scheduled</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">CO₂ Saved</CardTitle>
              <Leaf className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">57t</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline h-3 w-3 mr-1" />
                carbon dioxide equivalent
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Compliance Rate</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98%</div>
              <Progress value={98} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Processing Capacity */}
          <Card>
            <CardHeader>
              <CardTitle>Processing Capacity</CardTitle>
              <CardDescription>Monthly processing vs facility capacity</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={processingData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="capacity" 
                    stackId="1" 
                    stroke="hsl(var(--muted))" 
                    fill="hsl(var(--muted))" 
                    fillOpacity={0.6}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="processed" 
                    stackId="2" 
                    stroke="hsl(var(--primary))" 
                    fill="hsl(var(--primary))" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Environmental Impact */}
          <Card>
            <CardHeader>
              <CardTitle>Environmental Impact</CardTitle>
              <CardDescription>CO₂ savings and energy recovery trends</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={environmentalImpact}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="co2_saved" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    name="CO₂ Saved (tonnes)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Collections & Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Collections</CardTitle>
              <CardDescription>Latest tyre collections and processing status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentCollections.map((collection) => (
                  <div key={collection.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <Truck className="h-8 w-8 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{collection.location}</p>
                        <p className="text-sm text-muted-foreground">{collection.id} • {collection.tyres} tyres</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge 
                        variant={
                          collection.status === 'completed' ? 'default' : 
                          collection.status === 'collected' ? 'secondary' : 
                          collection.status === 'processing' ? 'secondary' : 'outline'
                        }
                      >
                        {collection.status}
                      </Badge>
                      <p className="text-sm text-muted-foreground">{collection.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Operations</CardTitle>
              <CardDescription>Facility management tools</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start">
                <Truck className="mr-2 h-4 w-4" />
                Schedule Collection
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Factory className="mr-2 h-4 w-4" />
                Process Batch
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Target className="mr-2 h-4 w-4" />
                Quality Control
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <AlertTriangle className="mr-2 h-4 w-4" />
                Report Issue
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}