
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Play, FileText, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AdvisoryActionButtonProps {
  adviser: string;
  domain: string;
  action: {
    type: 'feature' | 'guide' | 'report' | 'demo';
    label: string;
    route?: string;
    external?: string;
    description: string;
  };
}

export default function AdvisoryActionButton({ adviser, domain, action }: AdvisoryActionButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (action.external) {
      window.open(action.external, '_blank');
    } else if (action.route) {
      navigate(action.route);
    }
  };

  const getIcon = () => {
    switch (action.type) {
      case 'feature':
        return <Play className="h-4 w-4" />;
      case 'guide':
        return <FileText className="h-4 w-4" />;
      case 'report':
        return <Camera className="h-4 w-4" />;
      case 'demo':
        return <ExternalLink className="h-4 w-4" />;
      default:
        return <Play className="h-4 w-4" />;
    }
  };

  const getVariant = () => {
    switch (action.type) {
      case 'feature':
        return 'default';
      case 'guide':
        return 'outline';
      case 'report':
        return 'secondary';
      case 'demo':
        return 'ghost';
      default:
        return 'default';
    }
  };

  return (
    <div className="space-y-2">
      <Button
        variant={getVariant()}
        size="sm"
        onClick={handleClick}
        className="w-full justify-start gap-2"
      >
        {getIcon()}
        {action.label}
      </Button>
      <p className="text-xs text-muted-foreground px-2">
        {action.description}
      </p>
    </div>
  );
}
