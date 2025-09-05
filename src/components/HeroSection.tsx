import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden text-white"
    >
      {/* Background Image & Overlay */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={heroBackground}
          alt="Modern business setting in Ghana"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fadeUp">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
          The New Standard for
          <span className="block bg-gradient-to-r from-white to-accent-blue bg-clip-text text-transparent mt-2">
            Business Operations
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-10 max-w-3xl mx-auto">
          Prosupport provides the infrastructure and expertise for Ghana's most
          ambitious businesses to achieve excellence and scale.
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="btn-premium text-white font-semibold group" size="lg">
            Partner With Us
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-gray-400 hover:bg-white hover:text-primary-teal transition-colors duration-300"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
