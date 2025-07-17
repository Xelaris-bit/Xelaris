import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">About Xelaris</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Your dedicated partner in achieving software excellence and unparalleled quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground">
              At Xelaris, our mission is to empower businesses by ensuring their software applications are of the highest quality. We are committed to providing comprehensive, reliable, and innovative testing solutions that accelerate development cycles, reduce risks, and enhance user satisfaction.
            </p>
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="text-muted-foreground">
              To be the globally recognized leader in software quality assurance, setting the industry standard for excellence, reliability, and innovation. We aim to build long-lasting partnerships with our clients, helping them launch flawless products that succeed in a competitive digital world.
            </p>
          </div>
          <div>
            <Image
              src="https://placehold.co/600x400.png"
              alt="Our Team at Xelaris"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              data-ai-hint="team collaboration"
            />
          </div>
        </div>

        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle className="text-center text-3xl">Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-muted-foreground">We uphold the highest standards of integrity in all of our actions.</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Customer Commitment</h3>
                <p className="text-muted-foreground">We develop relationships that make a positive difference in our customers' lives.</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-muted-foreground">We provide outstanding products and unsurpassed service that deliver premium value.</p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">We constantly pursue new ideas and creative solutions to drive success.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
