
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Archive } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <FadeIn>
          <section className="relative py-20 md:py-32 bg-secondary text-center">
            <div className="absolute inset-0 bg-primary/10" />
            <div className="container mx-auto px-4 relative">
              <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
                Build Your Future with Xelaris.
              </h1>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Careers at Xelaris</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Join our team of passionate experts and help us shape the future of software quality.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-8 text-center">Current Openings</h3>
                <Card className="text-center p-8 md:p-12">
                  <CardContent className="flex flex-col items-center gap-4">
                    <Archive className="w-16 h-16 text-muted-foreground/50" />
                    <h4 className="text-2xl font-semibold">No Openings Currently</h4>
                    <p className="text-muted-foreground max-w-md">
                        We are not actively hiring for any positions at the moment. However, we are always on the lookout for talented individuals.
                    </p>
                    <div className="mt-6">
                        <p className="text-muted-foreground">Feel free to send us your resume for future consideration!</p>
                        <Button variant="outline" className="mt-4">
                            <a href="mailto:careers@xelaris.com">Submit Your Resume</a>
                        </Button>
                    </div>
                  </CardContent>
                </Card>
            </div>
          </section>
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}
