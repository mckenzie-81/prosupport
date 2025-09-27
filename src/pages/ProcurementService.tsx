import React from 'react';
import { ChevronRight, Search, ShoppingCart, Truck, BarChart3, TrendingUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ProcurementService = () => {
  const location = useLocation();

  const servicesIncluded = [
    { name: 'Strategic Sourcing & Supplier Management', description: 'Identifying and managing reliable suppliers to optimize cost, quality, and delivery performance.' },
    { name: 'Procurement Process Optimization', description: 'Streamlining your procurement workflows to reduce cycle times and improve efficiency.' },
    { name: 'Contract Negotiation & Management', description: 'Expert negotiation and ongoing management of supplier contracts to secure favorable terms.' },
    { name: 'Inventory Management & Control', description: 'Maintaining optimal inventory levels to balance availability with cost efficiency.' },
    { name: 'Quality Assurance & Compliance', description: 'Ensuring all procured goods and services meet your quality standards and regulatory requirements.' },
  ];

  const processSteps = [
    { 
      name: 'Assess',
      title: 'Needs Assessment & Analysis', 
      description: 'We analyze your current procurement processes, spend patterns, and identify opportunities for improvement.',
      icon: <Search/> 
    },
    { 
      name: 'Source',
      title: 'Strategic Sourcing', 
      description: 'We identify and evaluate potential suppliers, conducting thorough due diligence to ensure reliability and value.',
      icon: <ShoppingCart/> 
    },
    { 
      name: 'Execute',
      title: 'Procurement Execution', 
      description: 'We manage the procurement process from order placement to delivery, ensuring quality and timely fulfillment.',
      icon: <Truck/> 
    },
    { 
      name: 'Monitor',
      title: 'Performance Monitoring', 
      description: 'We track supplier performance, monitor costs, and ensure compliance with agreements and quality standards.',
      icon: <BarChart3/> 
    },
    { 
      name: 'Optimize',
      title: 'Continuous Optimization', 
      description: 'We continuously review and optimize the supply chain to drive cost savings and performance improvements.',
      icon: <TrendingUp/> 
    },
  ];

  const serviceLinks = [
    { name: 'Facility Management', path: '/services/facility-management' },
    { name: 'Procurement & Supply Chain', path: '/services/procurement-service' },
    { name: 'General Support', path: '/services/general-support' },
    { name: 'Market Entry', path: '/services/market-entry' },
  ];

  const AnimatedProcessStep = ({ step, index }: { step: any, index: number }) => {
    const { isVisible, elementRef } = useScrollAnimation();
    return (
        <div ref={elementRef} className={`relative mb-12 md:mb-20 transition-all duration-700 ease-in ${isVisible ? 'opacity-100 transform-none' : (index % 2 === 1 ? 'opacity-0 translate-x-10' : 'opacity-0 -translate-x-10')}`}>
            {/* Fixed: Better mobile layout */}
            <div className={`flex flex-col md:flex-row items-start md:items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                <div className={`w-full md:w-1/2 px-4 md:px-10 mb-6 md:mb-0 ${index % 2 === 1 ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">{step.title}</h3>
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{step.description}</p>
                    </div>
                </div>
                <div className="hidden md:block w-1/2 px-10">
                    {/* Spacer for desktop */}
                </div>
            </div>
            {/* Fixed: Better mobile positioning */}
            <div className="flex md:absolute md:top-1/2 md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2 justify-center md:justify-auto w-full md:w-auto mb-4 md:mb-0">
                <div className="w-8 h-8 rounded-full bg-primary border-4 border-muted flex items-center justify-center text-white font-bold">
                    {index + 1}
                </div>
            </div>
        </div>
    );
}

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section 
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/pro-supply2.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Procurement & Supply Chain
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Streamlining your procurement processes and optimizing your supply chain for maximum efficiency and cost savings.
          </p>
        </div>

        {/* Service Links Bar - FIXED */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6 z-20">
            <div className="container mx-auto">
                {/* Fixed: Better mobile grid layout */}
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-x-4">
                    {serviceLinks.map((service) => (
                        <Link 
                            to={service.path} 
                            key={service.name} 
                            className={`text-white text-center font-semibold p-2 sm:p-2 text-xs sm:text-sm transition-colors duration-300 hover:bg-white/20 rounded-md ${location.pathname === service.path ? 'bg-white/20' : 'bg-white/10'}`}
                        >
                            {/* Fixed: Truncate long text on mobile */}
                            <span className="block truncate">{service.name}</span>
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
              Strategic Supply Chain Management
            </h2>
            <p className="text-lg mt-6 text-muted-foreground text-center">
              Our Procurement & Supply Chain services help organizations optimize their purchasing processes, manage supplier relationships, and ensure efficient flow of goods and services. We focus on cost reduction, quality improvement, and risk mitigation while maintaining operational excellence throughout the supply chain.
            </p>
          </div>

          {/* Services Included Section - FIXED */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Services Include
            </h3>
            <div className="space-y-6 md:space-y-0 md:divide-y md:divide-border">
              {servicesIncluded.map((service, index) => (
                <div key={index} className="flex flex-col md:flex-row justify-between md:items-center py-4 md:py-6 bg-white md:bg-transparent rounded-lg md:rounded-none p-4 md:p-0 shadow-sm md:shadow-none">
                  <div className="md:w-1/3 mb-3 md:mb-0">
                    <h4 className="text-lg md:text-xl font-semibold">{service.name}</h4>
                  </div>
                  <div className="md:w-1/2 mb-3 md:mb-0">
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{service.description}</p>
                  </div>
                  <div className="md:w-auto flex justify-center md:justify-end">
                      <button className="p-2 rounded-full border border-border hover:bg-muted transition-colors">
                          <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-muted-foreground" />
                      </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Our Process Section - FIXED */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
                Our Process
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-20">
                A comprehensive approach to procurement and supply chain management that delivers cost savings, quality assurance, and operational efficiency.
            </p>

            {/* Fixed: Better responsive grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:divide-x md:divide-border/30 border-y border-border/30 max-w-5xl mx-auto">
                {processSteps.map((step, index) => (
                    <div key={index} className="text-center p-4 md:p-6">
                        {React.cloneElement(step.icon, { className: "h-8 w-8 md:h-10 md:w-10 text-primary mx-auto mb-4" })}
                        <p className="font-semibold text-sm md:text-lg">{step.name}</p>
                    </div>
                ))}
            </div>

            <div className="relative mt-24 max-w-5xl mx-auto">
                <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border/30" aria-hidden="true"></div>
                {processSteps.map((step, index) => (
                    <AnimatedProcessStep key={index} step={step} index={index} />
                ))}
            </div>
        </div>
    </section>
      
      {/* CTA Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold text-foreground mb-4">Optimize Your Supply Chain Today</h2>
           <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Ready to reduce costs and improve efficiency? Contact us to discover how our procurement and supply chain services can transform your operations.
           </p>
           <Button asChild size="lg">
             <Link to="/contact">Get Started</Link>
           </Button>
        </div>
      </section>
    </div>
  );
};

export default ProcurementService;
