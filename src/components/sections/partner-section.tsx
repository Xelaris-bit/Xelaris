import Image from 'next/image';
import { PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PartnerSection = () => {
  return (
    <section id="partner" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Choose Xelaris?</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200"
              alt="Man working on a laptop"
              width={1200}
              height={675}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              data-ai-hint="software development team"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <PlayCircle className="w-20 h-20 text-white/80 group-hover:text-white transition-colors" />
            </div>
          </div>
          <div className="text-left">
            <h3 className="text-4xl font-bold text-primary">
              Xelaris – Your QA Partner in Success
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
