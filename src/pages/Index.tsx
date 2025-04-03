
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import InsightsSection from '@/components/InsightsSection';
import ImpactSection from '@/components/ImpactSection';
import ConnectSection from '@/components/ConnectSection';
import ScrollIndicator from '@/components/ScrollIndicator';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const Index = () => {
  // Initialize scroll animations
  useScrollAnimation();
  
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <Navigation />
      <HeroSection />
      <InsightsSection />
      <ImpactSection />
      <ConnectSection />
      <ScrollIndicator />
    </div>
  );
};

export default Index;
