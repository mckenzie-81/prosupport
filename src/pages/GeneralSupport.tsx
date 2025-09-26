import React from 'react';
import { ChevronRight, ClipboardSignature, DraftingCompass, Users, Wrench, TrendingUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

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
    { 
      name: 'Consult', 
      title: 'Consultation & Scope Definition',
      description: 'We start by understanding your specific support needs, challenges, and objectives to define the scope of services required.',
      icon: <ClipboardSignature/> 
    },
    { 
      name: 'Plan', 
      title: 'Tailored Service Plan',
      description: 'A customized support plan is developed, outlining the services, resources, and workflows that best fit your organization.',
      icon: <DraftingCompass/> 
    },
    { 
      name: 'Deploy', 
      title: 'Resource Deployment',
      description: 'We deploy the right personnel with the right skills to integrate seamlessly into your team and business environment.',
      icon: <Users/> 
    },
    { 
      name: 'Execute', 
      title: 'Execution & Management',
      description: 'Our team carries out the defined tasks with professionalism and efficiency, managed by experienced supervisors.',
      icon: <Wrench/> 
    },
    { 
      name: 'Improve', 
      title: 'Monitoring & Continuous Improvement',
      description: 'We continuously monitor performance, gather feedback, and refine our services to ensure we are always adding value.',
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
      <div ref={elementRef} className={`relative mb-20 transition-all duration-700 ease-in ${isVisible ? 'opacity-100 transform-none' : (index % 2 === 1 ? 'opacity-0 translate-x-10' : 'opacity-0 -translate-x-10')}`}>
          <div className={`flex items-center ${index % 2 === 1 ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-1/2 px-10 ${index % 2 === 1 ? 'text-right' : 'text-left'}`}>
                  <div>
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
    );
  }

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

        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
                Our Process
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-20">
                A clear and structured approach to delivering exceptional support, ensuring all your needs are met with precision and care.
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
                    <AnimatedProcessStep key={index} step={step} index={index} />
                ))}
            </div>
        </div>
    </section>
      
      {/* CTA Section */}
      <section className="bg-background py-20">
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
