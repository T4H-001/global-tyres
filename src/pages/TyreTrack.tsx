import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { tyreService, TyreLifecycleEvent, TyreRegistration } from '@/services/tyreService';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from '@/hooks/use-toast';
import { SiteSEO } from '@/components/shared/SiteSEO';


export default function TyreTrack() {
  const { tyreSerial } = useParams<{ tyreSerial: string }>();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [registration, setRegistration] = useState<TyreRegistration | null>(null);
  const [lifecycle, setLifecycle] = useState<TyreLifecycleEvent[]>([]);

  const statusLabel = useMemo(() => {
    switch (registration?.status) {
      case 'active': return 'In Use';
      case 'removed': return 'Removed';
      case 'recycled': return 'Recycled';
      case 'disposed': return 'Disposed';
      default: return 'Unknown';
    }
  }, [registration?.status]);


  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      if (!tyreSerial) return;
      setLoading(true);
      try {
        const res = await tyreService.trackTyre(tyreSerial);
        if (!cancelled) {
          setRegistration(res.registration);
          setLifecycle(res.lifecycle);
          if (!res.registration) {
            toast({ title: 'Tyre not found', description: 'Check the serial and try again.' });
          }
        }
      } catch (e) {
        if (!cancelled) {
          toast({ title: 'Error loading tyre', description: 'Please try again later.' });
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    load();
    return () => { cancelled = true; };
  }, [tyreSerial]);

  return (
    <main className="min-h-screen bg-background">
      <SiteSEO 
        title={`Track Tyre ${tyreSerial} | TLRS`}
        description={`View live lifecycle and status for tyre ${tyreSerial} in the Tyre Lifecycle Register System (TLRS).`}
        canonicalUrl={location.pathname}
      />
      <div className="container py-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">Tyre Tracking</h1>
            <p className="text-muted-foreground">Public tracking page for tyre serial {tyreSerial}</p>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline">
              <Link to="/tyres">Open Tyre Management</Link>
            </Button>
            <Button asChild>
              <a href={registration?.qr_code_url || `/${location.pathname}`} target="_blank" rel="noopener noreferrer">Open QR Link</a>
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Registration Details</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
              </div>
            ) : registration ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground">Tyre Serial</div>
                  <div className="font-medium">{registration.tyre_serial}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Status</div>
                  <div className="font-medium flex items-center gap-2">
                    <Badge>{statusLabel}</Badge>
                  </div>
                </div>
                <div>
                  <div className="text-muted-foreground">Brand / Size</div>
                  <div className="font-medium">{registration.brand || '—'} {registration.size ? `• ${registration.size}` : ''}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">DOT Code</div>
                  <div className="font-medium">{registration.dot_code || '—'}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Vehicle</div>
                  <div className="font-medium">{registration.vehicle_registration || '—'}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Location</div>
                  <div className="font-medium">{registration.location_postcode || '—'} {registration.location_state ? `• ${registration.location_state}` : ''}</div>
                </div>
              </div>
            ) : (
              <div className="text-muted-foreground">No registration found for this serial.</div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lifecycle</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-3">
                <Skeleton className="h-5 w-1/2" />
                <Skeleton className="h-5 w-2/3" />
                <Skeleton className="h-5 w-1/3" />
              </div>
            ) : lifecycle.length > 0 ? (
              <div className="space-y-4">
                {lifecycle.map((e) => (
                  <div key={e.id} className="p-4 rounded-md border border-border">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div className="font-medium capitalize">{e.event_type}</div>
                      <div className="text-sm text-muted-foreground">{e.event_date ? new Date(e.event_date).toLocaleDateString() : '—'}</div>
                    </div>
                    {e.notes && (
                      <>
                        <Separator className="my-2" />
                        <div className="text-sm text-muted-foreground">{e.notes}</div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-muted-foreground">No lifecycle events recorded yet.</div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
