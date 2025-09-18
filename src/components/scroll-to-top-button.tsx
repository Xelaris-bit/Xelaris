
'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
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
        'fixed bottom-6 left-6 z-50 rounded-full w-12 h-12 shadow-lg transition-opacity duration-300 opacity-80 hover:opacity-100',
        isVisible ? 'opacity-80' : 'opacity-0 pointer-events-none'
      )}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
};

export default ScrollToTopButton;
