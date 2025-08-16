
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Recycle, Shield, Users, Globe, TreePine } from 'lucide-react';

interface TyreConnectionCardProps {
  adviser: string;
  domain: string;
  tyreConnection: {
    aspect: string;
    description: string;
    impact: string;
    example: string;
  };
  tlrsFeature: {
    name: string;
    description: string;
    status: 'live' | 'planned' | 'concept';
  };
}

const domainIcons = {
  Environment: Leaf,
  Engineering: Shield,
  Business: Users,
  Policy: Globe,
  Science: Recycle,
  Health: Shield,
  Law: Shield,
  Finance: Users,
  Design: TreePine,
  Education: Users,
};

const domainColors = {
  Environment: "text-green-600 bg-green-50",
  Engineering: "text-blue-600 bg-blue-50",
  Business: "text-violet-600 bg-violet-50",
  Policy: "text-amber-600 bg-amber-50",
  Science: "text-cyan-600 bg-cyan-50",
  Health: "text-rose-600 bg-rose-50",
  Law: "text-slate-600 bg-slate-50",
  Finance: "text-emerald-600 bg-emerald-50",
  Design: "text-fuchsia-600 bg-fuchsia-50",
  Education: "text-indigo-600 bg-indigo-50",
};

export default function TyreConnectionCard({ adviser, domain, tyreConnection, tlrsFeature }: TyreConnectionCardProps) {
  const IconComponent = domainIcons[domain as keyof typeof domainIcons] || Shield;
  const colorClass = domainColors[domain as keyof typeof domainColors] || "text-gray-600 bg-gray-50";

  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2 mb-2">
          <IconComponent className={`h-5 w-5 ${colorClass.split(' ')[0]}`} />
          <Badge variant="secondary" className={colorClass}>
            {domain}
          </Badge>
        </div>
        <CardTitle className="text-base">{adviser}</CardTitle>
        <CardDescription>How tyres are involved</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium text-sm mb-1">{tyreConnection.aspect}</h4>
          <p className="text-sm text-muted-foreground mb-2">{tyreConnection.description}</p>
          <p className="text-xs text-green-700 bg-green-50 p-2 rounded">
            <strong>Impact:</strong> {tyreConnection.impact}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            <strong>Example:</strong> {tyreConnection.example}
          </p>
        </div>
        
        <div className="border-t pt-3">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium text-sm">Mapped TLRS Feature</h4>
            <Badge 
              variant={tlrsFeature.status === 'live' ? 'default' : tlrsFeature.status === 'planned' ? 'secondary' : 'outline'}
              className="text-xs"
            >
              {tlrsFeature.status}
            </Badge>
          </div>
          <p className="text-sm font-medium">{tlrsFeature.name}</p>
          <p className="text-xs text-muted-foreground">{tlrsFeature.description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
