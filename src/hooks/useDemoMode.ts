import { useEffect, useMemo, useState } from 'react';
import { apiService } from '@/services/apiService';

export interface Partner {
  name: string;
  website?: string | null;
  suburb?: string | null;
  state?: string | null;
  logo_url?: string | null;
}

export function useDemoMode() {
  const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  const demoKey = params?.get('demo')?.toLowerCase();
  const active = demoKey === 'kirrawee' || demoKey === 'sutherland' || demoKey === 'sutherland-shire';
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(false);

  const area = useMemo(() => {
    if (!active) return null;
    return { suburb: 'Kirrawee', state: 'NSW' } as const;
  }, [active]);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      if (!active || !area) return;
      setLoading(true);
      try {
        const list = await apiService.getLocalRetailersByArea(area.suburb, area.state);
        if (!cancelled) {
          if (list && Array.isArray(list) && list.length > 0) {
            setPartners(list as Partner[]);
          } else {
            // Fallback to static partners for demo reliability
            setPartners([
              { name: 'RoverX', website: 'https://roverx.com.au/', suburb: 'Kirrawee', state: 'NSW' },
              { name: 'BW Automotive', website: 'https://www.bwautomotive.com.au/', suburb: 'Kirrawee', state: 'NSW' },
              { name: 'Tubbys Tyres', website: null, suburb: 'Kirrawee', state: 'NSW' },
            ]);
          }
        }
      } catch {
        if (!cancelled) {
          setPartners([
            { name: 'RoverX', website: 'https://roverx.com.au/', suburb: 'Kirrawee', state: 'NSW' },
            { name: 'BW Automotive', website: 'https://www.bwautomotive.com.au/', suburb: 'Kirrawee', state: 'NSW' },
            { name: 'Tubbys Tyres', website: null, suburb: 'Kirrawee', state: 'NSW' },
          ]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    load();
    return () => { cancelled = true; };
  }, [active, area?.suburb, area?.state]);

  return {
    active,
    suburb: area?.suburb,
    state: area?.state,
    partners,
    loading,
  } as const;
}
