import { SeoHead } from "@/components/seo/SeoHead";
import { FeaturedCasesSection } from "@/components/sections/FeaturedCasesSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { NavbarSection } from "@/components/sections/NavbarSection";
import { PainPointsSection } from "@/components/sections/PainPointsSection";
import { ProofBarSection } from "@/components/sections/ProofBarSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { siteContent } from "@/data/siteContent";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#06080d] text-white">
      <SeoHead
        title={siteContent.seo.title}
        description={siteContent.seo.description}
        siteUrl={siteContent.seo.siteUrl}
        canonicalPath={siteContent.seo.canonicalPath}
        ogImagePath={siteContent.seo.ogImagePath}
        instagram={siteContent.seo.instagram}
        brandName={siteContent.brand.name}
        serviceDescription={siteContent.seo.serviceDescription}
        areaServed={siteContent.seo.areaServed}
        addressLocality={siteContent.seo.addressLocality}
        addressRegion={siteContent.seo.addressRegion}
        addressCountry={siteContent.seo.addressCountry}
      />
      <NavbarSection />

      <main id="main-content">
        <HeroSection />
        <ProofBarSection />
        <PainPointsSection />
        <SolutionsSection />
        <FeaturedCasesSection />
        <MethodologySection />
        <TestimonialSection />
        <FaqSection />
        <FinalCtaSection />
      </main>

      <FooterSection />
    </div>
  );
};

export default Index;
