import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import Contact from "@/pages/Contact";

// Lazy load components
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const AboutUsPage = lazy(() => import("./pages/AboutUs"));
const FacilityManagement = lazy(() => import("./pages/FacilityManagement"));
const GeneralSupport = lazy(() => import("./pages/GeneralSupport"));
const MarketEntry = lazy(() => import("./pages/MarketEntry"));
const ProcumentService = lazy(() => import("./pages/ProcumentService"));
const RecruitmentAndPersonnelOutsourcing = lazy(() => import("./pages/RecruitmentAndPersonnelOutsourcing"));


// Lazy load heavy UI components
const ServicesSection = lazy(() => import("./components/ServicesSection"));
const TrustedPartners = lazy(() => import("./components/TrustedPartners"));

const queryClient = new QueryClient();

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/services/facility-management" element={<FacilityManagement />} />
              <Route path="/services/general-support" element={<GeneralSupport />} />
              <Route path="/services/market-entry" element={<MarketEntry />} />
              <Route path="/services/procurement-service" element={<ProcumentService />} />
              <Route path="/recruitment-and-personnel-outsourcing" element={<RecruitmentAndPersonnelOutsourcing />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
