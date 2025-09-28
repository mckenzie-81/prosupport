import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import Contact from "@/pages/Contact";
import PageSkeleton from "@/components/PageSkeleton";

// Lazy load components
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const AboutUsPage = lazy(() => import("./pages/AboutUs"));
const FacilityManagement = lazy(() => import("./pages/FacilityManagement"));
const GeneralSupport = lazy(() => import("./pages/GeneralSupport"));
const MarketEntry = lazy(() => import("./pages/MarketEntry"));
const ProcurementService = lazy(() => import("./pages/ProcurementService"));
const RecruitmentAndPersonnelOutsourcing = lazy(() => import("./pages/RecruitmentAndPersonnelOutsourcing"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

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
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Suspense fallback={<PageSkeleton />}><Index /></Suspense>} />
            <Route path="about" element={<Suspense fallback={<PageSkeleton />}><AboutUsPage /></Suspense>} />
            <Route path="services" element={<Suspense fallback={<PageSkeleton />}><ServicesPage /></Suspense>} />
            <Route path="contact" element={<Contact />} />
            
            {/* Service Routes - FIXED */}
            <Route path="services/facility-management" element={<Suspense fallback={<PageSkeleton />}><FacilityManagement /></Suspense>} />
            <Route path="services/procurement-service" element={<Suspense fallback={<PageSkeleton />}><ProcurementService /></Suspense>} />
            <Route path="services/general-support" element={<Suspense fallback={<PageSkeleton />}><GeneralSupport /></Suspense>} />
            <Route path="services/market-entry" element={<Suspense fallback={<PageSkeleton />}><MarketEntry /></Suspense>} />
            
            {/* MISSING ROUTE - ADD THIS */}
            <Route path="recruitment-and-personnel-outsourcing" element={<Suspense fallback={<PageSkeleton />}><RecruitmentAndPersonnelOutsourcing /></Suspense>} />
            
            {/* Policy Routes */}
            <Route path="privacy-policy" element={<Suspense fallback={<PageSkeleton />}><PrivacyPolicy /></Suspense>} />
            
            <Route path="*" element={<Suspense fallback={<PageSkeleton />}><NotFound /></Suspense>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
