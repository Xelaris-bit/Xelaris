
'use client';

import { Users, TrendingUp, Rocket, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
    {
        icon: <ShieldCheck className="w-10 h-10 text-accent" />,
        title: "Unmatched Reliability",
        description: "Our proven track record ensures your business runs without disruption, backed by technology you can trust."
    },
    {
        icon: <TrendingUp className="w-10 h-10 text-accent" />,
        title: "Scalable Solutions",
        description: "Our solutions are designed to scale seamlessly, supporting your business as it evolves."
    },
    {
        icon: <Users className="w-10 h-10 text-accent" />,
        title: "Expert Team",
        description: "Our professionals deliver innovative solutions that drive measurable results and foster growth."
    },
    {
        icon: <Rocket className="w-10 h-10 text-accent" />,
        title: "Faster Time-to-Market",
        description: "We accelerate delivery without compromising quality, helping you stay ahead of the competition."
    }
];

const WhyChooseUsSection = () => {
    return (
        <section id="why-us" className="w-full py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Why Choose <span className="text-accent">Xelaris</span>?</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        We deliver cutting-edge IT solutions designed to transform businesses, combining creativity and technology to bring your vision to life.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <Card key={index} className="text-center p-6 flex flex-col items-center bg-background hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
                           <CardHeader className="p-0 mb-4">
                             {benefit.icon}
                           </CardHeader>
                           <CardContent className="p-0">
                                <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                                <p className="text-muted-foreground">{benefit.description}</p>
                           </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
