
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";

const AboutUsPage = () => {
  return (
    <div className="bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our mission, vision, and the dedicated team driving our success.
          </p>
        </div>
      </section>

      {/* About Section Content */}
      <AboutSection />

      <Footer />
    </div>
  );
};

export default AboutUsPage;
