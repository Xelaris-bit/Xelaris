import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import WhyChooseUsSection from '@/components/sections/why-choose-us';
import TestimonialsSection from '@/components/sections/testimonials';
import { FadeIn } from '@/components/fade-in';
import RecentCaseStudiesSection from '@/components/sections/recent-case-studies';
import DigitalChallengesSection from '@/components/sections/digital-challenges';
import WhatWeDoSection from '@/components/sections/what-we-do';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FadeIn><DigitalChallengesSection /></FadeIn>
        <FadeIn><WhatWeDoSection /></FadeIn>
        <FadeIn><WhyChooseUsSection /></FadeIn>
        <FadeIn><RecentCaseStudiesSection /></FadeIn>
        <FadeIn><TestimonialsSection /></FadeIn>
      </main>
      <Footer />
    </div>
  );
}
