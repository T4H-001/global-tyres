import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Shield, TrendingUp, Play, ArrowRight, Zap, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import existing assets
import tyrePileImage from '@/assets/tyre-pile-illegal.jpg';
import beforeAfterImage from '@/assets/before-after-environment.jpg';
import tyreStackImage from '@/assets/tyre-stack-clean.jpg';

interface HeroCarouselProps {
  onGetStarted: () => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onGetStarted }) => {
  const slides = [
    {
      id: 'shock',
      image: tyrePileImage,
      badge: { icon: AlertTriangle, text: 'Crisis Alert', variant: 'destructive' as const },
      headline: 'Every 18 seconds, a tyre is illegally dumped',
      subline: '34% of Australia\'s 56 million end-of-life tyres vanish without trace. Springbrook National Park. Your local creek. Someone\'s backyard.',
      cta: { text: 'Stop This Now', icon: Shield },
      microbadges: ['DOT Mandated', 'TSA Verified', 'Tamper-Evident'],
      statChip: { value: '34%', label: 'Tyres Untraced' }
    },
    {
      id: 'solution',
      image: beforeAfterImage,
      badge: { icon: Shield, text: 'Solution Ready', variant: 'secondary' as const },
      headline: 'Track every tyre from DOT to disposal',
      subline: 'Our system bridges the 60-65% traceability gap. Real-time lifecycle management. Tamper-evident hashing. Automated compliance.',
      cta: { text: 'See How It Works', icon: Play },
      microbadges: ['Real-time Tracking', 'Auto Compliance', 'Global Standard'],
      statChip: { value: '100%', label: 'Traceability' }
    },
    {
      id: 'proof',
      image: tyreStackImage,
      badge: { icon: TrendingUp, text: 'Proven Results', variant: 'default' as const },
      headline: 'From chaos to circular economy',
      subline: 'Join 5,000+ registered tyres. See recovery rates jump to 95%. Turn waste crimes into compliance wins.',
      cta: { text: 'Start Free Trial', icon: ArrowRight },
      microbadges: ['5k+ Tyres', '95% Recovery', 'Zero Dumping'],
      statChip: { value: '95%', label: 'Recovery Rate' }
    }
  ];

  return (
    <div className="relative w-full">
      <Carousel className="w-full" opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <Card className="border-0 rounded-none">
                <CardContent className="p-0">
                  <div className="relative h-[80vh] min-h-[600px] overflow-hidden">
                    {/* Background Image */}
                    <img
                      src={slide.image}
                      alt={slide.headline}
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background/90" />
                    
                    {/* Content */}
                    <div className="relative h-full flex items-center justify-center">
                      <div className="max-w-6xl mx-auto px-6 text-center space-y-8">
                        
                        {/* Badge */}
                        <Badge 
                          variant={slide.badge.variant}
                          className="mx-auto px-4 py-2 text-base font-semibold"
                        >
                          <slide.badge.icon className="h-4 w-4 mr-2" />
                          {slide.badge.text}
                        </Badge>
                        
                        {/* Headline */}
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-foreground">
                          {slide.headline}
                        </h1>
                        
                        {/* Subline */}
                        <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-muted-foreground">
                          {slide.subline}
                        </p>
                        
                        {/* Micro-badges */}
                        <div className="flex flex-wrap justify-center gap-3">
                          {slide.microbadges.map((badge, index) => (
                            <Badge key={index} variant="outline" className="bg-background/80 backdrop-blur-sm">
                              {badge}
                            </Badge>
                          ))}
                        </div>
                        
                        {/* CTA Section */}
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-8">
                          <Button 
                            size="lg" 
                            onClick={onGetStarted}
                            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-environmental px-8 py-6 text-lg font-semibold"
                          >
                            <slide.cta.icon className="mr-2 h-5 w-5" />
                            {slide.cta.text}
                          </Button>
                          
                          {/* Stat Chip */}
                          <div className="flex items-center gap-3 px-6 py-3 bg-card/80 backdrop-blur-sm rounded-lg border border-border shadow-card">
                            <BarChart className="h-5 w-5 text-primary" />
                            <div className="text-left">
                              <div className="text-2xl font-bold text-foreground">{slide.statChip.value}</div>
                              <div className="text-sm text-muted-foreground">{slide.statChip.label}</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Additional Info */}
                        <div className="pt-4">
                          <Link to="/demos" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                            See interactive demos →
                          </Link>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation */}
        <CarouselPrevious className="left-6 bg-background/80 backdrop-blur-sm border-border hover:bg-background/90" />
        <CarouselNext className="right-6 bg-background/80 backdrop-blur-sm border-border hover:bg-background/90" />
      </Carousel>
      
      {/* Auto-advance dots indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div key={index} className="w-3 h-3 rounded-full bg-background/50 border border-border" />
        ))}
      </div>
    </div>
  );
};