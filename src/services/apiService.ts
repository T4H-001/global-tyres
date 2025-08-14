import { supabase } from '@/integrations/supabase/client';

// Cache duration in milliseconds (1 hour)
const CACHE_DURATION = 60 * 60 * 1000;

export interface LocationData {
  country: string;
  state: string;
  city: string;
  postcode: string;
  coordinates?: { lat: number; lng: number };
}

export interface WeatherData {
  temperature: number;
  humidity: number;
  conditions: string;
  location: string;
}

export interface VehicleData {
  make: string;
  model: string;
  year: string;
  tyreSize: string;
}

class ApiService {
  private async cacheApiData(source: string, endpoint: string, key: string, data: any) {
    const expires = new Date(Date.now() + CACHE_DURATION);
    
    await supabase
      .from('api_data_cache')
      .upsert({
        api_source: source,
        endpoint,
        cache_key: key,
        data,
        expires_at: expires.toISOString()
      }, {
        onConflict: 'cache_key'
      });
  }

  private async getCachedData(key: string): Promise<any> {
    const { data } = await supabase
      .from('api_data_cache')
      .select('data, expires_at')
      .eq('cache_key', key)
      .single();

    if (data && new Date(data.expires_at) > new Date()) {
      return data.data as any;
    }
    
    return null;
  }

