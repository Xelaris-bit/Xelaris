
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ContactSection from '@/components/sections/contact';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeIn } from '@/components/fade-in';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <FadeIn>
          <section className="relative py-20 md:py-32 bg-secondary text-center">
            <div className="absolute inset-0 bg-primary/10" />
            <div className="container mx-auto px-4 relative">
              <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
                Have a project in mind or just want to say hello?
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                We&apos;d love to hear from you.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="#contact-form">Send a Message</Link>
                </Button>
              </div>
            </div>
          </section>
        </FadeIn>
        <FadeIn>
          <ContactSection />
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}
