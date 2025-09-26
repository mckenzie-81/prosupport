import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const GeneralSupport = () => {
  const location = useLocation();

  const servicesIncluded = [
    { name: 'Administrative & Clerical Support', description: 'Efficient handling of paperwork, scheduling, and office tasks to keep your operations smooth.' },
    { name: 'Front Desk & Reception Services', description: 'Professional and welcoming first point of contact for your clients and visitors.' },
    { name: 'IT Support Coordination', description: 'Liaising with IT providers to ensure your technical infrastructure is reliable and effective.' },
    { name: 'Document Management', description: 'Systematic organization and maintenance of your physical and digital records.' },
    { name: 'Travel & Event Coordination', description: 'Seamless planning and management of corporate travel and events.' },
  ];

  const processSteps = [
    { name: 'Consultation & Scope Definition' },
    { name: 'Tailored Service Plan' },
    { name: 'Resource Deployment' },
    { name: 'Execution & Management' },
    { name: 'Monitoring & Continuous Improvement' },
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
        style={{ backgroundImage: "url('/images/gen-supp2.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            General Support Services
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Allowing you to offload non-core tasks and focus on your primary business activities.
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
              Efficient and Professional Business Support
            </h2>
            <p className="text-lg mt-6 text-muted-foreground text-center">
              Our General Support Services provide clients with a broad range of auxiliary business support functions, allowing them to offload non-core tasks and focus on their primary business activities. We ensure that everyday operational needs – from administrative tasks to IT support – are handled efficiently and professionally.
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
           <h2 className="text-3xl font-bold text-foreground mb-4">Focus on Your Core Business</h2>
           <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Let us handle your operational needs. Contact us for a customized support plan and discover how our general support services can free up your valuable time.
           </p>
           <Button asChild size="lg">
             <Link to="/contact">Inquire Now</Link>
           </Button>
        </div>
      </section>
    </div>
  );
};

export default GeneralSupport;
