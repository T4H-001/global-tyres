
import { supabase } from '@/integrations/supabase/client';

export interface CommunityReport {
  id: string;
  reporter_id: string;
  business_id?: string;
  tyre_id?: string;
  report_type: 'dumping' | 'sighting' | 'cleanup_pledge' | 'education';
  title?: string;
  description?: string;
  photo_path?: string;
  lat?: number;
  lng?: number;
  status: 'submitted' | 'reviewed' | 'approved' | 'rejected' | 'resolved';
  is_public: boolean;
  created_at: string;
  updated_at: string;
}

export interface EcoMetrics {
  id: string;
  tyre_id: string;
  business_id?: string;
  wildlife_zone?: string;
  waterway_proximity_km?: number;
  microplastics_g_est?: number;
  co2e_saved_kg?: number;
  hazard_score?: number;
  notes?: string;
  source?: string;
  created_at: string;
  updated_at: string;
}

class CommunityService {
  async submitReport(report: Omit<CommunityReport, 'id' | 'created_at' | 'updated_at'>): Promise<CommunityReport | null> {
    try {
      const { data, error } = await supabase
        .from('community_reports')
        .insert(report)
        .select()
        .single();

      if (error) throw error;
      return data as CommunityReport;
    } catch (error) {
      console.error('Failed to submit community report:', error);
      return null;
    }
  }

  async getPublicReports(): Promise<CommunityReport[]> {
    try {
      const { data, error } = await supabase
        .from('community_reports')
        .select('*')
        .eq('is_public', true)
        .in('status', ['approved', 'resolved'])
        .order('created_at', { ascending: false });

      if (error) throw error;
      return (data || []) as CommunityReport[];
    } catch (error) {
      console.error('Failed to fetch public reports:', error);
      return [];
    }
  }

  async getUserReports(): Promise<CommunityReport[]> {
    try {
      const { data, error } = await supabase
        .from('community_reports')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return (data || []) as CommunityReport[];
    } catch (error) {
      console.error('Failed to fetch user reports:', error);
      return [];
    }
  }

  async addEcoMetrics(metrics: Omit<EcoMetrics, 'id' | 'created_at' | 'updated_at'>): Promise<EcoMetrics | null> {
    try {
      const { data, error } = await supabase
        .from('tyre_eco_metrics')
        .insert(metrics)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Failed to add eco metrics:', error);
      return null;
    }
  }

  async getBusinessEcoMetrics(businessId: string): Promise<EcoMetrics[]> {
    try {
      const { data, error } = await supabase
        .from('tyre_eco_metrics')
        .select('*')
        .eq('business_id', businessId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Failed to fetch eco metrics:', error);
      return [];
    }
  }

  async uploadReportPhoto(file: File, reportId: string): Promise<string | null> {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${reportId}.${fileExt}`;
      const filePath = `community-reports/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('tyre-photos')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from('tyre-photos')
        .getPublicUrl(filePath);

      return data.publicUrl;
    } catch (error) {
      console.error('Failed to upload photo:', error);
      return null;
    }
  }
}

export const communityService = new CommunityService();
