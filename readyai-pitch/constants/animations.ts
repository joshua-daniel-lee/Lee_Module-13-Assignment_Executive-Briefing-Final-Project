// Framer Motion Animation Configurations

export const DURATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
};

export const DELAY = {
  short: 0.1,
  medium: 0.2,
  long: 0.3,
};

export const VIEWPORT = {
  once: true,
  amount: 0.3,
};

export const FADE_IN = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: DURATION.normal },
};

export const FADE_IN_UP = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT,
  transition: { duration: DURATION.slow },
};

export const SLIDE_IN_LEFT = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: VIEWPORT,
  transition: { duration: DURATION.normal },
};

export const SLIDE_IN_RIGHT = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: VIEWPORT,
  transition: { duration: DURATION.normal },
};

// Floating animation for large Laszlo (Hero)
export const FLOAT_ANIMATION = {
  y: [0, -20, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// Breathing animation for small Laszlo (Slides 2-13)
export const BREATHE_ANIMATION = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};
