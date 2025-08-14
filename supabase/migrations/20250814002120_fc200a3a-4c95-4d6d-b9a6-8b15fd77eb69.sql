-- Create api_data_cache table for client-side API caching
CREATE TABLE IF NOT EXISTS public.api_data_cache (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  api_source text NOT NULL,
  endpoint text NOT NULL,
  cache_key text UNIQUE NOT NULL,
  data jsonb NOT NULL,
  expires_at timestamptz NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.api_data_cache ENABLE ROW LEVEL SECURITY;

-- Policies: allow public reads for non-expired cache, and allow inserts/updates to enable client caching
CREATE POLICY "cache_public_read_valid"
ON public.api_data_cache
FOR SELECT
USING (expires_at > now());

CREATE POLICY "cache_public_insert"
ON public.api_data_cache
FOR INSERT
WITH CHECK (true);

CREATE POLICY "cache_public_update"
ON public.api_data_cache
FOR UPDATE
USING (true);

-- Trigger to keep updated_at fresh using existing function
CREATE TRIGGER update_api_data_cache_updated_at
  BEFORE UPDATE ON public.api_data_cache
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Helpful index for expiration queries
CREATE INDEX IF NOT EXISTS idx_api_data_cache_expires_at ON public.api_data_cache (expires_at);
