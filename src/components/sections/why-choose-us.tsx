
'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Rocket, Award, Clock, FolderKanban } from "lucide-react";
import AnimatedCounter from "@/components/animated-counter";
import { Logo } from '../logo';

const ReliabilityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-accent">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="m9 12 2 2 4-4"></path>
    </svg>
);

const ScalingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-accent">
        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
        <path d="M14 2v4h4"></path><path d="M22 22l-6-6"></path>
        <path d="M19 13l3 3"></path>
    </svg>
);


const benefits = [
    {
        id: 'reliability',
        icon: <ReliabilityIcon />,
        title: "Unmatched Reliability",
        description: "Our proven track record of consistent performance ensures that your business runs without disruption, backed by technology you can truly rely on."
    },
    {
        id: 'scalability',
        icon: <ScalingIcon />,
        title: "Scalable Solutions",
        description: "Our solutions are designed to scale seamlessly, supporting your business as it evolves—from ambitious start-ups to established enterprises."
    },
    {
        id: 'team',
        icon: <Users className="w-10 h-10 text-accent" />,
        title: "Expert Team",
        description: "Our team of highly skilled professionals work collaboratively to deliver innovative solutions that drive measurable results."
    },
    {
        id: 'speed',
        icon: <Rocket className="w-10 h-10 text-accent" />,
        title: "Faster Time-to-Market",
        description: "Through agile methodologies and streamlined processes, we accelerate delivery without compromising quality, helping you stay ahead."
    }
];

const stats = [
    {
        icon: <Award className="w-8 h-8 text-accent mb-2" />,
        value: 8,
        label: "Years in Business",
        suffix: '+'
    },
    {
        icon: <Users className="w-8 h-8 text-accent mb-2" />,
        value: 50,
        label: "Happy Clients",
        suffix: '+'
    },
    {
        icon: <FolderKanban className="w-8 h-8 text-accent mb-2" />,
        value: 1500,
        label: "Projects Completed",
        suffix: '+'
    },
    {
        icon: <Clock className="w-8 h-8 text-accent mb-2" />,
        textValue: '24/7',
        label: "Support"
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {benefits.map((benefit) => (
                        <Card key={benefit.id} className="bg-background p-6 flex items-start gap-6 hover:shadow-xl transition-shadow duration-300">
                           <div className="flex-shrink-0">
                                {benefit.icon}
                           </div>
                           <div>
                                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                                <p className="text-muted-foreground">{benefit.description}</p>
                           </div>
                        </Card>
                    ))}
                </div>

                <Card className="bg-background">
                    <CardContent className="p-8 md:p-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    {stat.icon}
                                    <div className="text-4xl md:text-5xl font-bold text-primary">
                                        {stat.value ? (
                                            <>
                                                <AnimatedCounter value={stat.value} />
                                                {stat.suffix}
                                            </>
                                        ) : (
                                            <span className="font-bold text-4xl md:text-5xl text-primary">{stat.textValue}</span>
                                        )}
                                    </div>
                                    <p className="text-muted-foreground mt-2">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
