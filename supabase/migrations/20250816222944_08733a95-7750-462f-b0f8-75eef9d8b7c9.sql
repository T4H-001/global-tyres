-- Remove overly permissive public read policies
DROP POLICY IF EXISTS "Allow public read access to partners" ON public.partners;
DROP POLICY IF EXISTS "Allow public read access to partner_bundles" ON public.partner_bundles;
DROP POLICY IF EXISTS "Allow public read access to tender data" ON public.tender_data_cache;
DROP POLICY IF EXISTS "Allow public read access to leadership_team" ON public.leadership_team;
DROP POLICY IF EXISTS "Allow public read access to personality_types" ON public.personality_types;
DROP POLICY IF EXISTS "Allow public read access to merger ecosystem" ON public."merger ecosystem";
DROP POLICY IF EXISTS "Allow public read access to family agents" ON public.family_agents;
DROP POLICY IF EXISTS "Allow public read access to gace_listings" ON public.gace_listings;
DROP POLICY IF EXISTS "Allow public read access to grants" ON public.grants;
DROP POLICY IF EXISTS "Allow public read access to procurement_opportunities" ON public.procurement_opportunities;
DROP POLICY IF EXISTS "Allow public read access to market_intelligence" ON public.market_intelligence;
DROP POLICY IF EXISTS "Allow public read access to NEW-Vignettes" ON public."NEW-Vignettes";
DROP POLICY IF EXISTS "Allow public read access to strategic partners" ON public.strategic_partner_ecosystem;

-- Create more restrictive policies for authenticated users only
CREATE POLICY "Authenticated users can read partners" ON public.partners
FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can read partner bundles" ON public.partner_bundles
FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can read tender data" ON public.tender_data_cache
FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can read leadership team" ON public.leadership_team
FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can read personality types" ON public.personality_types
FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can read merger ecosystem" ON public."merger ecosystem"
FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can read family agents" ON public.family_agents
FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can read gace listings" ON public.gace_listings
FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can read grants" ON public.grants
FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can read procurement opportunities" ON public.procurement_opportunities
FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can read market intelligence" ON public.market_intelligence
FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can read new vignettes" ON public."NEW-Vignettes"
FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can read strategic partners" ON public.strategic_partner_ecosystem
FOR SELECT USING (auth.role() = 'authenticated');

-- Secure storage buckets - only authenticated users can read
DROP POLICY IF EXISTS "Public read access for images" ON storage.objects;
DROP POLICY IF EXISTS "Allow public read access to vignette images" ON storage.objects;
DROP POLICY IF EXISTS "Public read access for app-images" ON storage.objects;

CREATE POLICY "Authenticated users can read images" ON storage.objects
FOR SELECT USING (auth.role() = 'authenticated' AND bucket_id = 'images');

CREATE POLICY "Authenticated users can read vignette images" ON storage.objects
FOR SELECT USING (auth.role() = 'authenticated' AND bucket_id = 'vignette-images');

CREATE POLICY "Authenticated users can read app images" ON storage.objects
FOR SELECT USING (auth.role() = 'authenticated' AND bucket_id = 'app-images');

-- Ensure tyre-photos bucket is properly secured
CREATE POLICY "Users can read their own tyre photos" ON storage.objects
FOR SELECT USING (auth.role() = 'authenticated' AND bucket_id = 'tyre-photos' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can upload their own tyre photos" ON storage.objects
FOR INSERT WITH CHECK (auth.role() = 'authenticated' AND bucket_id = 'tyre-photos' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can update their own tyre photos" ON storage.objects
FOR UPDATE USING (auth.role() = 'authenticated' AND bucket_id = 'tyre-photos' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own tyre photos" ON storage.objects
FOR DELETE USING (auth.role() = 'authenticated' AND bucket_id = 'tyre-photos' AND auth.uid()::text = (storage.foldername(name))[1]);