import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Award, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4">
        {/* Full Width Mission Content */}
        <div className="text-center mb-16 animate-slideInLeft">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            Built for Ghana. Trusted by Leaders.
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
            Your Success is Our 
            <span className="gradient-text"> Mission</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg lg:text-xl text-muted-foreground mb-6 leading-relaxed">
              Prosupport Services Company Limited stands as Ghana's most versatile business 
              solutions architect. We've mastered the art of delivering excellence across four 
              mission-critical areas: Facility Management Services, Procurement & Supply Chain, 
              General Support Services, and Market Entry Services.
            </p>

            <p className="text-lg lg:text-xl text-muted-foreground mb-12 leading-relaxed">
              Every solution we craft is precision-engineered for the Ghanaian business landscape. 
              We don't adapt generic approaches—we create context-specific strategies that honor 
              local nuances while meeting global standards.
            </p>
          </div>
        </div>

        {/* Client Satisfaction - Full Width */}
        <div className="max-w-2xl mx-auto p-10 from-primary/10   mb-16 text-center">
          <Users className="h-16 w-16 text-primary mx-auto mb-6" />
          <div className="text-5xl font-bold text-primary mb-3">98%</div>
          <div className="text-muted-foreground font-semibold text-lg mb-3">Client Satisfaction Rate</div>
          <p className="text-muted-foreground italic">
            "We measure our success not by our profits but by the satisfaction of our customers."
          </p>
        </div>

        {/* Quote - Full Width */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <blockquote className="border-l-4 border-primary pl-8 py-8 bg-primary/5 rounded-r-xl shadow-sm">
            <p className="text-2xl font-medium text-foreground italic mb-4 leading-relaxed">
              "Quality in a service or product is not what you put into it. 
              It is what the customer gets out of it."
            </p>
            <cite className="text-muted-foreground font-medium">— Our Philosophy</cite>
          </blockquote>
        </div>

        {/* Achievement Cards */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid sm:grid-cols-2 gap-6 animate-fadeUp">
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-primary/5 to-accent/5">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-3">Industry Leader</h3>
              <p className="text-muted-foreground">
                Recognized as Ghana's premier business solutions provider
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-accent/5 to-primary/5">
              <Globe className="h-12 w-12 text-accent mb-4" />
              <h3 className="font-semibold text-lg mb-3">Local Expertise</h3>
              <p className="text-muted-foreground">
                Deep understanding of Ghanaian market dynamics
              </p>
            </Card>
          </div>
        </div>

        {/* CTA - Centered */}
        <div className="text-center mb-16 animate-slideInLeft">
          <Button asChild className="btn-premium text-white font-semibold px-8 py-4" size="lg">
            <Link to="/contact">Discover Your Growth Potential</Link>
          </Button>
        </div>

        {/* Key Strengths - Full Width */}
        <div className="max-w-6xl mx-auto">
          <Card className="p-10 border-0 shadow-xl bg-gradient-to-br from-background to-muted/20">
            <h3 className="text-3xl font-bold mb-10 text-center">Why Businesses Choose Us</h3>
            <div className="grid md:grid-cols-2 gap-8">
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
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <h4 className="font-semibold text-foreground text-lg mb-2">{item.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;