
import { useActiveSection } from '../hooks/use-active-section';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const activeSection = useActiveSection();
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between h-16 section-container">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">Geospatial-360</h1>
        </div>
        
        <nav className="hidden md:flex space-x-1">
          <button 
            onClick={() => scrollToSection('hero')}
            className={cn(
              'nav-link',
              activeSection === 'hero' ? 'nav-link-active' : 'nav-link-inactive'
            )}
          >
            Homepage
          </button>
          <button 
            onClick={() => scrollToSection('insights')}
            className={cn(
              'nav-link',
              activeSection === 'insights' ? 'nav-link-active' : 'nav-link-inactive'
            )}
          >
            Playground
          </button>
          <button 
            onClick={() => scrollToSection('impact')}
            className={cn(
              'nav-link',
              activeSection === 'impact' ? 'nav-link-active' : 'nav-link-inactive'
            )}
          >
            Use Cases
          </button>
          <button 
            onClick={() => scrollToSection('connect')}
            className={cn(
              'nav-link',
              activeSection === 'connect' ? 'nav-link-active' : 'nav-link-inactive'
            )}
          >
            Connect
          </button>
        </nav>
      </div>
    </header>
  );
}
