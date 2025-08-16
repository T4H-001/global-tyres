
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { useSessionId } from "@/hooks/useSessionId";

type Plan = {
  slug: string;
  display_name: string;
  tier: string;
  price_cents: number;
  currency: string;
  monthly_registration_limit: number | null;
  features: any;
};

type Props = {
  businessId: string | null;
  onBack: () => void;
  onComplete: (planSlug: string, subscriptionId: string | null) => void;
};

export default function StepPlanSelect({ businessId, onBack, onComplete }: Props) {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [selecting, setSelecting] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const sessionId = useSessionId();

  useEffect(() => {
    (async () => {
      const { data, error } = await (supabase as any)
        .from("lrs_pricing_plans")
        .select("*")
        .eq("is_active", true)
        .order("price_cents", { ascending: true });

      setLoading(false);

      if (error) {
        console.error(error);
        toast({ title: "Failed to load plans", description: error.message });
        return;
      }
      setPlans(data ?? []);
    })();
  }, []);

  const confirmPlan = async () => {
    if (!selectedSlug) {
      toast({ title: "Please select a plan" });
      return;
    }
    if (!sessionId) {
      toast({ title: "Session not ready", description: "Please wait a moment and try again." });
      return;
    }

    const selectedPlan = plans.find(p => p.slug === selectedSlug);
    const isFreePlan = selectedPlan?.price_cents === 0;

    if (isFreePlan) {
      // For free plans, skip subscription creation and go directly to completion
      onComplete(selectedSlug, null);
      return;
    }

    setSelecting(true);

    // Create a subscription record with status "incomplete" for paid plans
    const { data, error } = await (supabase as any)
      .from("lrs_subscriptions")
      .insert({
        business_id: businessId,
        plan_slug: selectedSlug,
        status: "incomplete",
        session_id: sessionId,
      })
      .select()
      .maybeSingle();

    setSelecting(false);

    if (error) {
      console.error(error);
      toast({ title: "Could not create subscription", description: error.message });
      return;
    }

    onComplete(selectedSlug, data?.id ?? null);
  };

  if (loading) {
    return <div>Loading plans...</div>;
  }

  if (plans.length === 0) {
    return (
      <div className="text-center space-y-4">
        <h3 className="text-xl font-semibold">No Plans Available</h3>
        <p className="text-muted-foreground">
          No pricing plans are currently available. Please try refreshing the page or contact support.
        </p>
        <Button variant="outline" onClick={() => window.location.reload()}>
          Refresh Page
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">Choose Your Plan</h3>
        <p className="text-muted-foreground">
          Select the plan that best fits your needs
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {plans.map((plan) => {
          const active = selectedSlug === plan.slug;
          const isFree = plan.price_cents === 0;
          
          return (
            <Card key={plan.slug} className={active ? "ring-2 ring-primary" : ""}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{plan.display_name}</span>
                  <span className="text-primary font-semibold">
                    {isFree ? "Free" : (plan.price_cents / 100).toLocaleString(undefined, {
                      style: "currency",
                      currency: plan.currency || "AUD",
                      currencyDisplay: "narrowSymbol",
                    }) + "/mo"}
                  </span>
                </CardTitle>
                <CardDescription className="capitalize">{plan.tier}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {(Array.isArray(plan.features) ? plan.features : []).slice(0, 5).map((feat: string, idx: number) => (
                  <div key={idx} className="text-sm text-muted-foreground">• {feat}</div>
                ))}
                <Button
                  className="mt-2 w-full"
                  variant={active ? "default" : "outline"}
                  onClick={() => setSelectedSlug(plan.slug)}
                >
                  {active ? "Selected" : "Select"}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="flex justify-end pt-2">
        <Button onClick={confirmPlan} disabled={selecting || !selectedSlug || !sessionId}>
          {selecting ? "Saving..." : "Continue"}
        </Button>
      </div>
    </div>
  );
}
