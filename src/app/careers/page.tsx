
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Archive } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';
import ResumeSubmissionForm from '@/components/resume-submission-form';

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
                Build Your <span className="text-accent">Future</span> with Xelaris.
              </h1>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-16 items-start">
                <div className="space-y-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Careers at <span className="text-accent">Xelaris</span></h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Join our team of passionate experts and help us shape the future of software quality.
                        </p>
                    </div>
                    <Card className="text-center p-8 md:p-12">
                      <CardContent className="flex flex-col items-center gap-4">
                        <Archive className="w-16 h-16 text-muted-foreground/50" />
                        <h4 className="text-2xl font-semibold">No Openings Currently</h4>
                        <p className="text-muted-foreground max-w-md">
                            We are not actively hiring for any positions at the moment. However, we are always on the lookout for talented individuals.
                        </p>
                      </CardContent>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Submit Your Resume</CardTitle>
                            <CardDescription>
                                Interested in future opportunities? Send us your details and we&apos;ll keep your resume on file.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ResumeSubmissionForm />
                        </CardContent>
                    </Card>
                </div>
            </div>
          </section>
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}
