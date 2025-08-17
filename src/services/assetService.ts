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
    const cacheKey = `${assetKey}-${await this.getCurrentTenantId()}`;
    
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
      const currentTenantId = await this.getCurrentTenantId();
      
      // First check for tenant-specific override
      if (currentTenantId) {
        const { data: tenantAsset } = await supabase
          .from('shared_assets')
          .select('*')
          .eq('asset_key', assetKey)
          .eq('tenant_id', currentTenantId)
          .eq('is_active', true)
          .order('version_number', { ascending: false })
          .limit(1)
          .maybeSingle();

        if (tenantAsset) {
          this.assetCache.set(cacheKey, tenantAsset);
          return {
            asset_url: tenantAsset.asset_url,
            asset_name: tenantAsset.asset_name,
            metadata: tenantAsset.metadata,
            is_override: true
          };
        }
      }

      // Fallback to global asset
      const { data: globalAsset } = await supabase
        .from('shared_assets')
        .select('*')
        .eq('asset_key', assetKey)
        .eq('is_global', true)
        .eq('is_active', true)
        .order('version_number', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (globalAsset) {
        this.assetCache.set(cacheKey, globalAsset);
        return {
          asset_url: globalAsset.asset_url,
          asset_name: globalAsset.asset_name,
          metadata: globalAsset.metadata,
          is_override: false
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
    if (faviconUrl) {
      const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
      if (link) {
        link.href = faviconUrl;
      } else {
        const newLink = document.createElement('link');
        newLink.rel = 'icon';
        newLink.href = faviconUrl;
        document.head.appendChild(newLink);
      }
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