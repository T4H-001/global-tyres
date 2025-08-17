-- Create tamper-evident ledger infrastructure
CREATE TABLE public.blockchain_anchors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  batch_id TEXT NOT NULL,
  merkle_root TEXT NOT NULL,
  transaction_hash TEXT,
  block_number BIGINT,
  chain_id INTEGER DEFAULT 80002, -- Polygon Amoy testnet
  anchor_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'failed')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for tracking hashes of lifecycle events
CREATE TABLE public.event_hashes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_id UUID REFERENCES public.tyre_lifecycle_events(id),
  event_hash TEXT NOT NULL,
  batch_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add indexes for performance
CREATE INDEX idx_blockchain_anchors_batch_id ON public.blockchain_anchors(batch_id);
CREATE INDEX idx_blockchain_anchors_status ON public.blockchain_anchors(status);
CREATE INDEX idx_event_hashes_batch_id ON public.event_hashes(batch_id);
CREATE INDEX idx_event_hashes_event_id ON public.event_hashes(event_id);

-- Enable RLS on new tables
ALTER TABLE public.blockchain_anchors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_hashes ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (blockchain data should be publicly verifiable)
CREATE POLICY "Blockchain anchors are publicly readable" 
ON public.blockchain_anchors 
FOR SELECT 
USING (true);

CREATE POLICY "Event hashes are publicly readable" 
ON public.event_hashes 
FOR SELECT 
USING (true);

-- Create function to calculate event hash
CREATE OR REPLACE FUNCTION public.calculate_event_hash(
  p_tyre_serial TEXT,
  p_event_type TEXT,
  p_event_date TIMESTAMP WITH TIME ZONE,
  p_notes TEXT DEFAULT NULL
) RETURNS TEXT AS $$
BEGIN
  RETURN encode(
    digest(
      p_tyre_serial || '|' || p_event_type || '|' || 
      EXTRACT(EPOCH FROM p_event_date)::TEXT || '|' || 
      COALESCE(p_notes, ''),
      'sha256'
    ),
    'hex'
  );
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Create trigger function to automatically hash lifecycle events
CREATE OR REPLACE FUNCTION public.hash_lifecycle_event()
RETURNS TRIGGER AS $$
DECLARE
  event_hash TEXT;
  batch_id TEXT;
BEGIN
  -- Calculate hash of the event
  SELECT public.calculate_event_hash(
    tr.tyre_serial,
    NEW.event_type,
    NEW.event_date,
    NEW.notes
  ) INTO event_hash
  FROM tyre_registrations tr
  WHERE tr.id = NEW.tyre_id;

  -- Generate batch ID for grouping (daily batches)
  batch_id := 'batch-' || TO_CHAR(NEW.event_date, 'YYYY-MM-DD');

  -- Insert hash record
  INSERT INTO public.event_hashes (event_id, event_hash, batch_id)
  VALUES (NEW.id, event_hash, batch_id);

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically hash events
CREATE TRIGGER trigger_hash_lifecycle_event
  AFTER INSERT ON public.tyre_lifecycle_events
  FOR EACH ROW
  EXECUTE FUNCTION public.hash_lifecycle_event();

-- Create function to get batch merkle root
CREATE OR REPLACE FUNCTION public.calculate_batch_merkle_root(p_batch_id TEXT)
RETURNS TEXT AS $$
DECLARE
  hash_array TEXT[];
  merkle_root TEXT;
BEGIN
  -- Get all hashes for the batch, sorted for consistency
  SELECT array_agg(event_hash ORDER BY event_hash)
  INTO hash_array
  FROM public.event_hashes
  WHERE batch_id = p_batch_id;

  -- For simplicity, concatenate and hash all event hashes
  -- In production, this would be a proper merkle tree implementation
  IF array_length(hash_array, 1) IS NULL THEN
    RETURN NULL;
  END IF;

  merkle_root := encode(
    digest(array_to_string(hash_array, ''), 'sha256'),
    'hex'
  );

  RETURN merkle_root;
END;
$$ LANGUAGE plpgsql;