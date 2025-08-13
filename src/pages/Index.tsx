import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { Recycle, Shield, Globe, BarChart3, ArrowRight, CheckCircle, Zap, Building2, CreditCard, Play } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { PricingCard } from "@/components/pricing/PricingCard";
import { UserTypeSelector } from "@/components/pricing/UserTypeSelector";

interface PricingPlan {
  slug: string;
  display_name: string;
  price_cents: number;
  currency: string;
  tier: string;
  features: string[];
  target_user_type?: string;
  max_tyres_per_month?: number;
}

const Index = () => {
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [selectedUserType, setSelectedUserType] = useState<'individual' | 'business' | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    fetchPricingPlans();
    checkUser();
  }, []);

  const fetchPricingPlans = async () => {
    try {
      const { data, error } = await supabase
        .from('lrs_pricing_plans')
        .select('*')
        .order('price_cents');
      
      if (error) {
        console.error('Error fetching pricing plans:', error);
        // Fallback to static plans with free option
        setPlans([
          {
            slug: 'free-car-owner',
            display_name: 'Free Car Owner',
            price_cents: 0,
            currency: 'AUD',
            tier: 'free',
            target_user_type: 'individual',
            max_tyres_per_month: 10,
            features: ['Track up to 10 personal tyres per month', 'Basic tyre lifecycle tracking', 'QR code generation', 'Mobile-friendly interface', 'Email notifications']
          },
          {
            slug: 'starter',
            display_name: 'Business Starter',
            price_cents: 5000,
            currency: 'AUD',
            tier: 'basic',
            target_user_type: 'business',
            features: ['Up to 500 tyres/month', 'Basic compliance reporting', 'Email support', 'CSV exports']
          },
          {
            slug: 'pro',
            display_name: 'Business Pro',
            price_cents: 12000,
            currency: 'AUD',
            tier: 'pro',
            target_user_type: 'business',
            features: ['Up to 5,000 tyres/month', 'Advanced analytics & search', 'Priority support', 'API access', 'Custom reports']
          },
          {
            slug: 'enterprise',
            display_name: 'Enterprise',
            price_cents: 25000,
            currency: 'AUD',
            tier: 'enterprise',
            target_user_type: 'business',
            features: ['Unlimited tyres', 'SLA + dedicated success manager', 'Custom integrations', 'White-label options', 'Advanced security']
          }
        ]);
      } else if (data) {
        // Map database structure to our interface
        const mappedPlans = data.map((plan: any) => ({
          slug: plan.slug,
          display_name: plan.display_name,
          price_cents: plan.price_cents,
          currency: plan.currency || 'AUD',
          tier: plan.tier,
          target_user_type: plan.target_user_type,
          max_tyres_per_month: plan.max_tyres_per_month,
          features: Array.isArray(plan.features) ? plan.features : []
        }));
        setPlans(mappedPlans);
      }
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
    navigate('/onboarding');
  };

  const handlePlanSelect = (planSlug: string) => {
    // For free plan, go directly to tyre registration
    if (planSlug === 'free-car-owner') {
      navigate('/tyres/register');
      return;
    }
    
    // For paid plans, go to onboarding with plan pre-selected
    navigate('/onboarding', { state: { selectedPlan: planSlug } });
  };

  // Filter plans based on selected user type
  const filteredPlans = selectedUserType 
    ? plans.filter(plan => plan.target_user_type === selectedUserType)
    : plans;

  const formatPrice = (cents: number, currency?: string) => {
    const amount = cents / 100;
    const currencyCode = currency && currency.length === 3 ? currency : 'AUD';
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: currencyCode,
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

            {/* Tyre Lifecycle Process Highlight */}
            <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">1</div>
                  <div>
                    <div className="font-bold text-lg">Register Tyre Data</div>
                    <div className="text-sm text-white/80">Free for individuals</div>
                  </div>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  Add DOT codes, generate QR codes, record initial ownership. Track from purchase to end-of-life.
                </p>
              </div>

              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-lg">2</div>
                  <div>
                    <div className="font-bold text-lg">Blockchain Verification</div>
                    <div className="text-sm text-white/80">Ownership & lifecycle mapping</div>
                  </div>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  Every ownership change, status update, and location tracked immutably. Last known owner always identifiable.
                </p>
              </div>

              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-lg">3</div>
                  <div>
                    <div className="font-bold text-lg">Global Compliance</div>
                    <div className="text-sm text-white/80">Alerts, fines, auto-registration</div>
                  </div>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  Automated alerts for illegal dumping, compliance reporting, and seamless integration with global stewardship programs.
                </p>
              </div>
            </div>

            {/* Real-world Impact Badge */}
            <div className="mt-8 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-center">
                <div className="font-semibold text-white mb-2">🎯 Target: Every tyre in the lifecycle ecosystem</div>
                <div className="text-white/80 text-sm">
                  From manufacturers to car owners, tyre shops to recyclers - comprehensive tracking for accountability
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
                Start Tracking Now
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

        {/* Interactive Demo Section */}
        <div className="mb-20">
          <InteractiveDemo />
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
                Choose the plan that fits your tyre tracking needs
              </p>
            </div>
            
            {/* User Type Selector */}
            <UserTypeSelector 
              selectedType={selectedUserType} 
              onSelect={setSelectedUserType} 
            />
            
            {/* Pricing Cards */}
            {selectedUserType && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {filteredPlans.map((plan, index) => (
                  <PricingCard
                    key={plan.slug}
                    plan={plan}
                    isPopular={index === 1 && selectedUserType === 'business'}
                    onSelect={handlePlanSelect}
                  />
                ))}
              </div>
            )}
            
            {/* Show all plans if no user type selected */}
            {!selectedUserType && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-8">
                {plans.map((plan, index) => (
                  <PricingCard
                    key={plan.slug}
                    plan={plan}
                    isPopular={plan.tier === 'pro'}
                    onSelect={handlePlanSelect}
                  />
                ))}
              </div>
            )}
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
