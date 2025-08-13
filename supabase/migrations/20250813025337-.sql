-- Fix user_id constraint in subscriptions table
ALTER TABLE public.lrs_subscriptions ALTER COLUMN user_id DROP NOT NULL;

-- Create tyre data tables for comprehensive tracking
CREATE TABLE public.tyre_fitment_data (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  make TEXT NOT NULL,
  model TEXT NOT NULL,
  year_range TEXT,
  tyre_size TEXT NOT NULL,
  dot_code TEXT,
  oem_data JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.tyre_registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  business_id UUID REFERENCES public.lrs_businesses(id),
  tyre_serial TEXT NOT NULL UNIQUE,
  dot_code TEXT,
  brand TEXT,
  size TEXT,
  manufacture_date DATE,
  install_date DATE,
  vehicle_registration TEXT,
  location_state TEXT,
  location_postcode TEXT,
  location_coordinates POINT,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'removed', 'recycled', 'disposed')),
  qr_code_url TEXT,
  session_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.tyre_lifecycle_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  tyre_registration_id UUID NOT NULL REFERENCES public.tyre_registrations(id),
  event_type TEXT NOT NULL CHECK (event_type IN ('manufactured', 'installed', 'rotated', 'repaired', 'removed', 'recycled', 'disposed')),
  event_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  location_data JSONB,
  notes TEXT,
  recorded_by TEXT,
  session_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.api_data_cache (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  api_source TEXT NOT NULL,
  endpoint TEXT NOT NULL,
  cache_key TEXT NOT NULL UNIQUE,
  data JSONB NOT NULL,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all new tables
ALTER TABLE public.tyre_fitment_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tyre_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tyre_lifecycle_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.api_data_cache ENABLE ROW LEVEL SECURITY;

-- RLS policies for tyre_fitment_data (public read for all users)
CREATE POLICY "Public read access for tyre fitment data" 
ON public.tyre_fitment_data 
FOR SELECT 
USING (true);

-- RLS policies for tyre_registrations (business-specific data)
CREATE POLICY "Businesses can view their own tyre registrations" 
ON public.tyre_registrations 
FOR SELECT 
USING (
  business_id IN (
    SELECT id FROM public.lrs_businesses WHERE session_id = current_setting('request.session_id', true)
  )
);

CREATE POLICY "Businesses can create tyre registrations" 
ON public.tyre_registrations 
FOR INSERT 
WITH CHECK (
  business_id IN (
    SELECT id FROM public.lrs_businesses WHERE session_id = current_setting('request.session_id', true)
  )
);

CREATE POLICY "Businesses can update their own tyre registrations" 
ON public.tyre_registrations 
FOR UPDATE 
USING (
  business_id IN (
    SELECT id FROM public.lrs_businesses WHERE session_id = current_setting('request.session_id', true)
  )
);

-- RLS policies for lifecycle events
CREATE POLICY "View lifecycle events for accessible tyres" 
ON public.tyre_lifecycle_events 
FOR SELECT 
USING (
  tyre_registration_id IN (
    SELECT id FROM public.tyre_registrations 
    WHERE business_id IN (
      SELECT id FROM public.lrs_businesses WHERE session_id = current_setting('request.session_id', true)
    )
  )
);

CREATE POLICY "Create lifecycle events for accessible tyres" 
ON public.tyre_lifecycle_events 
FOR INSERT 
WITH CHECK (
  tyre_registration_id IN (
    SELECT id FROM public.tyre_registrations 
    WHERE business_id IN (
      SELECT id FROM public.lrs_businesses WHERE session_id = current_setting('request.session_id', true)
    )
  )
);

-- RLS policy for API cache (public read)
CREATE POLICY "Public read access for API cache" 
ON public.api_data_cache 
FOR SELECT 
USING (true);

-- Create triggers for updated_at timestamps
CREATE TRIGGER update_tyre_fitment_data_updated_at
BEFORE UPDATE ON public.tyre_fitment_data
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_tyre_registrations_updated_at
BEFORE UPDATE ON public.tyre_registrations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample tyre fitment data
INSERT INTO public.tyre_fitment_data (make, model, year_range, tyre_size, dot_code) VALUES
('Toyota', 'Camry', '2018-2023', '215/60R16', 'DOT123456'),
('Ford', 'Ranger', '2020-2023', '265/65R17', 'DOT789012'),
('Holden', 'Commodore', '2015-2020', '225/55R18', 'DOT345678'),
('Mazda', 'CX-5', '2019-2023', '225/55R19', 'DOT901234'),
('Subaru', 'Forester', '2018-2023', '225/60R17', 'DOT567890');