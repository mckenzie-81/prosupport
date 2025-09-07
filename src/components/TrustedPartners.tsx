
import { LogoLoop } from "@/components/ui/LogoLoop";

const TrustedPartners = () => {
  const partners = [
    { name: "", logo: "" },
    { name: "H&N", logo: "/src/assets/H&N.png" },
    { name: "QFS", logo: "src/assets/qfs.png" },
    { name: "fertility", logo: "src/assets/fertility.png" },
    { name: "SDC Capital", logo: "src/assets/SDC Capital.png" },
    { name: "SDC Capital", logo: "src/assets/gwoSevo-logo.png" },
    { name: "TVGS", logo: "src/assets/TheVictoriaGrammarSchool.png" },
    { name: "", logo: "/" },


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
          gap={160} // Increased gap for more breathing room
          fadeOutColor="var(--background)"
        />
      </div>
    </div>
  );
};

export default TrustedPartners;
