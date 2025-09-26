import React from 'react';
import { ChevronRight, Search, FileText, Wrench, ShieldCheck, TrendingUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const FacilityManagement = () => {
  const location = useLocation();

  const servicesIncluded = [
    { name: 'Building Maintenance & Operations', description: 'Proactive and reactive maintenance to keep your building systems operational and efficient.' },
    { name: 'Cleaning and Janitorial Services', description: 'Comprehensive cleaning solutions for a healthy, safe, and welcoming environment.' },
    { name: 'Security & Access Control', description: 'Integrated security services to protect your people, property, and assets.' },
    { name: 'Landscaping and Groundskeeping', description: 'Professional care for your outdoor spaces to enhance curb appeal and value.' },
    { name: 'Space Management & Office Setup', description: 'Strategic planning and setup of your workspace to optimize for productivity and collaboration.' },
  ];

  const processSteps = [
    { 
      name: 'Assess',
      title: 'Needs Assessment', 
      description: 'We conduct a thorough assessment of your facilities, operational needs, and strategic goals.',
      icon: <Search/> 
    },
    { 
      name: 'Plan',
      title: 'Customized Planning', 
      description: 'Based on the assessment, we develop a tailored facility management plan that aligns with your budget and objectives.',
      icon: <FileText/> 
    },
    { 
      name: 'Implement',
      title: 'Implementation', 
      description: 'Our expert team implements the plan, coordinating all services and ensuring a smooth transition.',
      icon: <Wrench/> 
    },
    { 
      name: 'Monitor',
      title: 'Monitoring & Quality Control', 
      description: 'We continuously monitor service delivery and conduct quality checks to ensure the highest standards.',
      icon: <ShieldCheck/> 
    },
    { 
      name: 'Improve',
      title: 'Reporting & Improvement', 
      description: 'You receive regular performance reports, and we work with you to identify opportunities for improvement.',
      icon: <TrendingUp/> 
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
        style={{ backgroundImage: "url('/images/fac-mngm1.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Facility Management
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Ensuring your facilities are safe, well-maintained, and operating at peak efficiency.
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
              Comprehensive Management for the Built Environment
            </h2>
            <p className="text-lg mt-6 text-muted-foreground text-center">
              Our Facility Management services ensure that client facilities are safe, well-maintained, and operating at peak efficiency. We take a comprehensive approach to managing the built environment – covering both technical maintenance of infrastructure and day-to-day support activities – to provide functional, comfortable, and secure workplaces. With a focus on preventive maintenance and rapid response, we help prolong the lifespan of assets and minimize downtime.
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
                A systematic approach to facility management that ensures quality, efficiency, and continuous improvement.
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
           <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Optimize Your Facilities?</h2>
           <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Let us handle the complexities of facility management so you can focus on what you do best. Get in touch for a personalized consultation.
           </p>
           <Button asChild size="lg">
             <Link to="/contact">Request a Quote</Link>
           </Button>
        </div>
      </section>
    </div>
  );
};

export default FacilityManagement;
