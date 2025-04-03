
import { useEffect } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.appear-on-scroll');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        // Element is partially visible
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
          element.classList.add('is-visible');
        }
      });
    };
    
    // Run once on initial load
    setTimeout(animateOnScroll, 300);
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);
}
