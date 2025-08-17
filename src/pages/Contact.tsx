import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Mail, MapPin, MessageSquare, Send } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  category: string;
  message: string;
}

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    category: "general",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send contact email via edge function
      const { data, error } = await supabase.functions.invoke('send-notification', {
        body: {
          type: 'welcome', // We'll use welcome template for now
          to: 'info@globaltyres.org',
          data: {
            name: formData.name,
            businessName: `Contact Form: ${formData.subject}`,
            tyreCount: 0,
            location: `Email: ${formData.email} | Category: ${formData.category} | Message: ${formData.message}`
          }
        }
      });

      if (error) throw error;

      // Send confirmation to user
      await supabase.functions.invoke('send-notification', {
        body: {
          type: 'welcome',
          to: formData.email,
          data: {
            name: formData.name,
            businessName: 'TLRS Support Team'
          }
        }
      });

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "general",
        message: ""
      });
    } catch (error: any) {
      console.error('Contact form error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or email us directly at info@globaltyres.org",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const contactCategories = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'billing', label: 'Billing & Plans' },
    { value: 'compliance', label: 'Compliance Questions' },
    { value: 'partnership', label: 'Partnership Opportunities' },
    { value: 'feedback', label: 'Feedback & Suggestions' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team for support, questions, or partnership opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">info@globaltyres.org</p>
                    <p className="text-sm text-muted-foreground">
                      We aim to respond within 24 hours
                    </p>
                  </div>
                </div>


                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Office</h3>
                    <p className="text-muted-foreground">
                      HQ - Sydney, Australia
                    </p>
                  </div>
                </div>

              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select 
                        value={formData.category} 
                        onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {contactCategories.map(cat => (
                            <SelectItem key={cat.value} value={cat.value}>
                              {cat.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                        placeholder="Brief description of your inquiry"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={loading || !formData.name || !formData.email || !formData.subject || !formData.message}
                    className="w-full"
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground">
                    * Required fields. We respect your privacy and will never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Quick Links */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Quick Answers?</h2>
          <p className="text-muted-foreground mb-6">
            Check our frequently asked questions for immediate help.
          </p>
          <Button variant="outline" asChild>
            <a href="/faq">View FAQ</a>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}