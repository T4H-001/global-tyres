-- Add public read policy for active pricing plans
CREATE POLICY "Public can read active pricing plans" 
ON public.lrs_pricing_plans
FOR SELECT 
USING (is_active = true);