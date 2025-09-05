import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import TrustedPartners from "@/components/TrustedPartners";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollToId = params.get("scrollTo");
    if (scrollToId) {
      const targetElement = document.getElementById(scrollToId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        // Clean up the URL after scrolling
        window.history.replaceState(null, "", window.location.pathname);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TrustedPartners />
      <ServicesSection />
      <WhyChooseUsSection />
      <VisionMissionSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
