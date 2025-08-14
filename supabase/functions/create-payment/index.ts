
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Lightweight logger for better debugging in Supabase logs
const log = (step: string, details?: any) => {
  try {
    console.log(`[CREATE-PAYMENT] ${step}`, details ?? "");
  } catch (_) {
    // no-op
  }
};
serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try { log('Start request', { method: req.method });
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    const authHeader = req.headers.get("Authorization")!;
    const token = authHeader.replace("Bearer ", "");
    const { data } = await supabaseClient.auth.getUser(token);
    const user = data.user;
    
    if (!user?.email) {
      throw new Error("User not authenticated");
    }

    const { subscriptionId, planSlug } = await req.json(); log('Received body', { subscriptionId, planSlug });
    
    if (!subscriptionId) {
      throw new Error("Subscription ID required");
    }

    // Get subscription details from database
    const { data: subscription, error: subError } = await supabaseClient
      .from("lrs_subscriptions")
      .select(`
        *,
        lrs_pricing_plans (
          slug,
          display_name,
          price_cents,
          currency,
          stripe_price_id,
          stripe_product_id
        )
      `)
      .eq("id", subscriptionId)
      .single();

    if (subError || !subscription) {
      throw new Error("Subscription not found");
    }

    // Resolve plan information with fallback to planSlug
    let plan: any = (subscription as any).lrs_pricing_plans;
    if (!plan && planSlug) {
      log('Plan missing from join. Fetching by slug', { planSlug });
      const { data: planData, error: planError } = await supabaseClient
        .from('lrs_pricing_plans')
        .select('*')
        .eq('slug', planSlug)
        .maybeSingle();
      if (planError) {
        log('Error fetching plan by slug', { message: planError.message });
      }
      plan = planData ?? null;
    }
    if (!plan) {
      throw new Error('Pricing plan not found for subscription');
    }
    log('Loaded plan', { slug: plan.slug, price_cents: plan.price_cents, currency: plan.currency });
    
    // Handle free plans - no Stripe processing needed
    if (plan.slug === 'car-owner-free' || plan.price_cents === 0) { log('Activating free plan', { subscriptionId, slug: plan.slug });
      const { error: updateError } = await supabaseClient
        .from('lrs_subscriptions')
        .update({ status: 'active', activated_at: new Date().toISOString() })
        .eq('id', subscriptionId);

      if (updateError) {
        throw new Error('Failed to activate free subscription');
      }

      return new Response(
        JSON.stringify({ 
          success: true, 
          free_plan: true,
          redirect_url: `${req.headers.get('origin')}/tyres`
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        }
      );
    }

    // For paid plans, process through Stripe
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16",
    });

    // Check if customer exists
    const customers = await stripe.customers.list({ 
      email: user.email, 
      limit: 1 
    });
    
    let customerId;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    }

    // Use existing Stripe price or create line item
    const lineItems = [];
    if (plan.stripe_price_id) {
      lineItems.push({
        price: plan.stripe_price_id,
        quantity: 1,
      });
    } else {
      lineItems.push({
        price_data: {
          currency: plan.currency.toLowerCase(),
          product_data: {
            name: plan.display_name,
          },
          unit_amount: plan.price_cents,
          recurring: { interval: "month" },
        },
        quantity: 1,
      });
    }

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : user.email,
      line_items: lineItems,
      mode: "subscription",
      success_url: `${req.headers.get("origin")}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/onboarding`,
      metadata: {
        subscription_id: subscriptionId,
        user_id: user.id,
      },
    });
    log('Created Stripe checkout session', { id: session.id });

    return new Response(
      JSON.stringify({ url: session.url }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error in create-payment:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
