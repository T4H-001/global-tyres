
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";

type Props = {
  subscriptionId: string | null;
  onBack: () => void;
};

export default function StepPayment({ subscriptionId, onBack }: Props) {
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
        body: { subscriptionId }
      });

      if (error) {
        throw error;
      }

      if (data.free_plan) {
        // Free plan activated automatically
        toast({
          title: "Setup complete!",
          description: "Your free plan is now active. Welcome to TLRS!",
        });
        navigate("/tyres");
      } else if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        throw new Error("No payment URL received");
      }
    } catch (error: any) {
      console.error("Payment error:", error);
      toast({
        title: "Payment Error",
        description: error.message || "Failed to process payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-4">
      <p className="text-muted-foreground">
        Your subscription has been created. For free plans, activation is automatic. 
        For paid plans, proceed to secure payment to activate your subscription.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-end">
        <Button variant="ghost" onClick={onBack} disabled={isProcessing}>
          Back
        </Button>
        <Button 
          onClick={handlePayment} 
          disabled={isProcessing || !subscriptionId}
        >
          {isProcessing ? "Processing..." : "Proceed to Payment"}
        </Button>
      </div>
      <div className="text-xs text-muted-foreground">
        Subscription ID: {subscriptionId ?? "N/A"}
      </div>
    </div>
  );
}
