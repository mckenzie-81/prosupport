import React from 'react';
import { ChevronRight, UserPlus, Users, Search, FileSignature, Briefcase } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const RecruitmentAndPersonnelOutsourcing = () => {
  const location = useLocation();

  const servicesIncluded = [
    { name: 'Talent Sourcing & Recruitment', description: 'Utilizing a multi-channel approach to find and attract the best candidates for your permanent roles.' },
    { name: 'Candidate Screening & Evaluation', description: 'Rigorous screening and evaluation processes to ensure you only see the most qualified candidates.' },
    { name: 'Contract Staffing & Outsourcing', description: 'Providing flexible staffing solutions for temporary or project-based needs, managing payroll and compliance.' },
    { name: 'Onboarding and Training Support', description: 'Assisting with the smooth integration of new hires into your organization.' },
    { name: 'HR Administration & Compliance', description: 'Handling essential HR administrative tasks and ensuring compliance with local labor laws.' },
  ];

  const processSteps = [
    { 
      name: 'Analyze',
      title: 'Workforce Needs Analysis', 
      description: 'We start by understanding your staffing requirements, company culture, and long-term goals.',
      icon: <Search />
    },
    { 
      name: 'Strategize',
      title: 'Sourcing Strategy & Outreach', 
      description: 'Developing a targeted sourcing strategy to reach the right talent pool, followed by active outreach.',
      icon: <Users />
    },
    { 
      name: 'Select',
      title: 'Screening & Selection', 
      description: 'A multi-stage screening and selection process to identify the best-fit candidates for your organization.',
      icon: <FileSignature />
    },
    { 
      name: 'Onboard',
      title: 'Placement & Onboarding', 
      description: 'Facilitating the final placement and providing support to ensure a successful onboarding experience.',
      icon: <Briefcase />
    },
    { 
      name: 'Support',
      title: 'HR Management & Ongoing Support', 
      description: 'Providing ongoing HR support for outsourced personnel, including performance management and compliance.',
      icon: <UserPlus />
    },
  ];

  const serviceLinks = [
    { name: 'Facility Management', path: '/services/facility-management' },
    { name: 'Procurement & Supply Chain', path: '/services/procurement-service' },
    { name: 'General Support', path: '/services/general-support' },
    { name: 'Market Entry', path: '/services/market-entry' },
    { name: 'Recruitment & Outsourcing', path: '/recruitment-and-personnel-outsourcing' }
  ];

  const AnimatedProcessStep = ({ step, index }: { step: any, index: number }) => {
    const { isVisible, elementRef } = useScrollAnimation();
    return (
      <div ref={elementRef} className={`relative mb-20 transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 transform-none' : (index % 2 === 1 ? 'opacity-0 translate-x-10' : 'opacity-0 -translate-x-10')}`}>
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
        style={{ backgroundImage: "url('/images/recruitment-hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Recruitment & Personnel Outsourcing
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Attracting top talent and providing flexible staffing solutions to meet your business needs.
          </p>
        </div>

        {/* Service Links Bar - FIXED */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6 z-20">
            <div className="container mx-auto">
                {/* Fixed: 5 columns causes overflow on mobile */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-x-4 sm:gap-y-2">
                    {serviceLinks.map((service) => (
                        <Link 
                            to={service.path} 
                            key={service.name} 
                            className={`text-white text-center font-semibold p-2 text-xs sm:text-sm transition-colors duration-300 hover:bg-white/20 rounded ${location.pathname === service.path ? 'bg-white/20' : 'bg-white/10'}`}
                        >
                            <span className="block leading-tight">{service.name}</span>
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
              Building Your Ideal Workforce
            </h2>
            <p className="text-lg mt-6 text-muted-foreground text-center">
              Our Recruitment and Personnel Outsourcing services help clients attract top talent and meet their staffing needs in a flexible, efficient manner. We cover both direct recruitment for permanent hires and outsourced staffing solutions for temporary or project-based needs.
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
                    <p className="text-muted-foreground">{service.description}</p>
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
                A structured approach to recruitment and HR management, ensuring you get the right people in the right roles.
            </p>

            <div className="grid md:grid-cols-5 max-w-5xl mx-auto">
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
           <h2 className="text-3xl font-bold text-foreground mb-4">Find Your Next Great Hire</h2>
           <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Partner with us to build a talented and flexible workforce. Contact us to learn more about our recruitment and outsourcing solutions.
           </p>
           <Button asChild size="lg">
             <Link to="/contact">Request a Consultation</Link>
           </Button>
        </div>
      </section>
    </div>
  );
};

export default RecruitmentAndPersonnelOutsourcing;
