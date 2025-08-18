import { supabase } from '@/integrations/supabase/client';
import { tenantService } from './tenantService';

export interface SharedAsset {
  id: string;
  asset_key: string;
  asset_name: string;
  asset_url: string;
  tenant_id?: string;
  asset_category: string;
  metadata?: any;
  is_global: boolean;
  is_active: boolean;
  version_number: number;
}

class AssetService {
  private assetCache = new Map<string, SharedAsset>();

  /**
   * Resolves an asset by key, checking tenant-specific overrides first
   */
  async resolveAsset(assetKey: string): Promise<{
    asset_url?: string;
    asset_name?: string;
    metadata?: any;
    is_override: boolean;
  } | null> {
    const currentTenantId = await this.getCurrentTenantId();
    const cacheKey = `${assetKey}-${currentTenantId || 'global'}`;
    
    if (this.assetCache.has(cacheKey)) {
      const cached = this.assetCache.get(cacheKey)!;
      return {
        asset_url: cached.asset_url,
        asset_name: cached.asset_name,
        metadata: cached.metadata,
        is_override: !cached.is_global
      };
    }

    try {
      // Use the secure RPC function for asset resolution
      const { data, error } = await supabase
        .rpc('resolve_asset', {
          p_asset_key: assetKey,
          p_tenant_id: currentTenantId
        })
        .maybeSingle();

      if (!error && data) {
        // Create a mock SharedAsset for caching
        const asset: SharedAsset = {
          id: crypto.randomUUID(),
          asset_key: assetKey,
          asset_name: data.asset_name,
          asset_url: data.asset_url,
          tenant_id: currentTenantId,
          asset_category: 'branding',
          metadata: data.metadata,
          is_global: !data.is_override,
          is_active: true,
          version_number: 1
        };
        
        this.assetCache.set(cacheKey, asset);
        return {
          asset_url: data.asset_url,
          asset_name: data.asset_name,
          metadata: data.metadata,
          is_override: data.is_override
        };
      }

      return null;
    } catch (error) {
      console.error('Failed to resolve asset:', error);
      return null;
    }
  }

  /**
   * Gets the favicon URL for current tenant
   */
  async getFaviconUrl(): Promise<string | null> {
    const asset = await this.resolveAsset('favicon');
    return asset?.asset_url || null;
  }

  /**
   * Gets the logo URL for current tenant
   */
  async getLogoUrl(): Promise<string | null> {
    const asset = await this.resolveAsset('ahc-logo');
    return asset?.asset_url || null;
  }

  /**
   * Updates the favicon in the document head
   */
  async updateFavicon(): Promise<void> {
    const faviconUrl = await this.getFaviconUrl();
    const finalFaviconUrl = faviconUrl || '/favicon.ico'; // Fallback to default
    
    const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (link) {
      link.href = finalFaviconUrl;
    } else {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.href = finalFaviconUrl;
      document.head.appendChild(newLink);
    }
  }

  private async getCurrentTenantId(): Promise<string | null> {
    const tenant = await tenantService.getCurrentTenant();
    return tenant?.id || null;
  }

  /**
   * Clears asset cache
   */
  clearCache(): void {
    this.assetCache.clear();
  }
}

export const assetService = new AssetService();