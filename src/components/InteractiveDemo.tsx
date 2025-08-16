import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Activity, DollarSign, Truck, Users } from "lucide-react";
import tyreStackClean from '@/assets/tyre-stack-clean.jpg';
import tyrePileIllegal from '@/assets/tyre-pile-illegal.jpg';
import beforeAfterEnvironment from '@/assets/before-after-environment.jpg';
import { useNavigate } from "react-router-dom";
export const InteractiveDemo = () => {
  const [tyreCount, setTyreCount] = useState(4);
  const [scenario, setScenario] = useState<'ownership' | 'dumping' | 'compliance'>('ownership');
  const navigate = useNavigate();
  const scenarios = {
    ownership: {
      title: "Ownership Chain Tracking",
      description: "See how tyres move through their lifecycle",
      stages: [
        { name: "Manufacturer", status: "completed", owner: "Bridgestone" },
        { name: "Retailer", status: "completed", owner: "Bob Jane T-Marts" },
        { name: "Car Owner", status: "active", owner: "John Smith" },
        { name: "End of Life", status: "pending", owner: "TBD" }
      ]
    },
    dumping: {
      title: "Illegal Dumping Alert",
      description: "Real-time detection and enforcement",
      stages: [
        { name: "QR Scan Detected", status: "alert", owner: "System Alert" },
        { name: "Location Verified", status: "alert", owner: "Springbrook, QLD" },
        { name: "Last Owner Traced", status: "active", owner: "John Smith" },
        { name: "Fine Issued", status: "pending", owner: "QLD EPA" }
      ]
    },
    compliance: {
      title: "Global Compliance Reporting",
      description: "Automated stewardship integration",
      stages: [
        { name: "TSA Registration", status: "completed", owner: "Australia" },
        { name: "EPR Reporting", status: "completed", owner: "EU" },
        { name: "JATMA Integration", status: "active", owner: "Japan" },
        { name: "Recovery Rate", status: "completed", owner: "95% Achieved" }
      ]
    }
  };

  const currentScenario = scenarios[scenario];

  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-3xl border border-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Interactive Tyre Lifecycle Demo
          </h3>
          <p className="text-muted-foreground">
            See how comprehensive tracking works in real scenarios
          </p>
        </div>

        {/* Scenario Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(scenarios).map(([key, scenarioData]) => (
            <Button
              key={key}
              variant={scenario === key ? "default" : "outline"}
              onClick={() => setScenario(key as any)}
              className="flex items-center gap-2"
            >
              {key === 'ownership' && <Users className="h-4 w-4" />}
              {key === 'dumping' && <Activity className="h-4 w-4" />}
              {key === 'compliance' && <DollarSign className="h-4 w-4" />}
              {scenarioData.title}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Scenario Visualization */}
          <div className="space-y-6">
            <div className="text-center p-6 bg-background/50 rounded-xl border border-primary/20">
              <h4 className="text-lg font-semibold mb-2">{currentScenario.title}</h4>
              <p className="text-muted-foreground text-sm">{currentScenario.description}</p>
            </div>

            {/* Sample Tyre Cards */}
            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: tyreCount }).map((_, index) => {
                const images = [tyreStackClean, beforeAfterEnvironment, tyrePileIllegal];
                const img = images[index % images.length];
                return (
                  <Card key={index} className="bg-background/50 border-primary/20 hover:border-primary/40 transition-all duration-300 overflow-hidden">
                    <CardContent className="p-2">
                      <div className="relative h-20 mb-2">
                        <img 
                          src={img} 
                          alt={`Tyre card visual ${index + 1}`}
                          className="w-full h-full object-cover rounded opacity-90"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded" />
                        <div className="absolute bottom-1 left-1">
                          <div className="bg-white/90 px-2 py-1 rounded text-xs font-medium">
                            DOT: BFGX47{(index + 1).toString().padStart(2, '0')}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Truck className="h-3 w-3 text-primary" />
                        <div className="text-xs text-muted-foreground">QR: #{1000 + index}</div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                onClick={() => setTyreCount(Math.max(1, tyreCount - 1))}
                disabled={tyreCount <= 1}
              >
                Remove Tyre
              </Button>
              <span className="text-sm font-medium">{tyreCount} sample tyres in this scenario</span>
              <Button
                variant="outline"
                onClick={() => setTyreCount(Math.min(8, tyreCount + 1))}
                disabled={tyreCount >= 8}
              >
                Add Tyre
              </Button>
            </div>
          </div>

          {/* Lifecycle Stages */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Lifecycle Progress</h4>
            {currentScenario.stages.map((stage, index) => (
              <Card 
                key={index} 
                className={`transition-all duration-300 ${
                  stage.status === 'completed' ? 'bg-green-50 border-green-200' :
                  stage.status === 'active' ? 'bg-blue-50 border-blue-200' :
                  stage.status === 'alert' ? 'bg-red-50 border-red-200' :
                  'bg-background/50 border-primary/20'
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        stage.status === 'completed' ? 'bg-green-500' :
                        stage.status === 'active' ? 'bg-blue-500' :
                        stage.status === 'alert' ? 'bg-red-500' :
                        'bg-gray-300'
                      }`} />
                      <div>
                        <div className="font-medium text-sm">{stage.name}</div>
                        <div className="text-xs text-muted-foreground">{stage.owner}</div>
                      </div>
                    </div>
                    <Badge 
                      variant={
                        stage.status === 'completed' ? 'default' :
                        stage.status === 'active' ? 'secondary' :
                        stage.status === 'alert' ? 'destructive' :
                        'outline'
                      }
                      className="text-xs"
                    >
                      {stage.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Real-world Impact */}
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <img 
                  src={scenario === 'dumping' ? tyrePileIllegal : beforeAfterEnvironment} 
                  alt="Environmental impact"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4 relative z-10">
                <div className="text-center">
                  <div className="text-sm font-medium mb-2 text-foreground">Real-world Impact</div>
                  {scenario === 'dumping' && (
                    <div className="text-xs text-foreground font-medium">
                      🚨 Springbrook QLD: 100+ tyres illegally dumped detected via QR scans
                    </div>
                  )}
                  {scenario === 'ownership' && (
                    <div className="text-xs text-foreground font-medium">
                      ✅ Complete ownership chain maintained for compliance and accountability
                    </div>
                  )}
                  {scenario === 'compliance' && (
                    <div className="text-xs text-foreground font-medium">
                      📊 95% recovery rate achieved through integrated stewardship programs
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4 mb-4">
            <h4 className="font-semibold text-green-800 mb-2">🌍 Be Part of the Solution</h4>
            <p className="text-sm text-green-700">
              Join a global community preventing 1.5 billion waste tyres annually. Every registration helps combat illegal dumping and protects our environment.
            </p>
          </div>
          <Badge variant="secondary" className="mb-4">
            🎯 Every tyre tracked from cradle to grave - no unknown fates
          </Badge>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90"
              onClick={() => navigate('/tyres?tab=register')}
            >
              Register Your First Tyre
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/tyres?demo=on')}>
              Try Business Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};