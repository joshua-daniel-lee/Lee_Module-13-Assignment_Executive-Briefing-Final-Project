import Navbar from '@/components/layout/Navbar';
import HeroSlide from '@/components/slides/HeroSlide';
import Slide2 from '@/components/slides/Slide2';
import GlobalSlideNavigation from '@/components/ui/GlobalSlideNavigation';

export default function Home() {
  return (
    <main>
      <Navbar />
      <GlobalSlideNavigation totalSlides={13} />
      <HeroSlide />
      <Slide2 />
    </main>
  );
}
