-- Create the required tables for onboarding flow (simplified approach)
CREATE TABLE IF NOT EXISTS public.lrs_businesses (
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

-- Enable RLS and add policies for businesses table
ALTER TABLE public.lrs_businesses ENABLE ROW LEVEL SECURITY;

-- Allow users to manage their own business data
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'lrs_businesses' AND policyname = 'Users can view own businesses'
  ) THEN
    CREATE POLICY "Users can view own businesses" ON public.lrs_businesses
    FOR SELECT USING (user_id = auth.uid());
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'lrs_businesses' AND policyname = 'Users can insert own businesses'
  ) THEN
    CREATE POLICY "Users can insert own businesses" ON public.lrs_businesses
    FOR INSERT WITH CHECK (user_id = auth.uid());
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'lrs_businesses' AND policyname = 'Users can update own businesses'
  ) THEN
    CREATE POLICY "Users can update own businesses" ON public.lrs_businesses
    FOR UPDATE USING (user_id = auth.uid());
  END IF;
END $$;

-- Create pricing plans table
CREATE TABLE IF NOT EXISTS public.lrs_pricing_plans (
  slug text PRIMARY KEY,
  display_name text NOT NULL,
  price_cents integer CHECK (price_cents >= 0),
  currency_code text DEFAULT 'AUD',
  tier text DEFAULT 'standard',
  features text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS and allow public read access to pricing plans
ALTER TABLE public.lrs_pricing_plans ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'lrs_pricing_plans' AND policyname = 'Public read access to pricing plans'
  ) THEN
    CREATE POLICY "Public read access to pricing plans" ON public.lrs_pricing_plans
    FOR SELECT USING (true);
  END IF;
END $$;

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

-- Create subscriptions table
CREATE TABLE IF NOT EXISTS public.lrs_subscriptions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL,
  business_id uuid REFERENCES public.lrs_businesses(id) ON DELETE CASCADE,
  plan_slug text REFERENCES public.lrs_pricing_plans(slug),
  status text DEFAULT 'incomplete',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS for subscriptions
ALTER TABLE public.lrs_subscriptions ENABLE ROW LEVEL SECURITY;

-- Allow users to manage their own subscriptions
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'lrs_subscriptions' AND policyname = 'Users can view own subscriptions'
  ) THEN
    CREATE POLICY "Users can view own subscriptions" ON public.lrs_subscriptions
    FOR SELECT USING (user_id = auth.uid());
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'lrs_subscriptions' AND policyname = 'Users can insert own subscriptions'
  ) THEN
    CREATE POLICY "Users can insert own subscriptions" ON public.lrs_subscriptions
    FOR INSERT WITH CHECK (user_id = auth.uid());
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'lrs_subscriptions' AND policyname = 'Users can update own subscriptions'
  ) THEN
    CREATE POLICY "Users can update own subscriptions" ON public.lrs_subscriptions
    FOR UPDATE USING (user_id = auth.uid());
  END IF;
END $$;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_lrs_businesses_user_id ON public.lrs_businesses (user_id);
CREATE INDEX IF NOT EXISTS idx_lrs_subscriptions_user_id ON public.lrs_subscriptions (user_id);
CREATE INDEX IF NOT EXISTS idx_lrs_subscriptions_business_id ON public.lrs_subscriptions (business_id);