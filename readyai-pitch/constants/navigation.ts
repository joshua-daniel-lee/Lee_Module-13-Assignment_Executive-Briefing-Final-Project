// Slide Navigation Metadata

export interface SlideMetadata {
  id: string;
  title: string;
  index: number;
}

export const SLIDE_METADATA: SlideMetadata[] = [
  { id: 'hero', title: 'Welcome', index: 1 },
  { id: 'problem', title: 'The Problem', index: 2 },
  { id: 'solution', title: 'The Solution', index: 3 },
  // Add more slides here as they are created
];

export const getTotalSlides = () => SLIDE_METADATA.length;

export const getSlideByIndex = (index: number) => {
  return SLIDE_METADATA.find(slide => slide.index === index);
};

export const getSlideById = (id: string) => {
  return SLIDE_METADATA.find(slide => slide.id === id);
};
