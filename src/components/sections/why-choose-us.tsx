
'use client';

import { useState } from 'react';
import { Users, TrendingUp, Rocket, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Logo } from '@/components/logo';

const benefits = [
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    title: 'Unmatched Reliability',
    description: 'Our proven track record ensures your business runs without disruption, backed by technology you can trust.',
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: 'Scalable Solutions',
    description: 'Our solutions are designed to scale seamlessly, supporting your business as it evolves.',
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: 'Expert Team',
    description: 'Our professionals deliver innovative solutions that drive measurable results and foster growth.',
  },
  {
    icon: <Rocket className="w-10 h-10" />,
    title: 'Faster Time-to-Market',
    description: 'We accelerate delivery without compromising quality, helping you stay ahead of the competition.',
  },
];

const WhyChooseUsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="why-us" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose <span className="text-accent">Xelaris</span>?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We deliver cutting-edge IT solutions designed to transform businesses, combining creativity and technology to bring your vision to life.
          </p>
        </div>

        <div className="relative h-[500px] w-full max-w-2xl mx-auto flex items-center justify-center">
            {/* Central Content Circle */}
            <Card className="absolute w-72 h-72 rounded-full flex flex-col items-center justify-center text-center p-8 bg-background shadow-2xl z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex === null ? 'default' : benefits[activeIndex].title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center"
                    >
                        <CardContent className="p-0">
                            {activeIndex === null ? (
                                <>
                                    <Logo className="h-16 w-16 mb-4 relative left-2" />
                                    <p className="text-muted-foreground text-sm">
                                        Click an icon to learn more about our advantages.
                                    </p>
                                </>
                            ) : (
                                <>
                                    <h3 className="text-xl font-bold text-primary mb-2">{benefits[activeIndex].title}</h3>
                                    <p className="text-muted-foreground">{benefits[activeIndex].description}</p>
                                </>
                            )}
                        </CardContent>
                    </motion.div>
                </AnimatePresence>
            </Card>

             {/* Orbiting Icon Buttons */}
            {benefits.map((benefit, index) => {
                const angle = (index / benefits.length) * (2 * Math.PI) - (Math.PI / 2);
                const radius = 200;
                const x = Math.round(radius * Math.cos(angle));
                const y = Math.round(radius * Math.sin(angle));

                return (
                    <motion.button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        onHoverStart={() => setHoveredIndex(index)}
                        onHoverEnd={() => setHoveredIndex(null)}
                        className={cn(
                            'absolute w-24 h-24 rounded-full flex items-center justify-center transition-colors duration-300 z-20',
                            activeIndex === index
                            ? 'bg-primary text-primary-foreground shadow-lg'
                            : 'bg-background text-primary'
                        )}
                        animate={{
                            x,
                            y,
                            scale: hoveredIndex === index || activeIndex === index ? 1.1 : 1,
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                       {benefit.icon}
                    </motion.button>
                );
            })}
        </div>
        
        {/* Mobile View */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:hidden">
            {benefits.map((benefit, index) => (
                <Card key={index} className="text-center p-6 flex flex-col items-center bg-background hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
                    <div className="p-0 mb-4 text-accent">{benefit.icon}</div>
                    <CardContent className="p-0">
                        <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;
