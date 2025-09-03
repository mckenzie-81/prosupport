
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "pt-2" : "pt-4"}`}>
      <div
        className={`container mx-auto transition-all duration-300 ${isScrolled ? "max-w-4xl" : "max-w-7xl"}`}>
        <nav
          className={`flex items-center justify-between px-6 py-3 transition-all duration-300 ${
            isScrolled
              ? "bg-white/80 backdrop-blur-lg rounded-full shadow-lg border border-gray-200"
              : "bg-transparent"
          }`}>
          {/* Logo */}
          <Link to="/#home" className="flex items-center">
            <img
              src="/prosupport1.png"
              alt="Prosupport Logo"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary-teal transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button className="btn-premium text-white font-semibold" size="sm">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 bg-white rounded-xl shadow-lg p-4 animate-fadeUp">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-teal py-2 rounded-md text-center font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="w-full btn-premium text-white font-semibold mt-2">
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
