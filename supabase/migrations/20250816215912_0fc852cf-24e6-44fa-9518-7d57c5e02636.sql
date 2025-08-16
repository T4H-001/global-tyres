-- Secure the database by implementing proper RLS policies

-- 1. Drop permissive demo policies that allow open access
DROP POLICY IF EXISTS "Demo: Allow all operations on lrs_businesses" ON public.lrs_businesses;
DROP POLICY IF EXISTS "Demo: Allow all operations on lrs_subscriptions" ON public.lrs_subscriptions;
DROP POLICY IF EXISTS "Demo: Allow all operations on tyre_registrations" ON public.tyre_registrations;
DROP POLICY IF EXISTS "Demo: Allow all operations on tyre_lifecycle_events" ON public.tyre_lifecycle_events;

-- 2. Add owner_user_id to lrs_businesses if it doesn't exist
ALTER TABLE public.lrs_businesses 
ADD COLUMN IF NOT EXISTS owner_user_id UUID REFERENCES auth.users(id);

-- 3. Create secure RLS policies for lrs_businesses
CREATE POLICY "Users can view their own businesses" 
ON public.lrs_businesses 
FOR SELECT 
USING (auth.uid() = owner_user_id);

CREATE POLICY "Users can create their own businesses" 
ON public.lrs_businesses 
FOR INSERT 
WITH CHECK (auth.uid() = owner_user_id);

CREATE POLICY "Users can update their own businesses" 
ON public.lrs_businesses 
FOR UPDATE 
USING (auth.uid() = owner_user_id);

CREATE POLICY "Users can delete their own businesses" 
ON public.lrs_businesses 
FOR DELETE 
USING (auth.uid() = owner_user_id);

-- 4. Create secure RLS policies for lrs_subscriptions
CREATE POLICY "Users can view subscriptions for their businesses" 
ON public.lrs_subscriptions 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.lrs_businesses 
    WHERE id = lrs_subscriptions.business_id 
    AND owner_user_id = auth.uid()
  )
);

CREATE POLICY "Users can create subscriptions for their businesses" 
ON public.lrs_subscriptions 
FOR INSERT 
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.lrs_businesses 
    WHERE id = lrs_subscriptions.business_id 
    AND owner_user_id = auth.uid()
  )
);

CREATE POLICY "Users can update subscriptions for their businesses" 
ON public.lrs_subscriptions 
FOR UPDATE 
USING (
  EXISTS (
    SELECT 1 FROM public.lrs_businesses 
    WHERE id = lrs_subscriptions.business_id 
    AND owner_user_id = auth.uid()
  )
);

-- 5. Create secure RLS policies for tyre_registrations
CREATE POLICY "Users can view tyres for their businesses" 
ON public.tyre_registrations 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.lrs_businesses 
    WHERE id = tyre_registrations.business_id 
    AND owner_user_id = auth.uid()
  )
);

CREATE POLICY "Users can create tyres for their businesses" 
ON public.tyre_registrations 
FOR INSERT 
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.lrs_businesses 
    WHERE id = tyre_registrations.business_id 
    AND owner_user_id = auth.uid()
  )
);

CREATE POLICY "Users can update tyres for their businesses" 
ON public.tyre_registrations 
FOR UPDATE 
USING (
  EXISTS (
    SELECT 1 FROM public.lrs_businesses 
    WHERE id = tyre_registrations.business_id 
    AND owner_user_id = auth.uid()
  )
);

-- 6. Create secure RLS policies for tyre_lifecycle_events
CREATE POLICY "Users can view lifecycle events for their tyres" 
ON public.tyre_lifecycle_events 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.tyre_registrations tr
    JOIN public.lrs_businesses b ON tr.business_id = b.id
    WHERE tr.id = tyre_lifecycle_events.tyre_registration_id 
    AND b.owner_user_id = auth.uid()
  )
);

CREATE POLICY "Users can create lifecycle events for their tyres" 
ON public.tyre_lifecycle_events 
FOR INSERT 
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.tyre_registrations tr
    JOIN public.lrs_businesses b ON tr.business_id = b.id
    WHERE tr.id = tyre_lifecycle_events.tyre_registration_id 
    AND b.owner_user_id = auth.uid()
  )
);

-- 7. Create public RPC for safe tyre tracking by serial number
CREATE OR REPLACE FUNCTION public.track_tyre_by_serial(tyre_serial_param TEXT)
RETURNS TABLE(
  tyre_id UUID,
  tyre_serial TEXT,
  brand TEXT,
  size TEXT,
  status TEXT,
  location_state TEXT,
  qr_code TEXT,
  created_at TIMESTAMPTZ,
  lifecycle_events JSONB
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    tr.id as tyre_id,
    tr.tyre_serial,
    tr.brand,
    tr.size,
    tr.status,
    tr.location_state,
    tr.qr_code,
    tr.created_at,
    COALESCE(
      (
        SELECT jsonb_agg(
          jsonb_build_object(
            'id', tle.id,
            'event_type', tle.event_type,
            'event_date', tle.event_date,
            'notes', tle.notes,
            'created_at', tle.created_at
          ) ORDER BY tle.event_date DESC
        )
        FROM public.tyre_lifecycle_events tle
        WHERE tle.tyre_registration_id = tr.id
      ),
      '[]'::jsonb
    ) as lifecycle_events
  FROM public.tyre_registrations tr
  WHERE tr.tyre_serial = tyre_serial_param;
END;
$$;