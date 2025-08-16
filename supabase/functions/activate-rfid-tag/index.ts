import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.54.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
    const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY');

    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      throw new Error('Missing Supabase environment variables');
    }

    const { tag_id, tyre_registration_id } = await req.json();

    if (!tag_id || !tyre_registration_id) {
      return new Response(
        JSON.stringify({ error: 'tag_id and tyre_registration_id are required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      }
    });

    // Get the authorization header
    const authHeader = req.headers.get('authorization');
    if (authHeader) {
      supabase.auth.setSession({ access_token: authHeader.replace('Bearer ', ''), refresh_token: '' });
    }

    // Check if tag exists and is available
    const { data: tagData, error: tagError } = await supabase
      .from('rfid_tag_inventory')
      .select('*')
      .eq('tag_id', tag_id)
      .eq('status', 'available')
      .single();

    if (tagError || !tagData) {
      return new Response(
        JSON.stringify({ error: 'Tag not found or not available' }),
        { 
          status: 404, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Update tag status to activated and link to tyre registration
    const { error: updateError } = await supabase
      .from('rfid_tag_inventory')
      .update({
        status: 'activated',
        tyre_registration_id,
        activated_at: new Date().toISOString()
      })
      .eq('id', tagData.id);

    if (updateError) {
      throw updateError;
    }

    // Update tyre registration with RFID tag info
    const { error: tyreUpdateError } = await supabase
      .from('tyre_registrations')
      .update({
        rfid_tag_id: tag_id,
        identification_method: 'rfid_tag',
        verification_status: 'partner_verified'
      })
      .eq('id', tyre_registration_id);

    if (tyreUpdateError) {
      throw tyreUpdateError;
    }

    console.log('RFID tag activated successfully:', { tag_id, tyre_registration_id });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'RFID tag activated successfully',
        tag_id,
        tyre_registration_id
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error activating RFID tag:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});