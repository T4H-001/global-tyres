-- Create business table for onboarding
CREATE TABLE public.lrs_businesses (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL,
  name text NOT NULL,
  role text,
  abn text,
  phone text,
  state text,
  suburb text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create pricing plans table
CREATE TABLE public.lrs_pricing_plans (
  slug text PRIMARY KEY,
  display_name text NOT NULL,
  price_cents integer NOT NULL CHECK (price_cents >= 0),
  currency_code text NOT NULL DEFAULT 'AUD',
  tier text NOT NULL DEFAULT 'standard',
  features text[] NOT NULL DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Create subscriptions table
CREATE TABLE public.lrs_subscriptions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL,
  business_id uuid REFERENCES public.lrs_businesses(id) ON DELETE CASCADE,
  plan_slug text REFERENCES public.lrs_pricing_plans(slug),
  status text NOT NULL DEFAULT 'incomplete',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Insert sample pricing plans
INSERT INTO public.lrs_pricing_plans (slug, display_name, price_cents, currency_code, tier, features)
VALUES
  ('starter', 'Starter', 1900, 'AUD', 'basic', ARRAY[
    'Up to 500 tyres/year',
    'Basic compliance reporting',
    'Email support'
  ]),
  ('pro', 'Pro', 5900, 'AUD', 'pro', ARRAY[
    'Up to 5,000 tyres/year',
    'Advanced analytics & search',
    'Priority support'
  ]),
  ('enterprise', 'Enterprise', 14900, 'AUD', 'enterprise', ARRAY[
    'Unlimited tyres',
    'SLA + dedicated success manager',
    'Custom integrations'
  ]);

-- Enable RLS on all tables
ALTER TABLE public.lrs_businesses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lrs_pricing_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lrs_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can view own businesses" ON public.lrs_businesses
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own businesses" ON public.lrs_businesses
FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own businesses" ON public.lrs_businesses
FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Public can read pricing plans" ON public.lrs_pricing_plans
FOR SELECT USING (true);

CREATE POLICY "Users can view own subscriptions" ON public.lrs_subscriptions
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own subscriptions" ON public.lrs_subscriptions
FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own subscriptions" ON public.lrs_subscriptions
FOR UPDATE USING (auth.uid() = user_id);

-- Create indexes
CREATE INDEX idx_lrs_businesses_user_id ON public.lrs_businesses (user_id);
CREATE INDEX idx_lrs_subscriptions_user_id ON public.lrs_subscriptions (user_id);
CREATE INDEX idx_lrs_subscriptions_business_id ON public.lrs_subscriptions (business_id);