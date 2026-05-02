'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { SlideMetadata } from '@/constants/navigation';

interface SlideDropdownProps {
  slides: SlideMetadata[];
  onSelect: (slideId: string) => void;
  activeSlideId?: string;
}

export default function SlideDropdown({ slides, onSelect, activeSlideId }: SlideDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (slideId: string) => {
    onSelect(slideId);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-200"
        aria-label="Select slide"
      >
        <span className="text-sm font-medium text-gray-600">Page Content</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 max-h-96 overflow-y-auto">
          {slides.map((slide) => {
            const isActive = slide.id === activeSlideId;
            return (
              <button
                key={slide.id}
                onClick={() => handleSelect(slide.id)}
                className={`w-full px-4 py-2.5 text-left transition-colors duration-150 flex items-center justify-between gap-3 ${
                  isActive 
                    ? 'bg-cyan-50 text-cyan-600' 
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-sm font-medium ${isActive ? 'text-cyan-600' : 'text-gray-400'}`}>
                    {slide.index.toString().padStart(2, '0')}
                  </span>
                  <span className="text-sm">{slide.title}</span>
                </div>
                {isActive && (
                  <div className="w-2 h-2 rounded-full bg-cyan-600 flex-shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
