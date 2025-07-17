import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import WhyChooseUsSection from '@/components/sections/why-choose-us';
import ToolsSection from '@/components/sections/tools';
import TestimonialsSection from '@/components/sections/testimonials';
import { FadeIn } from '@/components/fade-in';
import RecentCaseStudiesSection from '@/components/sections/recent-case-studies';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FadeIn><WhyChooseUsSection /></FadeIn>
        <FadeIn><ToolsSection /></FadeIn>
        <FadeIn><RecentCaseStudiesSection /></FadeIn>
        <FadeIn><TestimonialsSection /></FadeIn>
      </main>
      <Footer />
    </div>
  );
}
