import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Professional business environment in Ghana"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-teal/90 via-primary-teal/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fadeUp">
            {/* Trust Indicators */}
            <div className="flex items-center space-x-2 mb-6 animate-scaleIn">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold-accent text-gold-accent" />
                ))}
              </div>
              <span className="text-white/90 text-sm font-medium">
                Trusted by 500+ Ghanaian Businesses
              </span>
            </div>

            {/* Main Headlines */}
            <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-6">
              Ghana's Premier
              <span className="block font-bold gradient-text bg-gradient-to-r from-white to-accent-blue bg-clip-text text-transparent">
                Business Solutions
              </span>
              Partner
            </h1>

            <h2 className="text-2xl lg:text-3xl font-medium text-white/90 mb-8">
              Transforming Operations. Accelerating Growth. Delivering Excellence.
            </h2>

            <p className="text-lg text-white/80 mb-12 leading-relaxed max-w-2xl">
              When success demands precision, businesses across Ghana trust Prosupport Services. 
              From comprehensive facility management to strategic market entry, we don't just 
              provide services—we forge partnerships that drive results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="btn-premium text-white font-semibold group" size="lg">
                Partner With Excellence Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-gray-400 hover:bg-white hover:text-primary-teal transition-colors duration-300"
              >
                View Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-white/70 text-sm">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">10+</div>
                <div className="text-white/70 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-white/70 text-sm">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Side - Could be expanded with 3D animations in future */}
          <div className="hidden lg:block animate-scaleIn">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/30 to-gold-accent/20 rounded-3xl transform rotate-3 animate-glow"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-white/80 mb-6">
                  Join hundreds of successful businesses who trust us with their operations.
                </p>
                <div className="space-y-3">
                  {[
                    "Facility Management Excellence",
                    "Strategic Supply Chain Solutions", 
                    "Comprehensive Business Support",
                    "Expert Market Entry Guidance"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="h-2 w-2 bg-gold-accent rounded-full"></div>
                      <span className="text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;