
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

const KeyDifferentiatorsSection = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Why Choose Xelaris?</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {differentiators.map((item, index) => (
                        <Card key={index} className="border-none shadow-none bg-transparent">
                            <CardHeader className="flex flex-row items-center gap-4 p-0">
                                <span className="text-5xl font-bold text-primary/20">{item.number}</span>
                                <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 mt-4 pl-[4.5rem]">
                                <p className="text-muted-foreground">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyDifferentiatorsSection;
