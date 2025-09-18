'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Player } from '@lottiefiles/react-lottie-player';

const HeroSection = () => {
    return (
        <section id="home" className="relative w-full bg-primary/5 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 min-h-screen flex items-center">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative z-10 text-center md:text-left animate-fade-in">
                        <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-tight leading-tight mb-4">
                            Empowering Innovation Through Technology
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 mb-8">
                            We ensure your software is bug-free, fast, and ready for the world.
                        </p>
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
