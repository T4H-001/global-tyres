-- Enable required extension for UUID generation
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- 1) Pricing plans (publicly readable)
CREATE TABLE IF NOT EXISTS public.lrs_pricing_plans (
  slug text PRIMARY KEY,
  display_name text NOT NULL,
  description text,
  price_cents integer NOT NULL CHECK (price_cents >= 0),
  currency_code text NOT NULL DEFAULT 'AUD',
  tier text NOT NULL DEFAULT 'standard',
  features text[] NOT NULL DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Ensure RLS is enabled
ALTER TABLE public.lrs_pricing_plans ENABLE ROW LEVEL SECURITY;

-- Public read-only access to pricing plans
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'lrs_pricing_plans' AND policyname = 'Public can read pricing plans'
  ) THEN
    CREATE POLICY "Public can read pricing plans"
    ON public.lrs_pricing_plans
    FOR SELECT
    USING (true);
  END IF;
END $$;

-- Optional: Remove overly permissive write policies if any existed (no-op if absent)
-- We intentionally do not allow INSERT/UPDATE/DELETE from anon users.

-- Seed pricing plans
INSERT INTO public.lrs_pricing_plans (slug, display_name, description, price_cents, currency_code, tier, features)
VALUES
  ('starter', 'Starter', 'Perfect for small operators getting started', 1900, 'AUD', 'basic', ARRAY[
    'Up to 500 tyres/year',
    'Basic compliance reporting',
    'Email support'
  ]),
  ('pro', 'Pro', 'For growing businesses with advanced needs', 5900, 'AUD', 'pro', ARRAY[
    'Up to 5,000 tyres/year',
    'Advanced analytics & search',
    'Priority support'
  ]),
  ('enterprise', 'Enterprise', 'For large fleets and national retailers', 14900, 'AUD', 'enterprise', ARRAY[
    'Unlimited tyres',
    'SLA + dedicated success manager',
    'Custom integrations'
  ])
ON CONFLICT (slug) DO NOTHING;

-- Keep updated_at fresh on updates
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'trg_lrs_pricing_plans_updated_at'
  ) THEN
    CREATE TRIGGER trg_lrs_pricing_plans_updated_at
    BEFORE UPDATE ON public.lrs_pricing_plans
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
  END IF;
END $$;


-- 2) Businesses (per-user)
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

-- RLS: users can manage their own business rows
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'lrs_businesses' AND policyname = 'Users can view their own businesses'
  ) THEN
    CREATE POLICY "Users can view their own businesses"
    ON public.lrs_businesses
    FOR SELECT
    USING (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'lrs_businesses' AND policyname = 'Users can insert their own businesses'
  ) THEN
    CREATE POLICY "Users can insert their own businesses"
    ON public.lrs_businesses
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'lrs_businesses' AND policyname = 'Users can update their own businesses'
  ) THEN
    CREATE POLICY "Users can update their own businesses"
    ON public.lrs_businesses
    FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'lrs_businesses' AND policyname = 'Users can delete their own businesses'
  ) THEN
    CREATE POLICY "Users can delete their own businesses"
    ON public.lrs_businesses
    FOR DELETE
    USING (auth.uid() = user_id);
  END IF;
END $$;

-- Trigger for updated_at
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'trg_lrs_businesses_updated_at'
  ) THEN
    CREATE TRIGGER trg_lrs_businesses_updated_at
    BEFORE UPDATE ON public.lrs_businesses
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
  END IF;
END $$;

-- Helpful index
CREATE INDEX IF NOT EXISTS idx_lrs_businesses_user_id ON public.lrs_businesses (user_id);


-- 3) Subscriptions (per-user, linked to business and plan)
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

-- RLS: users can manage their own subscriptions, and ensure they only attach to their own business
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'lrs_subscriptions' AND policyname = 'Users can view their own subscriptions'
  ) THEN
    CREATE POLICY "Users can view their own subscriptions"
    ON public.lrs_subscriptions
    FOR SELECT
    USING (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'lrs_subscriptions' AND policyname = 'Users can insert their own subscriptions'
  ) THEN
    CREATE POLICY "Users can insert their own subscriptions"
    ON public.lrs_subscriptions
    FOR INSERT
    WITH CHECK (
      auth.uid() = user_id
      AND EXISTS (
        SELECT 1 FROM public.lrs_businesses b
        WHERE b.id = lrs_subscriptions.business_id AND b.user_id = auth.uid()
      )
    );
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'lrs_subscriptions' AND policyname = 'Users can update their own subscriptions'
  ) THEN
    CREATE POLICY "Users can update their own subscriptions"
    ON public.lrs_subscriptions
    FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (
      auth.uid() = user_id
      AND EXISTS (
        SELECT 1 FROM public.lrs_businesses b
        WHERE b.id = lrs_subscriptions.business_id AND b.user_id = auth.uid()
      )
    );
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'lrs_subscriptions' AND policyname = 'Users can delete their own subscriptions'
  ) THEN
    CREATE POLICY "Users can delete their own subscriptions"
    ON public.lrs_subscriptions
    FOR DELETE
    USING (auth.uid() = user_id);
  END IF;
END $$;

-- Trigger for updated_at
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'trg_lrs_subscriptions_updated_at'
  ) THEN
    CREATE TRIGGER trg_lrs_subscriptions_updated_at
    BEFORE UPDATE ON public.lrs_subscriptions
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
  END IF;
END $$;

-- Helpful indexes
CREATE INDEX IF NOT EXISTS idx_lrs_subscriptions_user_id ON public.lrs_subscriptions (user_id);
CREATE INDEX IF NOT EXISTS idx_lrs_subscriptions_business_id ON public.lrs_subscriptions (business_id);
CREATE INDEX IF NOT EXISTS idx_lrs_subscriptions_plan_slug ON public.lrs_subscriptions (plan_slug);
