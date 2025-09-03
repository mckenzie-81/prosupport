import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Heart, 
  Globe2, 
  Zap, 
  Star,
  TrendingUp,
  Shield,
  Clock
} from "lucide-react";

const WhyChooseUsSection = () => {
  const advantages = [
    {
      icon: MapPin,
      title: "Local Mastery",
      description: "Our team doesn't just understand the Ghanaian market—we've mastered it. Every recommendation, every strategy, every solution is informed by deep, contextual knowledge that only comes from years of local expertise.",
      stats: "10+ Years",
      statsDesc: "Local Experience"
    },
    {
      icon: Heart,
      title: "Client-First Philosophy", 
      description: "Your success defines our success. We don't deliver cookie-cutter solutions. Instead, we architect bespoke strategies tailored to your unique objectives within Ghana's dynamic business landscape.",
      stats: "98%",
      statsDesc: "Client Satisfaction"
    },
    {
      icon: Globe2,
      title: "Dual-Perspective Advantage",
      description: "We bridge worlds—combining intimate local knowledge with expansive global perspective. Whether you're a local champion or international player, we guide you through Ghana's opportunities with unmatched expertise.",
      stats: "500+",
      statsDesc: "Successful Projects"
    },
    {
      icon: Zap,
      title: "Efficiency Excellence",
      description: "Cost optimization isn't about cutting corners—it's about strategic resource allocation. We maximize your operational efficiency while maintaining the highest standards of quality and service delivery.",
      stats: "40%",
      statsDesc: "Average Cost Savings"
    }
  ];

  const testimonials = [
    {
      quote: "Prosupport transformed our facility management completely. Their attention to detail and understanding of local requirements is unmatched.",
      author: "Sarah Mensah",
      position: "Operations Director",
      company: "Ghana Commercial Bank"
    },
    {
      quote: "The market entry support we received was exceptional. They guided us through every step of establishing our presence in Ghana.",
      author: "James Mitchell",
      position: "Regional Manager",
      company: "International Logistics Corp"
    },
    {
      quote: "Their supply chain optimization saved us significant costs while improving our service delivery. Truly professional team.",
      author: "Kwame Asante",
      position: "CEO",
      company: "Gold Coast Manufacturing"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeUp">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6">
            The Prosupport Advantage
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Why Industry Leaders
            <span className="gradient-text"> Choose Prosupport</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the difference that comes from working with Ghana's most trusted business solutions partner.
          </p>
        </div>

        {/* Main Advantages Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {advantages.map((advantage, index) => (
            <Card 
              key={index}
              className="p-8 hover-lift border-0 shadow-elegant bg-gradient-to-br from-background to-muted/20 animate-scaleIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-primary to-accent p-4 rounded-2xl shadow-glow">
                    <advantage.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {advantage.description}
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold gradient-text">{advantage.stats}</div>
                      <div className="text-sm text-muted-foreground">{advantage.statsDesc}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Service Promise Quote */}
        <div className="text-center mb-16 animate-fadeUp">
          <Card className="p-12 border-0 shadow-premium bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
            <blockquote className="text-2xl lg:text-3xl font-medium text-foreground mb-6 italic">
              "Exceptional service is the beacon that guides customers back to your door."
            </blockquote>
            <p className="text-muted-foreground">— Our Service Promise</p>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="p-6 hover-lift border-0 shadow-elegant bg-gradient-to-br from-background to-muted/10 animate-fadeUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold-accent text-gold-accent" />
                  ))}
                </div>
                <blockquote className="text-foreground mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { icon: TrendingUp, number: "40%", label: "Average Growth", desc: "Client business growth" },
            { icon: Shield, number: "99.9%", label: "Uptime", desc: "Service availability" },
            { icon: Clock, number: "24/7", label: "Support", desc: "Always available" },
            { icon: Star, number: "4.9", label: "Rating", desc: "Client satisfaction" }
          ].map((metric, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover-lift border-0 shadow-elegant bg-gradient-to-br from-background to-muted/10 animate-scaleIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <metric.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold gradient-text mb-2">{metric.number}</div>
              <div className="font-semibold text-foreground mb-1">{metric.label}</div>
              <div className="text-sm text-muted-foreground">{metric.desc}</div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fadeUp">
          <div className="bg-gradient-to-r from-primary via-accent to-primary p-12 rounded-3xl text-white">
            <h3 className="text-3xl font-bold mb-4">
              Experience the Prosupport Advantage
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join the ranks of successful businesses who've transformed their operations with our expertise.
            </p>
            <Button 
              className="bg-white text-primary hover:bg-white/90 font-semibold" 
              size="lg"
            >
              Start Your Transformation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;