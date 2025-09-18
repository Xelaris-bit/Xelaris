
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Megaphone, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { FadeIn } from '@/components/fade-in';

export default function DigitalMarketingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <FadeIn>
            <section className="bg-primary/5 py-20 md:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">Digital <span className="text-accent">Marketing</span></h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Data-driven strategies to grow your online presence and reach your audience.
                    </p>
                </div>
            </section>
        </FadeIn>
        <FadeIn>
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-primary">Strategic Online <span className="text-accent">Growth</span></h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Our digital marketing services are designed to increase your visibility, drive traffic, and generate leads. We create comprehensive strategies tailored to your business goals.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1" /> Search Engine Optimization (SEO)</li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1" /> Social Media Marketing</li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1" /> Content Marketing</li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1" /> Pay-Per-Click (PPC) Advertising</li>
                        </ul>
                    </div>
                    <div>
                        <Image
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600"
                            alt="Digital Marketing"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                            data-ai-hint="digital marketing"
                        />
                    </div>
                </div>
            </section>
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}
