'use client';

import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
}

export default function SlideNavigation({ currentSlide, totalSlides }: SlideNavigationProps) {
  // Debug logging
  console.log('=== SlideNavigation Render ===');
  console.log('Props:', { currentSlide, totalSlides });
  
  const scrollToSlide = (slideNumber: number) => {
    const slideElement = document.getElementById(`slide-${slideNumber}`);
    if (slideElement) {
      slideElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Simple, clear logic
  const isFirstSlide = currentSlide === 1;
  const isLastSlide = currentSlide === totalSlides;
  
  // Determine which arrows to show
  const showUpArrow = !isFirstSlide;  // Show up on all slides except first
  const showDownArrow = !isLastSlide; // Show down on all slides except last
  
  console.log('Logic:', { isFirstSlide, isLastSlide, showUpArrow, showDownArrow });

  return (
    <div className="hidden md:flex fixed bottom-8 left-1/2 -translate-x-1/2 flex-col gap-3 z-30">
      {/* Up Arrow - Peachy Coral */}
      {showUpArrow && (
        <motion.button
          onClick={() => scrollToSlide(currentSlide - 1)}
          className="min-w-[44px] min-h-[44px] p-3 rounded-full bg-[#FF9A8B]/40 backdrop-blur-sm text-white flex items-center justify-center"
          aria-label="Previous section"
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 154, 139, 0.6)' }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              '0 0 20px rgba(255, 154, 139, 0.4)',
              '0 0 30px rgba(255, 154, 139, 0.6)',
              '0 0 20px rgba(255, 154, 139, 0.4)',
            ],
          }}
          transition={{
            boxShadow: {
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          <ChevronUp className="w-4 h-4" />
        </motion.button>
      )}

      {/* Down Arrow - Cyan */}
      {showDownArrow && (
        <motion.button
          onClick={() => scrollToSlide(currentSlide + 1)}
          className="min-w-[44px] min-h-[44px] p-3 rounded-full bg-[#26C6DA]/80 backdrop-blur-sm text-white flex items-center justify-center"
          aria-label="Next section"
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(38, 198, 218, 0.9)' }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -10, 0],
            boxShadow: [
              '0 0 20px rgba(38, 198, 218, 0.4)',
              '0 0 30px rgba(38, 198, 218, 0.6)',
              '0 0 20px rgba(38, 198, 218, 0.4)',
            ],
          }}
          transition={{
            y: {
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            boxShadow: {
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.button>
      )}
    </div>
  );
}
