'use client';

import { useState, useEffect } from 'react';
import SlideNavigation from './SlideNavigation';

interface GlobalSlideNavigationProps {
  totalSlides: number;
}

export default function GlobalSlideNavigation({ totalSlides }: GlobalSlideNavigationProps) {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Find which slide is currently in view
      const slides = document.querySelectorAll('[data-slide]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      slides.forEach((slide) => {
        const slideTop = (slide as HTMLElement).offsetTop;
        const slideBottom = slideTop + (slide as HTMLElement).offsetHeight;
        
        if (scrollPosition >= slideTop && scrollPosition < slideBottom) {
          const slideIndex = parseInt(slide.getAttribute('data-slide') || '1');
          setCurrentSlide(slideIndex);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <SlideNavigation currentSlide={currentSlide} totalSlides={totalSlides} />;
}
