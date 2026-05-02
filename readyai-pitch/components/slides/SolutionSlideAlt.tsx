'use client';

import Image from 'next/image';
import Slide from '@/components/layout/Slide';
import Container from '@/components/ui/Container';

export default function SolutionSlideAlt() {
  const features = [
    {
      number: '01',
      title: 'Get Moving',
      summary: 'is AI-powered personalized onboarding that creates a custom moving plan tailored to your timeline and needs.'
    },
    {
      number: '02',
      title: 'Making Moves',
      summary: 'is smart task management with intelligent prioritization and timely reminders from start to finish.'
    },
    {
      number: '03',
      title: 'My Journey',
      summary: 'is visual timeline tracking that shows your progress and helps you adjust plans as they evolve.'
    },
    {
      number: '04',
      title: 'Explore',
      summary: 'is AI-powered neighborhood discovery with personalized recommendations for your new community.'
    },
    {
      number: '05',
      title: 'Share',
      summary: 'is seamless collaboration that keeps your family, roommates, and moving team in sync.'
    }
  ];

  return (
    <Slide id="solution" background="white" index={3}>
      <Container className="py-20">
        {/* Split Layout: Content Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Side - Content */}
          <div className="space-y-6">
            {/* Headline - Standard Gradient */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pb-1">
              Everything You Need to Move with Confidence
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready is your AI-powered moving assistant that transforms an overwhelming process into a manageable journey.
            </p>

            {/* Horizontal Line */}
            <hr className="border-t border-gray-300" />

            {/* Feature List - Numbered, Smaller Font */}
            <div className="space-y-3">
              {features.map((feature) => (
                <div key={feature.title}>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-bold text-gray-900">{feature.number}. {feature.title}</span> {feature.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - UI Screenshot */}
          <div className="relative">
            <Image
              src="/slide-3-ui.png"
              alt="Ready App UI Screenshot"
              width={1200}
              height={900}
              className="w-full h-auto rounded-xl"
              priority
            />
          </div>
        </div>
      </Container>

      {/* Small Laszlo in bottom-right - Hidden on mobile */}
      <div className="hidden md:block fixed bottom-24 right-8 z-10">
        <div className="relative">
          <Image
            src="/laszlo.svg"
            alt="Laszlo"
            width={180}
            height={180}
            className="w-[180px] h-[180px]"
            style={{ 
              imageRendering: 'crisp-edges',
              shapeRendering: 'geometricPrecision',
            }}
            priority
          />
        </div>
      </div>
    </Slide>
  );
}
