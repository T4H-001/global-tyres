import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { demoContent } from '@/content/demos';
import RoleSelector from '@/components/demos/RoleSelector';
import VideoCard from '@/components/demos/VideoCard';
import PartnersCarousel from '@/components/PartnersCarousel';

export default function Demos() {
  const [selectedRole, setSelectedRole] = useState<string>(demoContent.roles[0].id);
  const [elevenLabsKey, setElevenLabsKey] = useState(localStorage.getItem('elevenLabsKey') || '');

  const currentRole = demoContent.roles.find(role => role.id === selectedRole);

  const handleKeyUpdate = (key: string) => {
    setElevenLabsKey(key);
    if (key) {
      localStorage.setItem('elevenLabsKey', key);
    } else {
      localStorage.removeItem('elevenLabsKey');
    }
  };

  return (
    <>
      <Helmet>
        <title>Lifecycle Demos & Stories - Tyre Recovery System</title>
        <meta name="description" content="Interactive demonstrations and value stories for all lifecycle participants - Individuals, Retailers, Recyclers, and more." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Lifecycle Demos & Stories
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore interactive demonstrations showcasing value for every participant in the tyre lifecycle ecosystem
            </p>
          </div>

          {/* Partners Carousel */}
          <div className="mb-12">
            <PartnersCarousel />
          </div>

          {/* ElevenLabs API Key Input */}
          <div className="max-w-md mx-auto mb-8">
            <label htmlFor="elevenLabsKey" className="block text-sm font-medium text-foreground mb-2">
              ElevenLabs API Key (for voice narration)
            </label>
            <input
              id="elevenLabsKey"
              type="password"
              value={elevenLabsKey}
              onChange={(e) => handleKeyUpdate(e.target.value)}
              placeholder="Enter your ElevenLabs API key"
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Optional: Add your key to enable voice narration features
            </p>
          </div>

          {/* Role Selector */}
          <RoleSelector
            roles={demoContent.roles}
            selectedRole={selectedRole}
            onRoleChange={setSelectedRole}
          />

          {/* Current Role Content */}
          {currentRole && (
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-foreground mb-2 text-center">
                {currentRole.name}
              </h2>
              <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                {currentRole.description}
              </p>

              {/* Vignettes Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentRole.vignettes.map((vignette, index) => (
                  <VideoCard
                    key={index}
                    vignette={vignette}
                    elevenLabsKey={elevenLabsKey}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}