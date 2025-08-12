-- Create TLRS (Tyre Lifecycle Registration System) Database Schema

-- Create profiles table for user management
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  organization TEXT,
  country TEXT,
  role TEXT DEFAULT 'user', -- user, admin, recycler, manufacturer
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create tyre_schemes table for different regional programs
CREATE TABLE public.tyre_schemes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL, -- TSA, EPR, JATMA, etc.
  country TEXT NOT NULL,
  description TEXT,
  contact_info JSONB,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create manufacturers table
CREATE TABLE public.manufacturers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  country TEXT NOT NULL,
  contact_info JSONB,
  scheme_id UUID REFERENCES public.tyre_schemes(id),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create tyres table for tracking individual tyres
CREATE TABLE public.tyres (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  tyre_id TEXT NOT NULL UNIQUE, -- DOT code or QR-generated ID
  manufacturer_id UUID REFERENCES public.manufacturers(id),
  size TEXT, -- e.g., "225/60R16"
  type TEXT, -- passenger, truck, motorcycle, etc.
  dot_code TEXT,
  production_date DATE,
  status TEXT NOT NULL DEFAULT 'new', -- new, in_use, collected, recycled, disposed
  current_location TEXT,
  country TEXT NOT NULL,
  scheme_id UUID REFERENCES public.tyre_schemes(id),
  registered_by UUID REFERENCES public.profiles(user_id),
  metadata JSONB, -- additional data like weight, compound, etc.
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create status_updates table for tracking lifecycle changes
CREATE TABLE public.status_updates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  tyre_id UUID NOT NULL REFERENCES public.tyres(id) ON DELETE CASCADE,
  previous_status TEXT,
  new_status TEXT NOT NULL,
  location TEXT,
  updated_by UUID REFERENCES public.profiles(user_id),
  notes TEXT,
  timestamp TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tyre_schemes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.manufacturers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tyres ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.status_updates ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles
CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own profile" 
ON public.profiles 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create RLS policies for tyre_schemes (public read)
CREATE POLICY "Everyone can view tyre schemes" 
ON public.tyre_schemes 
FOR SELECT 
USING (true);

-- Create RLS policies for manufacturers (public read)
CREATE POLICY "Everyone can view manufacturers" 
ON public.manufacturers 
FOR SELECT 
USING (true);

-- Create RLS policies for tyres
CREATE POLICY "Users can view all tyres" 
ON public.tyres 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Users can create tyres" 
ON public.tyres 
FOR INSERT 
WITH CHECK (auth.uid() = registered_by);

CREATE POLICY "Users can update tyres they registered" 
ON public.tyres 
FOR UPDATE 
USING (auth.uid() = registered_by);

-- Create RLS policies for status_updates
CREATE POLICY "Users can view all status updates" 
ON public.status_updates 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Users can create status updates" 
ON public.status_updates 
FOR INSERT 
WITH CHECK (auth.uid() = updated_by);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at
BEFORE UPDATE ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_tyres_updated_at
BEFORE UPDATE ON public.tyres
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample tyre schemes
INSERT INTO public.tyre_schemes (name, country, description) VALUES
('TSA', 'Australia', 'Tyre Stewardship Australia - National tyre product stewardship scheme'),
('EPR', 'European Union', 'Extended Producer Responsibility for tyres across EU member states'),
('JATMA', 'Japan', 'Japan Automobile Tyre Manufacturers Association recycling program'),
('USTMA', 'United States', 'U.S. Tire Manufacturers Association sustainability initiatives'),
('CTRA', 'China', 'China Tire Recycling Association EPR framework');

-- Insert sample manufacturers
INSERT INTO public.manufacturers (name, country, scheme_id) VALUES
('Michelin', 'France', (SELECT id FROM public.tyre_schemes WHERE name = 'EPR' LIMIT 1)),
('Bridgestone', 'Japan', (SELECT id FROM public.tyre_schemes WHERE name = 'JATMA' LIMIT 1)),
('Goodyear', 'United States', (SELECT id FROM public.tyre_schemes WHERE name = 'USTMA' LIMIT 1)),
('Continental', 'Germany', (SELECT id FROM public.tyre_schemes WHERE name = 'EPR' LIMIT 1)),
('Pirelli', 'Italy', (SELECT id FROM public.tyre_schemes WHERE name = 'EPR' LIMIT 1));