import React from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ProcumentService = () => {
  const location = useLocation();

  const servicesIncluded = [
    'Strategic Sourcing',
    'Supplier Negotiation & Contracting',
    'Purchase Order Management',
    'Logistics & Delivery Coordination',
    'Inventory & Stock Control',
  ];

  const processSteps = [
    { name: 'Requirements Analysis' },
    { name: 'Supplier Sourcing' },
    { name: 'Evaluation & Selection' },
    { name: 'Order Execution & Logistics' },
    { name: 'Receiving, Inspection & Feedback' },
  ];

  const serviceLinks = [
    { name: 'Facility Management', path: '/services/facility-management' },
    { name: 'Procurement & Supply Chain', path: '/procurement-service' },
    { name: 'General Support', path: '/services/general-support' },
    { name: 'Market Entry', path: '/market-entry' },
  ];

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
            Purchasing & Supply
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Cost-effective, end-to-end procurement solutions to ensure your organization has the right materials and services at the right time.
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
                            className={`text-white text-center font-semibold p-2 text-sm transition-colors duration-300 hover:bg-white/20 ${location.pathname === service.path ? 'bg-white/20' : 'bg-white/10'}`
                            }
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
              End-to-End Procurement Solutions
            </h2>
            <p className="text-lg mt-6 text-muted-foreground text-center">
              Our Purchasing & Supply service offers end-to-end procurement solutions to ensure your organization has the right materials and services at the right time, obtained in a cost-effective manner. We manage the entire supply chain process from identifying reputable suppliers and negotiating favorable terms to overseeing delivery and inventory management.
            </p>
          </div>

          {/* Services Included Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 sm:p-12 rounded-xl shadow-lg border border-border/50">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
                Services Include
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-lg text-muted-foreground">
                {servicesIncluded.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
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
           <h2 className="text-3xl font-bold text-foreground mb-4">Ready for Smarter Procurement?</h2>
           <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Contact us today to learn how our procurement and supply chain expertise can drive efficiency and savings for your business.
           </p>
           <Button asChild size="lg">
             <Link to="/contact">Get a Procurement Audit</Link>
           </Button>
        </div>
      </section>
    </div>
  );
};

export default ProcumentService;
