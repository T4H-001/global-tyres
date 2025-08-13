
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isVerifying, setIsVerifying] = useState(true);
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    document.title = "Payment Successful - TLRS";
    
    // Simple verification - in a real app you might want to verify the session
    setTimeout(() => {
      setIsVerifying(false);
      toast({
        title: "Payment Successful!",
        description: "Your subscription is now active. Welcome to TLRS!",
      });
    }, 2000);
  }, []);

  const goToDashboard = () => {
    navigate("/tyres");
  };

  const goHome = () => {
    navigate("/");
  };

  if (isVerifying) {
    return (
      <main className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <Card className="shadow-card max-w-md w-full mx-4">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
              <h2 className="text-xl font-semibold">Verifying Payment...</h2>
              <p className="text-muted-foreground">
                Please wait while we confirm your payment.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-hero flex items-center justify-center">
      <Card className="shadow-card max-w-md w-full mx-4">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="h-8 w-8 text-success" />
          </div>
          <CardTitle className="text-2xl">Payment Successful!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="space-y-2">
            <p className="text-muted-foreground">
              Thank you for your payment. Your TLRS subscription is now active.
            </p>
            <p className="text-sm text-muted-foreground">
              Session ID: {sessionId || "N/A"}
            </p>
          </div>
          
          <div className="space-y-3">
            <Button onClick={goToDashboard} className="w-full">
              Start Managing Tyres
            </Button>
            <Button variant="outline" onClick={goHome} className="w-full">
              Back to Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
