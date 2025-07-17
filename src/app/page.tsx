import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import WhyChooseUsSection from '@/components/sections/why-choose-us';
import ServicesSection from '@/components/sections/services';
import ToolsSection from '@/components/sections/tools';
import TestimonialsSection from '@/components/sections/testimonials';
import ContactSection from '@/components/sections/contact';
import { FadeIn } from '@/components/fade-in';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FadeIn><WhyChooseUsSection /></FadeIn>
        <FadeIn><ServicesSection /></FadeIn>
        <FadeIn><ToolsSection /></FadeIn>
        <FadeIn><TestimonialsSection /></FadeIn>
        <FadeIn><ContactSection /></FadeIn>
      </main>
      <Footer />
    </div>
  );
}
