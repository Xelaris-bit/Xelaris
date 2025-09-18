'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Player } from '@lottiefiles/react-lottie-player';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

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
        <section id="home" className="relative w-full overflow-hidden">
             <div className="absolute inset-0 bg-secondary -z-10" />
            <div className="container mx-auto px-4 md:px-6 min-h-screen flex items-center">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative z-10 text-center md:text-left animate-fade-in">
                        <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-tight leading-tight mb-4">
                            Empowering Innovation Through Technology
                        </h1>
                        <div className="h-12 mb-8 flex items-center justify-center md:justify-start">
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
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                                <Link href="/services">Explore Services</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/contact">Get in Touch</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative z-10 flex items-center justify-center">
                        <Player
                            autoplay
                            loop
                            src="https://lottie.host/8c69a898-3f18-4286-a36c-8067c2f62660/9nuc1i4l0b.json"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>
            </div>
             <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.8s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default HeroSection;