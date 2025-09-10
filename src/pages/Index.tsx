import { useEffect, Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import ContactSection from "@/components/ContactSection";

// Lazy load non-critical components
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const TrustedPartners = lazy(() => import("@/components/TrustedPartners"));

const ComponentLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollToId = params.get("scrollTo");
    if (scrollToId) {
      const targetElement = document.getElementById(scrollToId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", window.location.pathname);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <Suspense fallback={<ComponentLoader />}>
        <TrustedPartners />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <ServicesSection />
      </Suspense>
      <WhyChooseUsSection />
      <VisionMissionSection />
      <ContactSection />
    </div>
  );
};

export default Index;
