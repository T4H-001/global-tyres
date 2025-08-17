import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Helmet } from "react-helmet";
import { 
  TrendingUp, 
  ShoppingCart, 
  Users, 
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
  Package
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// Mock data for retailer dashboard
const salesData = [
  { month: 'Jan', sales: 245, target: 300 },
  { month: 'Feb', sales: 312, target: 300 },
  { month: 'Mar', sales: 289, target: 300 },
  { month: 'Apr', sales: 356, target: 300 },
  { month: 'May', sales: 423, target: 400 },
  { month: 'Jun', sales: 398, target: 400 }
];

const inventoryData = [
  { name: 'Premium Tyres', value: 45, color: 'hsl(var(--primary))' },
  { name: 'Standard Tyres', value: 35, color: 'hsl(var(--secondary))' },
  { name: 'Budget Tyres', value: 20, color: 'hsl(var(--muted))' }
];

const recentOrders = [
  { id: 'ORD-001', customer: 'Smith Automotive', tyres: 4, status: 'delivered', total: '$680' },
  { id: 'ORD-002', customer: 'City Fleet Services', tyres: 12, status: 'processing', total: '$2,040' },
  { id: 'ORD-003', customer: 'Johnson Motors', tyres: 8, status: 'pending', total: '$1,360' },
  { id: 'ORD-004', customer: 'Express Delivery Co', tyres: 16, status: 'delivered', total: '$2,720' }
];

export default function RetailerDashboard() {
  return (
    <>
      <Helmet>
        <title>Retailer Dashboard - TLRS</title>
        <meta name="description" content="Tyre retailer dashboard for managing sales, inventory, and compliance" />
      </Helmet>
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">Retailer Portal</Badge>
          </div>
          <h1 className="text-4xl font-bold mb-2">Retailer Dashboard</h1>
          <p className="text-muted-foreground">
            Track your tyre sales, manage inventory, and ensure compliance with disposal regulations
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Sales</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">398</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline h-3 w-3 mr-1" />
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$67,800</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline h-3 w-3 mr-1" />
                +8% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">
                +3 new this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94%</div>
              <Progress value={94} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Sales Trends */}
          <Card>
            <CardHeader>
              <CardTitle>Sales Performance</CardTitle>
              <CardDescription>Monthly sales vs targets</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sales" fill="hsl(var(--primary))" />
                  <Bar dataKey="target" fill="hsl(var(--secondary))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Inventory Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Inventory Distribution</CardTitle>
              <CardDescription>Current stock by category</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={inventoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {inventoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Orders & Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Latest customer orders and their status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <Package className="h-8 w-8 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{order.customer}</p>
                        <p className="text-sm text-muted-foreground">{order.id} • {order.tyres} tyres</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge 
                        variant={
                          order.status === 'delivered' ? 'default' : 
                          order.status === 'processing' ? 'secondary' : 'outline'
                        }
                      >
                        {order.status}
                      </Badge>
                      <p className="font-medium">{order.total}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common retailer tasks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start">
                <Package className="mr-2 h-4 w-4" />
                Register New Sale
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <AlertTriangle className="mr-2 h-4 w-4" />
                Report Disposal
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Clock className="mr-2 h-4 w-4" />
                Schedule Collection
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <CheckCircle className="mr-2 h-4 w-4" />
                Compliance Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}