import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QrCode, Radio, Zap, Factory } from "lucide-react";

interface IdentificationMethodSelectorProps {
  value: string;
  onValueChange: (value: string) => void;
}

export const IdentificationMethodSelector = ({ value, onValueChange }: IdentificationMethodSelectorProps) => {
  const methods = [
    {
      id: 'serial_qr',
      label: 'Serial Number + QR Code',
      description: 'Traditional method using printed serial number and generated QR code',
      icon: QrCode,
      availability: 'Available Now',
      badge: 'Standard',
      badgeVariant: 'default' as const
    },
    {
      id: 'rfid_tag',
      label: 'RFID Tag',
      description: 'Radio frequency identification tag for automated scanning',
      icon: Radio,
      availability: 'Pilot Program',
      badge: 'Phase 1',
      badgeVariant: 'secondary' as const
    },
    {
      id: 'laser_etched',
      label: 'Laser Etched Code',
      description: 'Permanent laser-etched identification code on tyre sidewall',
      icon: Zap,
      availability: 'Coming Soon',
      badge: 'Phase 2',
      badgeVariant: 'outline' as const
    },
    {
      id: 'oem_stamped',
      label: 'OEM Manufacturer Stamp',
      description: 'Built-in identification code embedded during manufacturing',
      icon: Factory,
      availability: '2026+ Expected',
      badge: 'Phase 4',
      badgeVariant: 'outline' as const
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label className="text-base font-semibold">Identification Method</Label>
        <Badge variant="secondary" className="text-xs">
          Register tyres three ways
        </Badge>
      </div>
      
      <RadioGroup value={value} onValueChange={onValueChange} className="space-y-3">
        {methods.map((method) => {
          const IconComponent = method.icon;
          const isDisabled = method.id === 'laser_etched' || method.id === 'oem_stamped';
          
          return (
            <Card 
              key={method.id} 
              className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                value === method.id ? 'ring-2 ring-primary' : ''
              } ${isDisabled ? 'opacity-60 cursor-not-allowed' : ''}`}
            >
              <div className="flex items-center space-x-3">
                <RadioGroupItem 
                  value={method.id} 
                  id={method.id}
                  disabled={isDisabled}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <IconComponent className="h-5 w-5 text-primary" />
                    <Label 
                      htmlFor={method.id}
                      className={`font-medium cursor-pointer ${isDisabled ? 'cursor-not-allowed' : ''}`}
                    >
                      {method.label}
                    </Label>
                    <Badge variant={method.badgeVariant} className="text-xs">
                      {method.badge}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {method.description}
                  </p>
                  <p className="text-xs text-muted-foreground font-medium">
                    {method.availability}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </RadioGroup>
    </div>
  );
};