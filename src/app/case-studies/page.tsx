'use client';

import { useState } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import TestimonialsSection from '@/components/sections/testimonials';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const allCaseStudies = [
  {
    title: 'Boosting E-commerce Performance by 200%',
    description: 'Discover how our performance testing helped a major e-commerce platform handle massive traffic spikes during peak seasons, resulting in a 200% performance boost and zero downtime.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'e-commerce website',
  },
  {
    title: 'Ensuring Flawless Mobile Banking App Launch',
    description: 'We partnered with a fintech startup to conduct comprehensive manual and automated testing for their new mobile banking app, ensuring a secure and bug-free launch that earned a 4.8-star rating.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'mobile banking',
  },
  {
    title: 'Automating API Testing for a SaaS Provider',
    description: 'Our team implemented a robust API automation framework that reduced testing time by 80% and increased test coverage by 95% for a leading SaaS company.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'software dashboard',
  },
  {
    title: 'Securing a Healthcare Platform',
    description: 'We performed extensive security testing for a healthcare data platform, identifying and mitigating critical vulnerabilities to ensure HIPAA compliance and protect sensitive patient information.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'healthcare technology',
  },
  {
    title: 'Enhancing User Experience for an EdTech App',
    description: 'Through detailed usability testing, we provided actionable insights that led to a 40% improvement in user engagement for a popular educational technology application.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'online learning',
  },
  {
    title: 'Cross-Browser Compatibility for a Corporate Portal',
    description: 'Our team ensured a consistent user experience across all major browsers for a large enterprise\'s internal portal, eliminating bugs and improving employee productivity.',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'corporate office',
  },
];

const INITIAL_VISIBLE_COUNT = 3;

export default function CaseStudiesPage() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const handleLoadMore = () => {
    setVisibleCount(allCaseStudies.length);
  };

  const visibleCaseStudies = allCaseStudies.slice(0, visibleCount);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">Case Studies</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            See how we've helped companies like yours achieve their quality goals.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {visibleCaseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden flex flex-col">
              <Image
                src={study.imageUrl}
                alt={study.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                data-ai-hint={study.aiHint}
              />
              <CardHeader>
                <CardTitle>{study.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-muted-foreground mb-4 flex-grow">{study.description}</p>
                <Button variant="link" className="p-0 self-start">Read More</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {visibleCount < allCaseStudies.length && (
          <div className="text-center mb-16">
            <Button onClick={handleLoadMore} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Load More
            </Button>
          </div>
        )}

        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
