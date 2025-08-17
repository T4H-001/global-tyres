import React from 'react';
import { useAsset, useLogo } from '@/hooks/useAssets';
import { cn } from '@/lib/utils';

interface AssetImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  assetKey: string;
  fallbackSrc?: string;
  showOverrideIndicator?: boolean;
}

export function AssetImage({ 
  assetKey, 
  fallbackSrc, 
  showOverrideIndicator = false,
  className,
  alt,
  ...props 
}: AssetImageProps) {
  const { asset, loading, error } = useAsset(assetKey);

  if (loading) {
    return (
      <div className={cn("animate-pulse bg-muted rounded", className)} />
    );
  }

  if (error || !asset?.url) {
    if (fallbackSrc) {
      return (
        <img
          src={fallbackSrc}
          alt={alt}
          className={className}
          {...props}
        />
      );
    }
    return null;
  }

  return (
    <div className="relative inline-block">
      <img
        src={asset.url}
        alt={alt || asset.name}
        className={className}
        {...props}
      />
      {showOverrideIndicator && asset.isOverride && (
        <div className="absolute -top-1 -right-1 h-2 w-2 bg-primary rounded-full border border-background" 
             title="Tenant-specific asset" />
      )}
    </div>
  );
}

interface LogoProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  fallbackSrc?: string;
  showOverrideIndicator?: boolean;
}

export function Logo({ 
  fallbackSrc = "/placeholder.svg", 
  showOverrideIndicator = false,
  className,
  alt = "Logo",
  ...props 
}: LogoProps) {
  const { asset, loading, error } = useLogo();

  if (loading) {
    return (
      <div className={cn("animate-pulse bg-muted rounded", className)} />
    );
  }

  const src = asset?.url || fallbackSrc;

  return (
    <div className="relative inline-block">
      <img
        src={src}
        alt={alt}
        className={className}
        {...props}
      />
      {showOverrideIndicator && asset?.isOverride && (
        <div className="absolute -top-1 -right-1 h-2 w-2 bg-primary rounded-full border border-background" 
             title="Tenant-specific logo" />
      )}
    </div>
  );
}