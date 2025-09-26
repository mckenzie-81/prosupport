import React from 'react';
import { ChevronRight, Wrench, ShoppingCart, ClipboardSignature, Globe, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ServicesPage = () => {

  const services = [
    {
      title: 'Facility Management',
      description: 'Complete facility operations and maintenance solutions to keep your workplace safe, efficient, and well-maintained.',
      highlights: [
        'Building Maintenance & Operations',
        'Cleaning and Janitorial Services',
        'Security & Access Control',
        'Space Management'
      ],
      icon: <Wrench />,
      path: '/services/facility-management'
    },
    {
      title: 'Purchasing & Supply',
      description: 'End-to-end procurement solutions ensuring cost-effective sourcing and seamless supply chain management.',
      highlights: [
        'Strategic Sourcing',
        'Supplier Management',
        'Purchase Order Processing',
        'Inventory Control'
      ],
      icon: <ShoppingCart />,
      path: '/services/procurement-service'
    },
    {
      title: 'General Support Services',
      description: 'Comprehensive business support functions allowing you to focus on core activities while we handle operations.',
      highlights: [
        'Administrative Support',
        'Reception Services',
        'IT Support Coordination',
        'Document Management'
      ],
      icon: <ClipboardSignature />,
      path: '/services/general-support'
    },
    {
      title: 'Market Entry Support',
      description: 'Strategic guidance and practical assistance for establishing your business presence in new markets.',
      highlights: [
        'Market Research & Analysis',
        'Regulatory Compliance',
        'Entry Strategy Development',
        'Local Partner Support'
      ],
      icon: <Globe />,
      path: '/services/market-entry'
    },
    {
      title: 'Recruitment & Personnel',
      description: 'Talent acquisition and staffing solutions to meet your workforce needs with flexible, efficient approaches.',
      highlights: [
        'Talent Sourcing',
        'Candidate Screening',
        'Contract Staffing',
        'HR Administration'
      ],
      icon: <UserPlus />,
      path: '/recruitment-and-personnel-outsourcing'
    }
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section - keeping existing styling */}
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
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Services</h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              Streamline your operations with our comprehensive business solutions. Click on any service to learn more.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-card rounded-2xl p-8 h-full shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 cursor-pointer">
                  <Link to={service.path} className="block h-full">
                    {/* Icon and Title */}
                    <div className="flex items-start mb-6">
                      <div className="flex-shrink-0 p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        {React.cloneElement(service.icon, { className: "h-7 w-7 text-primary" })}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{service.description}</p>
                    
                    {/* Key Services */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3 text-foreground">Key Services:</h4>
                      <ul className="space-y-2">
                        {service.highlights.map((item, i) => (
                          <li key={i} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Learn More Link */}
                    <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                      <span>Learn More</span>
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Info */}
          <div className="text-center mt-16">
            <div className="bg-muted/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Tailored Solutions</h3>
              <p className="text-muted-foreground mb-6">
                Every business is unique. Our services can be customized and combined to meet your specific operational needs and business objectives.
              </p>
              <Button asChild variant="outline">
                <Link to="/contact">Discuss Your Requirements</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-20 border-t">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Operations?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how our services can be tailored to your business needs and help you achieve your operational goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/contact">Start a Conversation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/about">About Our Company</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
