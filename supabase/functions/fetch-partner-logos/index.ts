import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Get partners without logos
    const { data: partners, error } = await supabase
      .from('lrs_partners')
      .select('*')
      .is('logo_url', null)
      .eq('is_active', true);

    if (error) {
      throw error;
    }

    const updated = [];

    for (const partner of partners || []) {
      try {
        // Extract domain from website URL
        const domain = partner.website_url 
          ? new URL(partner.website_url).hostname.replace('www.', '')
          : `${partner.name.toLowerCase().replace(/\s+/g, '')}.com.au`;

        // Use Clearbit logo API
        const logoUrl = `https://logo.clearbit.com/${domain}`;
        
        // Test if logo exists
        const logoResponse = await fetch(logoUrl, { method: 'HEAD' });
        
        if (logoResponse.ok) {
          // Update partner with logo URL
          const { error: updateError } = await supabase
            .from('lrs_partners')
            .update({ logo_url: logoUrl })
            .eq('id', partner.id);

          if (!updateError) {
            updated.push({ ...partner, logo_url: logoUrl });
          }
        }
      } catch (logoError) {
        console.log(`Failed to fetch logo for ${partner.name}:`, logoError);
      }
    }

    return new Response(JSON.stringify({ 
      updated: updated.length,
      partners: updated
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in fetch-partner-logos function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});