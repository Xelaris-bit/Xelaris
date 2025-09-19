
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <h2 className="text-3xl md:text-4xl font-bold max-w-lg">
            <span className="text-accent">Innovative</span> Problem-Solving for Business <span className="text-accent">Success</span>
          </h2>
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 flex-shrink-0">
            <Link href="/contact">
              Lets Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
