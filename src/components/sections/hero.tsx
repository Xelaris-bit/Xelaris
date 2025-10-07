"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
    "Software Development",
    "eLearning Solutions",
    "3D & Multimedia Design",
    "QA & Testing",
    "Digital Marketing"
];

const HeroSection = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % services.length);
        }, 3000); // Change service every 3 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="relative w-full overflow-hidden min-h-screen flex items-center">
            {/* Video Background */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover -z-10"
            >
                <source src="/Videos/your-video-filename.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-secondary/70 -z-5"></div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-6 z-10">
                <div className="grid md:grid-cols-2 gap-8 items-center min-h-[80vh]">
                    <div className="text-center md:text-left">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-4xl md:text-6xl font-bold text-primary tracking-tight leading-tight mb-4"
                        >
                            Empowering <span className="text-accent">Innovation</span> Through Technology
                        </motion.h1>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="h-12 mb-8 flex items-center justify-center md:justify-start"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={services[index]}
                                    initial={{ opacity: 0, y: -25 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 25 }}
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                    className="relative flex items-center"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                        transition={{ delay: 0.2, duration: 0.3 }}
                                    >
                                        <CheckCircle className="w-6 h-6 text-accent mr-3" />
                                    </motion.div>
                                    <div className="relative inline-block">
                                        <motion.span 
                                            className="absolute inset-0 bg-accent/20 -z-10 rounded-md"
                                            initial={{ width: 0 }}
                                            animate={{ width: '100%' }}
                                            exit={{ width: 0 }}
                                            transition={{ duration: 0.4, ease: 'easeIn' }}
                                        />
                                        <p
                                            className="text-lg md:text-xl text-primary font-semibold px-2"
                                        >
                                            {services[index]}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                        >
                            <Button asChild size="lg">
                                <Link href="/services">Explore Services</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/contact">Get in Touch</Link>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Empty right side or add any additional content */}
                    <div></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
