import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Send,
  Clock,
  MessageSquare,
  Calendar
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+233-271-565-030",
      subtitle: "Mon-Fri 8AM-6PM"
    },
    {
      icon: Mail,
      title: "Email Us", 
      details: "info@prosupportserv.com",
      subtitle: "We respond within 2 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "C02 Manyo Close, Adabraka, Accra",
      subtitle: "Ghana"
    },
    {
      icon: Globe,
      title: "Website",
      details: "www.prosupportservicesgh.com",
      subtitle: "24/7 Online Support"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeUp">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6">
            Let's Start Your Journey
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Ready to Elevate
            <span className="gradient-text"> Your Business?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Excellence doesn't wait. Your business transformation starts with a conversation. 
            Connect with Ghana's premier business solutions partner and discover how we can accelerate your success.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slideInLeft">
            <Card className="p-8 border-0 shadow-premium bg-gradient-to-br from-background to-muted/20">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <MessageSquare className="h-6 w-6 mr-3 text-primary" />
                Start Your Transformation
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground font-medium">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2 border-2 focus:border-primary transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2 border-2 focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-foreground font-medium">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-2 border-2 focus:border-primary transition-colors"
                      placeholder="+233-XXX-XXX-XXX"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-foreground font-medium">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="mt-2 border-2 focus:border-primary transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service" className="text-foreground font-medium">Service Interest</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full mt-2 p-3 border-2 rounded-lg focus:border-primary transition-colors bg-background"
                  >
                    <option value="">Select a service...</option>
                    <option value="facility-management">Facility Management</option>
                    <option value="purchasing-supply">Procurement & Supply Chain</option>
                    <option value="general-support">General Support Services</option>
                    <option value="market-entry">Market Entry Services</option>
                    <option value="consultation">Free Consultation</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="mt-2 border-2 focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your business needs and how we can help you achieve excellence..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" className="btn-premium text-white font-semibold flex-1 group">
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Start Your Transformation
                  </Button>
                  <Button type="button" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Strategy Session
                  </Button>
                </div>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="animate-fadeUp">
            <div className="space-y-6">
              {/* Contact Cards */}
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="p-6 hover-lift border-0 shadow-elegant bg-gradient-to-br from-background to-muted/10 animate-scaleIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-xl shadow-glow">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{info.title}</h3>
                      <p className="text-primary font-medium mb-1">{info.details}</p>
                      <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                    </div>
                  </div>
                </Card>
              ))}

              {/* Business Hours */}
              <Card className="p-6 border-0 shadow-elegant bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-accent to-gold-accent p-3 rounded-xl shadow-glow">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Business Hours</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Friday</span>
                        <span className="text-foreground font-medium">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday</span>
                        <span className="text-foreground font-medium">9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday</span>
                        <span className="text-foreground font-medium">Emergency Only</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick Response Guarantee */}
              <Card className="p-6 border-0 shadow-premium bg-gradient-to-br from-gold-accent/10 to-primary/10 border border-gold-accent/20">
                <h3 className="font-bold text-foreground mb-3 text-center">Response Guarantee</h3>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">2 Hours</div>
                  <p className="text-sm text-muted-foreground">
                    We guarantee a response to all inquiries within 2 hours during business hours.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center animate-fadeUp">
          <Card className="p-8 border-0 shadow-premium bg-gradient-to-r from-primary via-accent to-primary text-white">
            <h3 className="text-2xl font-bold mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-white/90 mb-6">
              For urgent facility management or supply chain emergencies, call our 24/7 hotline
            </p>
            <Button className="bg-white text-primary hover:bg-white/90 font-semibold" size="lg">
              Emergency Hotline: +233-271-565-030
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;