import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.901576d5f4bc4bb3b759687108e5297d',
  appName: 'global-tyres',
  webDir: 'dist',
  server: {
    url: 'https://901576d5-f4bc-4bb3-b759-687108e5297d.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  // Support for tenant detection in mobile app
  plugins: {
    CapacitorHttp: {
      enabled: true
    }
  }
};

export default config;