
import { useState, useEffect } from 'react';

type Section = 'hero' | 'insights' | 'impact' | 'connect';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<Section>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      const sections = [
        { id: 'hero', element: document.getElementById('hero') },
        { id: 'insights', element: document.getElementById('insights') },
        { id: 'impact', element: document.getElementById('impact') },
        { id: 'connect', element: document.getElementById('connect') }
      ];
      
      for (const section of sections.reverse()) {
        if (section.element && scrollPosition >= section.element.offsetTop) {
          setActiveSection(section.id as Section);
          break;
        }
      }
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return activeSection;
}