  // OpenStreetMap Nominatim API for location validation
  async validateLocation(address: string): Promise<LocationData | null> {
    const cacheKey = `location_${encodeURIComponent(address)}`;
    const cached = await this.getCachedData(cacheKey);
    if (cached) return cached;

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&countrycodes=au&limit=1`
      );
      
      if (!response.ok) throw new Error('Failed to validate location');
      
      const results = await response.json();
      
      if (results.length === 0) return null;
      
      const result = results[0];
      const locationData: LocationData = {
        country: 'Australia',
        state: result.display_name.split(',').slice(-3, -2)[0]?.trim() || '',
        city: result.display_name.split(',')[0] || '',
        postcode: result.display_name.match(/\d{4}/)?.[0] || '',
        coordinates: {
          lat: parseFloat(result.lat),
          lng: parseFloat(result.lon)
        }
      };

      await this.cacheApiData('nominatim', 'search', cacheKey, locationData);
      return locationData;
    } catch (error) {
      console.error('Location validation failed:', error);
      return null;
    }
  }

  // IP Geolocation for user location detection
  async getUserLocation(): Promise<LocationData | null> {
    const cacheKey = 'user_location';
    const cached = await this.getCachedData(cacheKey);
    if (cached) return cached;

    try {
      const response = await fetch('https://ipwho.is/');
      if (!response.ok) throw new Error('Failed to get user location');

      const data = await response.json();
      if (data.success === false) return null;

      const locationData: LocationData = {
        country: data.country || '',
        state: data.region || '',
        city: data.city || '',
        postcode: data.postal || '',
        coordinates: {
          lat: typeof data.latitude === 'number' ? data.latitude : parseFloat(data.latitude),
          lng: typeof data.longitude === 'number' ? data.longitude : parseFloat(data.longitude)
        }
      };

      await this.cacheApiData('ipwhois', 'root', cacheKey, locationData);
      return locationData;
    } catch (error) {
      console.error('User location detection failed:', error);
      return null;
    }
  }

  // OpenWeatherMap API for environmental tracking
  async getWeatherData(location: string): Promise<WeatherData | null> {
    const cacheKey = `weather_${encodeURIComponent(location)}`;
    const cached = await this.getCachedData(cacheKey);
    if (cached) return cached;

    try {
      // Note: This requires an API key for production use
      // For now, return mock data for Australian locations
      const mockWeatherData: WeatherData = {
        temperature: Math.floor(Math.random() * 20) + 15, // 15-35°C
        humidity: Math.floor(Math.random() * 40) + 40, // 40-80%
        conditions: ['sunny', 'cloudy', 'rainy'][Math.floor(Math.random() * 3)],
        location
      };

      await this.cacheApiData('openweather', 'current', cacheKey, mockWeatherData);
      return mockWeatherData;
    } catch (error) {
      console.error('Weather data fetch failed:', error);
      return null;
    }
  }

  // Random User API for testing Australian data
  async generateTestUser() {
    try {
      const response = await fetch('https://randomuser.me/api/?nat=au');
      
      if (!response.ok) throw new Error('Failed to generate test user');
      
      const data = await response.json();
      return data.results[0];
    } catch (error) {
      console.error('Test user generation failed:', error);
      return null;
    }
  }

  // Vehicle data lookup (mock implementation)
  async getVehicleData(registration: string): Promise<VehicleData | null> {
    const cacheKey = `vehicle_${registration}`;
    const cached = await this.getCachedData(cacheKey);
    if (cached) return cached;

    try {
      // Mock vehicle data - in production, this would call DriveRightData or Vehicle Logic APIs
      const mockVehicles = [
        { make: 'Toyota', model: 'Camry', year: '2020', tyreSize: '215/60R16' },
        { make: 'Ford', model: 'Ranger', year: '2021', tyreSize: '265/65R17' },
        { make: 'Holden', model: 'Commodore', year: '2018', tyreSize: '225/55R18' },
        { make: 'Mazda', model: 'CX-5', year: '2022', tyreSize: '225/55R19' },
        { make: 'Subaru', model: 'Forester', year: '2019', tyreSize: '225/60R17' }
      ];

      const vehicleData = mockVehicles[Math.floor(Math.random() * mockVehicles.length)];
      
      await this.cacheApiData('vehicle-lookup', 'registration', cacheKey, vehicleData);
      return vehicleData;
    } catch (error) {
      console.error('Vehicle data lookup failed:', error);
      return null;
    }
  }

  // TSA factsheet data import helper
  async importTSAData() {
    // This would import the 537,000 tonnes EOL tyre data from TSA
    // For now, we'll create some sample data
    const tsaData = {
      totalWasteGenerated: 537000, // tonnes per year
      recoveryRate: 0.75, // 75% recovery rate
      keyStates: ['QLD', 'NSW', 'VIC', 'WA', 'SA'],
      wasteByState: {
        'QLD': 95000,
        'NSW': 180000,
        'VIC': 140000,
        'WA': 75000,
        'SA': 47000
      }
    };

    await this.cacheApiData('tsa', 'factsheet', 'tsa_annual_data', tsaData);
    return tsaData;
  }

  // Universities API (Hipo Labs) - AU universities
  async getAustralianUniversities(name?: string): Promise<any[] | null> {
    const cacheKey = `unis_au_${name ? name.toLowerCase() : 'all'}`;
    const cached = await this.getCachedData(cacheKey);
    if (cached) return cached;

    try {
      const url = `https://universities.hipolabs.com/search?country=Australia${name ? `&name=${encodeURIComponent(name)}` : ''}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch universities');
      const data = await res.json();
      await this.cacheApiData('hipolabs', 'universities', cacheKey, data);
      return data;
    } catch (error) {
      console.error('Universities fetch failed:', error);
      return null;
    }
  }

  // JSONPlaceholder mock users
  async getMockUsers(): Promise<any[] | null> {
    const cacheKey = 'jsonplaceholder_users';
    const cached = await this.getCachedData(cacheKey);
    if (cached) return cached;

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) throw new Error('Failed to fetch mock users');
      const data = await res.json();
      await this.cacheApiData('jsonplaceholder', 'users', cacheKey, data);
      return data;
    } catch (error) {
      console.error('Mock users fetch failed:', error);
      return null;
    }
  }

  // REST Countries - country info
  async getCountryInfo(country: string): Promise<any[] | null> {
    const cacheKey = `country_${country.toLowerCase()}`;
    const cached = await this.getCachedData(cacheKey);
    if (cached) return cached;

    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(country)}`);
      if (!res.ok) throw new Error('Failed to fetch country info');
      const data = await res.json();
      await this.cacheApiData('restcountries', 'name', cacheKey, data);
      return data;
    } catch (error) {
      console.error('Country info fetch failed:', error);
      return null;
    }
  }

  // Supabase: Demo helpers
  async getLocalRetailersByArea(suburb: string, state: string): Promise<Array<{ name: string; website?: string; suburb?: string; state?: string; logo_url?: string }> | null> {
    try {
      const { data, error } = await supabase
        .from('lrs_retailers')
        .select('name, website, suburb, state, logo_url')
        .eq('suburb', suburb)
        .eq('state', state)
        .order('name');
      if (error) throw error;
      return data || [];
    } catch (e) {
      console.error('getLocalRetailersByArea failed:', e);
      return null;
    }
  }
}

export const apiService = new ApiService();