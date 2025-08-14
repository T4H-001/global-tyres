import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function DemoToggle() {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const demoActive = Boolean(params.get('demo'));

  const toggleDemo = () => {
    const next = new URLSearchParams(location.search);
    if (demoActive) {
      next.delete('demo');
    } else {
      next.set('demo', 'on');
    }
    navigate({ pathname: location.pathname, search: next.toString() }, { replace: true });
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <div className="px-3 py-2 rounded-full border border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow">
        <div className="flex items-center gap-2">
          <Label htmlFor="demo-toggle" className="text-sm">Demo</Label>
          <Switch id="demo-toggle" checked={demoActive} onCheckedChange={toggleDemo} />
          <Button size="sm" variant="ghost" onClick={toggleDemo}>
            {demoActive ? 'On' : 'Off'}
          </Button>
        </div>
      </div>
    </div>
  );
}
