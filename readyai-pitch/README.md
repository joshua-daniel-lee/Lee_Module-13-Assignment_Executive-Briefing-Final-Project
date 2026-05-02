# ReadyAI Pitch Deck

A modern, responsive pitch deck built with Next.js 14, TypeScript, and ReadyMove branding.

## 🎨 ReadyMove Branding Colors

- **Pine Green** (#2d5a3d) - Primary color
- **Wild Strawberry** (#FF4081) - Accent color
- **Pine Dark** (#24492f) - Dark complement
- **Strawberry Dark** (#CC3367) - Dark accent
- **Mint** (#B2DFDB) - Optional light teal

## 🚀 Features

- ✅ **Smart Navigation Bar** with three sections:
  - Logo (left) - Returns to top when clicked
  - Dynamic section counter (center) - Updates as you scroll
  - Page dropdown (right) - Quick navigation to any slide
  
- ✅ **Scroll-Based Navigation** with Intersection Observer
- ✅ **Full-Screen Slides** with snap scrolling
- ✅ **Framer Motion Animations** for smooth transitions
- ✅ **Responsive Design** - Mobile, tablet, and desktop optimized
- ✅ **ReadyMove Branding** - Consistent color system throughout

## 📁 Project Structure

```
readyai-pitch/
├── app/
│   ├── globals.css          # ReadyMove colors + styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page (imports slides)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Top navigation with logo, counter, dropdown
│   │   ├── Slide.tsx        # Slide wrapper component
│   │   └── SlideDropdown.tsx # Page selector dropdown
│   │
│   ├── slides/
│   │   └── HeroSlide.tsx    # Example hero slide
│   │
│   └── ui/
│       ├── Container.tsx    # Content container
│       ├── Heading.tsx      # Typography component
│       └── Button.tsx       # CTA buttons
│
├── constants/
│   ├── animations.ts        # Framer Motion configs
│   ├── design-tokens.ts     # ReadyMove color gradients
│   └── navigation.ts        # Slide metadata
│
└── hooks/
    └── useActiveSlide.ts    # Track current slide
```

## 🛠️ Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the pitch deck.

### Build for Production
```bash
npm run build
npm start
```

## 📝 Adding New Slides

### 1. Create a new slide component

```tsx
// components/slides/YourSlide.tsx
'use client';

import Slide from '@/components/layout/Slide';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';

export default function YourSlide() {
  return (
    <Slide id="your-slide" background="white" index={2}>
      <Container>
        <Heading level="h2">Your Slide Title</Heading>
        {/* Your content */}
      </Container>
    </Slide>
  );
}
```

### 2. Add to navigation metadata

```tsx
// constants/navigation.ts
export const SLIDE_METADATA: SlideMetadata[] = [
  { id: 'hero', title: 'Welcome', index: 1 },
  { id: 'your-slide', title: 'Your Title', index: 2 }, // Add here
];
```

### 3. Import and add to main page

```tsx
// app/page.tsx
import YourSlide from '@/components/slides/YourSlide';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSlide />
      <YourSlide />  {/* Add here */}
    </main>
  );
}
```

## 🎯 Navigation Features

### Smart Navbar
- **Logo**: Click to scroll to top
- **Section Counter**: Automatically updates as you scroll (e.g., "Section 1 of 3")
- **Page Dropdown**: Shows all slides with numbers and titles - click to jump to any slide

### Smooth Scrolling
- Scroll snap for full-screen slides
- Smooth transitions between sections
- Intersection Observer for accurate slide tracking

## 🎨 Using ReadyMove Colors

### In Components
```tsx
// Primary color
<div className="bg-[var(--color-primary)]">Pine Green</div>

// Accent color
<div className="bg-[var(--color-accent)]">Wild Strawberry</div>

// Gradient text
<h1 className="gradient-text">Gradient Heading</h1>
```

### Design Tokens
```tsx
import { GRADIENTS, COLORS } from '@/constants/design-tokens';

// Use in styled components or inline styles
style={{ background: GRADIENTS.pine.border }}
```

## 📱 Responsive Design

All components are mobile-first and responsive:
- **Mobile**: Stacked layouts, smaller text
- **Tablet**: Grid layouts start appearing
- **Desktop**: Full multi-column layouts

## 🔧 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📚 Available UI Components

- `Container` - Max-width content wrapper
- `Heading` - Typography with gradient support
- `Button` - CTA buttons with variants (primary, accent, outline)
- `Slide` - Full-screen slide wrapper
- `Navbar` - Smart navigation bar
- `SlideDropdown` - Page selector dropdown

## 🎬 Animation System

Pre-configured animations in `constants/animations.ts`:
- `FADE_IN` - Simple fade in
- `FADE_IN_UP` - Fade in with upward motion
- `SLIDE_IN_LEFT` - Slide in from left
- `SLIDE_IN_RIGHT` - Slide in from right

## 📖 Next Steps

1. Add more slides based on your pitch deck content
2. Customize the Hero slide with your specific messaging
3. Add team photos, product screenshots, or charts
4. Adjust colors if needed (all in `app/globals.css`)

## 🚀 Deployment

Deploy to Vercel with one click:
```bash
vercel
```

Or build and deploy anywhere:
```bash
npm run build
```

---

Built with ❤️ using ReadyMove branding
