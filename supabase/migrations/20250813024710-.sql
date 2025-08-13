-- Add free plan for car owners
INSERT INTO public.lrs_pricing_plans (
  slug,
  display_name,
  price_cents,
  currency_code,
  tier,
  features,
  target_user_type,
  max_tyres_per_month
) VALUES (
  'free-car-owner',
  'Free Car Owner',
  0,
  'AUD',
  'free',
  ARRAY[
    'Track up to 10 personal tyres per month',
    'Basic tyre lifecycle tracking',
    'QR code generation',
    'Mobile-friendly interface',
    'Email notifications'
  ],
  'individual',
  10
) ON CONFLICT (slug) DO NOTHING;

-- Update existing plans to specify target user type
UPDATE public.lrs_pricing_plans 
SET target_user_type = 'business'
WHERE target_user_type IS NULL;

-- Add columns if they don't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='lrs_pricing_plans' AND column_name='target_user_type') THEN
    ALTER TABLE public.lrs_pricing_plans ADD COLUMN target_user_type TEXT DEFAULT 'business';
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='lrs_pricing_plans' AND column_name='max_tyres_per_month') THEN
    ALTER TABLE public.lrs_pricing_plans ADD COLUMN max_tyres_per_month INTEGER;
  END IF;
END $$;