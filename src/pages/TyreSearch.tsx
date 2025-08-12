import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Download, Eye } from "lucide-react";

export const TyreSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");

  // Mock data - will be replaced with Supabase queries
  const tyres = [
    { 
      id: "TYR-001234", 
      manufacturer: "Michelin", 
      size: "205/55R16", 
      status: "In Use", 
      location: "Sydney, AU", 
      lastUpdated: "2024-08-11",
      dotCode: "DOT-4A3Y-1234-2525"
    },
    { 
      id: "TYR-001235", 
      manufacturer: "Bridgestone", 
      size: "225/50R17", 
      status: "Collected", 
      location: "Melbourne, AU", 
      lastUpdated: "2024-08-10",
      dotCode: "DOT-B5K2-5678-1523"
    },
    { 
      id: "TYR-001236", 
      manufacturer: "Goodyear", 
      size: "195/65R15", 
      status: "Recycled", 
      location: "Brisbane, AU", 
      lastUpdated: "2024-08-09",
      dotCode: "DOT-G7X9-9012-3421"
    }
  ];

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
        <Button variant="outline" className="flex items-center gap-2">
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
          <CardDescription>Found {tyres.length} tyres matching your criteria</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tyres.map((tyre) => (
              <div key={tyre.id} className="flex items-center justify-between p-4 border border-border rounded-lg bg-gradient-earth">
                <div className="flex items-center space-x-6">
                  <div>
                    <p className="font-bold text-foreground">{tyre.id}</p>
                    <p className="text-sm text-muted-foreground">DOT: {tyre.dotCode}</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{tyre.manufacturer}</p>
                    <p className="text-sm text-muted-foreground">Size: {tyre.size}</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{tyre.location}</p>
                    <p className="text-sm text-muted-foreground">Updated: {tyre.lastUpdated}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge className={getStatusColor(tyre.status)}>
                    {tyre.status}
                  </Badge>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
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