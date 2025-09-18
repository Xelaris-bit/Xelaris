
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { FadeIn } from '@/components/fade-in';

export default function MultimediaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <FadeIn>
            <section className="bg-primary/5 py-20 md:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">3D & <span className="text-accent">Multimedia</span></h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Captivating visual content that brings your ideas to life.
                    </p>
                </div>
            </section>
        </FadeIn>
        <FadeIn>
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-primary">Creative <span className="text-accent">Designs</span></h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Our creative team produces stunning 2D and 3D animations, engaging graphics, and intuitive UI/UX designs. We combine artistic vision with technical expertise to deliver multimedia content that stands out.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1" /> 2D & 3D Animation</li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1" /> UI/UX Design</li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1" /> Graphics and Web Design</li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1" /> Audio and Video Production</li>
                        </ul>
                    </div>
                    <div>
                        <Image
                            src="https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=600"
                            alt="Multimedia Services"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                            data-ai-hint="graphic design"
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
