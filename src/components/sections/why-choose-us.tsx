
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Rocket, Award, Clock, FolderKanban, ShieldCheck, Scaling, Gauge } from "lucide-react";
import AnimatedCounter from "@/components/animated-counter";
import { CheckCircle } from "lucide-react";
import { FadeIn } from "../fade-in";

const UnmatchedReliabilityIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <defs>
            <linearGradient id="reliability-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
            </linearGradient>
        </defs>
        <g stroke="url(#reliability-gradient)">
            <path d="M14.5 13.5c1.1 0 2.1.2 3 .6.9.4 1.5.9 1.5 1.4v2.5" />
            <path d="M12 11.5c-2.2 0-4 1.8-4 4v1h8v-1c0-2.2-1.8-4-4-4Z" />
            <path d="M22 14v2.5c0 .6-.6 1.1-1.5 1.5-1 .4-2.1.5-3.5.5-1.7 0-3.1-.2-4.5-.7-.9-.3-1.5-.7-1.5-1.3V14" />
            <path d="M12.5 16.5c1.4.5 2.8.8 4.5.8s3.1-.2 4.5-.8" />
            <path d="M4 14.5c.9-.4 1.9-.6 3-.6s2.1.2 3 .6" />
            <path d="M10 14.5c-.9-.4-1.5-.9-1.5-1.4V11.5" />
            <path d="M4 14.5v-3c0-.6.6-1.1 1.5-1.5C6.4 9.6 7.5 9.5 9 9.5c1.7 0 3.1.2 4.5.8.9.3 1.5.7 1.5 1.3v3" />
            <path d="M2 14v-2.5c0-.6.6-1.1 1.5-1.5C4.4 9.6 5.5 9.5 7 9.5c1.4 0 2.8.2 4 .7" />
            <path d="m16 7 1-1 3 3-1 1" />
            <path d="m8 7-1-1-3 3 1 1" />
            <path d="M12 2 4 5v4c0 4 8 7 8 7s8-3 8-7V5l-8-3Z" />
            <path d="m9 11 2 2 4-4" />
        </g>
    </svg>
);

const benefits = [
    {
        icon: <UnmatchedReliabilityIcon className="w-10 h-10 text-accent transition-transform duration-300 hover:scale-110" />,
        title: "Unmatched Reliability",
        description: "At Xelaris, we are dedicated to delivering solutions that inspire confidence. Our proven track record of consistent performance ensures that your business runs without disruption, backed by technology you can truly rely on."
    },
    {
        icon: <Scaling className="w-8 h-8 text-accent transition-transform duration-300 hover:scale-110" />,
        title: "Scalable Solutions",
        description: "We understand that growth is constant. That’s why our solutions are designed to scale seamlessly, supporting your business as it evolves—from ambitious start-ups to established enterprises."
    },
    {
        icon: <Users className="w-8 h-8 text-accent transition-transform duration-300 hover:scale-110" />,
        title: "Expert Team",
        description: "Behind every project is a team of highly skilled professionals with deep industry expertise. Our developers, designers, QA specialists, and digital strategists work collaboratively to deliver innovative solutions that drive measurable results."
    },
    {
        icon: <Rocket className="w-8 h-8 text-accent transition-transform duration-300 hover:scale-110" />,
        title: "Faster Time-to-Market",
        description: "In today’s fast-moving world, speed matters. Through agile methodologies and streamlined processes, we accelerate delivery without compromising quality, helping you stay ahead of the competition."
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
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-16">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
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
