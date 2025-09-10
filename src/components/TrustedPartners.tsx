import React from 'react';
import { LogoLoop } from './ui/LogoLoop';
import type { LogoItem } from './ui/LogoLoop';

const logoItems: LogoItem[] = [
  { src: "/images/H&N.png", alt: "H&N" },
  { src: "/images/qfs.png", alt: "QFS" },
  { src: "/images/fertility.png", alt: "Fertility" },
  { src: "/images/SDC Capital.png", alt: "SDC Capital" },
  { src: "/images/gwoSevo-logo.png", alt: "GwoSevo" },
  { src: "/images/TheVictoriaGrammarSchool.png", alt: "TVGS" },
];

const TrustedPartners = React.memo(() => {
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
          gap={160}
          fadeOutColor="var(--background)"
        />
      </div>
    </div>
  );
});

TrustedPartners.displayName = 'TrustedPartners';

export default TrustedPartners;
