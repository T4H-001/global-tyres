import { Helmet } from 'react-helmet';
import { useTenant } from '@/contexts/TenantContext';

interface SiteSEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  children?: React.ReactNode;
}

export function SiteSEO({ 
  title, 
  description, 
  canonicalUrl,
  ogImage,
  children 
}: SiteSEOProps) {
  const { tenant } = useTenant();
  const currentDomain = typeof window !== 'undefined' ? window.location.host : '';
  
  // Generate tenant-aware metadata
  const siteTitle = tenant?.name ? `${title} | ${tenant.name}` : title;
  const siteDescription = description || `Advanced tyre lifecycle management system${tenant?.name ? ` by ${tenant.name}` : ''}`;
  const fullCanonicalUrl = canonicalUrl ? `https://${currentDomain}${canonicalUrl}` : `https://${currentDomain}${window?.location?.pathname || ''}`;
  const defaultOgImage = ogImage || `https://${currentDomain}/og-image.jpg`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      {siteTitle && <title>{siteTitle}</title>}
      {siteDescription && <meta name="description" content={siteDescription} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph */}
      {siteTitle && <meta property="og:title" content={siteTitle} />}
      {siteDescription && <meta property="og:description" content={siteDescription} />}
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={defaultOgImage} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      {siteTitle && <meta name="twitter:title" content={siteTitle} />}
      {siteDescription && <meta name="twitter:description" content={siteDescription} />}
      <meta name="twitter:image" content={defaultOgImage} />
      
      {/* Tenant-specific branding */}
      {tenant?.settings?.branding?.primary_color && (
        <meta name="theme-color" content={tenant.settings.branding.primary_color} />
      )}
      
      {/* Mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Additional children */}
      {children}
    </Helmet>
  );
}