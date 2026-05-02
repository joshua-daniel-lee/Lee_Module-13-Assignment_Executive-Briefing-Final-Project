'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Slide from '@/components/layout/Slide';
import Container from '@/components/ui/Container';
import { FADE_IN_UP } from '@/constants/animations';

export default function ProblemSlide() {
  const stats = [
    {
      icon: '/stats-stress.svg',
      percentage: '82%',
      title: 'High Stress',
      description: 'Find it stressful, ranked with divorce'
    },
    {
      icon: '/stats-tears.svg',
      percentage: '42%',
      title: 'Fragmentation',
      description: 'Brought to tears, juggling multiple tools'
    },
    {
      icon: '/stats-costs.svg',
      percentage: '78%',
      title: 'Financial Uncertainty',
      description: 'Experience unplanned costs'
    }
  ];

  return (
    <Slide id="problem" background="white" index={2}>
      <Container className="py-20">
        {/* Title with gradient */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Moving is One of Life's Most Stressful Events
        </h1>

        {/* 3-Column Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className="relative bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              style={{
                background: 'white',
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #2d5a3d, #FF4081)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
              }}
            >
              {/* Icon - Larger */}
              <div className="flex justify-center mb-6">
                <Image
                  src={stat.icon}
                  alt={stat.title}
                  width={128}
                  height={128}
                  className="w-32 h-32"
                />
              </div>

              {/* Percentage - With color pop */}
              <div className="text-4xl font-bold text-accent mb-2">
                {stat.percentage}
              </div>

              {/* Title - Smaller */}
              <div className="text-base font-semibold text-gray-700 mb-2">
                {stat.title}
              </div>

              {/* Description - Smaller */}
              <div className="text-xs text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Content */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          {/* Bold Heading */}
          <h2 className="text-2xl font-bold text-gray-900">
            Moving is Overwhelming. Your Solution Shouldn't Be.
          </h2>
          
          {/* Body Paragraph */}
          <p className="text-base text-gray-600 leading-relaxed">
            Moving is consistently ranked among the most stressful life events. Common stressors range from finding a new home and packing belongings to managing a budget. After the move, feelings of loneliness and a dip in work productivity are also common. For those with children, the challenges are compounded by helping them adjust to a new school and community.
          </p>
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
          
          {/* Floating Bubble Sparkles - Slow & Gentle Cyan */}
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
                backgroundColor: '#06C0D7',
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
