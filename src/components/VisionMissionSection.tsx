import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const VisionMissionSection = () => {
  const missionPoints = [
    {
      title: "Facility Excellence",
      description: "Delivering top-tier Facility Management Services that create safe, comfortable, and highly efficient working environments for Ghana's leading businesses."
    },
    {
      title: "Supply Chain Mastery",
      description: "Providing reliable Procurement & Supply Chain solutions that deliver premium products and materials promptly, consistently supporting local industries' growth ambitions."
    },
    {
      title: "Operational Optimization",
      description: "Offering General Support Services that streamline operations, enhance productivity, and free businesses to focus on their core competitive advantages."
    }
  ];

  return (
    <section id="vision-mission" className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeUp">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            Our Purpose & Direction
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Driven by Purpose.
            <span className="gradient-text"> Defined by Excellence.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything we do is guided by our unwavering commitment to your success and Ghana's business excellence.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Vision Card */}
          <Card className="p-10 hover-lift border-0 shadow-premium bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 animate-slideInLeft">
            <div className="text-center mb-8">
              <div className="bg-gradient-to-br from-primary to-accent p-6 rounded-full w-20 h-20 mx-auto mb-6 shadow-glow">
                <Eye className="h-8 w-8 text-white mx-auto mt-2" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Our Vision</h3>
            </div>

            <blockquote className="text-xl text-foreground leading-relaxed text-center italic border-l-4 border-primary pl-6 py-4 bg-white/50 rounded-r-lg">
              "To be Ghana's nationally recognized leader in delivering exceptional business support
              services and market entry solutions—setting the standard for excellence across our industry."
            </blockquote>
          </Card>

          {/* Mission Card */}
          <Card className="p-10 hover-lift border-0 shadow-premium bg-gradient-to-br from-accent/5 via-primary/5 to-accent/10 animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-8">
              <div className="bg-gradient-to-br from-accent to-primary p-6 rounded-full w-20 h-20 mx-auto mb-6 shadow-glow">
                <Target className="h-8 w-8 text-white mx-auto mt-2" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Our Mission</h3>
            </div>

            <p className="text-lg text-foreground leading-relaxed text-center mb-6">
              Our commitment is threefold, focused on empowering businesses across Ghana:
            </p>

            <div className="space-y-6">
              {missionPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-4 animate-fadeUp" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">{point.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Excellence",
              description: "We never settle for good enough. Every service we deliver exceeds expectations and sets new standards.",
              color: "from-primary to-accent"
            },
            {
              title: "Integrity",
              description: "Transparency, honesty, and ethical business practices form the foundation of every client relationship.",
              color: "from-accent to-gold-accent"
            },
            {
              title: "Innovation",
              description: "We continuously evolve our services to meet the changing needs of Ghana's dynamic business landscape.",
              color: "from-gold-accent to-primary"
            }
          ].map((value, index) => (
            <Card
              key={index}
              className="p-8 text-center hover-lift border-0 shadow-elegant bg-gradient-to-br from-background to-muted/20 animate-scaleIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`bg-gradient-to-br ${value.color} p-4 rounded-2xl w-16 h-16 mx-auto mb-6 shadow-glow flex items-center justify-center`}>
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fadeUp">
          <Card className="p-12 border-0 shadow-premium bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border border-primary/20">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Align with Excellence?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Partner with a company that shares your commitment to excellence and understands your vision for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-premium text-white font-semibold" size="lg">
                <Link to="/contact">Align with Our Mission</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;