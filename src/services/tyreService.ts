import { supabase } from '@/integrations/supabase/client';
import { apiService } from './apiService';

export interface TyreRegistration {
  id?: string;
  business_id: string;
  tyre_serial: string;
  dot_code?: string;
  brand?: string;
  size?: string;
  manufacture_date?: string;
  install_date?: string;
  vehicle_registration?: string;
  location_state?: string;
  location_postcode?: string;
  status: 'active' | 'removed' | 'recycled' | 'disposed';
  qr_code_url?: string;
  session_id?: string;
  identification_method?: 'serial_qr' | 'rfid_tag' | 'laser_etched' | 'oem_stamped';
  verification_status?: 'self_reported' | 'partner_verified' | 'api_verified' | 'fully_verified';
  rfid_tag_id?: string;
  laser_code?: string;
  partner_verification?: any;
  api_verification?: any;
}

export interface TyreLifecycleEvent {
  id?: string;
  tyre_registration_id: string;
  event_type: 'manufactured' | 'installed' | 'rotated' | 'repaired' | 'removed' | 'recycled' | 'disposed';
  event_date?: string;
  location_data?: any;
  notes?: string;
  recorded_by?: string;
  session_id?: string;
}

export interface TyreFitmentData {
  make: string;
  model: string;
  year_range?: string;
  tyre_size: string;
  dot_code?: string;
  oem_data?: any;
}

class TyreService {
  // Generate QR code for tyre tracking
  generateQRCode(tyreSerial: string): string {
    // Generate QR code URL - in production, use a proper QR code service
    const baseUrl = window.location.origin;
    return `${baseUrl}/track/${tyreSerial}`;
  }

  // Register a new tyre
  async registerTyre(tyreData: Omit<TyreRegistration, 'id'>): Promise<TyreRegistration | null> {
    try {
      // Generate QR code URL
      const qr_code_url = this.generateQRCode(tyreData.tyre_serial);
      
      // Get location data if available
      let location_data = null;
      if (tyreData.location_postcode && tyreData.location_state) {
        location_data = await apiService.validateLocation(
          `${tyreData.location_postcode}, ${tyreData.location_state}, Australia`
        );
      }

      const tyreRegistrationData = {
        ...tyreData,
        qr_code_url,
        identification_method: tyreData.identification_method || 'serial_qr',
        verification_status: tyreData.verification_status || 'self_reported',
        location_coordinates: location_data?.coordinates 
          ? `POINT(${location_data.coordinates.lng} ${location_data.coordinates.lat})`
          : null
      };

      const { data, error } = await supabase
        .from('tyre_registrations')
        .insert([tyreRegistrationData])
        .select()
        .single();

      if (error) {
        console.error('Error registering tyre:', error);
        return null;
      }

      // Create initial lifecycle event
      await this.addLifecycleEvent({
        tyre_registration_id: data.id,
        event_type: 'manufactured',
        notes: 'Tyre registered in TLRS system'
      });

      return data as TyreRegistration;
    } catch (error) {
      console.error('Failed to register tyre:', error);
      return null;
    }
  }

  // Add lifecycle event
  async addLifecycleEvent(eventData: Omit<TyreLifecycleEvent, 'id'>): Promise<TyreLifecycleEvent | null> {
    try {
      const { data, error } = await supabase
        .from('tyre_lifecycle_events')
        .insert([eventData])
        .select()
        .single();

      if (error) {
        console.error('Error adding lifecycle event:', error);
        return null;
      }

      return data as TyreLifecycleEvent;
    } catch (error) {
      console.error('Failed to add lifecycle event:', error);
      return null;
    }
  }

  // Get tyre registrations for a business with pagination
  async getBusinessTyresPaginated(
    businessId: string, 
    page: number = 1, 
    limit: number = 20
  ): Promise<{ tyres: TyreRegistration[], total: number }> {
    try {
      const offset = (page - 1) * limit;
      
      // Get total count first
      const { count } = await supabase
        .from('tyre_registrations')
        .select('*', { count: 'exact', head: true })
        .eq('business_id', businessId);

      // Get paginated data
      const { data, error } = await supabase
        .from('tyre_registrations')
        .select('*')
        .eq('business_id', businessId)
        .order('created_at', { ascending: false })
        .range(offset, offset + limit - 1);

      if (error) {
        console.error('Error fetching business tyres:', error);
        return { tyres: [], total: 0 };
      }

      return { 
        tyres: (data || []) as TyreRegistration[], 
        total: count || 0 
      };
    } catch (error) {
      console.error('Failed to fetch business tyres:', error);
      return { tyres: [], total: 0 };
    }
  }

