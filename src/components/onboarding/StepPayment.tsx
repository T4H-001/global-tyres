
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";

type Props = {
  subscriptionId: string | null;
  planSlug: string | null;
  onBack: () => void;
};

export default function StepPayment({ subscriptionId, planSlug, onBack }: Props) {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    if (!subscriptionId) {
      toast({
        title: "Error",
        description: "No subscription selected. Please go back and select a plan.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: { subscriptionId, planSlug }
      });

      if (error) {
        throw error;
      }

      if (data?.error) {
        throw new Error(typeof data.error === 'string' ? data.error : JSON.stringify(data.error));
      }

      if (data.free_plan) {
        // Free plan activated automatically
        toast({
          title: "Setup complete!",
          description: "Your free plan is now active. Welcome to TLRS!",
        });
        navigate("/tyres");
      } else if (data.url) {
        // Open Stripe Checkout in a new tab (recommended)
        window.open(data.url, '_blank', 'noopener,noreferrer');
      } else {
        throw new Error("No payment URL received");
      }
    } catch (error: any) {
      console.error("Payment error:", error);
      const msg = error?.message || String(error);
      const hint = msg.toLowerCase().includes('stripe') || msg.toLowerCase().includes('secret')
        ? 'Stripe is not configured yet. Please set the Stripe secrets and try again.'
        : 'Failed to process payment. Please try again.';
      toast({
        title: "Payment Error",
        description: `${msg}. ${hint}`,
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">Complete Payment</h3>
        <p className="text-muted-foreground">
          Proceed to secure payment to activate your business subscription.
        </p>
      </div>
      
      <div className="bg-muted/50 rounded-lg p-4 text-center">
        <p className="text-sm text-muted-foreground">
          You'll be redirected to our secure payment provider (Stripe) to complete your purchase.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 justify-end">
        <Button variant="ghost" onClick={onBack} disabled={isProcessing}>
          Back
        </Button>
        <Button 
          onClick={handlePayment} 
          disabled={isProcessing || !subscriptionId}
          className="min-w-[160px]"
        >
          {isProcessing ? "Processing..." : "Proceed to Payment"}
        </Button>
      </div>
      
      {subscriptionId && (
        <div className="text-xs text-muted-foreground text-center">
          Subscription ID: {subscriptionId}
        </div>
      )}
    </div>
  );
}
