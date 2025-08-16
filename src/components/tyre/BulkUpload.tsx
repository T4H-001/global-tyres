import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/hooks/use-toast';
import Papa from 'papaparse';
import { supabase } from '@/integrations/supabase/client';
import { EmailService } from '@/services/emailService';

interface BulkUploadProps {
  businessId: string;
  onComplete?: () => void;
}

const exampleRows = [
  {
    tyre_serial: 'BULK-00001',
    dot_code: 'DOT123456',
    brand: 'Michelin',
    size: '215/60R16',
    manufacture_date: '2023-06-01',
    install_date: '2024-01-15',
    vehicle_registration: 'ABC123',
    location_state: 'NSW',
    location_postcode: '2000',
    status: 'active',
  },
  {
    tyre_serial: 'BULK-00002',
    dot_code: 'DOT654321',
    brand: 'Bridgestone',
    size: '225/55R18',
    manufacture_date: '2022-11-20',
    install_date: '2023-12-05',
    vehicle_registration: 'XYZ789',
    location_state: 'VIC',
    location_postcode: '3000',
    status: 'active',
  },
];

export default function BulkUpload({ businessId, onComplete }: BulkUploadProps) {
  const [fileName, setFileName] = useState<string>('');
  const [rowCount, setRowCount] = useState<number>(0);
  const [uploading, setUploading] = useState<boolean>(false);
  const [preview, setPreview] = useState<any[]>([]);
  const [rows, setRows] = useState<any[]>([]);
  const [uploadStats, setUploadStats] = useState<any>(null);

  const handleFile = (file: File) => {
    setFileName(file.name);
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const rows = results.data as any[];
        setRowCount(rows.length);
        setRows(rows);
        setPreview(rows.slice(0, 5));
      },
      error: () => {
        toast({ title: 'Parse error', description: 'Could not parse CSV file', variant: 'destructive' });
      },
    });
  };

  const uploadRecords = async () => {
    try {
      setUploading(true);
      // Re-parse the preview? Better: ask user to confirm and upload the original file via formData.
      // For simplicity we will upload the previewed rows (sufficient for dev validation), and document CSV POST support.
      const { data, error } = await supabase.functions.invoke('tyres-bulk-upload', {
        body: {
          businessId,
          source: 'bulk-upload-ui',
          records: rows,
        },
      });

      if (error) throw error;

      setUploadStats(data);
      toast({ 
        title: 'Bulk upload complete', 
        description: `Processed ${data.processed}, inserted ${data.inserted}, failed ${data.failed}. Environmental impact calculated.` 
      });
      if (data.errors?.length) {
        console.warn('Bulk upload errors', data.errors);
      }

      // Send bulk upload notification email
      try {
        const uploadStatus = data.failed > 0 ? 'error' : 'success';
        // Use a default email for demo - in production this would come from user session
        await EmailService.sendBulkUploadEmail(
          'troy.latter@gmail.com', 
          data.inserted, 
          uploadStatus, 
          data.failed
        );
      } catch (emailError) {
        console.error('Failed to send bulk upload email:', emailError);
      }

      onComplete?.();
    } catch (e: any) {
      toast({ title: 'Upload failed', description: e.message || 'Unknown error', variant: 'destructive' });
    } finally {
      setUploading(false);
    }
  };

  const downloadTemplate = () => {
    const csv = Papa.unparse(exampleRows);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'tyres-bulk-template.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bulk Upload Tyres (CSV)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <Input type="file" accept=".csv" onChange={(e) => e.target.files && handleFile(e.target.files[0])} />
          <Button variant="secondary" onClick={downloadTemplate}>Download Template</Button>
        </div>
        {fileName && (
          <p className="text-muted-foreground text-sm">Selected: {fileName} • Rows detected: {rowCount}</p>
        )}

        {preview.length > 0 && (
          <div className="rounded-md border p-3 text-sm">
            <p className="font-medium mb-2">Preview (first 5 rows)</p>
            <pre className="overflow-auto text-xs max-h-64">{JSON.stringify(preview, null, 2)}</pre>
          </div>
        )}

        <div className="flex items-center gap-3">
          <Button onClick={uploadRecords} disabled={uploading || rows.length === 0}>
            {uploading ? 'Uploading…' : 'Start Upload'}
          </Button>
          {uploading && <Progress value={60} className="w-48" />}
        </div>

        {uploadStats && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-medium text-green-800 mb-2">Upload Success!</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Processed:</span> {uploadStats.processed}
              </div>
              <div>
                <span className="font-medium">Inserted:</span> {uploadStats.inserted}
              </div>
              <div>
                <span className="font-medium">Environmental Impact:</span> ~{(uploadStats.inserted * 9).toLocaleString()}kg waste tracked
              </div>
              <div>
                <span className="font-medium">Community Contribution:</span> {uploadStats.inserted} tyres protected from illegal dumping
              </div>
            </div>
          </div>
        )}

        <p className="text-muted-foreground text-xs">
          Tip: You can also POST CSV directly to the API at functions/v1/tyres-bulk-upload with Content-Type: text/csv and ?businessId=…
        </p>
      </CardContent>
    </Card>
  );
}
