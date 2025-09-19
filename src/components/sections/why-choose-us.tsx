'use client';
import { useState } from 'react';
import { Users, Rocket, TrendingUp, ShieldCheck } from "lucide-react";
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const ReliabilityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="m9 12 2 2 4-4"></path>
    </svg>
);

const benefits = [
    {
        id: 'reliability',
        icon: <ReliabilityIcon />,
        title: "Unmatched Reliability",
        description: "Our proven track record of consistent performance ensures that your business runs without disruption, backed by technology you can truly rely on."
    },
    {
        id: 'scalability',
        icon: <TrendingUp className="w-8 h-8" />,
        title: "Scalable Solutions",
        description: "Our solutions are designed to scale seamlessly, supporting your business as it evolves—from ambitious start-ups to established enterprises."
    },
    {
        id: 'team',
        icon: <Users className="w-8 h-8" />,
        title: "Expert Team",
        description: "Our team of highly skilled professionals work collaboratively to deliver innovative solutions that drive measurable results."
    },
    {
        id: 'speed',
        icon: <Rocket className="w-8 h-8" />,
        title: "Faster Time-to-Market",
        description: "Through agile methodologies and streamlined processes, we accelerate delivery without compromising quality, helping you stay ahead."
    }
];

const WhyChooseUsSection = () => {
    const [selectedBenefit, setSelectedBenefit] = useState(benefits[0]);

    return (
        <section id="why-us" className="w-full py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Why Choose <span className="text-accent">Xelaris</span>?</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        We deliver cutting-edge IT solutions designed to transform businesses. From custom web and software development to immersive eLearning platforms, 3D & multimedia design, quality assurance, and digital marketing—our team combines creativity and technology to bring your vision to life.
                    </p>
                </div>
                
                {/* Desktop View: Circular Interactive Layout */}
                <div className="hidden md:flex justify-center items-center h-[500px] relative">
                     {/* The central content circle */}
                    <div className="absolute w-[300px] h-[300px] bg-background rounded-full flex items-center justify-center p-8 text-center shadow-2xl">
                            <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedBenefit.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col items-center"
                            >
                                <h3 className="text-2xl font-bold text-primary mb-3">{selectedBenefit.title}</h3>
                                <p className="text-muted-foreground">{selectedBenefit.description}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Orbiting Icon Buttons */}
                    <div className="absolute w-[500px] h-[500px] animate-orbit" style={{ animationDuration: '40s' }}>
                        {benefits.map((benefit, index) => {
                            const radius = 230;
                            const containerSize = 500;
                            const buttonSize = 96;
                            const angle = (index / benefits.length) * 2 * Math.PI - Math.PI / 2;
                            const x = (containerSize / 2) + radius * Math.cos(angle) - (buttonSize / 2);
                            const y = (containerSize / 2) + radius * Math.sin(angle) - (buttonSize / 2);
                            return (
                                <button
                                    key={benefit.id}
                                    onClick={() => setSelectedBenefit(benefit)}
                                    className={cn(
                                        "absolute w-24 h-24 rounded-full flex items-center justify-center bg-background shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 z-10 animate-counter-orbit",
                                        selectedBenefit.id === benefit.id ? 'border-4 border-accent text-accent' : 'text-primary/70 hover:text-accent'
                                    )}
                                    style={{ 
                                        transform: `translate(${x}px, ${y}px)`,
                                        animationDuration: '40s'
                                    }}
                                >
                                    {benefit.icon}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile View: Accordion */}
                <div className="md:hidden">
                     <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
                        {benefits.map((benefit, index) => (
                            <AccordionItem value={`item-${index}`} key={benefit.id}>
                                <AccordionTrigger>
                                    <div className="flex items-center gap-4">
                                        <span className="text-accent">{benefit.icon}</span>
                                        <span className="text-lg font-semibold">{benefit.title}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pl-14 text-muted-foreground">
                                    {benefit.description}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
