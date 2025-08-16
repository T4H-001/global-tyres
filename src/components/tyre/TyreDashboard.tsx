
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { tyreService, TyreRegistration } from '@/services/tyreService';
import { 
  QrCode, 
  MapPin, 
  Calendar, 
  Truck, 
  BarChart3, 
  Recycle, 
  AlertTriangle,
  CheckCircle,
  Clock,
  ChevronLeft,
  ChevronRight,
  Radio,
  Zap,
  Factory
} from 'lucide-react';
import { VerificationBadge } from './VerificationBadge';
import EnhancedDashboard from './EnhancedDashboard';

interface Props {
  businessId: string;
}

export default function TyreDashboard({ businessId }: Props) {
  const [viewMode, setViewMode] = useState<string>('basic');
  const [tyres, setTyres] = useState<TyreRegistration[]>([]);
  const [insights, setInsights] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedTyre, setSelectedTyre] = useState<TyreRegistration | null>(null);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalTyres, setTotalTyres] = useState(0);
  const itemsPerPage = 20;

  useEffect(() => {
    loadDashboardData();
  }, [businessId, currentPage]);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      const [tyreData, insightData] = await Promise.all([
        tyreService.getBusinessTyresPaginated(businessId, currentPage, itemsPerPage),
        tyreService.getWasteInsights(businessId)
      ]);
      
      setTyres(tyreData.tyres);
      setTotalTyres(tyreData.total);
      setInsights(insightData);
    } catch (error) {
      console.error('Failed to load dashboard data:', error);
      toast({
        title: "Failed to load dashboard",
        description: "Please try refreshing the page",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'removed':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'recycled':
        return <Recycle className="h-4 w-4 text-blue-500" />;
      case 'disposed':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'removed':
        return 'bg-yellow-100 text-yellow-800';
      case 'recycled':
        return 'bg-blue-100 text-blue-800';
      case 'disposed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleStatusUpdate = async (tyreId: string, newStatus: TyreRegistration['status']) => {
    try {
      const success = await tyreService.updateTyreStatus(tyreId, newStatus);
      
      if (success) {
        toast({
          title: "Status updated",
          description: `Tyre status changed to ${newStatus}`
        });
        loadDashboardData(); // Refresh data
      } else {
        throw new Error('Failed to update status');
      }
    } catch (error) {
      toast({
        title: "Update failed",
        description: "Please try again",
        variant: "destructive"
      });
    }
  };

  const totalPages = Math.ceil(totalTyres / itemsPerPage);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-8 bg-gray-200 rounded w-1/2"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (viewMode === 'enhanced') {
    return <EnhancedDashboard businessId={businessId} />;
  }

  return (
    <div className="space-y-6">
      {/* View Toggle */}
      <div className="flex justify-end">
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === 'basic' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('basic')}
          >
            Basic View
          </Button>
          <Button
            variant={viewMode === 'enhanced' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('enhanced')}
          >
            Enhanced Analytics
          </Button>
        </div>
      </div>
      {/* Statistics Cards */}
      {insights && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Tyres</p>
                  <p className="text-2xl font-bold">{insights.totalTyres.toLocaleString()}</p>
                </div>
                <QrCode className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Tyres</p>
                  <p className="text-2xl font-bold text-green-600">{insights.activeTyres.toLocaleString()}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Recycled</p>
                  <p className="text-2xl font-bold text-blue-600">{insights.recycledTyres.toLocaleString()}</p>
                </div>
                <Recycle className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Recycling Rate</p>
                  <p className="text-2xl font-bold">{insights.recyclingRate.toFixed(1)}%</p>
                </div>
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Tyre List */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <QrCode className="h-5 w-5" />
              Registered Tyres ({totalTyres.toLocaleString()})
            </CardTitle>
            <div className="text-sm text-muted-foreground">
              Showing {((currentPage - 1) * itemsPerPage) + 1} - {Math.min(currentPage * itemsPerPage, totalTyres)} of {totalTyres.toLocaleString()}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {tyres.length === 0 ? (
            <div className="text-center py-8">
              <QrCode className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No tyres registered</h3>
              <p className="text-gray-500">Start by registering your first tyre to track its lifecycle.</p>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {tyres.map((tyre) => (
                  <div key={tyre.id} className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-medium">{tyre.tyre_serial}</h3>
                          <Badge className={getStatusColor(tyre.status)}>
                            {getStatusIcon(tyre.status)}
                            {tyre.status}
                          </Badge>
                          {tyre.identification_method === 'rfid_tag' && <Radio className="h-4 w-4 text-blue-500" />}
                          {tyre.identification_method === 'laser_etched' && <Zap className="h-4 w-4 text-yellow-500" />}
                          {tyre.identification_method === 'oem_stamped' && <Factory className="h-4 w-4 text-green-500" />}
                          {(!tyre.identification_method || tyre.identification_method === 'serial_qr') && <QrCode className="h-4 w-4" />}
                          <VerificationBadge status={tyre.verification_status || 'self_reported'} />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {tyre.install_date ? new Date(tyre.install_date).toLocaleDateString() : 'Not installed'}
                          </div>
                          
                          {tyre.vehicle_registration && (
                            <div className="flex items-center gap-1">
                              <Truck className="h-4 w-4" />
                              {tyre.vehicle_registration}
                            </div>
                          )}
                          
                          {tyre.location_state && (
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {tyre.location_state} {tyre.location_postcode}
                            </div>
                          )}
                        </div>
                        
                        {tyre.brand && (
                          <div className="mt-2 text-sm">
                            <span className="font-medium">{tyre.brand}</span>
                            {tyre.size && <span className="text-gray-500"> • {tyre.size}</span>}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {tyre.status === 'active' && (
                          <>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleStatusUpdate(tyre.id!, 'removed')}
                            >
                              Remove
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleStatusUpdate(tyre.id!, 'recycled')}
                              className="text-blue-600 border-blue-600 hover:bg-blue-50"
                            >
                              Recycle
                            </Button>
                          </>
                        )}
                        
                        {tyre.status === 'removed' && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleStatusUpdate(tyre.id!, 'recycled')}
                            className="text-blue-600 border-blue-600 hover:bg-blue-50"
                          >
                            Recycle
                          </Button>
                        )}
                        
                        {tyre.qr_code_url && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              try {
                                let url = tyre.qr_code_url!;
                                if (!/^https?:\/\//i.test(url)) {
                                  url = `${window.location.origin}${url.startsWith('/') ? '' : '/'}${url}`;
                                }
                                navigator.clipboard.writeText(url);
                                toast({ title: "QR code URL copied to clipboard" });
                              } catch (e) {
                                toast({ title: "Unable to copy QR URL", variant: "destructive" });
                              }
                            }}
                          >
                            Copy QR
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between mt-6">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      Page {currentPage} of {totalPages}
                    </span>
                  </div>
                  
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              )}
            </>
          )}
        </CardContent>
      </Card>

      {/* Location Insights */}
      {insights && Object.keys(insights.locationBreakdown).length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Location Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(insights.locationBreakdown).map(([state, count]) => (
                <div key={state} className="text-center">
                  <p className="text-2xl font-bold text-primary">{(count as number).toLocaleString()}</p>
                  <p className="text-sm text-gray-600">{state}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
