import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import heroBackground1 from "@/assets/hero-background.jpg";
import heroBackground2 from "@/assets/hero-background-2.jpeg";
import heroBackground3 from "@/assets/hero-background-3.jpg";
import heroBackground4 from "@/assets/hero-background-4.jpeg";

const images = [
  { src: heroBackground1, alt: "Modern business setting in Ghana" },
  { src: heroBackground2, alt: "Collaborative team working in a modern office" },
  { src: heroBackground3, alt: "Aerial view of a cargo ship at a port" },
  { src: heroBackground4, alt: "Professionals looking out over a city skyline" },
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Change image every 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden text-white"
    >
      {/* Background Image & Overlay */}
      <div className="absolute top-0 left-0 w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
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
