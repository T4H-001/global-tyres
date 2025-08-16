import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface NotificationRequest {
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

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, to, data }: NotificationRequest = await req.json();
    
    let subject = "";
    let html = "";

    switch (type) {
      case 'welcome':
        subject = "Welcome to TLRS - Tyre Lifecycle Tracking";
        html = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #22c55e, #16a34a); padding: 40px; color: white; text-align: center;">
              <h1 style="margin: 0; font-size: 28px;">Welcome to TLRS</h1>
              <p style="margin: 10px 0 0; font-size: 16px;">Comprehensive Tyre Lifecycle Tracking & Recycling System</p>
            </div>
            <div style="padding: 40px; background: #f8f9fa;">
              <h2>Hello ${data.name || 'there'}!</h2>
              <p>Thank you for joining TLRS. You're now part of the global movement to combat illegal tyre dumping and promote environmental responsibility.</p>
              
              <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #22c55e; margin: 20px 0;">
                <h3 style="color: #16a34a; margin-top: 0;">What you can do now:</h3>
                <ul style="color: #374151;">
                  <li>Register your first tyres using QR codes</li>
                  <li>Track complete lifecycle from manufacturing to recycling</li>
                  <li>Access bulk upload tools for large datasets</li>
                  <li>Generate compliance reports for stewardship programs</li>
                </ul>
              </div>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://tlrs.lovable.app" style="background: #22c55e; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">Start Tracking</a>
              </div>
              
              <p style="color: #6b7280; font-size: 14px;">Questions? Reply to this email or visit our knowledge base.</p>
            </div>
          </div>
        `;
        break;

      case 'alert':
        subject = "🚨 TLRS Alert: Illegal Dumping Detected";
        html = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #dc2626; padding: 40px; color: white; text-align: center;">
              <h1 style="margin: 0; font-size: 28px;">⚠️ Illegal Dumping Alert</h1>
              <p style="margin: 10px 0 0; font-size: 16px;">Immediate action required</p>
            </div>
            <div style="padding: 40px; background: #f8f9fa;">
              <div style="background: #fef2f2; padding: 20px; border-radius: 8px; border-left: 4px solid #dc2626; margin: 20px 0;">
                <h3 style="color: #dc2626; margin-top: 0;">Detection Details:</h3>
                <ul style="color: #374151;">
                  <li><strong>Location:</strong> ${data.location || 'Unknown'}</li>
                  <li><strong>Tyres Detected:</strong> ${data.tyreCount || 'Multiple'}</li>
                  <li><strong>Detection Method:</strong> QR Code Scan</li>
                  <li><strong>Status:</strong> Investigation Required</li>
                </ul>
              </div>
              
              <p>Our system has detected potential illegal tyre dumping. The registered owner and relevant authorities have been notified.</p>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://tlrs.lovable.app/dashboard" style="background: #dc2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">View Details</a>
              </div>
            </div>
          </div>
        `;
        break;

      case 'compliance':
        subject = "TLRS Compliance Report Generated";
        html = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); padding: 40px; color: white; text-align: center;">
              <h1 style="margin: 0; font-size: 28px;">📊 Compliance Report</h1>
              <p style="margin: 10px 0 0; font-size: 16px;">Your stewardship data is ready</p>
            </div>
            <div style="padding: 40px; background: #f8f9fa;">
              <h2>Hello ${data.name || data.businessName}!</h2>
              <p>Your latest compliance report has been generated and is ready for download.</p>
              
              <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; margin: 20px 0;">
                <h3 style="color: #1d4ed8; margin-top: 0;">Report Summary:</h3>
                <ul style="color: #374151;">
                  <li><strong>Tyres Tracked:</strong> ${data.tyreCount || 'N/A'}</li>
                  <li><strong>Recovery Rate:</strong> 95%</li>
                  <li><strong>Compliance Status:</strong> ✅ Approved</li>
                </ul>
              </div>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://tlrs.lovable.app/reports" style="background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">Download Report</a>
              </div>
            </div>
          </div>
        `;
        break;

      case 'bulk_upload':
        subject = data.uploadStatus === 'success' ? "✅ Bulk Upload Completed" : "⚠️ Bulk Upload Issues";
        html = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: ${data.uploadStatus === 'success' ? '#22c55e' : '#f59e0b'}; padding: 40px; color: white; text-align: center;">
              <h1 style="margin: 0; font-size: 28px;">${data.uploadStatus === 'success' ? '✅' : '⚠️'} Bulk Upload ${data.uploadStatus === 'success' ? 'Complete' : 'Report'}</h1>
              <p style="margin: 10px 0 0; font-size: 16px;">Your bulk tyre upload has been processed</p>
            </div>
            <div style="padding: 40px; background: #f8f9fa;">
              <h2>Upload Summary</h2>
              
              <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid ${data.uploadStatus === 'success' ? '#22c55e' : '#f59e0b'}; margin: 20px 0;">
                <ul style="color: #374151;">
                  <li><strong>Total Tyres:</strong> ${data.tyreCount || 0}</li>
                  <li><strong>Status:</strong> ${data.uploadStatus === 'success' ? 'Successfully Processed' : 'Completed with Issues'}</li>
                  ${data.errorCount ? `<li><strong>Errors:</strong> ${data.errorCount} records need attention</li>` : ''}
                </ul>
              </div>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://tlrs.lovable.app/tyre-management" style="background: ${data.uploadStatus === 'success' ? '#22c55e' : '#f59e0b'}; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">View Details</a>
              </div>
            </div>
          </div>
        `;
        break;

      default:
        throw new Error('Invalid notification type');
    }

    const emailResponse = await resend.emails.send({
      from: "Global Tyres <info@globaltyres.org>",
      to: [to],
      subject,
      html,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);