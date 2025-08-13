-- Add columns for user targeting and max tyres
ALTER TABLE public.lrs_pricing_plans 
ADD COLUMN IF NOT EXISTS target_user_type TEXT DEFAULT 'business',
ADD COLUMN IF NOT EXISTS max_tyres_per_month INTEGER;

-- Update existing plans to specify target user type  
UPDATE public.lrs_pricing_plans 
SET target_user_type = 'business'
WHERE target_user_type IS NULL;

-- Add free plan for car owners
INSERT INTO public.lrs_pricing_plans (
  slug,
  display_name,
  price_cents,
  currency,
  tier,
  features,
  target_user_type,
  max_tyres_per_month,
  monthly_registration_limit
) VALUES (
  'free-car-owner',
  'Free Car Owner',
  0,
  'AUD',
  'free',
  '["Track up to 10 personal tyres per month", "Basic tyre lifecycle tracking", "QR code generation", "Mobile-friendly interface", "Email notifications"]'::jsonb,
  'individual',
  10,
  10
) ON CONFLICT (slug) DO NOTHING;