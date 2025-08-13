
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16",
    });

    // Get all pricing plans from database
    const { data: plans, error: plansError } = await supabaseClient
      .from("lrs_pricing_plans")
      .select("*")
      .neq("slug", "car-owner-free"); // Skip free plans

    if (plansError) {
      throw new Error("Failed to fetch pricing plans");
    }

    const results = [];

    for (const plan of plans) {
      try {
        let productId = plan.stripe_product_id;
        let priceId = plan.stripe_price_id;

        // Create or update Stripe product
        if (!productId) {
          const product = await stripe.products.create({
            name: plan.display_name,
            description: `${plan.display_name} - TLRS Subscription Plan`,
            metadata: {
              plan_slug: plan.slug,
              plan_id: plan.id,
            },
          });
          productId = product.id;
        } else {
          // Update existing product
          await stripe.products.update(productId, {
            name: plan.display_name,
            description: `${plan.display_name} - TLRS Subscription Plan`,
          });
        }

        // Create or update Stripe price
        if (!priceId) {
          const price = await stripe.prices.create({
            product: productId,
            unit_amount: plan.price_cents,
            currency: plan.currency.toLowerCase(),
            recurring: { interval: "month" },
            metadata: {
              plan_slug: plan.slug,
              plan_id: plan.id,
            },
          });
          priceId = price.id;
        }

        // Update database with Stripe IDs
        const { error: updateError } = await supabaseClient
          .from("lrs_pricing_plans")
          .update({
            stripe_product_id: productId,
            stripe_price_id: priceId,
          })
          .eq("id", plan.id);

        if (updateError) {
          throw new Error(`Failed to update plan ${plan.slug}: ${updateError.message}`);
        }

        results.push({
          plan_slug: plan.slug,
          product_id: productId,
          price_id: priceId,
          status: "success",
        });

      } catch (planError) {
        results.push({
          plan_slug: plan.slug,
          status: "error",
          error: planError.message,
        });
      }
    }

    return new Response(
      JSON.stringify({ 
        message: "Stripe products sync completed",
        results: results 
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );

  } catch (error) {
    console.error("Error in sync-stripe-products:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
