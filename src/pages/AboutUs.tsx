import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";

const AboutUsPage = () => {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-white">
            About Us
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Your trusted partner for comprehensive HR solutions and labor
            outsourcing services in Ghana.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="relative py-20 bg-gradient-to-r from-background via-muted/5 to-background overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-2xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                ProSupport Services Company
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            </div>

            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                ProSupport Services Company is a limited liability company with
                accreditation from the Ghana Labour Department. We hold a
                license for recruiting, outsourcing labor, and offering
                comprehensive HR solutions to organizations across all sectors
                in Ghana.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our commitment extends to compliance with both Ghanaian and
                international labor regulations, as well as recognized industry
                standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="relative py-20 bg-gradient-to-bl from-muted/20 via-muted/10 to-background overflow-hidden">
        {/* Geometric background elements */}
        <div className="absolute inset-0">
          <svg
            className="absolute top-20 left-20 w-24 h-24 text-primary/10 animate-pulse"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.5 12a1.5 1.5 0 01-1.5-1.5A1.5 1.5 0 0117.5 9a1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5m-3-4A1.5 1.5 0 0113 6.5 1.5 1.5 0 0114.5 5 1.5 1.5 0 0116 6.5 1.5 1.5 0 0114.5 8m-5 0A1.5 1.5 0 018 6.5 1.5 1.5 0 019.5 5 1.5 1.5 0 0111 6.5 1.5 1.5 0 019.5 8m-3 4A1.5 1.5 0 015 10.5 1.5 1.5 0 016.5 9 1.5 1.5 0 018 10.5 1.5 1.5 0 016.5 12" />
          </svg>
          <svg
            className="absolute bottom-20 right-20 w-32 h-32 text-primary/5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
          </svg>
        </div>
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-primary/5 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Approach
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            </div>

            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                In the dynamic landscape of today's workforce, navigating the
                complexities of human resources requires not just expertise, but
                empathy and insight. We go beyond the conventional to craft
                tailored solutions that align with your organization's unique
                culture and objectives.
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Commitment
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            </div>

            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                From comprehensive talent acquisition strategies to proactive
                employee engagement initiatives, we are committed to empowering
                businesses to thrive in an ever-evolving marketplace. With our
                holistic approach to HR, we don't just solve problems; we unlock
                opportunities for growth and innovation, one partnership at a
                time.
              </p>
            </div>

            {/* Key Services Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center p-6 rounded-lg bg-muted/10">
                <h3 className="text-xl font-semibold mb-3">
                  Talent Acquisition
                </h3>
                <p className="text-muted-foreground">
                  Comprehensive recruitment strategies tailored to your needs
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-muted/10">
                <h3 className="text-xl font-semibold mb-3">
                  Labor Outsourcing
                </h3>
                <p className="text-muted-foreground">
                  Licensed outsourcing solutions across all sectors
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-muted/10">
                <h3 className="text-xl font-semibold mb-3">HR Solutions</h3>
                <p className="text-muted-foreground">
                  Employee engagement and comprehensive HR support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutSection />
    </div>
  );
};

export default AboutUsPage;
