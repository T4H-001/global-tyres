-- Create partners table for carousel and prefill data
CREATE TABLE public.lrs_partners (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('manufacturer', 'retailer', 'recycler', 'transporter', 'regulator')),
  logo_url TEXT,
  website_url TEXT,
  description TEXT,
  abn TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.lrs_partners ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Partners are publicly viewable" 
ON public.lrs_partners 
FOR SELECT 
USING (is_active = true);

-- Create update trigger
CREATE TRIGGER update_partners_updated_at
BEFORE UPDATE ON public.lrs_partners
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert some sample partners
INSERT INTO public.lrs_partners (name, category, website_url, description, display_order) VALUES
('Bridgestone', 'manufacturer', 'https://www.bridgestone.com.au', 'Leading tyre manufacturer', 1),
('Michelin', 'manufacturer', 'https://www.michelin.com.au', 'Premium tyre manufacturer', 2),
('Continental', 'manufacturer', 'https://www.continental-tyres.com.au', 'German tyre manufacturer', 3),
('Pirelli', 'manufacturer', 'https://www.pirelli.com.au', 'Italian performance tyres', 4),
('Bob Jane T-Marts', 'retailer', 'https://www.bobjane.com.au', 'Major tyre retailer chain', 5),
('Jax Tyres', 'retailer', 'https://www.jaxtyres.com.au', 'National tyre retailer', 6),
('Beaurepaires', 'retailer', 'https://www.beaurepaires.com.au', 'Established tyre retailer', 7),
('Tyresaurus', 'retailer', 'https://www.tyresaurus.com.au', 'Online tyre retailer', 8),
('ResourceCo', 'recycler', 'https://www.resourceco.com.au', 'Tyre recycling specialist', 9),
('Tyre Stewardship Australia', 'regulator', 'https://www.tyrestewardship.org.au', 'Industry stewardship body', 10);