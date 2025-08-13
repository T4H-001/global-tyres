-- Remove authentication barriers and enable public access

-- Drop existing RLS policies that require authentication
DROP POLICY IF EXISTS "Users can view pricing plans" ON public.lrs_pricing_plans;
DROP POLICY IF EXISTS "Users can create their own businesses" ON public.lrs_businesses;
DROP POLICY IF EXISTS "Users can view their own businesses" ON public.lrs_businesses;
DROP POLICY IF EXISTS "Users can update their own businesses" ON public.lrs_businesses;
DROP POLICY IF EXISTS "Users can create their own subscriptions" ON public.lrs_subscriptions;
DROP POLICY IF EXISTS "Users can view their own subscriptions" ON public.lrs_subscriptions;

-- Disable RLS on pricing plans (keep them fully public)
ALTER TABLE public.lrs_pricing_plans DISABLE ROW LEVEL SECURITY;

-- Make owner_user_id nullable to allow anonymous business creation
ALTER TABLE public.lrs_businesses ALTER COLUMN owner_user_id DROP NOT NULL;

-- Create permissive policies for businesses (allow anonymous creation and viewing)
CREATE POLICY "Anyone can create businesses" 
ON public.lrs_businesses 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can view businesses" 
ON public.lrs_businesses 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can update businesses" 
ON public.lrs_businesses 
FOR UPDATE 
USING (true);

-- Create permissive policies for subscriptions
CREATE POLICY "Anyone can create subscriptions" 
ON public.lrs_subscriptions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can view subscriptions" 
ON public.lrs_subscriptions 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can update subscriptions" 
ON public.lrs_subscriptions 
FOR UPDATE 
USING (true);

-- Add session tracking for anonymous users
ALTER TABLE public.lrs_businesses ADD COLUMN IF NOT EXISTS session_id TEXT;
ALTER TABLE public.lrs_subscriptions ADD COLUMN IF NOT EXISTS session_id TEXT;

-- Create index for session-based lookups
CREATE INDEX IF NOT EXISTS idx_businesses_session_id ON public.lrs_businesses(session_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_session_id ON public.lrs_subscriptions(session_id);