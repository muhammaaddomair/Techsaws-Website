// import DashboardSection from "@/components/sections/home/dashboard-section";
import HomeHeroSection from "@/components/sections/home/home-hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { ProcessSection } from "@/components/home/process-section";
import { SolutionsSection } from "@/components/home/solutions-section";
import { TechnologySection } from "@/components/home/technology-section";
import { TopAutomationHero } from "@/components/home/top-automation-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroAgentTabs } from "@/components/sections/hero-agent-tabs";
import WhySection from "@/components/sections/home/why-section";
// import ChallengesSection from "@/components/sections/home/challenges-section";

function HomePage() {
  return (
    <main>
      <HomeHeroSection />
      {/* <DashboardSection /> */}
      {/* <ChallengesSection /> */}
      <WhySection />
      <div className="min-h-screen overflow-x-clip bg-black text-white">
        <section className="relative isolate overflow-hidden bg-black px-4 py-10 sm:px-8">
          <HeroAgentTabs
            visual="robot"
            title={"We engineer the systems behind\nfaster business growth."}
            description="TechSaws builds automation, backend infrastructure, cybersecurity, revenue systems, and digital experiences for teams that need cleaner operations, stronger platforms, and software that scales with them."
          />
        </section>
        <SolutionsSection />
        <TechnologySection />
        <ServicesSection />
        <ProcessSection />
        <FaqSection />
        <CtaSection />
        <TopAutomationHero />
      </div>
    </main>
  );
}

export default HomePage;
