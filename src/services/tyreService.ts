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

      const { data, error } = await supabase
        .from('tyre_registrations')
        .insert([{
          ...tyreData,
          qr_code_url,
          location_coordinates: location_data?.coordinates 
            ? `POINT(${location_data.coordinates.lng} ${location_data.coordinates.lat})`
            : null
        }])
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

  // Get tyre registrations for a business
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
      const { data: registration, error: regError } = await supabase
        .from('tyre_registrations')
        .select('*')
        .eq('tyre_serial', tyreSerial)
        .single();

      if (regError || !registration) {
        return { registration: null, lifecycle: [] };
      }

      const lifecycle = await this.getTyreLifecycle(registration.id);

      return { registration: registration as TyreRegistration, lifecycle };
    } catch (error) {
      console.error('Failed to track tyre:', error);
      return { registration: null, lifecycle: [] };
    }
  }

  // Get waste management insights
  async getWasteInsights(businessId: string) {
    try {
      const tyres = await this.getBusinessTyres(businessId);
      
      const insights = {
        totalTyres: tyres.length,
        activeTyres: tyres.filter(t => t.status === 'active').length,
        recycledTyres: tyres.filter(t => t.status === 'recycled').length,
        disposedTyres: tyres.filter(t => t.status === 'disposed').length,
        recyclingRate: 0,
        locationBreakdown: {} as Record<string, number>
      };

      insights.recyclingRate = insights.totalTyres > 0 
        ? (insights.recycledTyres / insights.totalTyres) * 100 
        : 0;

      // Location breakdown
      tyres.forEach(tyre => {
        if (tyre.location_state) {
          insights.locationBreakdown[tyre.location_state] = 
            (insights.locationBreakdown[tyre.location_state] || 0) + 1;
        }
      });

      return insights;
    } catch (error) {
      console.error('Failed to get waste insights:', error);
      return null;
    }
  }
}

export const tyreService = new TyreService();