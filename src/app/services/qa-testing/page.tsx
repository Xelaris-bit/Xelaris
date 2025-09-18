
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { FadeIn } from '@/components/fade-in';

export default function QaTestingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <FadeIn>
            <section className="bg-primary/5 py-20 md:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">QA / <span className="text-accent">Testing</span></h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Ensuring flawless performance and exceptional quality for your software.
                    </p>
                </div>
            </section>
        </FadeIn>
        <FadeIn>
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Image
                            src="https://images.unsplash.com/photo-1516116216624-53e6973bea12?q=80&w=600"
                            alt="QA & Testing"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                            data-ai-hint="quality assurance"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-primary">Comprehensive <span className="text-accent">Quality Assurance</span></h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Our rigorous QA process guarantees that your software is reliable, secure, and user-friendly. We offer a full suite of testing services to identify and eliminate issues before they impact your users.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1" /> Manual & Automation Testing</li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1" /> API and Performance Testing</li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1" /> Mobile App Testing</li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1" /> Selenium Testing</li>
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
