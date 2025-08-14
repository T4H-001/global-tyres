import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';

interface Partner {
  id: string;
  name: string;
  logo_url: string | null;
  website_url: string | null;
  category: string;
}

const curatedPartners: Partner[] = [
  { id: 'bridgestone', name: 'Bridgestone', logo_url: null, website_url: 'https://www.bridgestone.com/', category: 'manufacturer' },
  { id: 'michelin', name: 'Michelin', logo_url: null, website_url: 'https://www.michelin.com/', category: 'manufacturer' },
  { id: 'goodyear', name: 'Goodyear', logo_url: null, website_url: 'https://www.goodyear.com/', category: 'manufacturer' },
  { id: 'pirelli', name: 'Pirelli', logo_url: null, website_url: 'https://www.pirelli.com/', category: 'manufacturer' },
  { id: 'continental', name: 'Continental', logo_url: null, website_url: 'https://www.continental-tires.com/', category: 'manufacturer' },
  { id: 'yokohama', name: 'Yokohama', logo_url: null, website_url: 'https://www.yokohamatire.com/', category: 'manufacturer' },
  { id: 'hankook', name: 'Hankook', logo_url: null, website_url: 'https://www.hankooktire.com/', category: 'manufacturer' },
  { id: 'dunlop', name: 'Dunlop', logo_url: null, website_url: 'https://www.dunloptires.com/', category: 'manufacturer' },
  { id: 'tyrepower', name: 'Tyrepower', logo_url: null, website_url: 'https://www.tyrepower.com.au/', category: 'retailer' },
  { id: 'beaurepaires', name: 'Beaurepaires', logo_url: null, website_url: 'https://www.beaurepaires.com.au/', category: 'retailer' },
  { id: 'bob-jane', name: 'Bob Jane T-Marts', logo_url: null, website_url: 'https://www.bobjane.com.au/', category: 'retailer' },
];

export default function PartnersCarousel() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    try {
      // Attempt to enrich partner logos
      await supabase.functions.invoke('fetch-partner-logos');

      // Fetch active partners from DB
      const { data, error } = await supabase
        .from('lrs_partners')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (error) throw error;
      const list = (data || []) as Partner[];

      // Deduplicate by name and filter out empties
      const unique = Array.from(
        new Map(
          list
            .filter((p) => p && p.name)
            .map((p) => [p.name.trim().toLowerCase(), p])
        ).values()
      );

      setPartners(unique.length ? unique : curatedPartners);
    } catch (error) {
      console.error('Error fetching partners:', error);
      setPartners(curatedPartners);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full">
        <h3 className="text-lg font-semibold text-center mb-6">Our Industry Partners</h3>
        <div className="overflow-hidden">
          <div className="flex animate-pulse space-x-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex-shrink-0 w-32 h-20 bg-muted rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Double the partners array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold text-center mb-6">Our Industry Partners</h3>
      <div className="overflow-hidden relative">
        <div className="flex animate-scroll-left space-x-6" style={{
          animationDuration: '30s',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'linear'
        }}>
          {duplicatedPartners.map((partner, index) => (
            <Card 
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 w-32 h-20 p-4 flex items-center justify-center bg-background/80 backdrop-blur-sm hover:scale-105 transition-transform duration-200"
            >
              {partner.logo_url ? (
                <img
                  src={partner.logo_url}
                  alt={`${partner.name} logo`}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling!.classList.remove('hidden');
                  }}
                />
              ) : null}
              <div className={`text-center ${partner.logo_url ? 'hidden' : ''}`}>
                <div className="text-xs font-medium text-foreground leading-tight">
                  {partner.name}
                </div>
                <div className="text-xs text-muted-foreground mt-1 capitalize">
                  {partner.category}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
      `}</style>
    </div>
  );
}