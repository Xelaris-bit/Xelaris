
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { FadeIn } from '@/components/fade-in';

// Helper to get the current date for the "Last Updated" field.
const getCurrentDate = () => {
    // This function will run on the server during rendering, so it's safe.
    return new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

export default function TermsOfServicePage() {
  const lastUpdatedDate = getCurrentDate();
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <FadeIn>
          <section className="bg-primary/5 py-20 md:py-32">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">Terms of <span className="text-accent">Service</span></h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Last updated: {lastUpdatedDate}
              </p>
            </div>
          </section>
        </FadeIn>
        <FadeIn>
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-4xl text-muted-foreground space-y-8">
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-primary">1. Acceptance of Terms</h2>
                    <p>By accessing and using the Xelaris website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
                </div>
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-primary">2. User Responsibilities</h2>
                    <p>You are responsible for your use of the website and for any content you provide, including compliance with applicable laws, rules, and regulations. You should only provide content that you are comfortable sharing with others.</p>
                </div>
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-primary">3. Limitation of Liability</h2>
                    <p>In no event shall Xelaris, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.</p>
                </div>
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-primary">4. Governing Law</h2>
                    <p>This Agreement is governed in accordance with the laws of Odisha, India.</p>
                </div>
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-primary">5. Changes to Terms</h2>
                    <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                </div>
            </div>
          </section>
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}
