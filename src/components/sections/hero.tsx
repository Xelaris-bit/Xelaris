'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MoveDown } from 'lucide-react';

const HeroSection = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute z-0 w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1920"
            >
                {/* Video by Tima Miroshnichenko: https://www.pexels.com/video/a-man-in-black-shirt-typing-on-his-keyboard-7578539/ */}
                <source src="https://videos.pexels.com/video-files/7578539/7578539-hd_1920_1080_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
             <div className="absolute inset-0 bg-primary/70"></div>
            
            <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4 animate-fade-in-down">
                    Reliable & Scalable Software Testing Solutions by Xelaris
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 animate-fade-in-up">
                    We ensure your software is bug-free, fast, and ready for the world.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
                    <Button asChild size="lg" variant="secondary" className="bg-white/90 text-primary hover:bg-white">
                        <Link href="/services">Explore Services</Link>
                    </Button>
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/contact">Get a Free Quote</Link>
                    </Button>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
                <Link href="/#why-us" aria-label="Scroll down">
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
