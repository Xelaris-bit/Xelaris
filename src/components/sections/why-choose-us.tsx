'use client';
import { useState } from "react";
import { Users, TrendingUp, Rocket, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const benefits = [
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: "Unmatched Reliability",
        description: "Our proven track record of consistent performance ensures that your business runs without disruption, backed by technology you can truly rely on."
    },
    {
        icon: <TrendingUp className="w-8 h-8" />,
        title: "Scalable Solutions",
        description: "Our solutions are designed to scale seamlessly, supporting your business as it evolves—from ambitious start-ups to established enterprises."
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Expert Team",
        description: "Our team of highly skilled professionals work collaboratively to deliver innovative solutions that drive measurable results."
    },
    {
        icon: <Rocket className="w-8 h-8" />,
        title: "Faster Time-to-Market",
        description: "Through agile methodologies and streamlined processes, we accelerate delivery without compromising quality, helping you stay ahead."
    }
];

const WhyChooseUsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeBenefit = benefits[activeIndex];

    return (
        <section id="why-us" className="w-full py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Why Choose <span className="text-accent">Xelaris</span>?</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        We deliver cutting-edge IT solutions designed to transform businesses, combining creativity and technology to bring your vision to life.
                    </p>
                </div>

                <div className="relative flex flex-col items-center justify-center min-h-[450px]">
                    {/* Central Content Display */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-background flex flex-col items-center justify-center text-center p-8 shadow-2xl z-10"
                        >
                            <h3 className="text-xl font-bold text-primary mb-2">{activeBenefit.title}</h3>
                            <p className="text-muted-foreground text-sm">{activeBenefit.description}</p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Surrounding Icon Buttons */}
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px]">
                            {benefits.map((benefit, index) => {
                                const angle = (index / benefits.length) * 360 + 45; // Offset by 45 degrees
                                const x = 50 + 50 * Math.cos((angle * Math.PI) / 180);
                                const y = 50 + 50 * Math.sin((angle * Math.PI) / 180);

                                return (
                                    <button
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={cn(
                                            "absolute w-20 h-20 rounded-full bg-card text-primary flex items-center justify-center shadow-lg transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-accent hover:text-accent-foreground z-20",
                                            activeIndex === index ? "bg-accent text-accent-foreground scale-110 shadow-xl" : "bg-background"
                                        )}
                                        style={{
                                            left: `${x}%`,
                                            top: `${y}%`,
                                        }}
                                        aria-label={benefit.title}
                                    >
                                        {benefit.icon}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
