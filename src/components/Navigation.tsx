import { Button } from "@/components/ui/button";
import { Plus, Search, BarChart3, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              TLRS
            </Link>
            <span className="ml-2 text-sm text-muted-foreground">
              Tyre Lifecycle Registration System
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <Button 
                variant={isActive("/dashboard") ? "default" : "ghost"}
                size="sm"
                className="flex items-center gap-2"
              >
                <BarChart3 className="h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            
            <Link to="/register">
              <Button 
                variant={isActive("/register") ? "default" : "ghost"}
                size="sm"
                className="flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Register Tyre
              </Button>
            </Link>
            
            <Link to="/search">
              <Button 
                variant={isActive("/search") ? "default" : "ghost"}
                size="sm"
                className="flex items-center gap-2"
              >
                <Search className="h-4 w-4" />
                Search
              </Button>
            </Link>
            
            <Link to="/demos">
              <Button 
                variant={isActive("/demos") ? "default" : "ghost"}
                size="sm"
                className="flex items-center gap-2"
              >
                Demos
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button 
                variant={isActive("/contact") ? "default" : "ghost"}
                size="sm"
                className="flex items-center gap-2"
              >
                Help
              </Button>
            </Link>
            
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};