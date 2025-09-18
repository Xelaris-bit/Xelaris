import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Bot, Waypoints, Zap, Smartphone, GraduationCap, ShieldCheck } from "lucide-react";

const services = [
    {
        icon: <Stethoscope className="w-10 h-10 text-accent" />,
        title: "Manual Testing",
        description: "Meticulous, human-driven testing to uncover usability issues and ensure a flawless user experience."
    },
    {
        icon: <Bot className="w-10 h-10 text-accent" />,
        title: "Automation Testing",
        description: "Accelerate release cycles and improve test accuracy with our robust automated testing frameworks."
    },
    {
        icon: <Waypoints className="w-10 h-10 text-accent" />,
        title: "API Testing",
        description: "Validate the reliability, functionality, and security of your APIs to ensure seamless integration."
    },
    {
        icon: <Zap className="w-10 h-10 text-accent" />,
        title: "Performance Testing",
        description: "Identify and eliminate performance bottlenecks to deliver a fast, scalable, and responsive application."
    },
    {
        icon: <Smartphone className="w-10 h-10 text-accent" />,
        title: "Mobile App Testing",
        description: "Ensure your mobile application works perfectly across all devices, platforms, and network conditions."
    },
    {
        icon: <GraduationCap className="w-10 h-10 text-accent" />,
        title: "eLearning Testing",
        description: "Guarantee a seamless and effective learning experience with our specialized eLearning testing services."
    },
     {
        icon: <ShieldCheck className="w-10 h-10 text-accent" />,
        title: "Selenium Testing",
        description: "Leverage the power of Selenium for robust, browser-based automation testing of your web applications."
    }
];

const ServicesSection = () => {
    return (
        <section id="services" className="w-full py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our QA Services</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive testing solutions tailored to your unique needs, ensuring quality from every angle.
                    </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <Card key={index} className="text-center p-6 hover:shadow-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center">
                            <CardHeader className="p-0">
                                {service.icon}
                                <CardTitle className="mt-4 text-xl">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 mt-4 text-muted-foreground">
                                <p>{service.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                     <Card className="text-center p-6 bg-primary text-primary-foreground hover:shadow-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center justify-center sm:col-span-2 lg:col-span-1">
                        <CardHeader className="p-0">
                            <CardTitle className="text-xl">And Many More...</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 mt-4 text-primary-foreground/80">
                            <p>We offer a wide range of other specialized testing services. Contact us to learn more!</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
