import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import WhyChooseUsSection from '@/components/sections/why-choose-us';
import ServicesSection from '@/components/sections/services';
import TestimonialsSection from '@/components/sections/testimonials';
import { FadeIn } from '@/components/fade-in';
import RecentCaseStudiesSection from '@/components/sections/recent-case-studies';
import ContactSection from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FadeIn><WhyChooseUsSection /></FadeIn>
        <FadeIn><ServicesSection /></FadeIn>
        <FadeIn><RecentCaseStudiesSection /></FadeIn>
        <FadeIn><TestimonialsSection /></FadeIn>
        <FadeIn><ContactSection /></FadeIn>
      </main>
      <Footer />
    </div>
  );
}
