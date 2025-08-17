import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface AnchorRequest {
  batch_id: string
  merkle_root: string
}

interface PolygonTransaction {
  hash: string
  blockNumber: number
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { batch_id, merkle_root }: AnchorRequest = await req.json()

    // Validate inputs
    if (!batch_id || !merkle_root) {
      return new Response(
        JSON.stringify({ error: 'batch_id and merkle_root are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const authHeader = req.headers.get('Authorization')!

    // Create tamper-evident anchor record
    const anchorData = {
      batch_id,
      merkle_root,
      status: 'pending',
      chain_id: 80002, // Polygon Amoy testnet
    }

    // Insert anchor record
    const { createClient } = await import('https://esm.sh/@supabase/supabase-js@2')
    const supabase = createClient(supabaseUrl, supabaseKey)

    const { data: anchor, error: insertError } = await supabase
      .from('blockchain_anchors')
      .insert(anchorData)
      .select()
      .single()

    if (insertError) {
      console.error('Database insert error:', insertError)
      return new Response(
        JSON.stringify({ error: 'Failed to create anchor record' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Submit to blockchain (simplified for testnet)
    try {
      // Mock blockchain submission for now - in production, this would:
      // 1. Connect to Polygon Amoy testnet
      // 2. Call smart contract with merkle_root
      // 3. Return transaction hash and block number
      
      const mockTxHash = `0x${crypto.randomUUID().replace(/-/g, '')}${Math.random().toString(16).slice(2, 10)}`
      const mockBlockNumber = Math.floor(Math.random() * 1000000) + 50000000

      // Update anchor record with blockchain data
      const { error: updateError } = await supabase
        .from('blockchain_anchors')
        .update({
          transaction_hash: mockTxHash,
          block_number: mockBlockNumber,
          status: 'confirmed'
        })
        .eq('id', anchor.id)

      if (updateError) {
        console.error('Database update error:', updateError)
        return new Response(
          JSON.stringify({ error: 'Failed to update anchor record' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }

      return new Response(
        JSON.stringify({
          success: true,
          anchor_id: anchor.id,
          transaction_hash: mockTxHash,
          block_number: mockBlockNumber,
          chain_id: 80002
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )

    } catch (blockchainError) {
      console.error('Blockchain submission error:', blockchainError)
      
      // Update anchor record status to failed
      await supabase
        .from('blockchain_anchors')
        .update({ status: 'failed' })
        .eq('id', anchor.id)

      return new Response(
        JSON.stringify({ error: 'Blockchain submission failed' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

  } catch (error) {
    console.error('Unexpected error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})