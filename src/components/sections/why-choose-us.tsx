import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Rocket, Award, Clock, FolderKanban } from "lucide-react";
import AnimatedCounter from "@/components/animated-counter";
import { ShieldCheck, Gauge, CheckCircle } from "lucide-react";
import { FadeIn } from "../fade-in";

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

const differentiators = [
    {
        number: "01",
        title: "Comprehensive Quality Assessment",
        description: "We provide in-depth analysis and feedback to ensure every aspect of your software meets the highest quality standards."
    },
    {
        number: "02",
        title: "Highly Skilled Team",
        description: "Our team of certified professionals brings extensive experience and expertise to every project, guaranteeing exceptional results."
    },
    {
        number: "03",
        title: "Robust Test Automation",
        description: "We implement powerful test automation frameworks to accelerate release cycles, improve accuracy, and reduce long-term costs."
    },
    {
        number: "04",
        title: "Support Across Time Zones",
        description: "Our global team offers round-the-clock support, ensuring seamless collaboration and timely delivery regardless of your location."
    },
    {
        number: "05",
        title: "Maximum Device Coverage",
        description: "We test on a vast range of real devices and platforms to ensure your application performs flawlessly for every user."
    },
    {
        number: "06",
        title: "Flexible Engagement Models",
        description: "We offer adaptable engagement models tailored to your specific project needs, timelines, and budget for a perfect fit."
    }
];

const WhyChooseUsSection = () => {
    return (
        <section id="why-us" className="w-full py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Why Choose Xelaris?</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        We deliver cutting-edge IT solutions designed to transform businesses. From custom web and software development to immersive eLearning platforms, 3D & multimedia design, quality assurance, and digital marketing—our team combines creativity and technology to bring your vision to life.
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

                <Card className="bg-background mb-16">
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
                
                <div className="relative mt-16">
                    {/* The timeline line */}
                    <div className="hidden md:block absolute top-5 left-1/2 w-0.5 h-[calc(100%-2.5rem)] bg-border -translate-x-1/2"></div>

                    {differentiators.map((item, index) => (
                        <FadeIn key={index}>
                            <div className={`relative flex items-center mb-12 md:mb-0 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                <div className="hidden md:block absolute top-5 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <CheckCircle className="h-10 w-10 text-accent p-2 bg-secondary rounded-full border-4 border-secondary"/>
                                </div>
                                <div className={`md:w-5/12 p-6 rounded-lg shadow-lg bg-background ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                                    <div className="flex items-center gap-4">
                                        <span className="text-5xl font-bold text-primary/20">{item.number}</span>
                                        <h3 className="text-xl font-semibold">{item.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground mt-2 pl-16">{item.description}</p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
