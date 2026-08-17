import { Navbar } from '@/Shared/Navbar/Navbar';
import { Footer } from '@/Shared/Footer/Footer';
import { Herosection } from './components/Herosection';
import { BrandMarquee } from './components/BrandMarquee';
import { CaseStudyHighlight } from './components/CaseStudyHighlight';
import { PerformanceSolutions } from './components/PerformanceSolutions';
import { CampaignResults } from './components/CampaignResults';
import { FaqSection } from './components/FaqSection';

export function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Herosection />
        <BrandMarquee />
        <CaseStudyHighlight />
        <PerformanceSolutions />
        <CampaignResults />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
