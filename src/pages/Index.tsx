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
