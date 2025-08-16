import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.54.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface TyreRecord {
  tyre_serial: string;
  manufacturer?: string;
  size?: string;
  dot_code?: string;
  location_state?: string;
  status?: string;
  purchase_date?: string;
  invoice_reference?: string;
}

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

    const { integration_id, data_source, records } = await req.json();

    if (!integration_id || !data_source || !Array.isArray(records)) {
      return new Response(
        JSON.stringify({ error: 'integration_id, data_source, and records array are required' }),
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

    const startTime = Date.now();
    let processedCount = 0;
    let successCount = 0;
    let errorCount = 0;
    const errors: string[] = [];

    // Get partner integration details
    const { data: integration, error: integrationError } = await supabase
      .from('partner_integrations')
      .select('*')
      .eq('id', integration_id)
      .single();

    if (integrationError || !integration) {
      throw new Error('Partner integration not found');
    }

    // Process records in batches
    const BATCH_SIZE = 50;
    for (let i = 0; i < records.length; i += BATCH_SIZE) {
      const batch = records.slice(i, i + BATCH_SIZE);
      
      for (const record of batch) {
        processedCount++;
        
        try {
          // Validate required fields
          if (!record.tyre_serial) {
            errors.push(`Record ${processedCount}: Missing tyre_serial`);
            errorCount++;
            continue;
          }

          // Prepare tyre registration data
          const tyreData = {
            tyre_serial: record.tyre_serial,
            manufacturer: record.manufacturer || 'Unknown',
            size: record.size || 'Unknown',
            dot_code: record.dot_code,
            location_state: record.location_state || 'NSW',
            status: record.status || 'new',
            source_label: `${integration.partner_name} - ${data_source}`,
            identification_method: 'serial_qr',
            verification_status: 'api_verified',
            api_verification: {
              source: integration.partner_name,
              integration_type: integration.integration_type,
              verified_at: new Date().toISOString(),
              invoice_reference: record.invoice_reference,
              purchase_date: record.purchase_date
            }
          };

          // Insert tyre registration
          const { data: tyreRegistration, error: insertError } = await supabase
            .from('tyre_registrations')
            .insert([tyreData])
            .select()
            .single();

          if (insertError) {
            errors.push(`Record ${processedCount}: ${insertError.message}`);
            errorCount++;
            continue;
          }

          // Add initial lifecycle event
          const { error: lifecycleError } = await supabase
            .from('tyre_lifecycle_events')
            .insert([{
              tyre_id: tyreRegistration.id,
              event_type: 'api_registration',
              event_date: new Date().toISOString(),
              notes: `Automatically registered via ${integration.partner_name} API integration`
            }]);

          if (lifecycleError) {
            console.warn('Failed to create lifecycle event:', lifecycleError);
          }

          successCount++;

        } catch (recordError) {
          errors.push(`Record ${processedCount}: ${recordError.message}`);
          errorCount++;
        }
      }
    }

    const processingTimeMs = Date.now() - startTime;

    // Log ingestion results
    const { error: logError } = await supabase
      .from('data_ingestion_logs')
      .insert([{
        partner_integration_id: integration_id,
        source_type: data_source,
        records_processed: processedCount,
        records_successful: successCount,
        records_failed: errorCount,
        error_details: errors.length > 0 ? { errors: errors.slice(0, 100) } : null, // Limit error details
        processing_time_ms: processingTimeMs
      }]);

    if (logError) {
      console.error('Failed to log ingestion results:', logError);
    }

    // Update integration last sync time
    await supabase
      .from('partner_integrations')
      .update({ last_sync_at: new Date().toISOString() })
      .eq('id', integration_id);

    console.log('Data ingestion completed:', {
      integration_id,
      data_source,
      processed: processedCount,
      successful: successCount,
      failed: errorCount,
      processing_time_ms: processingTimeMs
    });

    return new Response(
      JSON.stringify({
        success: true,
        summary: {
          records_processed: processedCount,
          records_successful: successCount,
          records_failed: errorCount,
          processing_time_ms: processingTimeMs,
          errors: errors.slice(0, 10) // Return first 10 errors for debugging
        }
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error ingesting partner data:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});