
'use client';
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Users, Rocket, Award, Clock, FolderKanban } from "lucide-react";
import AnimatedCounter from "@/components/animated-counter";
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '../logo';

const ReliabilityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-accent">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="m9 12 2 2 4-4"></path>
    </svg>
);

const ScalingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-accent">
        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
        <path d="M14 2v4h4"></path><path d="M22 22l-6-6"></path>
        <path d="M19 13l3 3"></path>
    </svg>
);


const benefits = [
    {
        id: 'reliability',
        icon: <ReliabilityIcon />,
        title: "Unmatched Reliability",
        description: "At Xelaris, we are dedicated to delivering solutions that inspire confidence. Our proven track record of consistent performance ensures that your business runs without disruption, backed by technology you can truly rely on."
    },
    {
        id: 'scalability',
        icon: <ScalingIcon />,
        title: "Scalable Solutions",
        description: "We understand that growth is constant. That’s why our solutions are designed to scale seamlessly, supporting your business as it evolves—from ambitious start-ups to established enterprises."
    },
    {
        id: 'team',
        icon: <Users className="w-8 h-8 text-accent" />,
        title: "Expert Team",
        description: "Behind every project is a team of highly skilled professionals with deep industry expertise. Our developers, designers, QA specialists, and digital strategists work collaboratively to deliver innovative solutions that drive measurable results."
    },
    {
        id: 'speed',
        icon: <Rocket className="w-8 h-8 text-accent" />,
        title: "Faster Time-to-Market",
        description: "In today’s fast-moving world, speed matters. Through agile methodologies and streamlined processes, we accelerate delivery without compromising quality, helping you stay ahead of the competition."
    }
];

const stats = [
    {
        icon: <Award className="w-8 h-8 text-accent mb-2" />,
        value: 8,
        label: "Years in Business",
        suffix: '+'
    },
    {
        icon: <Users className="w-8 h-8 text-accent mb-2" />,
        value: 50,
        label: "Happy Clients",
        suffix: '+'
    },
    {
        icon: <FolderKanban className="w-8 h-8 text-accent mb-2" />,
        value: 1500,
        label: "Projects Completed",
        suffix: '+'
    },
    {
        icon: <Clock className="w-8 h-8 text-accent mb-2" />,
        textValue: '24/7',
        label: "Support"
    }
];


const WhyChooseUsSection = () => {
    const [activeBenefit, setActiveBenefit] = useState<(typeof benefits)[number] | null>(null);

    return (
        <section id="why-us" className="w-full py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Why Choose <span className="text-accent">Xelaris</span>?</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        We deliver cutting-edge IT solutions designed to transform businesses. From custom web and software development to immersive eLearning platforms, 3D & multimedia design, quality assurance, and digital marketing—our team combines creativity and technology to bring your vision to life.
                    </p>
                </div>
                
                {/* Desktop: Interactive Semi-Circle Layout */}
                <div className="hidden md:flex items-center justify-center min-h-[450px] relative">
                    <div 
                        className="absolute inset-0 bg-no-repeat bg-center"
                        style={{
                            backgroundImage: 'url("data:image/svg+xml,%3csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3crect width=\'100%25\' height=\'100%25\' fill=\'none\'/%3e%3cpath d=\'M200,200 a150,150 0 1,1 300,0\' stroke=\'%23e0e0e0\' stroke-width=\'2\' stroke-dasharray=\'6,6\' stroke-linecap=\'square\'/%3e%3c/svg%3e")',
                            backgroundSize: '700px 350px',
                            transform: 'translateY(40px)'
                        }}
                    />
                    
                    <div className="relative w-80 h-80 rounded-full bg-background/50 flex flex-col items-center justify-center text-center p-6 shadow-2xl backdrop-blur-sm z-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeBenefit ? activeBenefit.id : 'initial'}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col items-center justify-center"
                            >
                                {activeBenefit ? (
                                    <>
                                        {activeBenefit.icon}
                                        <h3 className="text-2xl font-bold text-primary mt-4">{activeBenefit.title}</h3>
                                        <p className="text-muted-foreground mt-2">{activeBenefit.description}</p>
                                    </>
                                ) : (
                                    <>
                                        <Logo className="w-24 h-24 text-primary opacity-80" />
                                        <p className="mt-4 text-muted-foreground">Click an icon to discover why clients choose us.</p>
                                    </>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Benefit Icons */}
                    {benefits.map((benefit, index) => {
                        const angle = -135 + index * (180 / (benefits.length - 1));
                        const x = 50 + 48 * Math.cos(angle * Math.PI / 180);
                        const y = 50 + 48 * Math.sin(angle * Math.PI / 180);
                        return (
                             <motion.button
                                key={benefit.id}
                                className={cn(
                                    "absolute w-28 h-28 rounded-full bg-background shadow-lg flex flex-col items-center justify-center text-center p-2 z-20 cursor-pointer transition-all duration-300",
                                    activeBenefit?.id === benefit.id ? 'border-2 border-accent scale-110' : 'hover:scale-110'
                                )}
                                style={{
                                    left: `${x}%`,
                                    top: `${y}%`,
                                    transform: 'translate(-50%, -50%)'
                                }}
                                onClick={() => setActiveBenefit(benefit)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {benefit.icon}
                                <span className="text-xs font-semibold text-primary mt-1">{benefit.title}</span>
                            </motion.button>
                        );
                    })}
                </div>

                {/* Mobile Accordion Layout */}
                <div className="md:hidden mt-8 max-w-xl mx-auto">
                    <Accordion type="single" collapsible defaultValue="reliability" className="w-full">
                        {benefits.map(benefit => (
                            <AccordionItem value={benefit.id} key={benefit.id}>
                                <AccordionTrigger>
                                    <div className="flex items-center gap-4">
                                        {benefit.icon}
                                        <span className="font-semibold text-left">{benefit.title}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pl-14 text-muted-foreground">
                                    {benefit.description}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                <Card className="bg-background mt-16">
                    <CardContent className="p-8 md:p-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    {stat.icon}
                                    <div className="text-4xl md:text-5xl font-bold text-primary">
                                        {stat.value ? (
                                            <>
                                                <AnimatedCounter value={stat.value} />
                                                {stat.suffix}
                                            </>
                                        ) : (
                                            <span className="font-bold text-4xl md:text-5xl text-primary">{stat.textValue}</span>
                                        )}
                                    </div>
                                    <p className="text-muted-foreground mt-2">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
