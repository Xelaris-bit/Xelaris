
'use client';
import { useState } from "react";
import { Users, TrendingUp, Rocket, ShieldCheck, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const benefits = [
    {
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        title: "Unmatched Reliability",
        description: "Our proven track record of consistent performance ensures that your business runs without disruption, backed by technology you can truly rely on."
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-primary" />,
        title: "Scalable Solutions",
        description: "Our solutions are designed to scale seamlessly, supporting your business as it evolves—from ambitious start-ups to established enterprises."
    },
    {
        icon: <Users className="w-8 h-8 text-primary" />,
        title: "Expert Team",
        description: "Our team of highly skilled professionals work collaboratively to deliver innovative solutions that drive measurable results."
    },
    {
        icon: <Rocket className="w-8 h-8 text-primary" />,
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

                {/* Desktop View: Semi-circle layout */}
                <div className="hidden md:flex flex-col items-center justify-center min-h-[450px]">
                    <div className="relative w-full flex justify-center items-center" style={{ height: '200px' }}>
                        {benefits.map((benefit, index) => {
                             const angle = -135 + index * (90 / (benefits.length -1));
                             const x = 50 + 45 * Math.cos((angle * Math.PI) / 180);
                             const y = 100 + 45 * Math.sin((angle * Math.PI) / 180);

                            return (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={cn(
                                        "absolute w-24 h-24 rounded-full bg-card text-primary flex items-center justify-center shadow-lg transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-accent hover:text-accent-foreground z-20",
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
                     <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full max-w-xl min-h-[150px] mt-8 text-center p-8 bg-background rounded-lg shadow-2xl z-10"
                        >
                            <h3 className="text-2xl font-bold text-primary mb-2">{activeBenefit.title}</h3>
                            <p className="text-muted-foreground">{activeBenefit.description}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Mobile View: Accordion */}
                <div className="md:hidden w-full max-w-md mx-auto">
                   <Accordion type="single" collapsible defaultValue="item-0">
                        {benefits.map((benefit, index) => (
                            <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger>
                                    <div className="flex items-center gap-4">
                                        <div className={cn("w-12 h-12 rounded-full bg-background flex items-center justify-center flex-shrink-0")}>
                                            {benefit.icon}
                                        </div>
                                        <span className="text-left font-semibold text-primary">{benefit.title}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pl-4 border-l-2 border-accent ml-6">
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
