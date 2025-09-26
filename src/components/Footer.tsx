import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const services = [
    "Facility Management",
    "Property Maintenance", 
    "Procurement & Supply Chain",
    "Inventory Management",
    "General Support Services",
    "Market Entry Services"
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Why Choose Us", href: "/#why-choose-us" },
    { name: "Vision & Mission", href: "/#vision-mission" },
    { name: "Contact", href: "/contact" },
    { name: "Get Quote", href: "/contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-primary-teal to-secondary-teal text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 gradient-text bg-gradient-to-r from-white to-accent-blue bg-clip-text text-transparent">
              Prosupport Services
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Ghana's premier business solutions partner, delivering excellence 
              across facility management, supply chain, support services, and market entry solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent-blue" />
                <span className="text-white/90">+233-271-565-030</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent-blue" />
                <span className="text-white/90">info@prosupportserv.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent-blue" />
                <span className="text-white/90">C02 Manyo Close, Adabraka, Accra</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-4 w-4 text-accent-blue" />
                <span className="text-white/90">www.prosupportserv.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="/services" 
                    className="text-white/80 hover:text-accent-blue transition-colors duration-300 flex items-center group"
                  >
                    <div className="h-1 w-1 bg-accent-blue rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-accent-blue transition-colors duration-300 flex items-center group"
                  >
                    <div className="h-1 w-1 bg-accent-blue rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Stay Connected</h4>
            <p className="text-white/80 mb-4">
              Subscribe to our newsletter for business insights and updates.
            </p>
            
            {/* Newsletter Signup */}
            <div className="flex mb-6">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-accent-blue"
              />
              <Button className="bg-accent-blue hover:bg-accent-blue/80 text-white px-4 py-2 rounded-r-lg rounded-l-none">
                Subscribe
              </Button>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-white/80 mb-4">Follow us on social media:</p>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Twitter, href: "#", label: "Twitter" }, 
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Instagram, href: "#", label: "Instagram" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-white/10 hover:bg-accent-blue p-2 rounded-lg transition-colors duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-white/80 text-sm">
              © 2024 Prosupport Services Company Limited. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>

            {/* Back to Top Button */}
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-white/20 text-white hover:bg-white hover:text-primary-teal transition-colors"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Ghana Pride */}
        <div className="mt-8 text-center">
          <p className="text-white/60 text-sm">
            🇬🇭 Proudly serving businesses across Ghana with excellence and integrity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;