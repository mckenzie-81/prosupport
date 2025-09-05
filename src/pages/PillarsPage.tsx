import React from 'react';
import { Check } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PillarsPage = () => {
  const pillars = [
    {
      name: "Corporate Compliance & Governance",
      description: "Navigate Ghana's regulatory landscape with confidence. We ensure your business is not just compliant, but structured for resilience and growth.",
      features: [
        "Company Registration & Renewal",
        "Regulatory Filings & Updates",
        "Board Structuring & Governance Best Practices",
        "Secretarial Services"
      ]
    },
    {
      name: "Business Advisory & Strategy",
      description: "From market entry to operational excellence, we provide the strategic insights that drive sustainable growth and competitive advantage.",
      features: [
        "Market Entry Strategy & Feasibility Studies",
        "Business Plan Development",
        "Performance Optimization",
        "Strategic Partnerships & Network Access"
      ]
    },
    {
      name: "Human Capital & Staffing",
      description: "Your team is your greatest asset. We help you find, develop, and manage the talent that will propel your business forward.",
      features: [
        "Executive Search & Recruitment",
        "Expatriate & Local Staffing Solutions",
        "HR Policy Development & Implementation",
        "Payroll & Benefits Administration"
      ]
    },
    {
      name: "Logistics & Supply Chain",
      description: "Efficiently move goods and manage your supply chain with our deep local knowledge, ensuring reliability from procurement to final delivery.",
      features: [
        "Procurement & Sourcing",
        "Freight Forwarding & Customs Clearance",
        "Warehousing & Distribution",
        "Last-Mile Delivery Solutions"
      ]
    }
  ];

  return (
    <div className="bg-background text-foreground">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">Our Four Pillars of Success</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A holistic framework designed to support every facet of your business operations in Ghana, ensuring a seamless path to growth and excellence.
          </p>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-primary mb-4">{pillar.name}</h3>
                <p className="text-muted-foreground mb-6">{pillar.description}</p>
                <ul className="space-y-3">
                  {pillar.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PillarsPage;
