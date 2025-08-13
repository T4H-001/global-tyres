-- Create business table for storing business details during onboarding
CREATE TABLE IF NOT EXISTS public.lrs_businesses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  name text NOT NULL,
  role text,
  abn text,
  phone text,
  state text,
  suburb text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.lrs_businesses ENABLE ROW LEVEL SECURITY;

-- Users can manage their own business data
CREATE POLICY "Users can view their own businesses" ON public.lrs_businesses
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own businesses" ON public.lrs_businesses
FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own businesses" ON public.lrs_businesses
FOR UPDATE USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own businesses" ON public.lrs_businesses
FOR DELETE USING (auth.uid() = user_id);

-- Create trigger for updated_at
CREATE TRIGGER lrs_businesses_updated_at
BEFORE UPDATE ON public.lrs_businesses
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for performance
CREATE INDEX IF NOT EXISTS idx_lrs_businesses_user_id ON public.lrs_businesses (user_id);

-- Create pricing plans table (publicly readable)
CREATE TABLE IF NOT EXISTS public.lrs_pricing_plans (
  slug text PRIMARY KEY,
  display_name text NOT NULL,
  price_cents integer NOT NULL CHECK (price_cents >= 0),
  currency_code text NOT NULL DEFAULT 'AUD',
  tier text NOT NULL DEFAULT 'standard',
  features text[] NOT NULL DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.lrs_pricing_plans ENABLE ROW LEVEL SECURITY;

-- Allow public read access to pricing plans
CREATE POLICY "Public can read pricing plans" ON public.lrs_pricing_plans
FOR SELECT USING (true);

-- Create trigger for updated_at
CREATE TRIGGER lrs_pricing_plans_updated_at
BEFORE UPDATE ON public.lrs_pricing_plans
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Insert pricing plans
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
  ])
ON CONFLICT (slug) DO NOTHING;

-- Create subscriptions table to track user subscriptions
CREATE TABLE IF NOT EXISTS public.lrs_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  business_id uuid NOT NULL REFERENCES public.lrs_businesses(id) ON DELETE CASCADE,
  plan_slug text NOT NULL REFERENCES public.lrs_pricing_plans(slug),
  status text NOT NULL DEFAULT 'incomplete',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.lrs_subscriptions ENABLE ROW LEVEL SECURITY;

-- Users can manage their own subscriptions
CREATE POLICY "Users can view their own subscriptions" ON public.lrs_subscriptions
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own subscriptions" ON public.lrs_subscriptions
FOR INSERT WITH CHECK (
  auth.uid() = user_id
  AND EXISTS (
    SELECT 1 FROM public.lrs_businesses b
    WHERE b.id = lrs_subscriptions.business_id AND b.user_id = auth.uid()
  )
);

CREATE POLICY "Users can update their own subscriptions" ON public.lrs_subscriptions
FOR UPDATE USING (auth.uid() = user_id) WITH CHECK (
  auth.uid() = user_id
  AND EXISTS (
    SELECT 1 FROM public.lrs_businesses b
    WHERE b.id = lrs_subscriptions.business_id AND b.user_id = auth.uid()
  )
);

CREATE POLICY "Users can delete their own subscriptions" ON public.lrs_subscriptions
FOR DELETE USING (auth.uid() = user_id);

-- Create trigger for updated_at
CREATE TRIGGER lrs_subscriptions_updated_at
BEFORE UPDATE ON public.lrs_subscriptions
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_lrs_subscriptions_user_id ON public.lrs_subscriptions (user_id);
CREATE INDEX IF NOT EXISTS idx_lrs_subscriptions_business_id ON public.lrs_subscriptions (business_id);
CREATE INDEX IF NOT EXISTS idx_lrs_subscriptions_plan_slug ON public.lrs_subscriptions (plan_slug);