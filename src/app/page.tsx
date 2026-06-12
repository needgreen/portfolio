import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import SkillsetSection from '@/components/sections/SkillsetSection';
import TechStackSection from '@/components/sections/TechStackSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AdCreativesSection from '@/components/sections/AdCreativesSection';
import PhotographySection from '@/components/sections/PhotographySection';
import BrandingSection from '@/components/sections/BrandingSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SkillsetSection />
        <TechStackSection />
        <ProjectsSection />
        <AdCreativesSection />
        <PhotographySection />
        {/* <BrandingSection /> */}
      </main>
      <Footer />
    </>
  );
}
