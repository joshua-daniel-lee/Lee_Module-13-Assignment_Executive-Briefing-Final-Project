# Pitch Deck Template Guide

This guide will help you use this ReadyAI pitch deck as a template for your next project. The template is built with flexibility in mind, allowing you to customize colors, content, components, and structure.

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Quick Start](#quick-start)
3. [Color Palette Customization](#color-palette-customization)
4. [Project Structure](#project-structure)
5. [Slide System](#slide-system)
6. [Component Library](#component-library)
7. [Content Customization](#content-customization)
8. [Asset Management](#asset-management)
9. [Common Workflows](#common-workflows)

---

## 🎯 Project Overview

### Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Charts:** Recharts

### Key Features

- **Full-screen slide-based layout** with scroll-snap navigation
- **Modular component system** - mix and match components as needed
- **Centralized design tokens** for consistent styling
- **Animation system** with standardized configurations
- **Responsive design** optimized for all screen sizes

---

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the pitch deck.

---

## 🎨 Color Palette Customization

The template uses a two-color system (Primary: Pine Green + Accent: Wild Strawberry). Here's how to change it to your brand colors.

### Step 1: Update CSS Variables

Edit `app/globals.css` (lines 9-14):

```css
@theme inline {
  /* OLD - Generic Colors */
  --color-primary: #06c0d7;      /* Cyan/Turquoise */
  --color-accent: #f77024;       /* Orange */
  --color-blue-chill: #117297;   /* Deep Blue */
  --color-bunting: #1b2356;      /* Navy Blue */
  --color-ironstone: #894a3d;    /* Brown/Rust */
  
  /* NEW - Replace with your brand colors */
  --color-primary: #YOUR_PRIMARY_COLOR;
  --color-accent: #YOUR_ACCENT_COLOR;
  --color-blue-chill: #YOUR_SECONDARY_COLOR;
  --color-bunting: #YOUR_DARK_COLOR;
  --color-ironstone: #YOUR_TERTIARY_COLOR;
}
```

**Example:** For ReadyAI with ReadyMove branding:
```css
--color-primary: #2d5a3d;      /* Pine Green */
--color-accent: #FF4081;       /* Wild Strawberry */
--color-blue-chill: #24492f;   /* Pine Dark */
--color-bunting: #1a3522;      /* Pine Darker */
--color-ironstone: #CC3367;    /* Strawberry Dark */
```

### Step 2: Update Gradient Classes

In `app/globals.css` (lines 60-79), update gradient utilities:

```css
/* OLD */
.gradient-animated {
  background: linear-gradient(-45deg, #06c0d7, #117297, #1b2356, #f77024);
}

.gradient-primary {
  background: linear-gradient(135deg, #06c0d7 0%, #117297 100%);
}

.gradient-accent {
  background: linear-gradient(135deg, #f77024 0%, #894a3d 100%);
}

.gradient-text {
  background: linear-gradient(135deg, #06c0d7, #f77024);
}

/* NEW - ReadyAI with ReadyMove branding */
.gradient-animated {
  background: linear-gradient(-45deg, #2d5a3d, #24492f, #1a3522, #FF4081);
}

.gradient-primary {
  background: linear-gradient(135deg, #2d5a3d 0%, #24492f 100%);
}

.gradient-accent {
  background: linear-gradient(135deg, #FF4081 0%, #CC3367 100%);
}

.gradient-text {
  background: linear-gradient(135deg, #2d5a3d, #FF4081);
}
```

### Step 3: Update Design Tokens

Edit `constants/design-tokens.ts` to match your new colors:

```typescript
// OLD
export const GRADIENTS = {
  cyan: {
    border: 'linear-gradient(135deg, rgba(6,192,215,0.3), rgba(6,192,215,0.1))',
    borderStrong: 'linear-gradient(135deg, rgba(6,192,215,0.4), rgba(6,192,215,0.2))',
    text: 'linear-gradient(135deg, rgb(6,192,215), rgb(37,99,235))',
  },
  orange: {
    border: 'linear-gradient(135deg, rgba(247,112,36,0.3), rgba(247,112,36,0.1))',
    borderStrong: 'linear-gradient(135deg, rgba(247,112,36,0.4), rgba(247,112,36,0.2))',
    text: 'linear-gradient(135deg, rgb(247,112,36), rgb(234,88,12))',
  },
};

// NEW - ReadyAI with ReadyMove branding
// Pine Green: rgb(45,90,61), Wild Strawberry: rgb(255,64,129)
export const GRADIENTS = {
  cyan: {  // Rename to 'pine' or keep as 'cyan' for consistency
    border: 'linear-gradient(135deg, rgba(45,90,61,0.3), rgba(45,90,61,0.1))',
    borderStrong: 'linear-gradient(135deg, rgba(45,90,61,0.4), rgba(45,90,61,0.2))',
    text: 'linear-gradient(135deg, rgb(45,90,61), rgb(36,73,47))',
  },
  orange: {  // Rename to 'strawberry' or keep as 'orange'
    border: 'linear-gradient(135deg, rgba(255,64,129,0.3), rgba(255,64,129,0.1))',
    borderStrong: 'linear-gradient(135deg, rgba(255,64,129,0.4), rgba(255,64,129,0.2))',
    text: 'linear-gradient(135deg, rgb(255,64,129), rgb(204,51,103))',
  },
};
```

### Step 4: Update Shadow Effects (Optional)

In `app/globals.css` (lines 24-28), customize glow effects:

```css
--shadow-glow-primary: 0 0 24px rgb(45 90 61 / 0.15), 0 4px 12px -2px rgb(0 0 0 / 0.05);
--shadow-glow-accent: 0 0 24px rgb(255 64 129 / 0.15), 0 4px 12px -2px rgb(0 0 0 / 0.05);
```

### Color Usage Reference

Once you've updated colors, they'll automatically apply to:
- **Buttons** (`components/ui/Button.tsx`)
- **Cards** (`components/ui/StatCard.tsx`, `ValuePropCard.tsx`, etc.)
- **Gradients** (hero text, backgrounds)
- **Borders** (gradient borders on cards)
- **Icons** (throughout the deck)

**Note:** Component variants use `variant='cyan'` or `variant='orange'`. These names are just labels - they'll use whatever colors you define in the design tokens.

---

## 📁 Project Structure

```
readyai-pitch/
├── app/
│   ├── globals.css           # Global styles & CSS variables
│   ├── layout.tsx            # Root layout with fonts & metadata
│   └── page.tsx              # Main page - assembles all slides
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Top navigation bar
│   │   ├── Slide.tsx         # Slide wrapper component
│   │   └── SlideNav.tsx      # Slide navigation dots
│   │
│   ├── slides/               # Individual slide components
│   │   ├── HeroSlide.tsx
│   │   ├── SummarySlide.tsx
│   │   ├── ProductivityGapSlide.tsx
│   │   └── ... (12 total slides)
│   │
│   ├── ui/                   # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── StatCard.tsx
│   │   ├── PainPointCard.tsx
│   │   ├── ValuePropCard.tsx
│   │   ├── FounderCard.tsx
│   │   └── ... (more components)
│   │
│   └── visualizations/       # Chart components
│       ├── BarChartDisplay.tsx
│       ├── LineChartDisplay.tsx
│       └── PieChartDisplay.tsx
│
├── constants/
│   ├── animations.ts         # Framer Motion animation configs
│   ├── design-tokens.ts      # Colors, spacing, shadows
│   └── slides.ts             # Slide content data
│
├── public/                   # Static assets
│   ├── branding/            # Logos & mascots
│   ├── team/                # Team photos
│   ├── illustrations/       # SVG illustrations
│   ├── publishers/          # Partner logos
│   └── ...
│
└── context/                  # Reference documents (optional)
```

---

## 📽️ Slide System

### How Slides Work

Slides are full-screen sections assembled in `app/page.tsx`:

```tsx
export default function Home() {
  return (
    <>
      <Navbar />
      <SlideNav />
      
      <HeroSlide />
      <SummarySlide />
      <ProductivityGapSlide />
      {/* ... more slides ... */}
    </>
  );
}
```

### The Slide Component

All slides use the `<Slide>` wrapper (`components/layout/Slide.tsx`):

```tsx
<Slide id="unique-id" background="white">
  <Container>
    {/* Your content */}
  </Container>
</Slide>
```

**Props:**
- `id` - Used for navigation anchors (e.g., `#hero`, `#solution`)
- `background` - One of: `'white' | 'gray' | 'lavender' | 'dark' | 'gradient' | 'none'`
- `className` - Additional Tailwind classes

### Adding a New Slide

1. **Create the component:** `components/slides/NewSlide.tsx`
```tsx
'use client';

import Slide from '@/components/layout/Slide';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';

export default function NewSlide() {
  return (
    <Slide id="new-slide" background="white">
      <Container>
        <Heading level="h2">My New Slide</Heading>
        {/* Your content */}
      </Container>
    </Slide>
  );
}
```

2. **Import and add to page:** `app/page.tsx`
```tsx
import NewSlide from '@/components/slides/NewSlide';

export default function Home() {
  return (
    <>
      {/* ... other slides ... */}
      <NewSlide />
    </>
  );
}
```

### Removing a Slide

Simply delete or comment out the slide in `app/page.tsx`:

```tsx
{/* <ProductivityGapSlide /> */}  // This slide is now hidden
```

### Reordering Slides

Just rearrange the order in `app/page.tsx` - that's it!

---

## 🧩 Component Library

The template includes reusable components you can mix and match. You don't need to use all of them - pick what fits your story.

### Available Components

#### **StatCard** - Display Key Metrics
**Location:** `components/ui/StatCard.tsx`

```tsx
import StatCard from '@/components/ui/StatCard';
import { TrendingUp } from 'lucide-react';

<StatCard
  icon={TrendingUp}
  value={42}
  suffix="%"
  label="Growth Rate"
  sublabel="Year over year"
  variant="cyan"
  delay={0.1}
/>
```

**Props:**
- `icon` - Lucide icon component
- `value` - Number to display (animates on scroll)
- `prefix` / `suffix` - Optional text (e.g., "$", "%", "B")
- `label` - Main description
- `sublabel` - Additional context
- `footnote` - Optional superscript number
- `variant` - `'cyan'` or `'orange'` (uses your brand colors)
- `delay` - Animation delay in seconds

**When to use:** Market size, growth metrics, user statistics, financial data

---

#### **PainPointCard** - Problem Statements
**Location:** `components/ui/PainPointCard.tsx`

```tsx
import PainPointCard from '@/components/ui/PainPointCard';

<PainPointCard
  emoji="🚀"
  title="Slow Onboarding"
  imageSrc="/illustrations/problem.svg"
  imageAlt="Frustrated user"
  description="Companies spend weeks onboarding new users..."
  delay={0.1}
/>
```

**When to use:** Problem slide, customer pain points, market gaps

**Adapt or skip:** If your pitch doesn't focus on problems, you can skip this component or repurpose it for other use cases (rename it to "FeatureCard" or "BenefitCard").

---

#### **ValuePropCard** - Value Propositions
**Location:** `components/ui/ValuePropCard.tsx`

```tsx
import ValuePropCard from '@/components/ui/ValuePropCard';
import { Zap } from 'lucide-react';

<ValuePropCard
  icon={Zap}
  title="Lightning Fast"
  description="10x faster than competitors • Real-time updates"
  variant="cyan"
  delay={0.1}
/>
```

**When to use:** Solution features, competitive advantages, product benefits

---

#### **FounderCard** - Team Members
**Location:** `components/ui/FounderCard.tsx`

```tsx
import FounderCard from '@/components/ui/FounderCard';

<FounderCard
  name="Jane Doe"
  role="CEO"
  imageSrc="/team/jane.png"
  bio="Former VP at Google, 10 years in AI..."
  badge="Hustler"
  variant="cyan"
/>
```

**Props:**
- `badge` - Optional tag (e.g., "Hustler", "Hacker", "Designer")
- `variant` - Badge color scheme

---

#### **Button** - Call-to-Action
**Location:** `components/ui/Button.tsx`

```tsx
import Button from '@/components/ui/Button';

<Button 
  variant="primary" 
  size="lg"
  href="https://demo.example.com"
  target="_blank"
>
  Try Demo
</Button>
```

**Variants:**
- `primary` - Uses your primary color
- `accent` - Uses your accent color
- `dark` - Dark background
- `outline` - Transparent with border
- `gradient` - Gradient background

**Sizes:** `'sm' | 'md' | 'lg'`

---

#### **FeaturePill** - Small Feature Tags
**Location:** `components/ui/FeaturePill.tsx`

```tsx
import FeaturePill from '@/components/ui/FeaturePill';

<FeaturePill icon={CheckCircle} text="No credit card required" />
```

---

### Creating New Card Types

You can create custom cards based on existing patterns. Here's a template:

```tsx
'use client';

import { motion } from 'framer-motion';
import { GRADIENT_BORDER } from '@/constants/design-tokens';
import { VIEWPORT } from '@/constants/animations';

interface CustomCardProps {
  title: string;
  description: string;
  variant?: 'cyan' | 'orange';
  delay?: number;
}

export default function CustomCard({ 
  title, 
  description, 
  variant = 'cyan',
  delay = 0 
}: CustomCardProps) {
  const styles = variant === 'cyan' 
    ? GRADIENT_BORDER.cyan 
    : GRADIENT_BORDER.orange;

  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-sm"
      style={styles}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ delay, duration: 0.6 }}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
```

---

## 📝 Content Customization

### Centralized Content: `constants/slides.ts`

Many slides pull data from `constants/slides.ts`. Update this file to change content globally:

```typescript
// Example: Update stat cards
export const STAT_CARDS = [
  {
    icon: TrendingUp,      // Import from 'lucide-react'
    value: 1000,           // Your metric
    suffix: '+',           // Optional
    prefix: '',            // Optional (e.g., '$')
    label: 'Active Users',
    sublabel: 'And growing',
    variant: 'cyan' as const,
    delay: 0.1,
  },
  // Add more stats...
];
```

**Available constants:**
- `STAT_CARDS` - Key metrics
- `PAIN_POINT_CARDS` - Problem statements
- `VALUE_PROP_CARDS` - Solution features
- `USER_PERSONAS` - Target audience list
- `PUBLISHER_LOGOS` - Partner logo filenames
- `DEMO_FEATURES` - Demo feature list

### Metadata & SEO

Update `app/layout.tsx` (lines 25-37):

```typescript
export const metadata: Metadata = {
  title: "YourCompany - Your Tagline",
  description: "Your company description...",
  icons: {
    icon: [
      { url: '/your-icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/your-icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};
```

### Fonts

The template uses three fonts (defined in `app/layout.tsx`):
- **Inter** - General UI
- **Newsreader** - Headlines (serif)
- **Roboto** - Body text

To change fonts:

1. Import new fonts from Google Fonts:
```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  variable: "--font-your-font",
  subsets: ["latin"],
  display: "swap",
});
```

2. Add to className:
```typescript
<html className={`${yourFont.variable} ...`}>
```

3. Update CSS variable in `app/globals.css`:
```css
--font-your-font: var(--font-your-font);
```

---

## 🖼️ Asset Management

### Public Folder Structure

```
public/
├── branding/           # Your logo, mascot
├── team/              # Team member photos
├── illustrations/     # SVG illustrations, icons
├── mockups/           # Product screenshots
├── publishers/        # Partner/customer logos
├── business-model/    # Business charts/diagrams
├── how-it-works/      # Process diagrams
└── tech/              # Technology stack icons
```

### Replacing Images

**1. Logo**
- Replace: `public/branding/logo.png`
- Used in: `components/layout/Navbar.tsx`

**2. Team Photos**
- Replace: `public/team/*.png`
- Used in: `components/slides/FoundersSlide.tsx`, `HeroSlide.tsx`
- Recommended size: 400x400px minimum

**3. Illustrations**
- Replace: `public/illustrations/*.svg` (or `.png`)
- SVG preferred for scalability
- Update imports in slide components

**4. Partner Logos**
- Replace: `public/publishers/*.png`
- List filenames in `constants/slides.ts` → `PUBLISHER_LOGOS`

### Image Best Practices

- **Format:** SVG for icons/illustrations, WebP/PNG for photos
- **Size:** Optimize before uploading (use tools like TinyPNG)
- **Naming:** Use kebab-case (e.g., `hero-image.svg`)
- **Alt Text:** Always provide descriptive alt text

### Using Next.js Image Component

```tsx
import Image from 'next/image';

<Image
  src="/your-folder/image.png"
  alt="Descriptive alt text"
  width={400}
  height={300}
  className="object-cover"
  priority  // Use for above-the-fold images
/>
```

---

## 🛠️ Common Workflows

### Workflow 1: "I need different slides"

**Scenario:** Your pitch needs different slides than the FactrAI template.

**Steps:**
1. Review existing slides in `components/slides/`
2. Identify which ones to keep, modify, or remove
3. Edit `app/page.tsx` to reorder/remove slides:
   ```tsx
   <HeroSlide />
   <YourCustomSlide />
   {/* <ProductivityGapSlide /> */}  // Removed
   <SolutionSlide />
   ```
4. Create new slides as needed (see [Adding a New Slide](#adding-a-new-slide))

---

### Workflow 2: "I want to change a slide's layout"

**Scenario:** Keep the slide but change its structure.

**Steps:**
1. Open the slide component (e.g., `components/slides/SolutionSlide.tsx`)
2. Modify the JSX structure
3. Adjust Tailwind classes for layout (`flex`, `grid`, spacing, etc.)
4. Update content from `constants/slides.ts` or directly in the component

**Example:** Change from 3-column to 2-column layout:
```tsx
{/* OLD */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

{/* NEW */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
```

---

### Workflow 3: "I need a different card type"

**Scenario:** The existing cards don't fit your content.

**Options:**

**A. Adapt an existing card:**
1. Copy a similar card component (e.g., `PainPointCard.tsx`)
2. Rename it (e.g., `BenefitCard.tsx`)
3. Modify props and styling
4. Use it in your slide

**B. Create a new card from scratch:**
1. Use the [custom card template](#creating-new-card-types)
2. Add to `components/ui/`
3. Import and use in your slide

---

### Workflow 4: "I want to use this component differently"

**Scenario:** Repurpose a component for a different use case.

**Example:** Use StatCard for non-numeric data:

```tsx
<StatCard
  icon={Users}
  value={0}  // Hidden with custom styling
  label="Enterprise Customers"
  sublabel="Including Fortune 500 companies"
  variant="cyan"
/>
```

Add custom CSS to hide the number if needed:
```tsx
<div className="[&_.stat-number]:hidden">
  <StatCard ... />
</div>
```

---

### Workflow 5: "I want to change animations"

**Scenario:** Customize animation timing or effects.

**Global animation settings:**
Edit `constants/animations.ts`:

```typescript
export const DURATION = {
  fast: 0.2,      // Make animations faster
  normal: 0.4,
  slow: 0.5,
};

export const DELAY = {
  short: 0.05,    // Reduce delays
  medium: 0.1,
  long: 0.2,
};
```

**Per-component animations:**
Edit the component directly:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}  // Customize here
>
```

**Disable animations:**
Remove Framer Motion components and use regular HTML/React components.

---

### Workflow 6: "I need more slides for complex content"

**Scenario:** The template has 12 slides, you need 15+.

**Steps:**
1. Create additional slide components in `components/slides/`
2. Follow the naming pattern: `YourTopicSlide.tsx`
3. Import and add to `app/page.tsx`
4. Update navigation if needed (SlideNav auto-generates dots based on sections)

**Tip:** Break complex slides into multiple simpler slides for better storytelling.

---

## 🎓 Tips & Best Practices

### Design Tips
1. **Consistency:** Stick to your 2-color system throughout
2. **White space:** Don't overcrowd slides - less is more
3. **Hierarchy:** Use heading levels (h1 > h2 > h3) consistently
4. **Contrast:** Ensure text is readable on all backgrounds

### Development Tips
1. **Hot reload:** The dev server updates instantly - keep it running
2. **Component isolation:** Test components individually before adding to slides
3. **Mobile first:** Check responsive design at multiple screen sizes
4. **Performance:** Optimize images before uploading

### Content Tips
1. **One idea per slide:** Keep slides focused
2. **Visual hierarchy:** Most important info first
3. **Tell a story:** Slides should flow logically
4. **Show, don't tell:** Use visuals instead of text where possible

---

## 🐛 Troubleshooting

### Colors not updating
- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check that RGB values match in all files
- Restart dev server

### Images not loading
- Verify file path is correct (case-sensitive)
- Check that image exists in `public/` folder
- Use browser dev tools (Network tab) to see 404 errors

### TypeScript errors
- Run `npm install` to ensure dependencies are installed
- Check that imports match exported component names
- Look for missing props or type mismatches

### Layout issues
- Inspect with browser dev tools
- Check Tailwind classes are correct
- Verify responsive breakpoints (`sm:`, `md:`, `lg:`)

---

## 📚 Additional Resources

### Tailwind CSS v4
- [Documentation](https://tailwindcss.com/docs)
- [Theme configuration](https://tailwindcss.com/docs/theme)

### Framer Motion
- [Animation examples](https://www.framer.com/motion/examples/)
- [Animation API](https://www.framer.com/motion/animation/)

### Next.js 14
- [App Router documentation](https://nextjs.org/docs/app)
- [Image optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)

### Lucide Icons
- [Icon library](https://lucide.dev/icons/)
- [React usage](https://lucide.dev/guide/packages/lucide-react)

---

## 🎉 You're Ready!

You now have everything you need to customize this template for your pitch deck. Remember:

1. ✅ **Start with colors** - Update the color palette first
2. ✅ **Replace assets** - Swap in your logos, photos, illustrations
3. ✅ **Customize content** - Update `constants/slides.ts` and metadata
4. ✅ **Adapt slides** - Modify, add, or remove slides as needed
5. ✅ **Use components** - Mix and match components to tell your story

Good luck with your pitch! 🚀
