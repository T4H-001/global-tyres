import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CheckCircle, Car, Building2, Truck, Star, Crown } from "lucide-react";
import individualImg from "@/assets/pricing/individual.jpg";
import businessImg from "@/assets/pricing/business.jpg";
import enterpriseImg from "@/assets/pricing/enterprise.jpg";
import tyreStackClean from "@/assets/tyre-stack-clean.jpg";
import tyreRecycling from "@/assets/tyre-recycling-facility.jpg";
import environmental from "@/assets/before-after-environment.jpg";

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

interface PricingCardProps {
  plan: PricingPlan;
  isPopular?: boolean;
  onSelect: (planSlug: string) => void;
}

const formatPrice = (cents: number, currency?: string) => {
  const amount = cents / 100;
  const currencyCode = currency && currency.length === 3 ? currency : 'AUD';
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: currencyCode,
  }).format(amount);
};

const getCardIcon = (tier: string, target_user_type?: string) => {
  if (tier === 'free' || target_user_type === 'individual') return Car;
  if (tier === 'enterprise') return Crown;
  if (tier === 'commercial') return Truck;
  return Building2;
};

const getCardGradient = (tier: string, target_user_type?: string) => {
  if (tier === 'free' || target_user_type === 'individual') 
    return 'bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 border-green-200 dark:border-green-800';
  if (tier === 'enterprise') 
    return 'bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-950 dark:to-violet-900 border-purple-200 dark:border-purple-800';
  if (tier === 'commercial')
    return 'bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-950 dark:to-amber-900 border-orange-200 dark:border-orange-800';
  return 'bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950 dark:to-cyan-900 border-blue-200 dark:border-blue-800';
};

const getButtonText = (tier: string, target_user_type?: string) => {
  if (tier === 'free' || target_user_type === 'individual') return 'Start Free';
  return 'Choose Plan';
};

const getButtonVariant = (tier: string, target_user_type?: string, isPopular?: boolean) => {
  if (tier === 'free' || target_user_type === 'individual') return 'default';
  if (isPopular) return 'default';
  return 'outline';
};

export const PricingCard = ({ plan, isPopular = false, onSelect }: PricingCardProps) => {
  const Icon = getCardIcon(plan.tier, plan.target_user_type);
  const gradientClass = getCardGradient(plan.tier, plan.target_user_type);
  const buttonText = getButtonText(plan.tier, plan.target_user_type);
  const buttonVariant = getButtonVariant(plan.tier, plan.target_user_type, isPopular);

  let imageSrc: string;
  if (plan.slug?.includes('enterprise') || plan.tier === 'enterprise') {
    imageSrc = enterpriseImg;
  } else if (plan.slug?.includes('pro')) {
    imageSrc = tyreRecycling;
  } else if (
    plan.slug?.includes('starter') ||
    plan.slug?.includes('basic') ||
    plan.tier === 'basic' ||
    plan.tier === 'commercial'
  ) {
    imageSrc = tyreStackClean;
  } else if (plan.price_cents === 0 || plan.tier === 'free' || plan.target_user_type === 'individual') {
    imageSrc = individualImg;
  } else {
    imageSrc = businessImg;
  }
  const imageAlt = `${plan.display_name} plan - tyre lifecycle management`;
  
  return (
    <Card className={`group relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 overflow-hidden ${gradientClass} ${
      isPopular ? 'ring-2 ring-primary shadow-primary/20 scale-105' : ''
    }`}>
      {isPopular && (
        <div className="absolute -top-0 left-0 right-0 bg-gradient-to-r from-primary to-primary-glow text-white text-center py-2 text-sm font-semibold flex items-center justify-center gap-2">
          <Star className="h-4 w-4 fill-current" />
          Most Popular
          <Star className="h-4 w-4 fill-current" />
        </div>
      )}

      {/* Image header */}
      <div className="relative">
        <AspectRatio ratio={16 / 9}>
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </AspectRatio>
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
      </div>
      
      <CardHeader className={`p-6 ${isPopular ? 'pt-8' : ''}`}>
        {/* Top row: icon + name + badge */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            plan.tier === 'free' || plan.target_user_type === 'individual' 
              ? 'bg-green-500/20 text-green-600 dark:text-green-400' 
              : plan.tier === 'enterprise'
              ? 'bg-purple-500/20 text-purple-600 dark:text-purple-400'
              : plan.tier === 'commercial'
              ? 'bg-orange-500/20 text-orange-600 dark:text-orange-400'
              : 'bg-blue-500/20 text-blue-600 dark:text-blue-400'
          }`}>
            <Icon className="h-5 w-5" />
          </div>
          <h4 className="text-xl font-bold">{plan.display_name}</h4>
          {plan.target_user_type && (
            <Badge variant="secondary" className="ml-auto bg-white/50 dark:bg-black/20">
              {plan.target_user_type === 'individual' ? 'Car Owners' : 'Businesses'}
            </Badge>
          )}
        </div>

        {/* Price */}
        <div className="mb-4">
          {plan.price_cents === 0 ? (
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">FREE</div>
          ) : (
            <div className="flex items-baseline gap-2">
              <div className="text-3xl font-bold text-primary">
                {formatPrice(plan.price_cents, plan.currency)}
              </div>
              <span className="text-sm text-muted-foreground">/month</span>
            </div>
          )}
          {plan.max_tyres_per_month && plan.price_cents > 0 && (
            <div className="text-sm text-muted-foreground mt-1">
              Up to {plan.max_tyres_per_month} tyres/month
            </div>
          )}
        </div>

        {/* Features */}
        <div className="space-y-2">
          {Array.isArray(plan.features) ? plan.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{feature}</span>
            </div>
          )) : (
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">Features included</span>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <Button 
          className="w-full mt-6 group-hover:shadow-lg transition-all duration-300"
          variant={buttonVariant as any}
          onClick={() => onSelect(plan.slug)}
          aria-label={`Select ${plan.display_name} plan`}
        >
          {buttonText}
        </Button>
      </CardHeader>
    </Card>
  );
};