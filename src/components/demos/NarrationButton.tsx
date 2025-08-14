import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, Loader2 } from 'lucide-react';

interface NarrationButtonProps {
  script: string;
  voiceId: string;
  elevenLabsKey: string;
}

export default function NarrationButton({ script, voiceId, elevenLabsKey }: NarrationButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const handlePlay = async () => {
    if (!elevenLabsKey) {
      return;
    }

    if (isPlaying && audio) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      setIsLoading(true);
      
      const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': elevenLabsKey,
        },
        body: JSON.stringify({
          text: script,
          model_id: 'eleven_monolingual_v1',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.5,
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate audio');
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const newAudio = new Audio(audioUrl);
      
      newAudio.onended = () => {
        setIsPlaying(false);
        URL.revokeObjectURL(audioUrl);
      };

      setAudio(newAudio);
      await newAudio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error('Error playing narration:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!elevenLabsKey) {
    return (
      <Button variant="outline" size="sm" disabled className="w-full">
        <VolumeX className="w-4 h-4 mr-2" />
        Add ElevenLabs key to enable voice
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handlePlay}
      disabled={isLoading}
      className="w-full"
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Generating...
        </>
      ) : isPlaying ? (
        <>
          <VolumeX className="w-4 h-4 mr-2" />
          Stop Narration
        </>
      ) : (
        <>
          <Volume2 className="w-4 h-4 mr-2" />
          Play Narration
        </>
      )}
    </Button>
  );
}