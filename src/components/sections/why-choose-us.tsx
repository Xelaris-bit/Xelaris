'use client';
import { Users, TrendingUp, Rocket, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
    {
        icon: <ShieldCheck className="w-10 h-10 text-accent" />,
        title: "Unmatched Reliability",
        description: "Our proven track record of consistent performance ensures that your business runs without disruption, backed by technology you can truly rely on."
    },
    {
        icon: <TrendingUp className="w-10 h-10 text-accent" />,
        title: "Scalable Solutions",
        description: "Our solutions are designed to scale seamlessly, supporting your business as it evolves—from ambitious start-ups to established enterprises."
    },
    {
        icon: <Users className="w-10 h-10 text-accent" />,
        title: "Expert Team",
        description: "Our team of highly skilled professionals work collaboratively to deliver innovative solutions that drive measurable results."
    },
    {
        icon: <Rocket className="w-10 h-10 text-accent" />,
        title: "Faster Time-to-Market",
        description: "Through agile methodologies and streamlined processes, we accelerate delivery without compromising quality, helping you stay ahead."
    }
];

const WhyChooseUsSection = () => {
    return (
        <section id="why-us" className="w-full py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Why Choose <span className="text-accent">Xelaris</span>?</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        We deliver cutting-edge IT solutions designed to transform businesses. From custom web and software development to immersive eLearning platforms, 3D & multimedia design, quality assurance, and digital marketing—our team combines creativity and technology to bring your vision to life.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <Card key={index} className="p-6 text-center flex flex-col items-center bg-background hover:shadow-xl transition-shadow duration-300">
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
