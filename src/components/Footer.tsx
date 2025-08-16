import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-primary">TLRS</h3>
              <span className="ml-2 text-sm text-muted-foreground">
                Tyre Lifecycle Registration System
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Comprehensive tyre lifecycle tracking and recycling system helping combat illegal dumping 
              and promote environmental responsibility worldwide.
            </p>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@globaltyres.org</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>HQ - Sydney, Australia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-muted-foreground hover:text-primary transition-colors">
                  Register Tyre
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-muted-foreground hover:text-primary transition-colors">
                  Search Tyres
                </Link>
              </li>
              <li>
                <Link to="/retailer" className="text-muted-foreground hover:text-primary transition-colors">
                  Retailer Portal
                </Link>
              </li>
              <li>
                <Link to="/board" className="text-muted-foreground hover:text-primary transition-colors">
                  Advisory Board
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 Tech 4 Humanity. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/contact">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Get Help
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};