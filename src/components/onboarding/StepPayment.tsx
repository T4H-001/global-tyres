
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

type Props = {
  subscriptionId: string | null;
  onBack: () => void;
};

export default function StepPayment({ subscriptionId, onBack }: Props) {
  const navigate = useNavigate();

  const goToPayment = async () => {
    // Placeholder until Stripe secret and prices are configured in Edge Functions.
    toast({
      title: "Payment not configured",
      description:
        "To enable checkout, add your Stripe Secret Key and prices to an Edge Function. We’ll wire this button to Stripe Checkout after that.",
    });
    // If edge function 'create-payment' is added later, we can invoke it here.
    // const { data, error } = await supabase.functions.invoke('create-payment', { body: { subscriptionId } });
    // if (data?.url) window.open(data.url, '_blank');
  };

  const finishSetup = () => {
    toast({ title: "Setup complete", description: "Welcome to TLRS! Start managing your tyres now." });
    navigate("/tyres");
  };

  return (
    <div className="space-y-4">
      <p className="text-muted-foreground">
        Your subscription has been created with status “incomplete”.
        Next, proceed to payment to activate your plan.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-end">
        <Button variant="ghost" onClick={onBack}>Back</Button>
        <Button onClick={goToPayment}>Proceed to payment</Button>
        <Button variant="outline" onClick={finishSetup}>
          Finish setup
        </Button>
      </div>
      <div className="text-xs text-muted-foreground">
        Subscription ID: {subscriptionId ?? "N/A"}
      </div>
    </div>
  );
}
