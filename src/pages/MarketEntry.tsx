import React from 'react';
import { ChevronRight, Globe, Compass, Briefcase, Landmark, Rocket } from 'lucide-react';
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
    { 
      name: 'Consult', 
      title: 'Initial Consultation & Goal Setting',
      description: 'We begin by understanding your business, objectives, and ambitions for entering the new market.',
      icon: <Globe/>
    },
    { 
      name: 'Analyze', 
      title: 'Market Analysis & Strategy Formation',
      description: 'Our team conducts in-depth market research and analysis to develop a bespoke market entry strategy.',
      icon: <Compass/>
    },
    { 
      name: 'Incorporate', 
      title: 'Regulatory Planning & Incorporation',
      description: 'We guide you through the complexities of legal and regulatory requirements to formally establish your business.',
      icon: <Briefcase/>
    },
    { 
      name: 'Launch', 
      title: 'Operational Setup & Launch',
      description: 'We assist with the practical aspects of setting up, from finding a location to hiring local talent.',
      icon: <Rocket/>
    },
    { 
      name: 'Support', 
      title: 'Post-Entry Support & Review',
      description: 'Our engagement continues with ongoing advisory services to ensure a sustainable and successful operation.',
      icon: <Landmark/>
    },
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

        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
                Our Process
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-20">
                A strategic roadmap to navigate the complexities of market entry, from initial analysis to successful launch and beyond.
            </p>

            <div className="grid md:grid-cols-5 divide-x divide-border/30 border-y border-border/30 max-w-5xl mx-auto">
                {processSteps.map((step, index) => (
                    <div key={index} className="text-center p-6">
                        {React.cloneElement(step.icon, { className: "h-10 w-10 text-primary mx-auto mb-4" })}
                        <p className="font-semibold text-lg">{step.name}</p>
                    </div>
                ))}
            </div>

            <div className="relative mt-24 max-w-5xl mx-auto">
                <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border/30" aria-hidden="true"></div>
                {processSteps.map((step, index) => (
                    <div key={index} className="relative mb-20">
                        <div className={`flex items-center ${index % 2 === 1 ? 'flex-row-reverse' : 'flex-row'}`}>
                            <div className={`w-1/2 px-10 ${index % 2 === 1 ? 'text-right' : 'text-left'}`}>
                                <div className="inline-block p-8 rounded-lg border bg-background shadow-sm">
                                    <h3 className="text-2xl font-bold text-primary mb-3">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>
                            </div>
                            <div className="w-1/2 px-10">
                                {/* Spacer */}
                            </div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-muted flex items-center justify-center text-white font-bold">
                            {index + 1}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
      
      {/* CTA Section */}
      <section className="bg-background py-20">
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
