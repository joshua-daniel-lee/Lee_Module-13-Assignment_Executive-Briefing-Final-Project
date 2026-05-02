import { ReactNode } from 'react';

interface HeadingProps {
  level: 'h1' | 'h2' | 'h3' | 'h4';
  children: ReactNode;
  className?: string;
  gradient?: boolean;
}

export default function Heading({ level, children, className = '', gradient = false }: HeadingProps) {
  const baseStyles = {
    h1: 'text-5xl sm:text-6xl lg:text-7xl font-bold',
    h2: 'text-4xl sm:text-5xl lg:text-6xl font-bold',
    h3: 'text-3xl sm:text-4xl font-semibold',
    h4: 'text-2xl sm:text-3xl font-semibold',
  };

  const gradientClass = gradient ? 'gradient-text' : '';
  const combinedClassName = `${baseStyles[level]} ${gradientClass} ${className}`;

  const Tag = level;

  return <Tag className={combinedClassName}>{children}</Tag>;
}
