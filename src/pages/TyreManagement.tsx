import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';
import { useSessionId } from '@/hooks/useSessionId';
import { supabase } from '@/integrations/supabase/client';
import TyreRegistrationForm from '@/components/tyre/TyreRegistrationForm';
import TyreDashboard from '@/components/tyre/TyreDashboard';
import { QrCode, BarChart3, Plus, ArrowLeft } from 'lucide-react';

export default function TyreManagement() {
  const navigate = useNavigate();
  const sessionId = useSessionId();
  const [business, setBusiness] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    if (sessionId) {
      loadBusinessData();
    }
  }, [sessionId]);

  const loadBusinessData = async () => {
    try {
      const { data, error } = await supabase
        .from('lrs_businesses')
        .select('*')
        .eq('session_id', sessionId)
        .single();

      if (error) {
        console.error('Error loading business:', error);
        toast({
          title: "Session not found",
          description: "Please complete the onboarding process first",
          variant: "destructive"
        });
        navigate('/onboarding');
        return;
      }

      setBusiness(data);
    } catch (error) {
      console.error('Failed to load business data:', error);
      navigate('/onboarding');
    } finally {
      setLoading(false);
    }
  };

  const handleRegistrationComplete = () => {
    setActiveTab('dashboard');
    toast({
      title: "Registration complete!",
      description: "Your tyre has been added to the tracking system"
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!business) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Business Not Found</h2>
            <p className="text-muted-foreground mb-4">
              Please complete the onboarding process to access tyre management.
            </p>
            <Button onClick={() => navigate('/onboarding')}>
              Start Onboarding
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container py-6 md:py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="p-2"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Tyre Management</h1>
              <p className="text-muted-foreground">{business.business_name}</p>
            </div>
          </div>
          
          <Button 
            onClick={() => setActiveTab('register')}
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Register Tyre
          </Button>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="register" className="flex items-center gap-2">
              <QrCode className="h-4 w-4" />
              Register
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
      </div>
    </div>
  );
}