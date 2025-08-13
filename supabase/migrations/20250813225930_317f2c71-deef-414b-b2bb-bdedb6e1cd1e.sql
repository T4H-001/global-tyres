-- Create pricing plans table
CREATE TABLE IF NOT EXISTS public.lrs_pricing_plans (
  slug TEXT PRIMARY KEY,
  display_name TEXT NOT NULL,
  tier TEXT NOT NULL,
  price_cents INTEGER NOT NULL DEFAULT 0,
  currency TEXT NOT NULL DEFAULT 'AUD',
  monthly_registration_limit INTEGER,
  features TEXT[] NOT NULL DEFAULT '{}',
  stripe_product_id TEXT,
  stripe_price_id TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  target_user_type TEXT NOT NULL DEFAULT 'individual',
  max_tyres_per_month INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.lrs_pricing_plans ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access to pricing plans
CREATE POLICY "pricing_plans_public_read" ON public.lrs_pricing_plans
FOR SELECT
USING (is_active = true);

-- Create subscriptions table
CREATE TABLE IF NOT EXISTS public.lrs_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  business_id UUID,
  plan_slug TEXT REFERENCES public.lrs_pricing_plans(slug) NOT NULL,
  status TEXT NOT NULL DEFAULT 'incomplete',
  stripe_subscription_id TEXT,
  stripe_customer_id TEXT,
  current_period_start TIMESTAMPTZ,
  current_period_end TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.lrs_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policies for subscriptions
CREATE POLICY "users_can_view_own_subscriptions" ON public.lrs_subscriptions
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "users_can_insert_own_subscriptions" ON public.lrs_subscriptions
FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "users_can_update_own_subscriptions" ON public.lrs_subscriptions
FOR UPDATE
USING (auth.uid() = user_id);

-- Insert sample pricing plans
INSERT INTO public.lrs_pricing_plans (slug, display_name, tier, price_cents, currency, monthly_registration_limit, features, target_user_type, max_tyres_per_month) VALUES
('free-car-owner', 'Free Car Owner', 'free', 0, 'AUD', 10, ARRAY['Track up to 10 personal tyres per month', 'Basic tyre lifecycle tracking', 'QR code generation', 'Mobile-friendly interface', 'Email notifications'], 'individual', 10),
('retail_basic', 'Retail Basic', 'retail', 5000, 'AUD', 500, ARRAY['Tyre registrations', 'Basic reports', 'Email support'], 'business', null),
('retail_pro', 'Retail Pro', 'retail', 10000, 'AUD', null, ARRAY['Unlimited registrations', 'Blockchain logging', 'RFID scans (100/mo)', 'Priority support'], 'business', null),
('wholesale_standard', 'Wholesale Standard', 'wholesale', 15000, 'AUD', 5000, ARRAY['Bulk uploads', 'Flow analysis', 'Email support'], 'business', null),
('fleet_pro', 'Fleet Pro', 'fleet', 20000, 'AUD', null, ARRAY['Unlimited fleet regs', 'Predictive maintenance', '24/7 support'], 'business', null),
('wholesale_enterprise', 'Wholesale Enterprise', 'wholesale', 30000, 'AUD', null, ARRAY['Unlimited', 'Smart contracts', 'Multi-user wallets', 'Dedicated support'], 'business', null)
ON CONFLICT (slug) DO NOTHING;

-- Create trigger for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_lrs_pricing_plans_updated_at
  BEFORE UPDATE ON public.lrs_pricing_plans
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_lrs_subscriptions_updated_at
  BEFORE UPDATE ON public.lrs_subscriptions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();