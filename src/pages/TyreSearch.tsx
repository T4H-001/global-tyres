import { useEffect, useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Download, Eye } from "lucide-react";
import { useDemoMode } from "@/hooks/useDemoMode";
import { tyreService, TyreRegistration } from "@/services/tyreService";
import Papa from "papaparse";

// Display type for search results
type DisplayTyre = {
  id: string;
  manufacturer?: string;
  size?: string;
  status: string;
  location?: string;
  lastUpdated?: string;
  dotCode?: string;
  serial?: string;
};

export const TyreSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const demo = useDemoMode();
  const [items, setItems] = useState<DisplayTyre[]>([]);

  useEffect(() => {
    document.title = "Search Tyres | TLRS";
  }, []);

  // Default mock data
  const defaultMock: DisplayTyre[] = [
    { id: "TYR-001234", manufacturer: "Michelin", size: "205/55R16", status: "In Use", location: "Sydney, AU", lastUpdated: "2024-08-11", dotCode: "DOT-4A3Y-1234-2525", serial: "TYR-001234" },
    { id: "TYR-001235", manufacturer: "Bridgestone", size: "225/50R17", status: "Collected", location: "Melbourne, AU", lastUpdated: "2024-08-10", dotCode: "DOT-B5K2-5678-1523", serial: "TYR-001235" },
    { id: "TYR-001236", manufacturer: "Goodyear", size: "195/65R15", status: "Recycled", location: "Brisbane, AU", lastUpdated: "2024-08-09", dotCode: "DOT-G7X9-9012-3421", serial: "TYR-001236" },
  ];

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      if (!demo.active) {
        setItems(defaultMock);
        return;
      }
      // In demo mode, pull live data from the sample business
      const businessId = '11111111-1111-1111-1111-111111111111';
      const { tyres } = await tyreService.getBusinessTyresPaginated(businessId, 1, 50);
      if (cancelled) return;
      if (!tyres || tyres.length === 0) {
        setItems(defaultMock);
        return;
      }
      const mapped: DisplayTyre[] = tyres.map((t: TyreRegistration) => ({
        id: t.id || t.tyre_serial,
        manufacturer: t.brand || undefined,
        size: t.size || undefined,
        status: t.status === 'active' ? 'In Use' : t.status.charAt(0).toUpperCase() + t.status.slice(1),
        location: [t.location_postcode, t.location_state].filter(Boolean).join(', '),
        lastUpdated: t.install_date || t.manufacture_date,
        dotCode: t.dot_code,
        serial: t.tyre_serial,
      }));
      setItems(mapped);
    };
    load();
    return () => { cancelled = true; };
  }, [demo.active]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New": return "bg-primary hover:bg-primary/80";
      case "In Use": return "bg-success hover:bg-success/80";
      case "Collected": return "bg-warning hover:bg-warning/80";
      case "Recycled": return "bg-accent hover:bg-accent/80";
      case "Disposed": return "bg-destructive hover:bg-destructive/80";
      default: return "";
    }
  };

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesSearch = !searchQuery || 
        item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.dotCode?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.serial?.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesStatus = statusFilter === "all" || item.status === statusFilter;
      
      const matchesLocation = locationFilter === "all" || 
        item.location?.toLowerCase().includes(locationFilter.toLowerCase());
      
      return matchesSearch && matchesStatus && matchesLocation;
    });
  }, [items, searchQuery, statusFilter, locationFilter]);

  const handleExport = () => {
    if (filteredItems.length === 0) return;
    
    const csvData = filteredItems.map(item => ({
      ID: item.id,
      Serial: item.serial || '',
      Manufacturer: item.manufacturer || '',
      Size: item.size || '',
      Status: item.status,
      Location: item.location || '',
      'Last Updated': item.lastUpdated || '',
      'DOT Code': item.dotCode || ''
    }));
    
    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `tyre-search-results-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
            <Search className="h-8 w-8 text-primary" />
            Search Tyres
          </h1>
          <p className="text-muted-foreground">Find and track tyres in the system</p>
        </div>
        <Button 
          variant="outline" 
          className="flex items-center gap-2"
          onClick={handleExport}
          disabled={filteredItems.length === 0}
        >
          <Download className="h-4 w-4" />
          Export Results
        </Button>
      </div>

      {/* Search Filters */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Search Filters</CardTitle>
          <CardDescription>Use filters to find specific tyres</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="search">Search by ID or DOT Code</Label>
              <Input
                id="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="TYR-001234 or DOT-..."
                className="border-input focus:ring-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="border-input focus:ring-primary">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="New">New</SelectItem>
                  <SelectItem value="In Use">In Use</SelectItem>
                  <SelectItem value="Collected">Collected</SelectItem>
                  <SelectItem value="Recycled">Recycled</SelectItem>
                  <SelectItem value="Disposed">Disposed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="border-input focus:ring-primary">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="sydney">Sydney, AU</SelectItem>
                  <SelectItem value="melbourne">Melbourne, AU</SelectItem>
                  <SelectItem value="brisbane">Brisbane, AU</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-end">
              <Button className="w-full bg-gradient-primary hover:opacity-90">
                <Filter className="mr-2 h-4 w-4" />
                Apply Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Search Results</CardTitle>
          <CardDescription>Found {filteredItems.length} tyres matching your criteria</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredItems.map((tyre) => (
              <div key={tyre.id} className="flex items-center justify-between p-4 border border-border rounded-lg bg-gradient-earth">
                <div className="flex items-center space-x-6">
                  <div>
                    <p className="font-bold text-foreground">{tyre.serial || tyre.id}</p>
                    <p className="text-sm text-muted-foreground">DOT: {tyre.dotCode || '—'}</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{tyre.manufacturer || '—'}</p>
                    <p className="text-sm text-muted-foreground">Size: {tyre.size || '—'}</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{tyre.location || '—'}</p>
                    <p className="text-sm text-muted-foreground">Updated: {tyre.lastUpdated ? new Date(tyre.lastUpdated).toLocaleDateString() : '—'}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge className={getStatusColor(tyre.status)}>
                    {tyre.status}
                  </Badge>
                  <Button variant="outline" size="sm" asChild>
                    <a href={`/track/${encodeURIComponent(tyre.serial || tyre.id)}`}>
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TyreSearch;
