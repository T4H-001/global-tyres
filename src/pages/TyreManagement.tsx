
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';
import TyreRegistrationForm from '@/components/tyre/TyreRegistrationForm';
import TyreDashboard from '@/components/tyre/TyreDashboard';
import { QrCode, BarChart3, Plus, ArrowLeft } from 'lucide-react';
import BulkUpload from '@/components/tyre/BulkUpload';

export default function TyreManagement() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');

  // Use the development business UUID that we just created
  const business = {
    id: '11111111-1111-1111-1111-111111111111',
    business_name: 'Development Business',
    business_type: 'retail',
    contact_email: 'dev@example.com'
  };

  const handleRegistrationComplete = () => {
    setActiveTab('dashboard');
    toast({
      title: "Registration complete!",
      description: "Your tyre has been added to the tracking system"
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-6 md:py-10">
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
          
              <Button 
                onClick={() => setActiveTab('register')}
                className="flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Register Tyre
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-xl">
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
