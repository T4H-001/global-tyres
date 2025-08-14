import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Volume2, ChevronDown, ChevronUp } from 'lucide-react';
import { Vignette } from '@/content/demos';
import NarrationButton from './NarrationButton';

interface VideoCardProps {
  vignette: Vignette;
  elevenLabsKey: string;
}

export default function VideoCard({ vignette, elevenLabsKey }: VideoCardProps) {
  const [showTranscript, setShowTranscript] = useState(false);

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg">{vignette.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{vignette.description}</p>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col">
        {/* Video Placeholder */}
        <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
          {vignette.heygenVideoUrl ? (
            <iframe
              src={vignette.heygenVideoUrl}
              className="w-full h-full rounded-lg"
              allowFullScreen
            />
          ) : (
            <div className="text-center">
              <Play className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Video Coming Soon</p>
            </div>
          )}
        </div>

        {/* Narration Button */}
        {vignette.elevenLabsScript && (
          <div className="mb-4">
            <NarrationButton
              script={vignette.elevenLabsScript}
              voiceId={vignette.voiceId || '9BWtsMINqrJLrRacOk9x'}
              elevenLabsKey={elevenLabsKey}
            />
          </div>
        )}

        {/* Value Bullets */}
        <div className="mb-4">
          <h4 className="font-medium text-sm mb-2">Key Benefits:</h4>
          <ul className="space-y-1">
            {vignette.valueBullets.map((bullet, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-center">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        {/* Transcript Toggle */}
        {vignette.transcript && (
          <div className="mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowTranscript(!showTranscript)}
              className="h-auto p-0 text-sm"
            >
              {showTranscript ? (
                <>
                  <ChevronUp className="w-3 h-3 mr-1" />
                  Hide Transcript
                </>
              ) : (
                <>
                  <ChevronDown className="w-3 h-3 mr-1" />
                  Show Transcript
                </>
              )}
            </Button>
            {showTranscript && (
              <div className="mt-2 p-3 bg-muted rounded-md text-sm">
                {vignette.transcript}
              </div>
            )}
          </div>
        )}

        {/* CTAs */}
        <div className="mt-auto space-y-2">
          {vignette.ctas.map((cta, index) => (
            <Button
              key={index}
              variant={cta.variant === 'primary' ? 'default' : 'outline'}
              size="sm"
              className="w-full"
              asChild
            >
              <a href={cta.href}>
                {cta.label}
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}