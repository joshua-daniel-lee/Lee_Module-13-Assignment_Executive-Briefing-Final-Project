import Navbar from '@/components/layout/Navbar';
import HeroSlide from '@/components/slides/HeroSlide';
import ProblemSlide from '@/components/slides/ProblemSlide';
// import SolutionSlide from '@/components/slides/SolutionSlide'; // Original 5-card grid version
import SolutionSlideAlt from '@/components/slides/SolutionSlideAlt'; // Alternative split-screen version
import GlobalSlideNavigation from '@/components/ui/GlobalSlideNavigation';

export default function Home() {
  return (
    <main>
      <Navbar />
      <GlobalSlideNavigation totalSlides={13} />
      <HeroSlide />
      <ProblemSlide />
      <SolutionSlideAlt />
    </main>
  );
}
