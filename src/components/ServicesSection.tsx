
"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
      "Security & Access Control",
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
      "Strategic Sourcing Solutions",
    ],
  },
  {
    title: "General Support",
    description: "Reliable and professional support to ensure your business runs smoothly every day.",
    features: [
      "Corporate & Dispatch Services",
      "Relocation & Handyman Services",
      "Executive & Protocol Services",
      "Fleet Management",
      "Event Support & Logistics",
      "Front Desk & Reception",
    ],
  },
  {
    title: "Market Entry",
    description: "Expert guidance and on-the-ground support for a successful launch in the Ghanaian market.",
    features: [
      "Business Registration & Setup",
      "Immigration & Work Permits",
      "Housing & Accommodation",
      "Cultural & Business Orientation",
      "Local Partner Identification",
      "Market Research & Feasibility",
    ],
  },
];

const ServicesSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section id="services" className="py-20 sm:py-28 bg-background relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Four Pillars. Infinite Possibilities.</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We've mastered the art of delivering excellence across four mission-critical areas. Explore our integrated services designed to empower your business.
          </p>
        </div>

        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-6xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {services.map((service, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className={`flex flex-col h-full rounded-2xl transition-all duration-300 ${service.isMostPopular ? "border-primary shadow-lg" : ""}`}>
                    {service.isMostPopular && (
                      <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground font-semibold">Most Popular</Badge>
                    )}
                    <CardHeader>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription className="h-12">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="mt-auto">
                      <Button className="w-full" variant={service.isMostPopular ? 'default' : 'outline'}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default ServicesSection;
