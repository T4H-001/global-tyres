import { Badge } from '@/components/ui/badge';
import { TestTube } from 'lucide-react';

interface DemoLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function DemoLabel({ children, className = "" }: DemoLabelProps) {
  return (
    <div className={`relative ${className}`}>
      {children}
      <Badge 
        variant="outline" 
        className="absolute -top-2 -right-2 bg-warning/10 text-warning border-warning/20 text-xs px-2 py-1"
      >
        <TestTube className="h-3 w-3 mr-1" />
        Demo
      </Badge>
    </div>
  );
}