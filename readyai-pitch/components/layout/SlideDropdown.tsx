'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { SlideMetadata } from '@/constants/navigation';

interface SlideDropdownProps {
  slides: SlideMetadata[];
  onSelect: (slideId: string) => void;
}

export default function SlideDropdown({ slides, onSelect }: SlideDropdownProps) {
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
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:border-[var(--color-primary)] hover:bg-gray-50 transition-all duration-200"
        aria-label="Select slide"
      >
        <span className="font-medium text-gray-700">Pages</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {slides.map((slide) => (
            <button
              key={slide.id}
              onClick={() => handleSelect(slide.id)}
              className="w-full px-4 py-2 text-left hover:bg-[var(--color-primary)] hover:bg-opacity-5 hover:text-[var(--color-primary)] transition-colors duration-150 flex items-center gap-3"
            >
              <span className="text-sm font-medium text-gray-500">{slide.index}</span>
              <span className="text-sm">{slide.title}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
