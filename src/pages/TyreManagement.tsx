
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';
import TyreRegistrationForm from '@/components/tyre/TyreRegistrationForm';
import TyreDashboard from '@/components/tyre/TyreDashboard';
import { QrCode, BarChart3, Plus, ArrowLeft, Sparkles } from 'lucide-react';
import BulkUpload from '@/components/tyre/BulkUpload';
import EmailTestInterface from '@/components/admin/EmailTestInterface';
import { useDemoMode } from '@/hooks/useDemoMode';
import { tyreService, TyreRegistration } from '@/services/tyreService';

export default function TyreManagement() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('dashboard');
  const demo = useDemoMode();
  
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && ['dashboard','register','bulk','email-test'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);
  const business = {
    id: '11111111-1111-1111-1111-111111111111',
    business_name: 'Development Business',
    business_type: 'retail',
    contact_email: 'dev@example.com'
  } as const;

  const handleRegistrationComplete = () => {
    setActiveTab('dashboard');
    toast({
      title: "Registration complete!",
      description: "Your tyre has been added to the tracking system"
    });
  };

  // Demo: Lightweight guided tour state
  const [showTour, setShowTour] = useState(false);
  useEffect(() => {
    if (demo.active) {
      const dismissed = localStorage.getItem('tyre_demo_tour_dismissed');
      if (!dismissed) setShowTour(true);
    }
  }, [demo.active]);

  // Demo: Sample data generator
  const [generating, setGenerating] = useState(false);
  async function generateSampleData() {
    if (generating) return;
    setGenerating(true);
    try {
      const brands = ['Michelin', 'Bridgestone', 'Goodyear', 'Pirelli'];
      const sizes = ['205/55R16', '225/50R17', '195/65R15', '215/60R16'];
      const statuses: Array<TyreRegistration['status']> = ['active','active','active','removed','recycled'];
      const tasks = Array.from({ length: 12 }).map(async (_, i) => {
        const brand = brands[i % brands.length];
        const size = sizes[i % sizes.length];
        const serial = `${brand.substring(0,3).toUpperCase()}-${Date.now()}-${i.toString().padStart(2,'0')}`;
        const status = statuses[i % statuses.length];
        const reg = await tyreService.registerTyre({
          business_id: business.id,
          tyre_serial: serial,
          dot_code: `DOT-${Math.random().toString(36).substring(2,6).toUpperCase()}-${(1000+i)}`,
          brand,
          size,
          manufacture_date: new Date(Date.now() - 1000*60*60*24*90).toISOString(),
          install_date: new Date(Date.now() - 1000*60*60*24*30).toISOString(),
          vehicle_registration: demo.isLocationSpecific ? `KIR-${Math.floor(100 + Math.random()*900)}` : `DEMO${Math.floor(100 + Math.random()*900)}`,
          location_state: demo.isLocationSpecific ? 'NSW' : '',
          location_postcode: demo.isLocationSpecific ? '2232' : '',
          status,
        });
        // Optionally add a status event for non-active
        if (reg && status !== 'active') {
          await tyreService.updateTyreStatus(reg.id as string, status);
        }
      });
      await Promise.all(tasks);
      toast({ title: 'Sample data generated', description: '12 demo tyres added. Opening Dashboard…' });
      setActiveTab('dashboard');
    } catch (e) {
      toast({ title: 'Failed to generate sample data', description: 'Please try again.' });
    } finally {
      setGenerating(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-6 md:py-10">
        {/* Demo Banner */}
        {demo.active && (
          <Card className="mb-6 border-primary/20">
            <CardContent className="p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <div className="font-semibold">
                  {demo.isGeneric ? 'Demo Mode' : 'Kirrawee Demo Mode'}
                </div>
                <div className="text-sm text-muted-foreground">
                  {demo.isGeneric 
                    ? 'Interactive demonstration mode' 
                    : 'NSW 2232 • Local partners preloaded'
                  }
                </div>
              </div>
              {demo.isLocationSpecific && demo.partners.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {demo.partners.map((p) => (
                    <Badge key={p.name} variant="secondary">{p.name}</Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        )}
        {/* Header */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button 
                  variant="ghost" 
                  onClick={() => navigate('/')}
                  className="p-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground">Tyre Management</h1>
                  <p className="text-muted-foreground">{business.business_name}</p>
                  <p className="text-sm text-muted-foreground">Sample dataset: 5,000 tyres</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {demo.active && (
                  <Button 
                    variant="outline"
                    onClick={async () => {
                      await generateSampleData();
                    }}
                    className="flex items-center gap-2"
                    disabled={generating}
                  >
                    <Sparkles className="h-4 w-4" />
                    {generating ? 'Generating…' : 'Generate sample data'}
                  </Button>
                )}
                <Button 
                  onClick={() => setActiveTab('register')}
                  className="flex items-center gap-2"
                >
                  <Plus className="h-4 w-4" />
                  Register Tyre
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="register" className="flex items-center gap-2">
              <QrCode className="h-4 w-4" />
              Register
            </TabsTrigger>
            <TabsTrigger value="bulk" className="flex items-center gap-2">
              Bulk Upload
            </TabsTrigger>
            <TabsTrigger value="email-test" className="flex items-center gap-2">
              Email Test
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <TyreDashboard businessId={business.id} />
          </TabsContent>

          <TabsContent value="register">
            <TyreRegistrationForm 
              businessId={business.id}
              onRegistrationComplete={handleRegistrationComplete}
            />
          </TabsContent>

          <TabsContent value="bulk">
            {/** Lazy import would be ideal; direct import for simplicity */}
            {/* @ts-ignore */}
            <BulkUpload businessId={business.id} onComplete={() => setActiveTab('dashboard')} />
          </TabsContent>

          <TabsContent value="email-test">
            <div className="flex justify-center">
              <EmailTestInterface />
            </div>
          </TabsContent>
        </Tabs>

        {/* Help Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Help</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-1">QR Code Tracking</h4>
                <p className="text-muted-foreground">
                  Each registered tyre gets a unique QR code for easy tracking throughout its lifecycle.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-1">State-Based Tracking</h4>
                <p className="text-muted-foreground">
                  Track tyres across QLD, NSW, and other Australian states for comprehensive monitoring.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Waste Management</h4>
                <p className="text-muted-foreground">
                  Monitor recycling rates and disposal to combat illegal dumping and meet sustainability goals.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lightweight Guided Tour */}
        {demo.active && showTour && (
          <div className="fixed bottom-4 left-4 z-40 max-w-sm">
            <Card className="shadow-lg border-primary/30">
              <CardHeader>
                <CardTitle className="text-base">Welcome to Kirrawee Demo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="text-muted-foreground">Try registering a tyre, then view it on the dashboard. You can also generate sample data.</p>
                <div className="flex gap-2">
                  <Button size="sm" onClick={() => setActiveTab('register')}>Register a Tyre</Button>
                  <Button size="sm" variant="secondary" onClick={() => setActiveTab('dashboard')}>Open Dashboard</Button>
                </div>
                <div className="flex justify-end">
                  <Button size="sm" variant="ghost" onClick={() => { localStorage.setItem('tyre_demo_tour_dismissed','1'); setShowTour(false); }}>Dismiss</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

