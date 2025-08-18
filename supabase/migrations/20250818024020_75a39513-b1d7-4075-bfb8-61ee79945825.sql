-- Fix RLS policies for tables that have RLS enabled but no policies

-- Add policies for shared_assets table
CREATE POLICY "Public read access to shared assets" 
ON shared_assets 
FOR SELECT 
USING (true);

CREATE POLICY "Authenticated users can manage shared assets" 
ON shared_assets 
FOR ALL
USING (auth.role() = 'authenticated');

-- Add policies for tenants table  
CREATE POLICY "Public read access to tenant info" 
ON tenants 
FOR SELECT 
USING (true);

CREATE POLICY "Service role can manage tenants" 
ON tenants 
FOR ALL
USING (auth.role() = 'service_role');

-- Add policies for domain_tenant_mappings table
CREATE POLICY "Public read access to domain mappings" 
ON domain_tenant_mappings 
FOR SELECT 
USING (true);

CREATE POLICY "Service role can manage domain mappings" 
ON domain_tenant_mappings 
FOR ALL
USING (auth.role() = 'service_role');