  // Get tyre registrations for a business (keep original method for compatibility)
  async getBusinessTyres(businessId: string): Promise<TyreRegistration[]> {
    try {
      const { data, error } = await supabase
        .from('tyre_registrations')
        .select('*')
        .eq('business_id', businessId)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching business tyres:', error);
        return [];
      }

      return (data || []) as TyreRegistration[];
    } catch (error) {
      console.error('Failed to fetch business tyres:', error);
      return [];
    }
  }

  // Get tyre lifecycle events
  async getTyreLifecycle(tyreId: string): Promise<TyreLifecycleEvent[]> {
    try {
      const { data, error } = await supabase
        .from('tyre_lifecycle_events')
        .select('*')
        .eq('tyre_registration_id', tyreId)
        .order('event_date', { ascending: true });

      if (error) {
        console.error('Error fetching tyre lifecycle:', error);
        return [];
      }

      return (data || []) as TyreLifecycleEvent[];
    } catch (error) {
      console.error('Failed to fetch tyre lifecycle:', error);
      return [];
    }
  }

  // Get fitment data for vehicle
  async getFitmentData(make: string, model: string, year?: string): Promise<TyreFitmentData[]> {
    try {
      let query = supabase
        .from('tyre_fitment_data')
        .select('*')
        .eq('make', make)
        .eq('model', model);

      if (year) {
        query = query.or(`year_range.cs.${year},year_range.like.*${year}*`);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching fitment data:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Failed to fetch fitment data:', error);
      return [];
    }
  }

  // Update tyre status
  async updateTyreStatus(
    tyreId: string, 
    status: TyreRegistration['status'], 
    notes?: string
  ): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('tyre_registrations')
        .update({ status })
        .eq('id', tyreId);

      if (error) {
        console.error('Error updating tyre status:', error);
        return false;
      }

      // Add lifecycle event for status change
      await this.addLifecycleEvent({
        tyre_registration_id: tyreId,
        event_type: status === 'removed' ? 'removed' : 
                   status === 'recycled' ? 'recycled' : 'disposed',
        notes: notes || `Tyre status changed to ${status}`
      });

      return true;
    } catch (error) {
      console.error('Failed to update tyre status:', error);
      return false;
    }
  }

  // Track tyre by serial number (public endpoint)
  async trackTyre(tyreSerial: string): Promise<{
    registration: TyreRegistration | null;
    lifecycle: TyreLifecycleEvent[];
  }> {
    try {
      // Use the secure public RPC functions
      const [tyreData, lifecycleData] = await Promise.all([
        supabase.rpc('get_tyre_public', { p_tyre_serial: tyreSerial }).maybeSingle(),
        supabase.rpc('get_tyre_lifecycle_public', { p_tyre_serial: tyreSerial })
      ]);

      if (tyreData.error) {
        console.error('Error fetching tyre data:', tyreData.error);
        return { registration: null, lifecycle: [] };
      }

      if (lifecycleData.error) {
        console.error('Error fetching lifecycle data:', lifecycleData.error);
        return { registration: null, lifecycle: [] };
      }

      const registration = tyreData.data ? {
        id: tyreData.data.id,
        business_id: '', // Not exposed for security
        tyre_serial: tyreData.data.tyre_serial,
        brand: tyreData.data.brand,
        size_info: tyreData.data.size_info,
        dot_code: tyreData.data.dot_code,
        vehicle_info: tyreData.data.vehicle_info,
        location: tyreData.data.location,
        status: tyreData.data.status as TyreRegistration['status'],
        created_at: tyreData.data.created_at
      } as TyreRegistration : null;

      const lifecycle: TyreLifecycleEvent[] = lifecycleData.data?.map((event: any) => ({
        id: event.id,
        tyre_registration_id: tyreData.data?.id || '',
        event_type: event.event_type,
        event_date: event.event_date,
        notes: event.notes,
        location_data: { name: event.location }
      })) || [];

      return { registration, lifecycle };
    } catch (error) {
      console.error('Failed to track tyre:', error);
      return { registration: null, lifecycle: [] };
    }
  }

  // Get enhanced waste management insights
  async getWasteInsights(businessId: string) {
    try {
      const tyres = await this.getBusinessTyres(businessId);
      
      const insights = {
        totalTyres: tyres.length,
        activeTyres: tyres.filter(t => t.status === 'active').length,
        recycledTyres: tyres.filter(t => t.status === 'recycled').length,
        removedTyres: tyres.filter(t => t.status === 'removed').length,
        disposedTyres: tyres.filter(t => t.status === 'disposed').length,
        recyclingRate: 0,
        locationBreakdown: {} as Record<string, number>,
        brandBreakdown: {} as Record<string, number>,
        sizeBreakdown: {} as Record<string, number>,
        monthlyTrend: {} as Record<string, number>,
        environmentalImpact: {
          wastePreventedKg: 0,
          carbonSavedKg: 0,
          energySavedMJ: 0
        },
        communityMetrics: {
          businessesServed: 1,
          partnersConnected: 3,
          illegalDumpingPrevented: 0
        }
      };

      insights.recyclingRate = insights.totalTyres > 0 
        ? (insights.recycledTyres / insights.totalTyres) * 100 
        : 0;

      // Environmental impact calculations (average tyre weight ~9kg)
      const avgTyreWeight = 9;
      insights.environmentalImpact.wastePreventedKg = insights.recycledTyres * avgTyreWeight;
      insights.environmentalImpact.carbonSavedKg = insights.recycledTyres * 4.2; // 4.2kg CO2 saved per recycled tyre
      insights.environmentalImpact.energySavedMJ = insights.recycledTyres * 62; // 62MJ energy saved per recycled tyre

      // Location breakdown
      tyres.forEach(tyre => {
        if (tyre.location_state) {
          insights.locationBreakdown[tyre.location_state] = 
            (insights.locationBreakdown[tyre.location_state] || 0) + 1;
        }
        
        // Brand breakdown
        if (tyre.brand) {
          insights.brandBreakdown[tyre.brand] = 
            (insights.brandBreakdown[tyre.brand] || 0) + 1;
        }
        
        // Size breakdown
        if (tyre.size) {
          insights.sizeBreakdown[tyre.size] = 
            (insights.sizeBreakdown[tyre.size] || 0) + 1;
        }
      });

      // Calculate illegal dumping prevented (estimate based on recycling rate)
      insights.communityMetrics.illegalDumpingPrevented = Math.floor(insights.recyclingRate * 0.1);

      return insights;
    } catch (error) {
      console.error('Failed to get waste insights:', error);
      return null;
    }
  }

  // Generate bulk sample data for larger datasets
  async generateBulkSampleData(businessId: string, count: number = 1000): Promise<boolean> {
    try {
      const brands = ['Michelin', 'Bridgestone', 'Goodyear', 'Pirelli', 'Continental', 'Dunlop', 'Yokohama', 'Toyo'];
      const sizes = ['205/55R16', '225/50R17', '195/65R15', '215/60R16', '235/45R18', '255/35R19', '185/70R14', '275/40R20'];
      const states = ['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'];
      
      const sampleData = Array.from({ length: count }).map((_, i) => {
        const brand = brands[i % brands.length];
        const size = sizes[i % sizes.length];
        const state = states[i % states.length];
        
        const manufactureDays = Math.floor(Math.random() * 730);
        const installDays = Math.floor(Math.random() * 180);
        
        return {
          business_id: businessId,
          tyre_serial: `BULK-${brand.substring(0,3).toUpperCase()}-${Date.now()}-${i.toString().padStart(4,'0')}`,
          dot_code: `DOT${Math.random().toString(36).substring(2,6).toUpperCase()}${(1000+i)}`,
          brand,
          size,
          manufacture_date: new Date(Date.now() - manufactureDays * 24 * 60 * 60 * 1000).toISOString(),
          install_date: new Date(Date.now() - installDays * 24 * 60 * 60 * 1000).toISOString(),
          vehicle_registration: `${state}${Math.floor(100 + Math.random()*900)}`,
          location_state: state,
          location_postcode: '2000',
          status: Math.random() < 0.7 ? 'active' : (Math.random() < 0.9 ? 'recycled' : 'removed')
        };
      });

      // Use bulk upload function
      const { data, error } = await supabase.functions.invoke('tyres-bulk-upload', {
        body: {
          businessId,
          sourceLabel: 'sample-data-generator',
          records: sampleData
        }
      });

      if (error) {
        console.error('Bulk sample data generation failed:', error);
        return false;
      }

      console.log(`Generated ${data.inserted} sample tyres`);
      return true;
    } catch (error) {
      console.error('Failed to generate bulk sample data:', error);
      return false;
    }
  }

  async activateRfidTag(tagId: string, tyreRegistrationId: string): Promise<boolean> {
    try {
      const { data, error } = await supabase.functions.invoke('activate-rfid-tag', {
        body: {
          tag_id: tagId,
          tyre_registration_id: tyreRegistrationId
        }
      });

      if (error) {
        console.error('Error activating RFID tag:', error);
        return false;
      }

      return data?.success || false;
    } catch (error) {
      console.error('Error in activateRfidTag:', error);
      return false;
    }
  }
}

export const tyreService = new TyreService();
