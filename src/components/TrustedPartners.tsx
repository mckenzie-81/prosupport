
import { LogoLoop } from "@/components/ui/LogoLoop";

const TrustedPartners = () => {
  const partners = [
    { name: "Bank Of Ghana", logo: "src/assets/bog.png" },
    { name: "Radiiant", logo: "src/assets/prologo.png" },
    { name: "Aurora", logo: "src/assets/bog.png" },
    { name: "Another", logo: "src/assets/prologo.png" },
    { name: "Next", logo: "src/assets/bog.png" },
    { name: "Next", logo: "src/assets/prologo.png" },
    { name: "Bank Of Ghana", logo: "src/assets/bog.png" },
    { name: "Radiiant", logo: "src/assets/bog.png" },
    { name: "Aurora", logo: "src/assets/bog.png" },
    { name: "Another", logo: "src/assets/bog.png" },
    { name: "Next", logo: "src/assets/bog.png" },
    { name: "Next", logo: "src/assets/bog.png" },

  ];

  const logoItems = partners.map(partner => ({
    src: partner.logo,
    alt: partner.name,
  }));

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-sm font-semibold leading-8 text-muted-foreground mb-8">
          Trusted by the most innovative businesses
        </h2>
        <LogoLoop 
          logos={logoItems} 
          speed={40} 
          fadeOut={true} 
          logoHeight={32} 
          gap={64} // Increased gap for more breathing room
          fadeOutColor="var(--background)"
        />
      </div>
    </div>
  );
};

export default TrustedPartners;
