'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Slide from '@/components/layout/Slide';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SlideNavigation from '@/components/ui/SlideNavigation';
import { FADE_IN_UP, FLOAT_ANIMATION } from '@/constants/animations';

export default function HeroSlide() {
  return (
    <Slide id="hero" background="white" index={1}>
      <Container className="text-center flex flex-col items-center justify-center min-h-screen">
        {/* Floating Laszlo at top */}
        <motion.div
          animate={FLOAT_ANIMATION}
          className="mb-8"
        >
          <Image
            src="/laszlo.svg"
            alt="Laszlo AI Assistant"
            width={200}
            height={200}
            className="mx-auto"
            priority
          />
        </motion.div>

        {/* Main tagline */}
        <motion.div {...FADE_IN_UP}>
          <h1 className="gradient-text text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4 tracking-tight max-w-4xl mx-auto leading-tight">
            Transforming Relocation Services from Chaos into Clarity
          </h1>
          
          {/* Subtext description */}
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Executive Briefing: AI Transformation in Relocation Services
          </p>
          
          {/* Author info and assignment */}
          <motion.div
            {...FADE_IN_UP}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center gap-3 mb-8"
          >
            {/* Avatar image - centered */}
            <Image
              src="/joshua.png"
              alt="Joshua Lee"
              width={80}
              height={80}
              className="rounded-full shadow-lg object-cover"
            />
            
            {/* Name centered below avatar */}
            <p className="text-2xl font-medium text-gray-700">Joshua Lee</p>
            
            {/* Gradient pill badge */}
            <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm shadow-md">
              Founder
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Slide>
  );
}
