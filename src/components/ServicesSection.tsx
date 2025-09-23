import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import { Card, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselDots } from "@/components/ui/carousel";

// Use public folder images for better reliability
const services = [
  {
    title: "Facility Management",
    imageUrl: "/images/fac-mngm1.jpeg",
  },
  {
    title: "Procurement & Supply Chain",
    imageUrl: "/images/pro-supply2.jpeg",
  },
  {
    title: "General Support",
    imageUrl: "/images/gen-supp2.jpeg",
  },
  {
    title: "Market Entry",
    imageUrl: "/images/market-entry.jpeg",
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
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 group">
                <div className="p-1 h-full">
                  <Link to="/services/procurement-service" className="h-full block">
                    <Card
                      className="relative flex items-center justify-center h-full min-h-[580px] rounded-none bg-cover bg-center text-white transition-all duration-300 overflow-hidden group-hover:scale-105"
                    >
                      {/* Background image */}
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50" aria-hidden="true"></div>
                      <div className="relative z-10 p-6 text-center">
                        <CardTitle className="text-3xl font-bold">{service.title}</CardTitle>
                      </div>
                    </Card>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
          <CarouselDots />
        </Carousel>
      </div>
    </section>
  );
};

export default ServicesSection;
