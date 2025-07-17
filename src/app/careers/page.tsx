import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Archive } from 'lucide-react';

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">Careers at Xelaris</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Join our team of passionate experts and help us shape the future of software quality.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Current Openings</h2>
            <Card className="text-center p-8 md:p-12">
              <CardContent className="flex flex-col items-center gap-4">
                <Archive className="w-16 h-16 text-muted-foreground/50" />
                <h3 className="text-2xl font-semibold">No Openings Currently</h3>
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
      </main>
      <Footer />
    </div>
  );
}
