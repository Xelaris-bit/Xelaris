
'use client';

import { useState } from 'react';
import { Users, TrendingUp, Rocket, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '@/components/logo';
import AnimatedCounter from '@/components/animated-counter';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const benefits = [
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
];

const stats = [
    { value: 50, label: 'Skilled IT Professionals', suffix: '+' },
    { value: 9, label: 'Average team experience', suffix: ' years' },
    { value: 20, label: 'Satisfied clients', suffix: '+' },
    { value: 10, label: 'To assemble your dedicated team', suffix: ' days' },
];

const ExpertiseSection = () => {
    return (
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Drive development and innovation forward with our industry-leading expertise</h2>
                <p className="mt-4 text-primary-foreground/80 max-w-3xl mx-auto">
                    We partner with clients worldwide to strategize, design, and implement customized software solutions
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 mb-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="flex items-center justify-center">
                                <AnimatedCounter value={stat.value} />
                                <span className="font-bold text-4xl md:text-5xl">{stat.suffix}</span>
                            </div>
                            <p className="text-primary-foreground/80 mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                    <Link href="/about">Discover More</Link>
                </Button>
            </div>
        </section>
    );
};


const WhyChooseUsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileTabIndex, setMobileTabIndex] = useState(0);

  return (
    <>
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

        <div className="relative h-[500px] w-full max-w-2xl mx-auto hidden md:flex items-center justify-center">
            {/* Dotted Path */}
            <div className="absolute w-[400px] h-[400px] rounded-full border-2 border-dashed border-primary/50 animate-orbit" style={{ animationDuration: '30s' }}></div>

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
                                    <Logo className="h-16 w-16 relative left-[4.5rem] mb-4" />
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
            <div className="absolute w-full h-full animate-orbit [animation-duration:30s]">
              {benefits.map((benefit, index) => {
                const angle = (index * 360) / benefits.length;
                const radius = 200; // The radius of the orbit in pixels
                return (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2 w-24 h-24"
                    style={{
                      transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg) translateX(-50%) translateY(-50%)`
                    }}
                  >
                     <button
                      onClick={() => setActiveIndex(index)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={cn(
                        'w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 z-20 animate-counter-orbit [animation-duration:30s] hover:scale-110',
                         activeIndex === index
                           ? 'bg-primary text-primary-foreground shadow-lg'
                           : 'bg-background text-primary',
                         hoveredIndex === index && activeIndex !== index ? 'bg-accent text-accent-foreground' : ''
                      )}
                    >
                      {benefit.icon}
                    </button>
                  </div>
                );
              })}
            </div>
        </div>
        
        {/* Mobile View - Tab Interaction */}
        <div className="md:hidden">
            <div className="flex justify-around mb-8">
                {benefits.map((benefit, index) => (
                    <button
                        key={index}
                        onClick={() => setMobileTabIndex(index)}
                        className={cn(
                            'w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300',
                            mobileTabIndex === index
                                ? 'bg-primary text-primary-foreground shadow-lg scale-110'
                                : 'bg-background text-primary'
                        )}
                    >
                        {benefit.icon}
                    </button>
                ))}
            </div>
            <Card className="bg-background">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={mobileTabIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <CardContent className="p-6 text-center">
                            <h3 className="text-xl font-semibold mb-2">{benefits[mobileTabIndex].title}</h3>
                            <p className="text-muted-foreground">{benefits[mobileTabIndex].description}</p>
                        </CardContent>
                    </motion.div>
                </AnimatePresence>
            </Card>
        </div>

      </div>
    </section>
    <ExpertiseSection />
    </>
  );
};

export default WhyChooseUsSection;
