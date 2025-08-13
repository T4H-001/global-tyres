import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { Recycle, Shield, Globe, BarChart3, ArrowRight, CheckCircle, Zap, Building2, CreditCard, Play } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface PricingPlan {
  slug: string;
  display_name: string;
  price_cents: number;
  currency_code: string;
  tier: string;
  features: string[];
}

const Index = () => {
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    fetchPricingPlans();
    checkUser();
  }, []);

  const fetchPricingPlans = async () => {
    try {
      // For now, show static plans until database is set up
      setPlans([
        {
          slug: 'starter',
          display_name: 'Starter',
          price_cents: 1900,
          currency_code: 'AUD',
          tier: 'basic',
          features: ['Up to 500 tyres/year', 'Basic compliance reporting', 'Email support']
        },
        {
          slug: 'pro',
          display_name: 'Pro',
          price_cents: 5900,
          currency_code: 'AUD',
          tier: 'pro',
          features: ['Up to 5,000 tyres/year', 'Advanced analytics & search', 'Priority support']
        },
        {
          slug: 'enterprise',
          display_name: 'Enterprise',
          price_cents: 14900,
          currency_code: 'AUD',
          tier: 'enterprise',
          features: ['Unlimited tyres', 'SLA + dedicated success manager', 'Custom integrations']
        }
      ]);
    } catch (error) {
      console.error('Error loading pricing plans:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
  };

  const handleGetStarted = () => {
    if (user) {
      navigate('/onboarding');
    } else {
      navigate('/auth');
    }
  };

  const formatPrice = (cents: number, currency: string) => {
    const amount = cents / 100;
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency,
    }).format(amount);
  };

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section with Motion */}
      <div className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="text-center space-y-8 animate-fade-in">
            <Badge className="mx-auto px-4 py-2 bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all duration-300">
              <Zap className="h-4 w-4 mr-2" />
              Global Tyre Lifecycle Management
            </Badge>
            
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight">
              Stop Illegal Dumping.
              <br />
              <span className="text-primary-glow animate-pulse">Track Every Tyre.</span>
            </h1>
            
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-white/90">
              Join the revolution in tyre stewardship. Our comprehensive tracking system combats 
              the 60-65% of tyres with unknown fates through cutting-edge lifecycle management.
            </p>

            {/* 1-2-3 Process Highlight */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">1</div>
                  <div className="text-left">
                    <div className="font-semibold">Register</div>
                    <div className="text-sm text-white/80">Your business</div>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-white/60" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold">2</div>
                  <div className="text-left">
                    <div className="font-semibold">Choose</div>
                    <div className="text-sm text-white/80">Your plan</div>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-white/60" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold">3</div>
                  <div className="text-left">
                    <div className="font-semibold">Start</div>
                    <div className="text-sm text-white/80">Tracking</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
              <Button 
                size="lg" 
                onClick={handleGetStarted}
                className="bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-white/20 transition-all duration-300 px-8 py-6 text-lg font-semibold"
              >
                <Play className="mr-2 h-5 w-5" />
                {user ? 'Complete Setup' : 'Get Started'}
              </Button>
              <Link to="/faq">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Future of Tyre Stewardship
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Revolutionary tracking technology meets environmental responsibility
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <Card className="group hover:shadow-environmental transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg">
            <CardHeader className="text-center p-8">
              <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Combat Illegal Dumping</h3>
              <p className="text-muted-foreground leading-relaxed">
                Track the 60-65% of tyres with unknown fates. Our comprehensive monitoring system prevents environmental damage before it happens.
              </p>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-environmental transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg">
            <CardHeader className="text-center p-8">
              <div className="mx-auto w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mb-6 group-hover:bg-success/20 transition-colors duration-300">
                <Globe className="h-10 w-10 text-success" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Global Compliance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Seamlessly compatible with TSA (Australia), EPR (EU), JATMA (Japan), and other stewardship programs worldwide.
              </p>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-environmental transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg">
            <CardHeader className="text-center p-8">
              <div className="mx-auto w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <BarChart3 className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Real-time Analytics</h3>
              <p className="text-muted-foreground leading-relaxed">
                Monitor recycling rates, track environmental impact, and generate compliance reports with instant, actionable insights.
              </p>
            </CardHeader>
          </Card>
        </div>

        {/* Enhanced Statistics */}
        <Card className="shadow-2xl border-0 bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardHeader className="text-center pb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Proven Global Impact</h3>
            <p className="text-xl text-muted-foreground">Real results from our comprehensive tracking system</p>
          </CardHeader>
          <CardContent className="px-8 pb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">537K</div>
                <p className="text-muted-foreground font-medium">Tonnes tracked annually</p>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-success mb-2 group-hover:scale-110 transition-transform duration-300">66%</div>
                <p className="text-muted-foreground font-medium">Recovery rate achieved</p>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
                <p className="text-muted-foreground font-medium">EU compliance rate</p>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-warning mb-2 group-hover:scale-110 transition-transform duration-300">800M+</div>
                <p className="text-muted-foreground font-medium">Tyres tracked globally</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pricing Preview Section */}
        {!isLoading && plans.length > 0 && (
          <div className="mt-24">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Simple, Transparent Pricing</h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose the plan that scales with your tyre stewardship needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card 
                  key={plan.slug} 
                  className={`group relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 overflow-hidden ${
                    index === 1 ? 'ring-2 ring-primary shadow-primary/20' : ''
                  }`}
                >
                  {index === 1 && (
                    <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-2 text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <CardHeader className={`text-center p-8 ${index === 1 ? 'pt-12' : ''}`}>
                    <h4 className="text-2xl font-bold mb-2">{plan.display_name}</h4>
                    <div className="text-4xl font-bold text-primary mb-6">
                      {formatPrice(plan.price_cents, plan.currency_code)}
                      <span className="text-lg font-normal text-muted-foreground">/month</span>
                    </div>
                    
                    <div className="space-y-3 text-left">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className="w-full mt-8 group-hover:shadow-lg transition-all duration-300" 
                      variant={index === 1 ? "default" : "outline"}
                      onClick={handleGetStarted}
                    >
                      Get Started
                    </Button>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Enhanced Key Features */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Everything You Need</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools for complete tyre lifecycle management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Unique tyre identification (DOT codes, QR codes)",
              "Multi-status lifecycle tracking",
              "Global stewardship scheme integration", 
              "Real-time dashboard and analytics",
              "Compliance reporting for TSA, EPR, JATMA",
              "Searchable database with export capabilities"
            ].map((feature, index) => (
              <div 
                key={feature} 
                className="group flex items-center gap-4 p-6 rounded-xl hover:bg-muted/50 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center group-hover:bg-success/20 transition-colors duration-300">
                  <CheckCircle className="h-6 w-6 text-success" />
                </div>
                <span className="text-foreground font-medium text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
