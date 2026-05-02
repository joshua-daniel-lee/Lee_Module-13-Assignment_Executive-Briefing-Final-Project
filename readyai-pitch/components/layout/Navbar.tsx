'use client';

import Image from 'next/image';
import { useActiveSlide } from '@/hooks/useActiveSlide';
import { SLIDE_METADATA, getTotalSlides } from '@/constants/navigation';
import SlideDropdown from './SlideDropdown';

export default function Navbar() {
  const totalSlides = getTotalSlides();
  const activeSlide = useActiveSlide(totalSlides);

  const scrollToSlide = (slideId: string) => {
    const slide = SLIDE_METADATA.find(s => s.id === slideId);
    if (slide) {
      const element = document.getElementById(`slide-${slide.index}`);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left */}
          <button
            onClick={scrollToTop}
            className="hover:opacity-80 transition-opacity"
          >
            <Image 
              src="/ready-logo.svg" 
              alt="ready." 
              width={120} 
              height={46}
              className="h-8 w-auto"
            />
          </button>

          {/* Section Counter - Center */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <span className="text-sm font-medium text-gray-600">
              {activeSlide} / {totalSlides}
            </span>
          </div>

          {/* Right Section - Dropdown + Georgetown */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200">
              <span className="text-xs font-medium text-gray-600">Georgetown University</span>
            </div>
            <SlideDropdown slides={SLIDE_METADATA} onSelect={scrollToSlide} />
          </div>
        </div>
      </div>
    </nav>
  );
}
