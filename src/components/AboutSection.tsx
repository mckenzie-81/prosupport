import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Award, Globe, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slideInLeft">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Built for Ghana. Trusted by Leaders.
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Your Success is Our 
              <span className="gradient-text"> Mission</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Prosupport Services Company Limited stands as Ghana's most versatile business 
              solutions architect. We've mastered the art of delivering excellence across four 
              mission-critical areas: Facility Management Services, Purchasing & Supply, 
              General Support Services, and Market Entry Services.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every solution we craft is precision-engineered for the Ghanaian business landscape. 
              We don't adapt generic approaches—we create context-specific strategies that honor 
              local nuances while meeting global standards.
            </p>

            {/* Quote */}
            <blockquote className="border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-lg mb-8">
              <p className="text-xl font-medium text-foreground italic mb-2">
                "Quality in a service or product is not what you put into it. 
                It is what the customer gets out of it."
              </p>
              <cite className="text-muted-foreground">— Our Philosophy</cite>
            </blockquote>

            <Button className="btn-premium text-white font-semibold" size="lg">
              Discover Your Growth Potential
            </Button>
          </div>

          {/* Right Content - Trust Indicators */}
          <div className="animate-fadeUp">
            <div className="grid gap-6">
              {/* Achievement Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="p-6 hover-lift border-0 shadow-elegant bg-gradient-to-br from-primary/5 to-accent/5">
                  <Award className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Industry Leader</h3>
                  <p className="text-muted-foreground text-sm">
                    Recognized as Ghana's premier business solutions provider
                  </p>
                </Card>

                <Card className="p-6 hover-lift border-0 shadow-elegant bg-gradient-to-br from-accent/5 to-primary/5">
                  <Globe className="h-12 w-12 text-accent mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Local Expertise</h3>
                  <p className="text-muted-foreground text-sm">
                    Deep understanding of Ghanaian market dynamics
                  </p>
                </Card>
              </div>

              {/* Key Strengths */}
              <Card className="p-8 border-0 shadow-premium bg-gradient-to-br from-background to-muted/20">
                <h3 className="text-2xl font-bold mb-6 text-center">Why Businesses Choose Us</h3>
                <div className="space-y-4">
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
                      <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Client Satisfaction */}
              <div className="text-center p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Client Satisfaction Rate</div>
                <p className="text-sm text-muted-foreground mt-2 italic">
                  "We measure our success not by our profits but by the satisfaction of our customers."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;