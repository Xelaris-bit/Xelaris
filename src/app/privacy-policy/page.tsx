
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


export default function PrivacyPolicyPage() {
  const lastUpdatedDate = getCurrentDate();
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <FadeIn>
          <section className="bg-primary/5 py-20 md:py-32">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">Privacy <span className="text-accent">Policy</span></h1>
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
                    <h2 className="text-2xl font-bold text-primary">1. Introduction</h2>
                    <p>Welcome to Xelaris. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>
                </div>
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-primary">2. Information Collection</h2>
                    <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.</p>
                </div>
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-primary">3. Use of Your Information</h2>
                    <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to create and manage your account, email you regarding your account or order, and send you a newsletter, among other things.</p>
                </div>
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-primary">4. Data Security</h2>
                    <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
                </div>
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-primary">5. Contact Us</h2>
                    <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
                    <p className="pl-4">
                        Xelaris<br />
                        89, Kulasukarpada, Cuttack City, 754209<br />
                        contact.xelaris@gmail.com
                    </p>
                </div>
            </div>
          </section>
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}
