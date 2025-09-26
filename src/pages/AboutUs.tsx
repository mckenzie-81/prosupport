import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";

const AboutUsPage = () => {
  return (
    <div className="bg-background text-foreground">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner for comprehensive HR solutions and labor outsourcing services in Ghana.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">ProSupport Services Company</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                ProSupport Services Company is a limited liability company with accreditation from the Ghana Labour Department. 
                We hold a license for recruiting, outsourcing labor, and offering comprehensive HR solutions to organizations 
                across all sectors in Ghana.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our commitment extends to compliance with both Ghanaian and international labor regulations, 
                as well as recognized industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Approach</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                In the dynamic landscape of today's workforce, navigating the complexities of human resources 
                requires not just expertise, but empathy and insight. We go beyond the conventional to craft 
                tailored solutions that align with your organization's unique culture and objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Commitment</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                From comprehensive talent acquisition strategies to proactive employee engagement initiatives, 
                we are committed to empowering businesses to thrive in an ever-evolving marketplace. 
                With our holistic approach to HR, we don't just solve problems; we unlock opportunities 
                for growth and innovation, one partnership at a time.
              </p>
            </div>

            {/* Key Services Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center p-6 rounded-lg bg-muted/10">
                <h3 className="text-xl font-semibold mb-3">Talent Acquisition</h3>
                <p className="text-muted-foreground">Comprehensive recruitment strategies tailored to your needs</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-muted/10">
                <h3 className="text-xl font-semibold mb-3">Labor Outsourcing</h3>
                <p className="text-muted-foreground">Licensed outsourcing solutions across all sectors</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-muted/10">
                <h3 className="text-xl font-semibold mb-3">HR Solutions</h3>
                <p className="text-muted-foreground">Employee engagement and comprehensive HR support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUsPage;
