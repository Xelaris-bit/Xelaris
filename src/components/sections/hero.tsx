'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Player } from '@lottiefiles/react-lottie-player';

const HeroSection = () => {
    return (
        <section id="home" className="relative w-full bg-primary/5 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 min-h-screen grid lg:grid-cols-2 items-center gap-12">
                <div className="relative z-10 text-center lg:text-left animate-fade-in-left">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-tight leading-tight mb-4">
                        Reliable & Scalable Software Testing Solutions
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8">
                        We ensure your software is bug-free, fast, and ready for the world.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                            <Link href="/services">Explore Services</Link>
                        </Button>
                         <Button asChild size="lg" variant="outline">
                            <Link href="/contact">Get in Touch</Link>
                        </Button>
                    </div>
                </div>

                <div className="relative h-full flex items-center justify-center animate-fade-in-right">
                     <Player
                        autoplay
                        loop
                        src="https://lottie.host/5a02e650-65c1-432a-95a2-c651e4f16d5d/8O566T9O1o.json"
                        className="w-full max-w-lg mx-auto"
                    />
                </div>
            </div>
             <style jsx>{`
                @keyframes fade-in-left {
                    from { opacity: 0; transform: translateX(-20px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes fade-in-right {
                    from { opacity: 0; transform: translateX(20px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .animate-fade-in-left {
                    animation: fade-in-left 0.8s ease-out forwards;
                }
                .animate-fade-in-right {
                    animation: fade-in-right 0.8s ease-out forwards;
                    animation-delay: 0.2s;
                    animation-fill-mode: backwards;
                }
            `}</style>
        </section>
    );
};

export default HeroSection;
