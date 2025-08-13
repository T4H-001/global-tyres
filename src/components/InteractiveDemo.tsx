import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Activity, DollarSign, Truck, Users } from "lucide-react";

export const InteractiveDemo = () => {
  const [tyreCount, setTyreCount] = useState(1000);
  const [avgCost, setAvgCost] = useState(150);

  const calculations = {
    totalValue: tyreCount * avgCost,
    monthlySavings: Math.round((tyreCount * avgCost * 0.02) / 12),
    wasteReduction: Math.round(tyreCount * 0.15),
    complianceScore: Math.min(95, 70 + (tyreCount / 100))
  };

  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-3xl border border-primary/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Interactive ROI Calculator
          </h3>
          <p className="text-muted-foreground">
            See your potential savings in real-time
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Number of Tyres Tracked
              </label>
              <Input
                type="number"
                value={tyreCount}
                onChange={(e) => setTyreCount(Number(e.target.value) || 0)}
                className="text-lg"
                min="1"
                max="100000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Average Tyre Value ($AUD)
              </label>
              <Input
                type="number"
                value={avgCost}
                onChange={(e) => setAvgCost(Number(e.target.value) || 0)}
                className="text-lg"
                min="1"
                max="1000"
              />
            </div>
          </div>

          {/* Results Section */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-background/50 border-primary/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-primary" />
                  Total Value
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">
                  ${calculations.totalValue.toLocaleString()}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-primary/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Activity className="h-4 w-4 text-green-600" />
                  Monthly Savings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  ${calculations.monthlySavings.toLocaleString()}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-primary/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Truck className="h-4 w-4 text-blue-600" />
                  Waste Reduction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">
                  {calculations.wasteReduction}%
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-primary/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Users className="h-4 w-4 text-purple-600" />
                  Compliance Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">
                  {calculations.complianceScore.toFixed(1)}%
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Badge variant="secondary" className="mb-4">
            🎯 Estimated annual savings: ${(calculations.monthlySavings * 12).toLocaleString()}
          </Badge>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90"
            >
              Start Your Free Trial
            </Button>
            <Button variant="outline" size="lg">
              See Full Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};