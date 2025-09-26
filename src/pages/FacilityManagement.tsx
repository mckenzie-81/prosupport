import React from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const FacilityManagement = () => {
  const servicesIncluded = [
    'Building Maintenance & Operations',
    'Cleaning and Janitorial Services',
    'Security & Access Control',
    'Landscaping and Groundskeeping',
    'Space Management & Office Setup',
  ];

  const processSteps = [
    { name: 'Needs Assessment' },
    { name: 'Customized Planning' },
    { name: 'Implementation' },
    { name: 'Monitoring & Quality Control' },
    { name: 'Reporting & Improvement' },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section 
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/fac-mngm1.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Facility Management
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Ensuring your facilities are safe, well-maintained, and operating at peak efficiency.
          </p>
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
           <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Optimize Your Facilities?</h2>
           <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Let us handle the complexities of facility management so you can focus on what you do best. Get in touch for a personalized consultation.
           </p>
           <Button asChild size="lg">
             <Link to="/#contact">Request a Quote</Link>
           </Button>
        </div>
      </section>
    </div>
  );
};

export default FacilityManagement;
