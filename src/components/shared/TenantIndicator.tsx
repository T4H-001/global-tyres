import React from 'react';
import { useTenant } from '@/contexts/TenantContext';
import { Badge } from '@/components/ui/badge';
import { Loader2 } from 'lucide-react';

interface TenantIndicatorProps {
  showIfNoTenant?: boolean;
  className?: string;
}

export function TenantIndicator({ 
  showIfNoTenant = false, 
  className = "" 
}: TenantIndicatorProps) {
  const { tenant, loading, error } = useTenant();

  if (loading) {
    return (
      <Badge variant="outline" className={className}>
        <Loader2 className="h-3 w-3 mr-1 animate-spin" />
        Loading...
      </Badge>
    );
  }

  if (error) {
    return (
      <Badge variant="destructive" className={className}>
        Error: {error}
      </Badge>
    );
  }

  if (!tenant) {
    if (showIfNoTenant) {
      return (
        <Badge variant="secondary" className={className}>
          Global Site
        </Badge>
      );
    }
    return null;
  }

  return (
    <Badge variant="default" className={className}>
      {tenant.name}
    </Badge>
  );
}

interface TenantDebugInfoProps {
  className?: string;
}

export function TenantDebugInfo({ className = "" }: TenantDebugInfoProps) {
  const { tenant, loading, error } = useTenant();

  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className={`p-4 bg-muted rounded-lg text-sm ${className}`}>
      <h4 className="font-semibold mb-2">Tenant Debug Info</h4>
      <dl className="space-y-1">
        <dt className="font-medium">Status:</dt>
        <dd>{loading ? 'Loading...' : error ? `Error: ${error}` : 'Loaded'}</dd>
        
        <dt className="font-medium">Tenant:</dt>
        <dd>{tenant ? tenant.name : 'None detected'}</dd>
        
        <dt className="font-medium">Slug:</dt>
        <dd>{tenant ? tenant.slug : 'N/A'}</dd>
        
        <dt className="font-medium">Domain:</dt>
        <dd>{typeof window !== 'undefined' ? window.location.hostname : 'N/A'}</dd>
        
        {tenant?.settings && (
          <>
            <dt className="font-medium">Settings:</dt>
            <dd>
              <pre className="text-xs bg-background p-2 rounded mt-1 overflow-auto">
                {JSON.stringify(tenant.settings, null, 2)}
              </pre>
            </dd>
          </>
        )}
      </dl>
    </div>
  );
}