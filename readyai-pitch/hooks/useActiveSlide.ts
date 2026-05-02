'use client';

import { useState, useEffect } from 'react';

export function useActiveSlide(totalSlides: number) {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const slideId = entry.target.id;
          const slideIndex = parseInt(slideId.replace('slide-', ''), 10);
          if (!isNaN(slideIndex)) {
            setActiveSlide(slideIndex);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all slide elements
    const slides = document.querySelectorAll('[data-slide]');
    slides.forEach((slide) => observer.observe(slide));

    return () => {
      slides.forEach((slide) => observer.unobserve(slide));
    };
  }, [totalSlides]);

  return activeSlide;
}
