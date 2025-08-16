import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, Shield, Zap } from "lucide-react";

interface VerificationBadgeProps {
  status: 'self_reported' | 'partner_verified' | 'api_verified' | 'fully_verified';
  className?: string;
}

export const VerificationBadge = ({ status, className }: VerificationBadgeProps) => {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'self_reported':
        return {
          label: 'Self Reported',
          variant: 'outline' as const,
          icon: AlertCircle,
          description: 'User-reported information'
        };
      case 'partner_verified':
        return {
          label: 'Partner Verified',
          variant: 'secondary' as const,
          icon: Shield,
          description: 'Verified by authorized partner'
        };
      case 'api_verified':
        return {
          label: 'API Verified',
          variant: 'default' as const,
          icon: Zap,
          description: 'Verified through API integration'
        };
      case 'fully_verified':
        return {
          label: 'Fully Verified',
          variant: 'default' as const,
          icon: CheckCircle,
          description: 'Completely verified through multiple sources'
        };
      default:
        return {
          label: 'Unknown',
          variant: 'outline' as const,
          icon: AlertCircle,
          description: 'Verification status unknown'
        };
    }
  };

  const config = getStatusConfig(status);
  const IconComponent = config.icon;

  return (
    <Badge 
      variant={config.variant} 
      className={`flex items-center gap-1 ${className}`}
      title={config.description}
    >
      <IconComponent className="h-3 w-3" />
      {config.label}
    </Badge>
  );
};