
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { TenantProvider } from "@/contexts/TenantContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TLRS from "./pages/TLRS";
import Auth from "./pages/Auth";
import FAQ from "./pages/FAQ";
import Onboarding from "./pages/Onboarding";
import TyreManagement from "./pages/TyreManagement";
import PaymentSuccess from "./pages/PaymentSuccess";

import Dashboard from "./pages/Dashboard";
import RetailerPortal from "./pages/RetailerPortal";
import RetailerOnboarding from "./pages/RetailerOnboarding";
import RetailerDashboard from "./pages/dashboards/RetailerDashboard";
import RecyclerDashboard from "./pages/dashboards/RecyclerDashboard";
import GovernmentDashboard from "./pages/dashboards/GovernmentDashboard";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import TyreSearch from "./pages/TyreSearch";
import TyreTrack from "./pages/TyreTrack";
import RequireAuth from "@/components/auth/RequireAuth";
import RedirectIfAuthed from "@/components/auth/RedirectIfAuthed";
import AdminDemo from "./pages/AdminDemo";
import AdvisoryBoard from "./pages/AdvisoryBoard";
import Demos from "./pages/Demos";

const queryClient = new QueryClient();

const RedirectTyresRegister = () => {
  const location = useLocation();
  const qs = new URLSearchParams(location.search);
  qs.set('tab', 'register');
  return <Navigate to={`/tyres?${qs.toString()}`} replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TenantProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/onboarding/retailer" element={<RetailerOnboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/app" element={<TLRS />} />
          <Route path="/tyres" element={<TyreManagement />} />
          <Route path="/retailer" element={<RetailerPortal />} />
          <Route path="/retailer-dashboard" element={<RetailerDashboard />} />
          <Route path="/recycler-dashboard" element={<RecyclerDashboard />} />
          <Route path="/government-dashboard" element={<GovernmentDashboard />} />
          <Route path="/register/:retailerCode?" element={<Onboarding />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/search" element={<TyreSearch />} />
          <Route path="/track/:tyreSerial" element={<TyreTrack />} />
          <Route path="/board" element={<AdvisoryBoard />} />
          <Route path="/demos" element={<Demos />} />
          
          {/* Route aliases for better UX */}
          <Route path="/tlrs" element={<Navigate to="/app" replace />} />
          <Route path="/manage" element={<Navigate to="/tyres" replace />} />
          
          <Route path="/tyres/register" element={<RedirectTyresRegister />} />
          {/* Protected admin routes */}
          <Route element={<RequireAuth />}>
            <Route path="/admin/demo" element={<AdminDemo />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </BrowserRouter>
      </TooltipProvider>
    </TenantProvider>
  </QueryClientProvider>
);

export default App;
