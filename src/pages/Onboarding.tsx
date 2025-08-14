
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Zap, CheckCircle2, Building2, CreditCard, User } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import StepBusinessForm from "@/components/onboarding/StepBusinessForm";
import StepPlanSelect from "@/components/onboarding/StepPlanSelect";
import StepPayment from "@/components/onboarding/StepPayment";
import StepOwnerDetails from "@/components/onboarding/StepOwnerDetails";
import { EmailService } from "@/services/emailService";

type StepKey = "plan" | "business" | "owner" | "payment";

const businessSteps: { key: StepKey; label: string; icon: React.ComponentType<any> }[] = [
  { key: "plan", label: "Choose Plan", icon: Zap },
  { key: "business", label: "Register Business", icon: Building2 },
  { key: "payment", label: "Payment", icon: CreditCard },
];

const ownerSteps: { key: StepKey; label: string; icon: React.ComponentType<any> }[] = [
  { key: "plan", label: "Choose Plan", icon: Zap },
  { key: "owner", label: "Your Details", icon: User },
];

export default function Onboarding() {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [businessId, setBusinessId] = useState<string | null>(null);
  const [subscriptionId, setSubscriptionId] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isOwnerFlow, setIsOwnerFlow] = useState(false);
  const navigate = useNavigate();
  const { retailerCode } = useParams();

  const steps = isOwnerFlow ? ownerSteps : businessSteps;
  const currentStep = steps[currentStepIdx].key;

  useEffect(() => {
    document.title = "TLRS Onboarding - 1-2-3 Setup";
    
    // If there's a retailer code, store it and modify the flow
    if (retailerCode) {
      localStorage.setItem('referralCode', retailerCode);
      toast({
        title: "Welcome!",
        description: `You've been referred by retailer ${retailerCode}. Complete registration to get started.`,
      });
    }
  }, [retailerCode]);

  const goNext = () => setCurrentStepIdx((i) => Math.min(i + 1, steps.length - 1));
  const goPrev = () => setCurrentStepIdx((i) => Math.max(i - 1, 0));

  const handlePlanComplete = (planSlug: string, subId: string | null) => {
    setSelectedPlan(planSlug);
    setSubscriptionId(subId);
    
    // Determine if this is the free owner plan
    const isFreePlan = planSlug === "car-owner-free" || subId === null;
    setIsOwnerFlow(isFreePlan);
    
    toast({ title: `Plan selected: ${planSlug}` });
    goNext();
  };

  const handleOwnerComplete = async (ownerData?: { email: string; name: string }) => {
    // Send welcome email if owner data is provided
    if (ownerData) {
      try {
        await EmailService.sendWelcomeEmail(ownerData.email, ownerData.name);
        toast({ 
          title: "Setup complete! Welcome to TLRS!", 
          description: "A welcome email has been sent to your inbox."
        });
      } catch (error) {
        toast({ 
          title: "Setup complete! Welcome to TLRS!", 
          description: "Note: Welcome email could not be sent."
        });
      }
    } else {
      toast({ title: "Setup complete! Welcome to TLRS!" });
    }
    navigate("/tyres");
  };

  return (
    <main className="min-h-screen bg-gradient-hero">
      <div className="container py-10 md:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Zap className="h-6 w-6 text-primary" />
              <h1 className="text-2xl md:text-3xl font-bold">Let's get you set up</h1>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-success" />
              Secure & RLS-protected
            </div>
          </div>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                {steps.map((s, idx) => {
                  const Icon = s.icon;
                  const isActive = idx === currentStepIdx;
                  const isDone = idx < currentStepIdx;
                  return (
                    <div key={s.key} className="flex items-center">
                      <div
                        className={`flex items-center gap-2 px-3 py-1 rounded-full border ${
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : isDone
                            ? "bg-muted text-foreground"
                            : "bg-background text-muted-foreground"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span className="text-sm">{`${idx + 1}. ${s.label}`}</span>
                      </div>
                      {idx < steps.length - 1 && (
                        <div className="w-6 md:w-10 h-[1px] bg-border mx-2" />
                      )}
                    </div>
                  );
                })}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {currentStep === "plan" && (
                <StepPlanSelect
                  businessId={businessId}
                  onBack={goPrev}
                  onComplete={handlePlanComplete}
                />
              )}

              {currentStep === "business" && (
                <StepBusinessForm
                  onComplete={(id) => {
                    setBusinessId(id);
                    toast({ title: "Business saved" });
                    goNext();
                  }}
                />
              )}

              {currentStep === "owner" && (
                <StepOwnerDetails
                  onBack={goPrev}
                  onComplete={handleOwnerComplete}
                />
              )}

              {currentStep === "payment" && (
                <StepPayment
                  subscriptionId={subscriptionId}
                  planSlug={selectedPlan}
                  onBack={goPrev}
                />
              )}

              <div className="flex justify-between pt-2">
                <Button
                  variant="ghost"
                  onClick={goPrev}
                  disabled={currentStepIdx === 0}
                >
                  Back
                </Button>
                <div className="text-xs text-muted-foreground">
                  Need help? Check the FAQ or contact support.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
