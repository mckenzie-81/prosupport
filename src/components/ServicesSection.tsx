
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    title: "Facility Management",
    description: "Comprehensive solutions for seamless, efficient, and sustainable workplace operations.",
    features: [
      "MEP & HVAC Maintenance",
      "Janitorial & Cleaning Services",
      "Landscaping & Groundskeeping",
      "Pest Control & Fumigation",
      "Waste Management & Recycling",
    ],
    isMostPopular: true,
  },
  {
    title: "Purchasing & Supply",
    description: "Strategic sourcing and procurement to optimize your supply chain and reduce costs.",
    features: [
      "Office & Industrial Supplies",
      "Safety & PPE Vending",
      "Promotional & Branded Items",
      "Inventory Management",
      "Supplier & Vendor Relations",
    ],
  },
  {
    title: "General Support Services",
    description: "Reliable and professional support to ensure your business runs smoothly every day.",
    features: [
      "Corporate & Dispatch Services",
      "Relocation & Handyman Services",
      "Executive & Protocol Services",
      "Fleet Management",
      "Event Support & Logistics",
    ],
  },
  {
    title: "Market Entry Services",
    description: "Expert guidance and on-the-ground support for a successful launch in the Ghanaian market.",
    features: [
      "Business Registration & Setup",
      "Immigration & Work Permits",
      "Housing & Accommodation",
      "Cultural & Business Orientation",
      "Local Partner Identification",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-background relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-transparent to-background z-0"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-fadeUp">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Four Pillars. Infinite Possibilities.</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We've mastered the art of delivering excellence across four mission-critical areas. Explore our integrated services designed to empower your business.
          </p>
        </div>

        <div className="relative animate-fadeUp animation-delay-300">
          <div className="flex overflow-x-auto pb-8 scrollbar-hide space-x-6 lg:space-x-8 px-4 -mx-4">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`flex flex-col w-[350px] flex-shrink-0 rounded-2xl transition-all duration-300 relative overflow-hidden ${service.isMostPopular ? "border-primary shadow-2xl shadow-primary/20" : "border-border/50"}`}>
                
                {service.isMostPopular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground font-semibold">Most Popular</Badge>
                )}

                <CardHeader className="pt-8">
                  <CardTitle className="text-2xl font-bold text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground h-12">{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <ul className="space-y-3 text-foreground/90">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-6 pb-8 mt-auto">
                  <Button className="w-full btn-premium" variant={service.isMostPopular ? 'default' : 'outline'}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-background to-transparent pointer-events-none lg:hidden"></div>
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-background to-transparent pointer-events-none lg:hidden"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
