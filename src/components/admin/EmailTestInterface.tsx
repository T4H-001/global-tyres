import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Mail, Send } from 'lucide-react';

interface EmailTestData {
  type: 'welcome' | 'alert' | 'compliance' | 'bulk_upload';
  to: string;
  data: {
    name?: string;
    tyreCount?: number;
    location?: string;
    businessName?: string;
    uploadStatus?: string;
    errorCount?: number;
  };
}

export default function EmailTestInterface() {
  const [loading, setLoading] = useState(false);
  const [emailData, setEmailData] = useState<EmailTestData>({
    type: 'welcome',
    to: 'troy.latter@gmail.com',
    data: {
      name: 'Troy Latter',
      businessName: 'Test Business',
      tyreCount: 100,
      location: 'Sydney, NSW',
      uploadStatus: 'success',
      errorCount: 0
    }
  });

  const handleSendTestEmail = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('send-notification', {
        body: emailData
      });

      if (error) throw error;

      toast({
        title: "Email sent successfully!",
        description: `${emailData.type} email sent to ${emailData.to}`,
      });
    } catch (error: any) {
      console.error('Email send error:', error);
      toast({
        title: "Failed to send email",
        description: error.message || "An error occurred while sending the email",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const emailTypes = [
    { value: 'welcome', label: 'Welcome Email', description: 'New user onboarding' },
    { value: 'alert', label: 'Alert Email', description: 'Illegal dumping detection' },
    { value: 'compliance', label: 'Compliance Report', description: 'Stewardship reporting' },
    { value: 'bulk_upload', label: 'Bulk Upload', description: 'Upload status notification' }
  ];

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          Email Testing Interface
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Email Type Selection */}
        <div className="space-y-2">
          <Label htmlFor="email-type">Email Type</Label>
          <Select 
            value={emailData.type} 
            onValueChange={(value: any) => setEmailData(prev => ({ ...prev, type: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select email type" />
            </SelectTrigger>
            <SelectContent>
              {emailTypes.map(type => (
                <SelectItem key={type.value} value={type.value}>
                  <div>
                    <div className="font-medium">{type.label}</div>
                    <div className="text-sm text-muted-foreground">{type.description}</div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Recipient Email */}
        <div className="space-y-2">
          <Label htmlFor="recipient">Recipient Email</Label>
          <Input
            id="recipient"
            type="email"
            value={emailData.to}
            onChange={(e) => setEmailData(prev => ({ ...prev, to: e.target.value }))}
            placeholder="Enter recipient email"
          />
        </div>

        {/* Dynamic Data Fields */}
        <div className="space-y-4">
          <Label>Email Data</Label>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={emailData.data.name || ''}
                onChange={(e) => setEmailData(prev => ({ 
                  ...prev, 
                  data: { ...prev.data, name: e.target.value }
                }))}
                placeholder="Recipient name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="business">Business Name</Label>
              <Input
                id="business"
                value={emailData.data.businessName || ''}
                onChange={(e) => setEmailData(prev => ({ 
                  ...prev, 
                  data: { ...prev.data, businessName: e.target.value }
                }))}
                placeholder="Business name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tyreCount">Tyre Count</Label>
              <Input
                id="tyreCount"
                type="number"
                value={emailData.data.tyreCount || ''}
                onChange={(e) => setEmailData(prev => ({ 
                  ...prev, 
                  data: { ...prev.data, tyreCount: parseInt(e.target.value) || 0 }
                }))}
                placeholder="Number of tyres"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={emailData.data.location || ''}
                onChange={(e) => setEmailData(prev => ({ 
                  ...prev, 
                  data: { ...prev.data, location: e.target.value }
                }))}
                placeholder="Location details"
              />
            </div>
          </div>

          {/* Bulk Upload Specific Fields */}
          {emailData.type === 'bulk_upload' && (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="uploadStatus">Upload Status</Label>
                <Select 
                  value={emailData.data.uploadStatus || 'success'} 
                  onValueChange={(value) => setEmailData(prev => ({ 
                    ...prev, 
                    data: { ...prev.data, uploadStatus: value }
                  }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="success">Success</SelectItem>
                    <SelectItem value="error">Error</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="errorCount">Error Count</Label>
                <Input
                  id="errorCount"
                  type="number"
                  value={emailData.data.errorCount || ''}
                  onChange={(e) => setEmailData(prev => ({ 
                    ...prev, 
                    data: { ...prev.data, errorCount: parseInt(e.target.value) || 0 }
                  }))}
                  placeholder="Number of errors"
                />
              </div>
            </div>
          )}
        </div>

        {/* Send Button */}
        <Button 
          onClick={handleSendTestEmail} 
          disabled={loading || !emailData.to}
          className="w-full"
        >
          {loading ? (
            "Sending..."
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              Send Test Email
            </>
          )}
        </Button>

        {/* Quick Test Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-4 border-t">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => {
              setEmailData({
                type: 'welcome',
                to: 'troy.latter@gmail.com',
                data: { name: 'Troy Latter', businessName: 'TLRS Demo' }
              });
            }}
          >
            Quick Welcome Test
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => {
              setEmailData({
                type: 'alert',
                to: 'troy.latter@gmail.com',
                data: { location: 'Sydney Industrial Estate', tyreCount: 50 }
              });
            }}
          >
            Quick Alert Test
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}