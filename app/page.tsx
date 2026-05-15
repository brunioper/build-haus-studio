import type { Metadata } from "next";
import { homeMetadata, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  ...homeMetadata,
  openGraph: {
    title: homeMetadata.title as string,
    description: homeMetadata.description as string,
    url: siteUrl,
    locale: "es_UY",
    type: "website",
    siteName: "Build Haus Studio",
  },
};

import { BlueprintHero } from "@/components/hero/BlueprintHero";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { HomeIntro } from "@/components/sections/HomeIntro";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { PricingTeaser } from "@/components/sections/PricingTeaser";
import { ProcessPreview } from "@/components/sections/ProcessPreview";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { ServicesPreview } from "@/components/sections/ServicesPreview";

export default function HomePage() {
  return (
    <>
      <BlueprintHero />
      <main className="home-main" id="home-main">
        <HomeIntro />
        <ServicesPreview />
        <CapabilitiesSection />
        <MarqueeSection />
        <ProjectsPreview />
        <ProcessPreview />
        <PricingTeaser />
        <FinalCTA />
      </main>
    </>
  );
}
