import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Truck, Users, TrendingUp } from "lucide-react";
import facilityImage from "@/assets/facility-management.jpg";
import purchasingImage from "@/assets/purchasing-supply.jpg";
import supportImage from "@/assets/general-support.jpg";
import marketImage from "@/assets/market-entry.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Building,
      title: "Facility Management",
      subtitle: "Your Operations. Optimized.",
      image: facilityImage,
      features: [
        "Property Management & Maintenance",
        "Cleaning & Janitorial Services", 
        "Building & Equipment Repairs"
      ],
      description: "Ensuring peak facility performance through strategic inspections, repairs, and renovations that elevate your workplace environment."
    },
    {
      icon: Truck,
      title: "Purchasing & Supply",
      subtitle: "Your Supply Chain. Streamlined.",
      image: purchasingImage,
      features: [
        "Local Procurement Services",
        "Inventory Management",
        "Supplier Sourcing & Negotiation",
        "Logistics & Supply Chain Solutions"
      ],
      description: "Intelligent supply chain optimization that meets demand while controlling costs and securing world-class suppliers."
    },
    {
      icon: Users,
      title: "General Support",
      subtitle: "Your Business. Amplified.",
      image: supportImage,
      features: [
        "Administrative Support",
        "Human Resources Management",
        "IT Support & Solutions",
        "Document Management"
      ],
      description: "Tailored solutions that free your leaders to focus on strategy while we handle the operational excellence."
    },
    {
      icon: TrendingUp,
      title: "Market Entry",
      subtitle: "Your Vision. Realized.",
      image: marketImage,
      features: [
        "Market Research & Analysis",
        "Company Registration & Set-up",
        "Business Development Strategies",
        "Distribution & Sales Channel Setup",
        "Legal & Financial Advisory"
      ],
      description: "Deep market insights and strategic guidance to accelerate your expansion into Ghana's dynamic business landscape."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeUp">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            Complete Business Solutions
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Four Pillars.
            <span className="gradient-text"> Infinite Possibilities.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We've architected our services around the four fundamental needs of every successful business in Ghana.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover-lift border-0 shadow-elegant overflow-hidden bg-gradient-to-br from-background to-muted/20 animate-scaleIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-teal/80 via-primary-teal/20 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-primary font-medium mb-4">
                  {service.subtitle}
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="h-2 w-2 bg-primary rounded-full"></div>
                      <span className="text-foreground text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fadeUp">
          <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-3xl p-12 border border-primary/20">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Operations?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the power of integrated business solutions designed specifically for the Ghanaian market.
            </p>
            <Button className="btn-premium text-white font-semibold" size="lg">
              Transform Your Operations Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;