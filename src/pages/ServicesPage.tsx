import React from 'react';
import { ChevronRight, Wrench, ShoppingCart, ClipboardSignature, Globe, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ServicesPage = () => {

  const services = [
    {
      title: 'Facility Management',
      description: 'Our Facility Management services ensure that client facilities are safe, well-maintained, and operating at peak efficiency. We take a comprehensive approach to managing the built environment – covering both technical maintenance of infrastructure and day-to-day support activities – to provide functional, comfortable, and secure workplaces. With a focus on preventive maintenance and rapid response, we help prolong the lifespan of assets and minimize downtime.',
      services_include: [
        'Building Maintenance & Operations',
        'Cleaning and Janitorial Services',
        'Security & Access Control',
        'Landscaping and Groundskeeping',
        'Space Management & Office Setup'
      ],
      
      icon: <Wrench />,
      path: '/services/facility-management'
    },
    {
      title: 'Purchasing & Supply',
      description: 'Our Purchasing & Supply service offers end-to-end procurement solutions to ensure your organization has the right materials and services at the right time, obtained in a cost-effective manner. We manage the entire supply chain process from identifying reputable suppliers and negotiating favorable terms to overseeing delivery and inventory management.',
      services_include: [
        'Strategic Sourcing',
        'Supplier Negotiation & Contracting',
        'Purchase Order Management',
        'Logistics & Delivery Coordination',
        'Inventory & Stock Control'
      ],
      
      icon: <ShoppingCart />,
      path: '/services/procurement-service'
    },
    {
      title: 'General Support Services',
      description: 'Our General Support Services provide clients with a broad range of auxiliary business support functions, allowing them to offload non-core tasks and focus on their primary business activities. We ensure that everyday operational needs – from administrative tasks to IT support – are handled efficiently and professionally.',
      services_include: [
        'Administrative & Clerical Support',
        'Front Desk & Reception Services',
        'IT Support Coordination',
        'Document Management',
        'Travel & Event Coordination'
      ],
      
      icon: <ClipboardSignature />,
      path: '/services/general-support'
    },
    {
      title: 'Market Entry Support',
      description: 'Entering a new market can be complex – our Market Entry Support service is designed to simplify this process and guide companies through every stage of establishing a presence in a new country or region. We provide comprehensive assistance that covers initial market research, strategic planning, legal compliance, and the practical aspects of setting up operations.',
      services_include: [
        'Market Research & Analysis',
        'Regulatory Compliance & Company Setup',
        'Market Entry Strategy Development',
        'Local Partner and Infrastructure Support',
        'Ongoing Advisory & Liaison'
      ],
      
      icon: <Globe />,
      path: '/services/market-entry'
    },
    {
      title: 'Recruitment and Personnel Outsourcing',
      description: 'Our Recruitment and Personnel Outsourcing services help clients attract top talent and meet their staffing needs in a flexible, efficient manner. We cover both direct recruitment for permanent hires and outsourced staffing solutions for temporary or project-based needs.',
      services_include: [
        'Talent Sourcing & Recruitment',
        'Candidate Screening & Evaluation',
        'Contract Staffing & Outsourcing',
        'Onboarding and Training Support',
        'HR Administration & Compliance'
      ],
      
      icon: <UserPlus />,
      path: '/recruitment-and-personnel-outsourcing' // Assuming a path for the new service
    }
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section 
        className="relative flex items-center justify-center h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('https://c8.alamy.com/comp/JH0AK0/business-life-collage-concept-of-teamwork-partnership-and-startup-JH0AK0.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Our Services
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Comprehensive solutions to support your business operations and growth.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div key={index} className="mb-24 last:mb-0">
              <div className="flex items-center mb-8">
                <div className="flex-shrink-0">
                  {React.cloneElement(service.icon, { className: "h-12 w-12 text-primary" })}
                </div>
                <div className="ml-6">
                  <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                </div>
              </div>
              <div className="lg:grid lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-7">
                  <p className="text-lg text-muted-foreground mb-10">{service.description}</p>
                  <h3 className="text-2xl font-semibold mb-6">Services include:</h3>
                  <ul className="space-y-4">
                    {service.services_include.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-3" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <Button asChild>
                        <Link to={service.path}>Learn More</Link>
                    </Button>
                  </div>
                </div>
        
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold text-foreground mb-4">Ready to get started?</h2>
           <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Contact us today to discuss how our services can benefit your business.
           </p>
           <Button asChild size="lg">
             <Link to="/contact">Contact Us</Link>
           </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
