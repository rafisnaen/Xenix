import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const shouldBeVisible = scrolled > 300;
      const isNearBottom = pageHeight - (scrolled + viewportHeight) < 150;

      if (shouldBeVisible && !isNearBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      size="icon"
      className={cn(
        'fixed bottom-8 right-8 z-50 rounded-full shadow-glow transition-all duration-300',
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
      )}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp />
    </Button>
  );
};

export default ScrollToTopButton;
