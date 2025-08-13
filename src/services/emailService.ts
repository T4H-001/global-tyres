import { supabase } from '@/integrations/supabase/client';

export interface EmailNotificationData {
  type: 'welcome' | 'alert' | 'compliance' | 'bulk_upload';
  to: string;
  data: {
    name?: string;
    tyreCount?: number;
    location?: string;
    businessName?: string;
    uploadStatus?: string;
    errorCount?: number;
  };
}

export class EmailService {
  static async sendNotification(emailData: EmailNotificationData): Promise<boolean> {
    try {
      const { data, error } = await supabase.functions.invoke('send-notification', {
        body: emailData
      });

      if (error) {
        console.error('Email notification error:', error);
        return false;
      }

      console.log('Email sent successfully:', data);
      return true;
    } catch (error) {
      console.error('Email service error:', error);
      return false;
    }
  }

  static async sendWelcomeEmail(to: string, name: string, businessName?: string): Promise<boolean> {
    return this.sendNotification({
      type: 'welcome',
      to,
      data: { name, businessName }
    });
  }

  static async sendAlertEmail(to: string, location: string, tyreCount: number): Promise<boolean> {
    return this.sendNotification({
      type: 'alert',
      to,
      data: { location, tyreCount }
    });
  }

  static async sendComplianceEmail(to: string, name: string, tyreCount: number): Promise<boolean> {
    return this.sendNotification({
      type: 'compliance',
      to,
      data: { name, tyreCount }
    });
  }

  static async sendBulkUploadEmail(
    to: string, 
    tyreCount: number, 
    uploadStatus: 'success' | 'error', 
    errorCount?: number
  ): Promise<boolean> {
    return this.sendNotification({
      type: 'bulk_upload',
      to,
      data: { tyreCount, uploadStatus, errorCount }
    });
  }
}