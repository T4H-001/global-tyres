-- Create public tyre tracking function
CREATE OR REPLACE FUNCTION public.get_tyre_public(p_tyre_serial text)
RETURNS TABLE(
  id uuid,
  tyre_serial text,
  status text,
  brand text,
  size_info text,
  dot_code text,
  vehicle_info text,
  location text,
  created_at timestamp with time zone
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $function$
BEGIN
  RETURN QUERY
  SELECT 
    t.id,
    t.tyre_serial,
    t.status,
    t.brand,
    t.size_info,
    t.dot_code,
    t.vehicle_info,
    t.location,
    t.created_at
  FROM public.tyres t
  WHERE t.tyre_serial = p_tyre_serial
  AND t.is_active = true;
END;
$function$;

-- Create public tyre lifecycle tracking function
CREATE OR REPLACE FUNCTION public.get_tyre_lifecycle_public(p_tyre_serial text)
RETURNS TABLE(
  id uuid,
  event_type text,
  event_date timestamp with time zone,
  notes text,
  location text
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $function$
BEGIN
  RETURN QUERY
  SELECT 
    tl.id,
    tl.event_type,
    tl.event_date,
    tl.notes,
    tl.location
  FROM public.tyre_lifecycle tl
  JOIN public.tyres t ON t.id = tl.tyre_id
  WHERE t.tyre_serial = p_tyre_serial
  AND t.is_active = true
  ORDER BY tl.event_date DESC;
END;
$function$;

-- Enable RLS on shared_assets table
ALTER TABLE public.shared_assets ENABLE ROW LEVEL SECURITY;

-- Create policy for public access to global assets
CREATE POLICY "Public access to global assets" ON public.shared_assets
FOR SELECT USING (is_global = true AND is_active = true);

-- Create policy for tenant-specific assets (authenticated users only)
CREATE POLICY "Tenant access to their assets" ON public.shared_assets
FOR SELECT USING (
  is_active = true AND (
    is_global = true OR 
    tenant_id IN (
      SELECT tm.tenant_id 
      FROM public.tenant_memberships tm 
      WHERE tm.user_id = auth.uid()
    )
  )
);

-- Enable RLS on tenants table
ALTER TABLE public.tenants ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access to active tenants
CREATE POLICY "Public read access to active tenants" ON public.tenants
FOR SELECT USING (is_active = true);

-- Enable RLS on domain_tenant_mappings table
ALTER TABLE public.domain_tenant_mappings ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access to domain mappings
CREATE POLICY "Public read access to domain mappings" ON public.domain_tenant_mappings
FOR SELECT USING (true);