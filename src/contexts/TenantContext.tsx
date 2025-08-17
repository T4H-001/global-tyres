import React, { createContext, useContext, useEffect, useState } from 'react';
import { tenantService, type Tenant } from '@/services/tenantService';
import { assetService } from '@/services/assetService';

interface TenantContextValue {
  tenant: Tenant | null;
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

const TenantContext = createContext<TenantContextValue | undefined>(undefined);

export function TenantProvider({ children }: { children: React.ReactNode }) {
  const [tenant, setTenant] = useState<Tenant | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadTenant = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const currentTenant = await tenantService.getCurrentTenant();
      setTenant(currentTenant);
      
      // Update favicon for tenant
      await assetService.updateFavicon();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load tenant');
      console.error('Error loading tenant:', err);
    } finally {
      setLoading(false);
    }
  };

  const refresh = async () => {
    tenantService.clearCache();
    assetService.clearCache();
    await loadTenant();
  };

  useEffect(() => {
    loadTenant();
  }, []);

  const value: TenantContextValue = {
    tenant,
    loading,
    error,
    refresh
  };

  return (
    <TenantContext.Provider value={value}>
      {children}
    </TenantContext.Provider>
  );
}

export function useTenant() {
  const context = useContext(TenantContext);
  if (context === undefined) {
    throw new Error('useTenant must be used within a TenantProvider');
  }
  return context;
}