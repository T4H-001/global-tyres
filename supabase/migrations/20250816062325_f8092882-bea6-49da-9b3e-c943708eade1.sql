-- Phase 1: Add identification method and verification status to tyre registrations
ALTER TABLE public.tyre_registrations 
ADD COLUMN identification_method TEXT DEFAULT 'serial_qr' CHECK (identification_method IN ('serial_qr', 'rfid_tag', 'laser_etched', 'oem_stamped')),
ADD COLUMN verification_status TEXT DEFAULT 'self_reported' CHECK (verification_status IN ('self_reported', 'partner_verified', 'api_verified', 'fully_verified')),
ADD COLUMN rfid_tag_id TEXT,
ADD COLUMN laser_code TEXT,
ADD COLUMN partner_verification JSONB,
ADD COLUMN api_verification JSONB;

-- Create RFID tag inventory table
CREATE TABLE public.rfid_tag_inventory (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  tag_id TEXT NOT NULL UNIQUE,
  batch_number TEXT,
  status TEXT DEFAULT 'available' CHECK (status IN ('available', 'assigned', 'activated', 'damaged', 'retired')),
  assigned_to_business UUID REFERENCES auth.users(id),
  activated_at TIMESTAMP WITH TIME ZONE,
  tyre_registration_id UUID REFERENCES public.tyre_registrations(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create partner integrations table
CREATE TABLE public.partner_integrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  business_id UUID NOT NULL REFERENCES auth.users(id),
  partner_name TEXT NOT NULL,
  integration_type TEXT NOT NULL CHECK (integration_type IN ('invoice_api', 'pos_system', 'inventory_feed')),
  api_endpoint TEXT,
  auth_credentials JSONB,
  webhook_url TEXT,
  last_sync_at TIMESTAMP WITH TIME ZONE,
  sync_frequency TEXT DEFAULT 'daily',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create data ingestion logs table
CREATE TABLE public.data_ingestion_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  partner_integration_id UUID REFERENCES public.partner_integrations(id),
  source_type TEXT NOT NULL,
  records_processed INTEGER DEFAULT 0,
  records_successful INTEGER DEFAULT 0,
  records_failed INTEGER DEFAULT 0,
  error_details JSONB,
  processing_time_ms INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on new tables
ALTER TABLE public.rfid_tag_inventory ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.partner_integrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.data_ingestion_logs ENABLE ROW LEVEL SECURITY;

-- RLS policies for RFID tag inventory
CREATE POLICY "Businesses can view their assigned tags" 
ON public.rfid_tag_inventory 
FOR SELECT 
USING (auth.uid() = assigned_to_business OR assigned_to_business IS NULL);

CREATE POLICY "Businesses can update their assigned tags" 
ON public.rfid_tag_inventory 
FOR UPDATE 
USING (auth.uid() = assigned_to_business);

-- RLS policies for partner integrations
CREATE POLICY "Businesses can manage their integrations" 
ON public.partner_integrations 
FOR ALL 
USING (auth.uid() = business_id);

-- RLS policies for data ingestion logs
CREATE POLICY "Businesses can view their ingestion logs" 
ON public.data_ingestion_logs 
FOR SELECT 
USING (EXISTS (
  SELECT 1 FROM public.partner_integrations pi 
  WHERE pi.id = partner_integration_id AND pi.business_id = auth.uid()
));

-- Add indexes for performance
CREATE INDEX idx_rfid_tag_inventory_tag_id ON public.rfid_tag_inventory(tag_id);
CREATE INDEX idx_rfid_tag_inventory_business ON public.rfid_tag_inventory(assigned_to_business);
CREATE INDEX idx_partner_integrations_business ON public.partner_integrations(business_id);
CREATE INDEX idx_tyre_registrations_identification ON public.tyre_registrations(identification_method, verification_status);

-- Add triggers for updated_at timestamps
CREATE TRIGGER update_rfid_tag_inventory_updated_at
BEFORE UPDATE ON public.rfid_tag_inventory
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_timestamp();

CREATE TRIGGER update_partner_integrations_updated_at
BEFORE UPDATE ON public.partner_integrations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_timestamp();