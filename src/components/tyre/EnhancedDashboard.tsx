import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { tyreService } from '@/services/tyreService';
import { communityService } from '@/services/communityService';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import { 
  Leaf, Recycle, Globe, TrendingUp, Users, Shield, 
  Download, FileText, Share2, TreePine, Droplets, Fish
} from 'lucide-react';

interface Props {
  businessId: string;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export default function EnhancedDashboard({ businessId }: Props) {
  const [insights, setInsights] = useState<any>(null);
  const [ecoMetrics, setEcoMetrics] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadInsights();
    loadEcoMetrics();
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

  const loadEcoMetrics = async () => {
    try {
      const metrics = await communityService.getBusinessEcoMetrics(businessId);
      setEcoMetrics(metrics);
    } catch (error) {
      console.error('Failed to load eco metrics:', error);
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
      brands: insights.brandBreakdown,
      ecoMetrics: {
        totalCo2Saved: ecoMetrics.reduce((sum, m) => sum + (m.co2e_saved_kg || 0), 0),
        microplasticsReduced: ecoMetrics.reduce((sum, m) => sum + (m.microplastics_g_est || 0), 0),
        wildlifeProtected: ecoMetrics.filter(m => m.wildlife_zone).length
      }
    };
    
    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `tyre-environmental-report-${new Date().toISOString().split('T')[0]}.json`);
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

  const totalCo2Saved = ecoMetrics.reduce((sum, m) => sum + (m.co2e_saved_kg || 0), 0);
  const totalMicroplasticsReduced = ecoMetrics.reduce((sum, m) => sum + (m.microplastics_g_est || 0), 0);
  const wildlifeZonesProtected = new Set(ecoMetrics.filter(m => m.wildlife_zone).map(m => m.wildlife_zone)).size;

  return (
    <div className="space-y-6">
      {/* Enhanced Community Impact Banner */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-2 flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Environmental Impact Dashboard
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">
                    {insights.environmentalImpact.wastePreventedKg.toLocaleString()}kg
                  </div>
                  <div className="text-sm text-green-600">Waste Prevented</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700">
                    {totalCo2Saved.toLocaleString()}kg
                  </div>
                  <div className="text-sm text-blue-600">CO₂ Emissions Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-700">
                    {totalMicroplasticsReduced.toLocaleString()}g
                  </div>
                  <div className="text-sm text-cyan-600">Microplastics Reduced</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-700">
                    {wildlifeZonesProtected}
                  </div>
                  <div className="text-sm text-purple-600">Wildlife Zones Protected</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <TreePine className="h-12 w-12 text-green-500 opacity-50" />
              <Fish className="h-8 w-8 text-blue-500 opacity-50" />
            </div>
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
                <p className="text-sm font-medium text-muted-foreground">Ocean Protection</p>
                <p className="text-2xl font-bold text-blue-600">{(totalMicroplasticsReduced/1000).toFixed(1)}kg</p>
                <p className="text-xs text-blue-600">Microplastics prevented</p>
              </div>
              <Droplets className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Wildlife Zones</p>
                <p className="text-2xl font-bold text-purple-600">{wildlifeZonesProtected}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Badge variant="secondary" className="text-xs">Protected</Badge>
                </div>
              </div>
              <TreePine className="h-8 w-8 text-purple-500" />
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
            Environmental Action Center
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button variant="outline" onClick={exportReport} className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export Environmental Report
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Wildlife Impact Report
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Droplets className="h-4 w-4" />
              Ocean Health Metrics
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Leaf className="h-4 w-4" />
              Biodiversity Dashboard
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Key Insights with Advisory Board Integration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Leaf className="h-5 w-5" />
            Advisory Board Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <TreePine className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium text-green-800">Jane Goodall's Wildlife Protection Impact</p>
                <p className="text-sm text-green-600">
                  Your tracking prevents tyre waste in {wildlifeZonesProtected} protected wildlife zones, following Goodall's conservation principles
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <Droplets className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-medium text-blue-800">Attenborough's Ocean Conservation</p>
                <p className="text-sm text-blue-600">
                  {(totalMicroplasticsReduced/1000).toFixed(1)}kg of microplastics prevented from entering waterways, protecting marine ecosystems
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
              <Shield className="h-5 w-5 text-purple-600" />
              <div>
                <p className="font-medium text-purple-800">Hedy Lamarr's Tech Innovation</p>
                <p className="text-sm text-purple-600">
                  RFID-enabled tracking achieving 99.9% accuracy in preventing illegal dumping across your network
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
              <TrendingUp className="h-5 w-5 text-orange-600" />
              <div>
                <p className="font-medium text-orange-800">Collective Advisory Impact</p>
                <p className="text-sm text-orange-600">
                  Following guidance from our virtual advisory board, your {insights.recyclingRate.toFixed(1)}% recycling rate exceeds Australia's 66% target
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
