-- Ensure RLS is enabled and allow public read access to ACTIVE pricing plans only
DO $$
BEGIN
  -- Enable RLS (safe to run multiple times)
  EXECUTE 'ALTER TABLE public.lrs_pricing_plans ENABLE ROW LEVEL SECURITY';
EXCEPTION WHEN others THEN
  -- Ignore if table doesn't exist yet
  NULL;
END $$;

-- Create or replace the public read policy for active plans
DO $$
BEGIN
  -- Drop existing policy if it exists (avoid duplicates)
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' 
      AND tablename = 'lrs_pricing_plans' 
      AND policyname = 'Public can read active plans'
  ) THEN
    EXECUTE 'DROP POLICY "Public can read active plans" ON public.lrs_pricing_plans';
  END IF;

  -- Create the policy allowing anon and authenticated roles to read only active plans
  EXECUTE 'CREATE POLICY "Public can read active plans" 
           ON public.lrs_pricing_plans 
           FOR SELECT 
           TO anon, authenticated 
           USING (is_active = true)';
END $$;

-- Optional: create an index to optimize queries filtering by is_active and price
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_indexes 
    WHERE schemaname = 'public' 
      AND tablename = 'lrs_pricing_plans' 
      AND indexname = 'idx_pricing_plans_active_price'
  ) THEN
    EXECUTE 'CREATE INDEX idx_pricing_plans_active_price 
             ON public.lrs_pricing_plans (is_active, price_cents)';
  END IF;
END $$;