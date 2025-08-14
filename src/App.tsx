
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TLRS from "./pages/TLRS";
import Auth from "./pages/Auth";
import FAQ from "./pages/FAQ";
import Onboarding from "./pages/Onboarding";
import TyreManagement from "./pages/TyreManagement";
import PaymentSuccess from "./pages/PaymentSuccess";
import Demos from "./pages/Demos";
import Dashboard from "./pages/Dashboard";
import RetailerPortal from "./pages/RetailerPortal";
import RetailerOnboarding from "./pages/RetailerOnboarding";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import TyreSearch from "./pages/TyreSearch";
import TyreTrack from "./pages/TyreTrack";
import RequireAuth from "@/components/auth/RequireAuth";
import RedirectIfAuthed from "@/components/auth/RedirectIfAuthed";


const queryClient = new QueryClient();

const RedirectTyresRegister = () => {
  const location = useLocation();
  const qs = new URLSearchParams(location.search);
  qs.set('tab', 'register');
  return <Navigate to={`/tyres?${qs.toString()}`} replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
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
          <Route path="/register/:retailerCode?" element={<Onboarding />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/search" element={<TyreSearch />} />
          <Route path="/track/:tyreSerial" element={<TyreTrack />} />
          <Route path="/demos" element={<Demos />} />
          <Route path="/tyres/register" element={<RedirectTyresRegister />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
