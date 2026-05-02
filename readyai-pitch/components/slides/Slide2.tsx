'use client';

import Slide from '@/components/layout/Slide';
import Container from '@/components/ui/Container';
import SlideNavigation from '@/components/ui/SlideNavigation';

export default function Slide2() {
  return (
    <Slide id="slide-2" background="gray" index={2}>
      <Container className="text-center">
        <h1 className="text-5xl font-semibold text-gray-800 mb-4">
          Slide 2
        </h1>
        <p className="text-xl text-gray-600">
          This is a test slide to verify navigation
        </p>
      </Container>
    </Slide>
  );
}
