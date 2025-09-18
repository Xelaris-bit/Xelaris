
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const DigitalChallengesSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-accent">Navigating</span> and Solving <span className="text-accent">Digital</span> Complexities
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800"
              alt="Team collaborating on a digital project"
              width={800}
              height={600}
              className="w-full h-auto"
              data-ai-hint="team collaboration"
            />
            <div className="absolute bottom-4 left-4 right-4 space-y-4">
              <motion.div 
                className="bg-primary/90 text-primary-foreground p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-2xl font-bold">8+ <span className="text-lg font-normal">YEARS IN BUSINESS</span></p>
              </motion.div>
              <motion.div 
                className="bg-primary/90 text-primary-foreground p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="text-2xl font-bold">50+ <span className="text-lg font-normal">CLIENTS ACROSS SECTORS</span></p>
              </motion.div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary relative pb-2">
              Who We Are
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-accent"></span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Xelaris is a premier software testing and quality assurance company dedicated to helping businesses deliver flawless, high-performing, and secure software. Founded by a team of veteran QA professionals, we bridge the gap between development and deployment, ensuring that your products meet the highest standards of quality.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our expertise spans across various domains, from manual and automation testing to performance and security assessments. We leverage industry-leading tools and innovative methodologies to provide comprehensive testing solutions tailored to your unique needs.
            </p>
             <p className="text-muted-foreground leading-relaxed">
              Reach out today to elevate your software quality endeavors with us!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalChallengesSection;
