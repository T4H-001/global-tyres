import { Button } from "@/components/ui/button";
import { Plus, Search, BarChart3, Settings, Shield } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useDemoMode } from "@/hooks/useDemoMode";
import { Logo } from "@/components/shared/AssetImage";

export const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <Logo className="h-8 w-8" fallbackSrc="/placeholder.svg" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary">TLRS</span>
                <span className="text-xs text-muted-foreground hidden sm:block">
                  Tyre Lifecycle Registration System
                </span>
              </div>
            </Link>
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
            
            {/* Demo-only admin link */}
            {useDemoMode().active && (
              <Link to="/admin/demo">
                <Button 
                  variant={isActive("/admin/demo") ? "default" : "ghost"}
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Shield className="h-4 w-4" />
                  Admin
                </Button>
              </Link>
            )}
            
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