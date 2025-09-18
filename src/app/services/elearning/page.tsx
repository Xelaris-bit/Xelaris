
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function ElearningPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="bg-primary/5 py-20 md:py-32">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">eLearning <span className="text-accent">Solutions</span></h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    Engaging and effective digital learning experiences tailored to your needs.
                </p>
            </div>
        </section>
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <Image
                        src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600"
                        alt="eLearning Solutions"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg"
                        data-ai-hint="online education"
                    />
                </div>
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-primary">Custom eLearning <span className="text-accent">Development</span></h2>
                    <p className="text-muted-foreground leading-relaxed">
                        We specialize in creating bespoke eLearning content that aligns with your specific training objectives and audience. From interactive modules to comprehensive courses, we build learning solutions that are both informative and engaging.
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1" /> Custom Courseware</li>
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1" /> Mobile Learning</li>
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1" /> SCORM & AICC Compliance</li>
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-2 mt-1" /> Blended Learning Solutions</li>
                    </ul>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
