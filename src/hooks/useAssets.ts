import { useEffect, useState } from 'react';
import { assetService, type SharedAsset } from '@/services/assetService';
import { useTenant } from '@/contexts/TenantContext';

interface UseAssetResult {
  asset: {
    url?: string;
    name?: string;
    metadata?: any;
    isOverride: boolean;
  } | null;
  loading: boolean;
  error: string | null;
}

export function useAsset(assetKey: string): UseAssetResult {
  const [asset, setAsset] = useState<UseAssetResult['asset']>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { tenant } = useTenant();

  useEffect(() => {
    let cancelled = false;

    const loadAsset = async () => {
      try {
        setLoading(true);
        setError(null);

        const resolved = await assetService.resolveAsset(assetKey);
        
        if (!cancelled) {
          if (resolved) {
            setAsset({
              url: resolved.asset_url,
              name: resolved.asset_name,
              metadata: resolved.metadata,
              isOverride: resolved.is_override
            });
          } else {
            setAsset(null);
          }
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load asset');
          console.error('Error loading asset:', err);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadAsset();
    
    return () => {
      cancelled = true;
    };
  }, [assetKey, tenant?.id]);

  return { asset, loading, error };
}

export function useLogo() {
  return useAsset('ahc-logo');
}

export function useFavicon() {
  return useAsset('favicon');
}

export function useHeroImage() {
  return useAsset('hero-image');
}

export function useBrandAssets() {
  const logo = useLogo();
  const favicon = useFavicon();
  const heroImage = useHeroImage();

  return {
    logo,
    favicon,
    heroImage,
    loading: logo.loading || favicon.loading || heroImage.loading,
    error: logo.error || favicon.error || heroImage.error
  };
}