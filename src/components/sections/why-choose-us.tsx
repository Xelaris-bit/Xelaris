import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Gauge, Users, Rocket, BarChart, Bug } from "lucide-react";
import AnimatedCounter from "@/components/animated-counter";

const benefits = [
    {
        icon: <ShieldCheck className="w-8 h-8 text-accent" />,
        title: "Unmatched Reliability",
        description: "Our rigorous testing processes ensure your software is robust and dependable."
    },
    {
        icon: <Gauge className="w-8 h-8 text-accent" />,
        title: "Scalable Solutions",
        description: "We adapt our testing strategies to match your project's scale and complexity."
    },
    {
        icon: <Users className="w-8 h-8 text-accent" />,
        title: "Expert Team",
        description: "Our certified professionals bring years of cross-industry experience."
    },
    {
        icon: <Rocket className="w-8 h-8 text-accent" />,
        title: "Faster Time-to-Market",
        description: "Streamline your development cycle and release products faster with our help."
    }
];

const stats = [
    {
        icon: <BarChart className="w-8 h-8 text-accent mb-2" />,
        value: 1500,
        label: "Test Cases Executed"
    },
    {
        icon: <Users className="w-8 h-8 text-accent mb-2" />,
        value: 250,
        label: "Happy Clients"
    },
    {
        icon: <Bug className="w-8 h-8 text-accent mb-2" />,
        value: 50000,
        label: "Bugs Found"
    }
]

const WhyChooseUsSection = () => {
    return (
        <section id="why-us" className="w-full py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Why Choose Xelaris?</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        We are more than just a testing company. We are your partners in quality, dedicated to your success.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0">{benefit.icon}</div>
                            <div>
                                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                                <p className="mt-1 text-muted-foreground">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <Card className="bg-background">
                    <CardContent className="p-8 md:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    {stat.icon}
                                    <div className="text-4xl md:text-5xl font-bold text-primary">
                                       <AnimatedCounter value={stat.value} />+
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
