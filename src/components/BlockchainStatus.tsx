import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Link as LinkIcon, Clock, CheckCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface BlockchainAnchor {
  id: string;
  batch_id: string;
  merkle_root: string;
  transaction_hash?: string;
  block_number?: number;
  chain_id: number;
  status: 'pending' | 'confirmed' | 'failed';
  anchor_date: string;
}

export default function BlockchainStatus() {
  const [anchors, setAnchors] = useState<BlockchainAnchor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnchors();
  }, []);

  const fetchAnchors = async () => {
    try {
      const { data, error } = await supabase
        .from('blockchain_anchors')
        .select('*')
        .order('anchor_date', { ascending: false })
        .limit(5);

      if (error) throw error;
      setAnchors((data as BlockchainAnchor[]) || []);
    } catch (error) {
      console.error('Error fetching blockchain anchors:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="h-4 w-4 text-success" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-warning" />;
      case 'failed':
        return <Shield className="h-4 w-4 text-destructive" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'default';
      case 'pending':
        return 'secondary';
      case 'failed':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  const openBlockExplorer = (txHash: string, chainId: number) => {
    if (chainId === 80002) { // Polygon Amoy testnet
      window.open(`https://amoy.polygonscan.com/tx/${txHash}`, '_blank');
    }
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Blockchain Security
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-2">
            <div className="h-4 bg-muted rounded w-3/4"></div>
            <div className="h-4 bg-muted rounded w-1/2"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Tamper-Evident Ledger
          <Badge variant="outline" className="ml-auto">
            Beta
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-muted-foreground">
          Event hashes are anchored to Polygon testnet for tamper-evidence
        </div>
        
        {anchors.length === 0 ? (
          <div className="text-center py-4 text-muted-foreground">
            No blockchain anchors yet
          </div>
        ) : (
          <div className="space-y-3">
            {anchors.map((anchor) => (
              <div 
                key={anchor.id}
                className="flex items-center justify-between p-3 border border-border rounded-lg bg-muted/30"
              >
                <div className="flex items-center gap-3">
                  {getStatusIcon(anchor.status)}
                  <div>
                    <div className="font-medium text-sm">
                      {anchor.batch_id}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(anchor.anchor_date).toLocaleString()}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Badge variant={getStatusColor(anchor.status) as any}>
                    {anchor.status}
                  </Badge>
                  
                  {anchor.transaction_hash && anchor.status === 'confirmed' && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => openBlockExplorer(anchor.transaction_hash!, anchor.chain_id)}
                      className="h-8 w-8 p-0"
                    >
                      <LinkIcon className="h-3 w-3" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="pt-2 border-t border-border">
          <div className="text-xs text-muted-foreground">
            Using SHA-256 hashing with daily batch anchoring to Polygon Amoy testnet
          </div>
        </div>
      </CardContent>
    </Card>
  );
}