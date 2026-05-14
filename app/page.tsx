import { BlueprintHero } from "@/components/hero/BlueprintHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { HomeIntro } from "@/components/sections/HomeIntro";
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
        <ProjectsPreview />
        <ProcessPreview />
        <PricingTeaser />
        <FinalCTA />
      </main>
    </>
  );
}
