import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { tyreService, TyreRegistration } from '@/services/tyreService';
import { apiService } from '@/services/apiService';
import { QrCode, MapPin, Calendar, Truck } from 'lucide-react';

interface Props {
  businessId: string;
  onRegistrationComplete?: (registration: TyreRegistration) => void;
}

export default function TyreRegistrationForm({ businessId, onRegistrationComplete }: Props) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    tyre_serial: '',
    dot_code: '',
    brand: '',
    size: '',
    manufacture_date: '',
    install_date: '',
    vehicle_registration: '',
    location_state: '',
    location_postcode: ''
  });
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [locationSuggestions, setLocationSuggestions] = useState<any[]>([]);

  const australianStates = [
    'NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'
  ];

  const tyreBrands = [
    'Michelin', 'Bridgestone', 'Goodyear', 'Pirelli', 'Continental',
    'Yokohama', 'Dunlop', 'Toyo', 'Maxxis', 'BFGoodrich', 'Other'
  ];

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.tyre_serial.trim()) {
      errors.tyre_serial = 'Tyre serial number is required';
    }
    
    if (formData.dot_code && !/^DOT[A-Z0-9]{10,12}$/i.test(formData.dot_code)) {
      errors.dot_code = 'DOT code format: DOT followed by 10-12 alphanumeric characters';
    }
    
    if (formData.vehicle_registration && !/^[A-Z0-9]{2,8}$/i.test(formData.vehicle_registration.replace(/\s/g, ''))) {
      errors.vehicle_registration = 'Invalid vehicle registration format';
    }
    
    if (formData.location_postcode && !/^\d{4}$/.test(formData.location_postcode)) {
      errors.location_postcode = 'Postcode must be 4 digits';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear validation error when user starts typing
    if (validationErrors[field]) {
      setValidationErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleLocationValidation = async () => {
    if (formData.location_postcode && formData.location_state) {
      const location = await apiService.validateLocation(
        `${formData.location_postcode}, ${formData.location_state}, Australia`
      );
      
      if (location) {
        toast({
          title: "Location validated",
          description: `${location.city}, ${location.state} ${location.postcode}`
        });
      } else {
        toast({
          title: "Location not found",
          description: "Please check the postcode and state",
          variant: "destructive"
        });
      }
    }
  };

  const handleUseMyLocation = async () => {
    try {
      const loc = await apiService.getUserLocation();
      if (loc) {
        setFormData(prev => ({
          ...prev,
          location_state: loc.state || '',
          location_postcode: loc.postcode || ''
        }));
        toast({
          title: "Location detected",
          description: `${loc.city ? loc.city + ', ' : ''}${loc.state} ${loc.postcode}`
        });
      } else {
        toast({ title: "Unable to detect location", variant: "destructive" });
      }
    } catch (e) {
      toast({ title: "Location error", variant: "destructive" });
    }
  };

  const generateSerialNumber = () => {
    const prefix = formData.brand ? formData.brand.substring(0, 3).toUpperCase() : 'TYR';
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `${prefix}${timestamp}${random}`;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      toast({
        title: "Please fix the validation errors",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      const registrationData: Omit<TyreRegistration, 'id'> = {
        business_id: businessId,
        tyre_serial: formData.tyre_serial.trim(),
        dot_code: formData.dot_code || undefined,
        brand: formData.brand || undefined,
        size: formData.size || undefined,
        manufacture_date: formData.manufacture_date || undefined,
        install_date: formData.install_date || undefined,
        vehicle_registration: formData.vehicle_registration.replace(/\s/g, '') || undefined,
        location_state: formData.location_state || undefined,
        location_postcode: formData.location_postcode || undefined,
        status: 'active'
      };

      const result = await tyreService.registerTyre(registrationData);
      
      if (result) {
        toast({
          title: "Tyre registered successfully",
          description: `QR code generated for tracking: ${result.tyre_serial}`
        });
        
        // Reset form
        setFormData({
          tyre_serial: '',
          dot_code: '',
          brand: '',
          size: '',
          manufacture_date: '',
          install_date: '',
          vehicle_registration: '',
          location_state: '',
          location_postcode: ''
        });
        
        onRegistrationComplete?.(result);
      } else {
        throw new Error('Failed to register tyre');
      }
    } catch (error: any) {
      console.error('Registration error:', error);
      toast({
        title: "Registration failed",
        description: error.message || "Please try again",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <QrCode className="h-5 w-5 text-primary" />
          Register New Tyre
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Serial Number */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Tyre Serial Number *
          </label>
          <div className="flex gap-2">
            <Input
              value={formData.tyre_serial}
              onChange={(e) => handleInputChange('tyre_serial', e.target.value)}
              placeholder="Enter or generate serial number"
              className={validationErrors.tyre_serial ? 'border-red-500' : ''}
            />
            <Button
              type="button"
              variant="outline"
              onClick={() => handleInputChange('tyre_serial', generateSerialNumber())}
            >
              Generate
            </Button>
          </div>
          {validationErrors.tyre_serial && (
            <p className="text-red-500 text-sm mt-1">{validationErrors.tyre_serial}</p>
          )}
        </div>

        {/* DOT Code */}
        <div>
          <label className="block text-sm font-medium mb-2">
            DOT Code (optional)
          </label>
          <Input
            value={formData.dot_code}
            onChange={(e) => handleInputChange('dot_code', e.target.value)}
            placeholder="e.g., DOT1A2B3C4D567"
            className={validationErrors.dot_code ? 'border-red-500' : ''}
          />
          {validationErrors.dot_code && (
            <p className="text-red-500 text-sm mt-1">{validationErrors.dot_code}</p>
          )}
        </div>

        {/* Brand and Size */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Brand
            </label>
            <select
              value={formData.brand}
              onChange={(e) => handleInputChange('brand', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select brand</option>
              {tyreBrands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Size
            </label>
            <Input
              value={formData.size}
              onChange={(e) => handleInputChange('size', e.target.value)}
              placeholder="e.g., 215/60R16"
            />
          </div>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2 flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              Manufacture Date
            </label>
            <Input
              type="date"
              value={formData.manufacture_date}
              onChange={(e) => handleInputChange('manufacture_date', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              Install Date
            </label>
            <Input
              type="date"
              value={formData.install_date}
              onChange={(e) => handleInputChange('install_date', e.target.value)}
            />
          </div>
        </div>

        {/* Vehicle Registration */}
        <div>
          <label className="block text-sm font-medium mb-2 flex items-center gap-1">
            <Truck className="h-4 w-4" />
            Vehicle Registration (optional)
          </label>
          <Input
            value={formData.vehicle_registration}
            onChange={(e) => handleInputChange('vehicle_registration', e.target.value)}
            placeholder="e.g., ABC123"
            className={validationErrors.vehicle_registration ? 'border-red-500' : ''}
          />
          {validationErrors.vehicle_registration && (
            <p className="text-red-500 text-sm mt-1">{validationErrors.vehicle_registration}</p>
          )}
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium mb-2 flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            Location (optional)
          </label>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <select
              value={formData.location_state}
              onChange={(e) => handleInputChange('location_state', e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select state</option>
              {australianStates.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>

            <Input
              value={formData.location_postcode}
              onChange={(e) => handleInputChange('location_postcode', e.target.value)}
              placeholder="Postcode"
              className={validationErrors.location_postcode ? 'border-red-500' : ''}
            />

            <Button
              type="button"
              variant="outline"
              onClick={handleUseMyLocation}
            >
              Use my location
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={handleLocationValidation}
              disabled={!formData.location_postcode || !formData.location_state}
            >
              Validate
            </Button>
          </div>
          {validationErrors.location_postcode && (
            <p className="text-red-500 text-sm mt-1">{validationErrors.location_postcode}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full"
        >
          {loading ? "Registering..." : "Register Tyre"}
        </Button>
      </CardContent>
    </Card>
  );
}