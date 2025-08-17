import { supabase } from '@/integrations/supabase/client';

export interface Tenant {
  id: string;
  name: string;
  slug: string;
  settings: {
    branding?: {
      primary_color?: string;
      logo_variant?: string;
    };
    features?: {
      show_tenant_indicator?: boolean;
    };
  };
  is_active: boolean;
}

export interface DomainTenantMapping {
  domain: string;
  tenant_id: string;
}

class TenantService {
  private currentTenant: Tenant | null = null;
  private tenantCache = new Map<string, Tenant>();

  /**
   * Detects tenant ID from current domain
   */
  getTenantIdFromDomain(): string | null {
    if (typeof window === 'undefined') return null;
    
    const hostname = window.location.hostname;
    
    // Handle lovable.app subdomains
    if (hostname.includes('.lovable.app')) {
      const subdomain = hostname.split('.')[0];
      
      switch (subdomain) {
        case 'chalfront-ai':
          return 'augmented-humanity-chalfont';
        case 'ai-at-chalfont':
          return 'augmented-humanity-ai-chalfont';
        case 'canberra-consulting-ai':
          return 'augmented-humanity-canberra';
        default:
          return null;
      }
    }
    
    // Handle custom domains
    switch (hostname) {
      case 'www.augmentedhumanity.coach':
      case 'augmentedhumanity.coach':
        return 'augmented-humanity-coach';
      case 'www.innovateme.link':
      case 'innovateme.link':
        return 'augmented-humanity-innovateme-link';
      case 'www.innovateme.systems':
      case 'innovateme.systems':
        return 'augmented-humanity-innovateme-systems';
      case 'www.holo-org.com':
      case 'holo-org.com':
        return 'augmented-humanity-holo';
      default:
        return null;
    }
  }

  /**
   * Gets current tenant from cache or detects from domain
   */
  async getCurrentTenant(): Promise<Tenant | null> {
    if (this.currentTenant) {
      return this.currentTenant;
    }

    const tenantId = this.getTenantIdFromDomain();
    if (!tenantId) {
      return null;
    }

    return this.getTenantById(tenantId);
  }

  /**
   * Fetches tenant by ID from cache or database
   */
  async getTenantById(tenantId: string): Promise<Tenant | null> {
    // Check cache first
    if (this.tenantCache.has(tenantId)) {
      return this.tenantCache.get(tenantId)!;
    }

    try {
      const { data, error } = await supabase
        .from('tenants')
        .select('*')
        .eq('slug', tenantId)
        .eq('is_active', true)
        .single();

      if (error) {
        console.error('Failed to fetch tenant:', error);
        return null;
      }

      const tenant = data as Tenant;
      this.tenantCache.set(tenantId, tenant);
      this.currentTenant = tenant;
      
      return tenant;
    } catch (error) {
      console.error('Error fetching tenant:', error);
      return null;
    }
  }

  /**
   * Clears tenant cache (useful for testing)
   */
  clearCache(): void {
    this.tenantCache.clear();
    this.currentTenant = null;
  }

  /**
   * Gets tenant-specific branding colors
   */
  async getTenantBranding(): Promise<{ primaryColor?: string; logoVariant?: string }> {
    const tenant = await this.getCurrentTenant();
    return {
      primaryColor: tenant?.settings?.branding?.primary_color,
      logoVariant: tenant?.settings?.branding?.logo_variant || 'default'
    };
  }

  /**
   * Checks if a feature is enabled for current tenant
   */
  async isFeatureEnabled(feature: string): Promise<boolean> {
    const tenant = await this.getCurrentTenant();
    return tenant?.settings?.features?.[feature] || false;
  }
}

export const tenantService = new TenantService();