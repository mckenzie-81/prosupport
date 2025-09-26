import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const MarketEntry = () => {
  const location = useLocation();

  const servicesIncluded = [
    { name: 'Market Research & Analysis', description: 'In-depth analysis of the target market, including competition, and consumer behavior.' },
    { name: 'Regulatory Compliance & Company Setup', description: 'Navigating the legal and regulatory landscape to establish your business entity correctly.' },
    { name: 'Market Entry Strategy Development', description: 'Crafting a tailored strategy for your successful market entry and long-term growth.' },
    { name: 'Local Partner and Infrastructure Support', description: 'Connecting you with local partners and helping you set up your physical and digital infrastructure.' },
    { name: 'Ongoing Advisory & Liaison', description: 'Providing continuous support and acting as your liaison to navigate the local business environment.' },
  ];

  const processSteps = [
    { name: 'Initial Consultation & Goal Setting' },
    { name: 'Market Analysis & Strategy Formation' },
    { name: 'Regulatory Planning & Incorporation' },
    { name: 'Operational Setup & Launch' },
    { name: 'Post-Entry Support & Review' },
  ];

  const serviceLinks = [
    { name: 'Facility Management', path: '/services/facility-management' },
    { name: 'Procurement & Supply Chain', path: '/services/procurement-service' },
    { name: 'General Support', path: '/services/general-support' },
    { name: 'Market Entry', path: '/services/market-entry' },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section 
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/mar-entry1.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Market Entry Support
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Simplify your expansion with expert guidance for establishing your presence in a new market.
          </p>
        </div>

        {/* Service Links Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6 z-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-2">
                    {serviceLinks.map((service) => (
                        <Link 
                            to={service.path} 
                            key={service.name} 
                            className={`text-white text-center font-semibold p-2 text-sm transition-colors duration-300 hover:bg-white/20 ${location.pathname === service.path ? 'bg-white/20' : 'bg-white/10'}`}
                        >
                            {service.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4">
          
          {/* Description Section */}
          <div className="max-w-5xl mx-auto mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
              Your Guide to New Markets
            </h2>
            <p className="text-lg mt-6 text-muted-foreground text-center">
              Entering a new market can be complex – our Market Entry Support service is designed to simplify this process and guide companies through every stage of establishing a presence in a new country or region. We provide comprehensive assistance that covers initial market research, strategic planning, legal compliance, and the practical aspects of setting up operations.
            </p>
          </div>

          {/* Services Included Section */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Services Include
            </h3>
            <div className="divide-y divide-border">
              {servicesIncluded.map((service, index) => (
                <div key={index} className="flex flex-col md:flex-row justify-between md:items-center py-6">
                  <div className="md:w-1/3 mb-4 md:mb-0">
                    <h4 className="text-xl font-semibold">{service.name}</h4>
                  </div>
                  <div className="md:w-1/2">
                    <p className="text-black">{service.description}</p>
                  </div>
                  <div className="md:w-auto flex justify-end mt-4 md:mt-0">
                      <button className="p-2 rounded-full border border-border hover:bg-muted transition-colors">
                          <ChevronRight className="h-6 w-6 text-muted-foreground" />
                      </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Process Section */}
          <div className="mt-20 sm:mt-28">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Our Process
            </h2>
            <div className="relative">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {processSteps.map((step, index) => (
                        <React.Fragment key={index}>
                            <div className="flex flex-col items-center text-center w-full md:w-1/5 mb-8 md:mb-0 px-2">
                                <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-2xl font-bold mb-4">
                                    {index + 1}
                                </div>
                                <h4 className="font-semibold text-lg">{step.name}</h4>
                            </div>
                            {index < processSteps.length - 1 && (
                                <ChevronRight className="hidden md:block text-muted-foreground mx-4" size={40}/>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Expand Your Business?</h2>
           <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Let us be your trusted partner in navigating new markets. Contact us for a strategic consultation on your market entry needs.
           </p>
           <Button asChild size="lg">
             <Link to="/contact">Plan Your Market Entry</Link>
           </Button>
        </div>
      </section>
    </div>
  );
};

export default MarketEntry;
