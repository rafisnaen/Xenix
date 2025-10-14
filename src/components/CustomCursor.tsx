import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button')) {
        setIsHovering(true);
      }
    };
    
    const handleMouseOut = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button')) {
        setIsHovering(false);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updateMousePosition);
    document.body.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseout', handleMouseOut);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.body.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseout', handleMouseOut);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className={cn('hidden md:block', isVisible ? 'opacity-100' : 'opacity-0')}>
      <div
        className={cn(
          'fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-[9999] transition-transform duration-100 ease-out',
          isHovering ? 'scale-150' : 'scale-100'
        )}
        style={{ transform: `translate(${position.x - 16}px, ${position.y - 16}px) ${isHovering ? 'scale(1.5)' : 'scale(1)'}` }}
      />
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[9999]"
        style={{ transform: `translate(${position.x - 4}px, ${position.y - 4}px)` }}
      />
    </div>
  );
};

export default CustomCursor;