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

export default function PartnersCarousel() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    try {
      // First, try to fetch logos for partners without them
      await supabase.functions.invoke('fetch-partner-logos');

      // Then fetch all partners
      const { data, error } = await supabase
        .from('lrs_partners')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (error) throw error;
      setPartners(data || []);
    } catch (error) {
      console.error('Error fetching partners:', error);
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