import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { tyreService } from '@/services/tyreService';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import { 
  Leaf, Recycle, Globe, TrendingUp, Users, Shield, 
  Download, FileText, Share2, TreePine
} from 'lucide-react';

interface Props {
  businessId: string;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export default function EnhancedDashboard({ businessId }: Props) {
  const [insights, setInsights] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadInsights();
  }, [businessId]);

  const loadInsights = async () => {
    setLoading(true);
    try {
      const data = await tyreService.getWasteInsights(businessId);
      setInsights(data);
    } catch (error) {
      console.error('Failed to load insights:', error);
    } finally {
      setLoading(false);
    }
  };

  const exportReport = () => {
    if (!insights) return;
    
    const reportData = {
      generatedAt: new Date().toISOString(),
      business: 'Demo Business',
      summary: {
        totalTyres: insights.totalTyres,
        recyclingRate: insights.recyclingRate,
        environmentalImpact: insights.environmentalImpact
      },
      locations: insights.locationBreakdown,
      brands: insights.brandBreakdown
    };
    
    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `tyre-report-${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-8 bg-gray-200 rounded w-1/2"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (!insights) return null;

  const locationData = Object.entries(insights.locationBreakdown).map(([state, count]) => ({
    state,
    count: count as number
  }));

  const brandData = Object.entries(insights.brandBreakdown).map(([brand, count]) => ({
    brand,
    count: count as number
  }));

  return (
    <div className="space-y-6">
      {/* Community Impact Banner */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-2 flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Community Environmental Impact
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">
                    {insights.environmentalImpact.wastePreventedKg.toLocaleString()}kg
                  </div>
                  <div className="text-sm text-green-600">Waste Prevented</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700">
                    {insights.environmentalImpact.carbonSavedKg.toLocaleString()}kg
                  </div>
                  <div className="text-sm text-blue-600">CO₂ Emissions Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-700">
                    {insights.communityMetrics.businessesServed.toLocaleString()}
                  </div>
                  <div className="text-sm text-purple-600">Businesses Served</div>
                </div>
              </div>
            </div>
            <TreePine className="h-16 w-16 text-green-500 opacity-50" />
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Tyres</p>
                <p className="text-2xl font-bold">{insights.totalTyres.toLocaleString()}</p>
                <p className="text-xs text-green-600">+12% this month</p>
              </div>
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Recycling Rate</p>
                <p className="text-2xl font-bold text-green-600">{insights.recyclingRate.toFixed(1)}%</p>
                <Progress value={insights.recyclingRate} className="mt-2" />
              </div>
              <Recycle className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Tyres</p>
                <p className="text-2xl font-bold text-blue-600">{insights.activeTyres.toLocaleString()}</p>
                <p className="text-xs text-blue-600">Currently tracked</p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Community Score</p>
                <p className="text-2xl font-bold text-purple-600">98/100</p>
                <div className="flex items-center gap-1 mt-1">
                  <Badge variant="secondary" className="text-xs">Top 5%</Badge>
                </div>
              </div>
              <Users className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Location Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="h-5 w-5" />
              Geographic Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={locationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="state" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Brand Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Brand Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={brandData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ brand, percent }) => `${brand} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {brandData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Action Center */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Share2 className="h-5 w-5" />
            Action Center
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" onClick={exportReport} className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Compliance Report
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Leaf className="h-4 w-4" />
              Sustainability Metrics
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Key Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Key Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <Leaf className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium text-green-800">Excellent Recycling Performance</p>
                <p className="text-sm text-green-600">
                  Your {insights.recyclingRate.toFixed(1)}% recycling rate is above the industry average of 65%
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-medium text-blue-800">Growing Network Impact</p>
                <p className="text-sm text-blue-600">
                  Connected to {insights.communityMetrics.partnersConnected} partner organizations across Australia
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
              <Globe className="h-5 w-5 text-purple-600" />
              <div>
                <p className="font-medium text-purple-800">Environmental Contribution</p>
                <p className="text-sm text-purple-600">
                  Your efforts have prevented {insights.environmentalImpact.wastePreventedKg}kg of waste from entering landfills
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}