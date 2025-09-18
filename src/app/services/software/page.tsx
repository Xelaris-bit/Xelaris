
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { FadeIn } from '@/components/fade-in';

export default function SoftwarePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <FadeIn>
            <section className="bg-primary/5 py-20 md:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">Software <span className="text-accent">Development</span></h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Robust, scalable, and custom software solutions to drive your business forward.
                    </p>
                </div>
            </section>
        </FadeIn>
        <FadeIn>
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Image
                            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600"
                            alt="Software Development"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                            data-ai-hint="software development"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-primary">Custom <span className="text-accent">Applications</span></h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We build high-quality web applications, portals, and websites tailored to your specific requirements. Our development process focuses on performance, security, and user experience.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1" /> Custom Web Applications</li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1" /> Portals and Websites</li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1" /> WordPress Development</li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1" /> Full-Stack Development</li>
                        </ul>
                    </div>
                </div>
            </section>
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}
