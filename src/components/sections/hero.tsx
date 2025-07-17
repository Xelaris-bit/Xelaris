'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MoveDown } from 'lucide-react';

const HeroSection = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center text-white">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://placehold.co/1920x1080.png)', filter: 'brightness(0.4)'}} data-ai-hint="software development"></div>
             <div className="absolute inset-0 bg-primary/60"></div>
            
            <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4 animate-fade-in-down">
                    Reliable & Scalable Software Testing Solutions by Xelaris
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 animate-fade-in-up">
                    We ensure your software is bug-free, fast, and ready for the world.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
                    <Button asChild size="lg" variant="secondary" className="bg-white/90 text-primary hover:bg-white">
                        <Link href="#services">Explore Services</Link>
                    </Button>
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="#contact">Get a Free Quote</Link>
                    </Button>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
                <Link href="#why-us" aria-label="Scroll down">
                    <div className="animate-bounce text-accent text-4xl">
                      <MoveDown className="w-10 h-10" />
                    </div>
                </Link>
            </div>

            <style jsx>{`
                @keyframes fade-in-down {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-down {
                    animation: fade-in-down 1s ease-out forwards;
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out forwards;
                }
                .animation-delay-300 {
                    animation-delay: 0.3s;
                    animation-fill-mode: backwards;
                }
            `}</style>
        </section>
    );
};

export default HeroSection;
