import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Award, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="animate-slideInLeft">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Built for Ghana. Trusted by Leaders.
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
              Your Success is Our 
              <span className="gradient-text"> Mission</span>
            </h2>
            
            <p className="text-base lg:text-lg text-muted-foreground mb-6 leading-relaxed">
              Prosupport Services Company Limited stands as Ghana's most versatile business 
              solutions architect. We've mastered the art of delivering excellence across four 
              mission-critical areas: Facility Management Services, Procurement & Supply Chain, 
              General Support Services, and Market Entry Services.
            </p>

            <p className="text-base lg:text-lg text-muted-foreground mb-8 leading-relaxed">
              Every solution we craft is precision-engineered for the Ghanaian business landscape. 
              We don't adapt generic approaches—we create context-specific strategies that honor 
              local nuances while meeting global standards.
            </p>

            {/* Quote */}
            <blockquote className="border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-lg mb-8">
              <p className="text-lg font-medium text-foreground italic mb-2">
                "Quality in a service or product is not what you put into it. 
                It is what the customer gets out of it."
              </p>
              <cite className="text-muted-foreground text-sm">— Our Philosophy</cite>
            </blockquote>

            <Button asChild className="btn-premium text-white font-semibold" size="lg">
              <Link to="/contact">Discover Your Growth Potential</Link>
            </Button>
          </div>

          {/* Right Content - Trust Indicators */}
          <div className="animate-fadeUp lg:mt-8">
            <div className="grid gap-5">
              {/* Client Satisfaction - Top for immediate impact */}
              <div className="text-center p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl">
                <Users className="h-14 w-14 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground font-medium mb-2">Client Satisfaction Rate</div>
                <p className="text-sm text-muted-foreground italic">
                  "We measure our success not by our profits but by the satisfaction of our customers."
                </p>
              </div>

              {/* Achievement Cards - Build credibility */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="p-5 hover-lift border-0 shadow-elegant bg-gradient-to-br from-primary/5 to-accent/5">
                  <Award className="h-10 w-10 text-primary mb-3" />
                  <h3 className="font-semibold text-base mb-2">Industry Leader</h3>
                  <p className="text-muted-foreground text-sm">
                    Recognized as Ghana's premier business solutions provider
                  </p>
                </Card>

                <Card className="p-5 hover-lift border-0 shadow-elegant bg-gradient-to-br from-accent/5 to-primary/5">
                  <Globe className="h-10 w-10 text-accent mb-3" />
                  <h3 className="font-semibold text-base mb-2">Local Expertise</h3>
                  <p className="text-muted-foreground text-sm">
                    Deep understanding of Ghanaian market dynamics
                  </p>
                </Card>
              </div>

              {/* Key Strengths - Detailed advantages last */}
              <Card className="p-6 border-0 shadow-premium bg-gradient-to-br from-background to-muted/20">
                <h3 className="text-xl font-bold mb-5 text-center">Why Businesses Choose Us</h3>
                <div className="space-y-3">
                  {[
                    {
                      title: "Local Mastery",
                      desc: "Years of expertise in the Ghanaian business landscape"
                    },
                    {
                      title: "Client-First Philosophy", 
                      desc: "Your success defines our success - always"
                    },
                    {
                      title: "Dual-Perspective Advantage",
                      desc: "Local knowledge with global standards"
                    },
                    {
                      title: "Efficiency Excellence",
                      desc: "Strategic resource optimization without compromise"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                        <p className="text-muted-foreground text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;