import { ReactNode } from 'react';

interface SlideProps {
  id: string;
  children: ReactNode;
  background?: 'white' | 'gray' | 'gradient' | 'dark';
  className?: string;
  index: number;
}

export default function Slide({ id, children, background = 'white', className = '', index }: SlideProps) {
  const backgroundStyles = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'gradient-animated',
    dark: 'bg-gray-900 text-white',
  };

  return (
    <section
      id={`slide-${index}`}
      data-slide={index}
      data-slide-id={id}
      className={`min-h-screen w-full flex items-center justify-center ${backgroundStyles[background]} ${className}`}
      style={{ scrollSnapAlign: 'start' }}
    >
      {children}
    </section>
  );
}
