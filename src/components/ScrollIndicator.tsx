
import { ArrowDown } from 'lucide-react';
import { useActiveSection } from '../hooks/use-active-section';
import { cn } from '@/lib/utils';

export default function ScrollIndicator() {
  const activeSection = useActiveSection();
  
  // Don't show on last section
  if (activeSection === 'connect') {
    return null;
  }
  
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <div className={cn(
        "flex flex-col items-center transition-opacity duration-300",
        activeSection === 'connect' ? 'opacity-0' : 'opacity-100'
      )}>
        <p className="text-sm text-white/70 mb-2">Scroll to explore</p>
        <div className="animate-bounce bg-primary/20 p-2 rounded-full">
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </div>
    </div>
  );
}
