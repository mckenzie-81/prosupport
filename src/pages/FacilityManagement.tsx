import React from 'react';

const FacilityManagement = () => {
  const services = [
    {
      title: "Building Maintenance & Operations",
      description: "Complete infrastructure management to ensure optimal facility performance and longevity."
    },
    {
      title: "Cleaning & Janitorial Services", 
      description: "Professional cleaning solutions that maintain pristine, healthy work environments."
    },
    {
      title: "Security & Access Control",
      description: "Advanced security systems and protocols to protect your people and assets."
    },
    {
      title: "Landscaping & Groundskeeping",
      description: "Beautiful, well-maintained outdoor spaces that enhance your facility's appeal."
    },
    {
      title: "Space Management & Office Setup",
      description: "Strategic space planning and setup services that optimize functionality and comfort."
    }
  ];

  const processSteps = [
    "Needs Assessment",
    "Customized Planning", 
    "Implementation",
    "Monitoring & Quality Control",
    "Reporting & Improvement"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-24 sm:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Facility Management
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
              Our Facility Management services ensure that client facilities are safe, well-maintained, 
              and operating at peak efficiency. We take a comprehensive approach to managing the built 
              environment – covering both technical maintenance of infrastructure and day-to-day support 
              activities – to provide functional, comfortable, and secure workplaces.
            </p>
            <div className="inline-block px-6 py-3 bg-primary/10 rounded-full">
              <p className="text-sm font-medium text-primary">
                Preventive maintenance • Rapid response • Asset optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive facility solutions designed to keep your workplace operating at its best
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group p-6 sm:p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-primary rounded-md"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach ensuring exceptional results at every step
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6 sm:gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-lg">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {step}
                    </h3>
                    <div className="w-full h-px bg-border"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Ready to optimize your facility?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Let us help you create a safer, more efficient workplace environment that supports your business goals.
              </p>
              <button className="inline-flex items-center px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacilityManagement;
