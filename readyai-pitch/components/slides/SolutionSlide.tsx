'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Slide from '@/components/layout/Slide';
import Container from '@/components/ui/Container';
import { FADE_IN_UP } from '@/constants/animations';

export default function SolutionSlide() {
  const features = [
    {
      number: '01',
      title: 'Get Moving',
      subtitle: 'Personalized Onboarding',
      description: 'Start your journey by chatting with Laszlo, your AI moving assistant. Share your timeline, budget, and needs through natural conversation, and Ready creates a personalized moving plan tailored to your unique situation.'
    },
    {
      number: '02',
      title: 'Making Moves',
      subtitle: 'Smart Task Management',
      description: 'Manage your move with intelligent task management. Add tasks through conversation or manual entry, and Ready automatically prioritizes them and sends timely reminders. Never miss a step from start to finish.'
    },
    {
      number: '03',
      title: 'My Journey',
      subtitle: 'Visual Timeline',
      description: 'Visualize your entire moving journey on an interactive timeline. Track progress, view completed milestones, and adjust dates as your plans evolve. See exactly where you stand and what comes next.'
    },
    {
      number: '04',
      title: 'Explore',
      subtitle: 'AI-Powered Discovery',
      description: 'Discover neighborhoods, services, and local insights with AI-powered recommendations. Ask about schools, restaurants, moving companies, or explore city comparisons—all personalized to your preferences and needs.'
    },
    {
      number: '05',
      title: 'Share',
      subtitle: 'Collaborate Seamlessly',
      description: 'Collaborate seamlessly with family, roommates, or your moving team. Share plans, assign tasks, and keep everyone in sync throughout your relocation. Create a complete history of your journey together.'
    }
  ];

  return (
    <Slide id="solution" background="white" index={3}>
      <div className="w-full px-8 py-20">
        {/* Title with gradient */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 pb-1 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Everything You Need to Move with Confidence
        </h1>

        {/* Subheading */}
        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
          Ready is your AI-powered moving assistant that transforms an overwhelming process into a manageable journey. From planning your move to exploring your new neighborhood, these five core features work together to keep you organized, informed, and stress-free from start to finish.
        </p>

        {/* 5-Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.number}
              className="relative bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300"
              style={{
                background: 'white',
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #2d5a3d, #FF4081)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
              }}
            >
              {/* Number with Gradient - No Circle */}
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                {feature.number}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>

              {/* Subtitle */}
              <h4 className="text-lg font-semibold text-primary mb-3">
                {feature.subtitle}
              </h4>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

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
          
          {/* Floating Bubble Sparkles - Green for solution slide */}
          {[
            { delay: 0, left: '15%', yDistance: -35, duration: 3.5 },
            { delay: 0.5, left: '35%', yDistance: -30, duration: 4.0 },
            { delay: 1.0, left: '55%', yDistance: -38, duration: 4.5 },
            { delay: 1.5, left: '75%', yDistance: -32, duration: 3.0 },
            { delay: 2.0, left: '25%', yDistance: -36, duration: 3.8 },
            { delay: 2.5, left: '65%', yDistance: -33, duration: 4.2 },
          ].map((sparkle, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3"
              style={{
                left: sparkle.left,
                top: '-10px',
                backgroundColor: '#2d5a3d',
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              }}
              animate={{
                y: [0, sparkle.yDistance],
                opacity: [1, 0],
              }}
              transition={{
                duration: sparkle.duration,
                repeat: Infinity,
                delay: sparkle.delay,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>
      </div>
    </Slide>
  );
}
