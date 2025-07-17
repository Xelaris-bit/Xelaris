import Image from "next/image";
import { Card } from "@/components/ui/card";

const tools = [
    { name: "Selenium", hint: "Selenium logo", src: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=200" },
    { name: "Appium", hint: "Appium logo", src: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=200" },
    { name: "JMeter", hint: "JMeter logo", src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200" },
    { name: "Postman", hint: "Postman logo", src: "https://images.unsplash.com/photo-1633355444132-695d58763b38?q=80&w=200" },
    { name: "Cypress", hint: "Cypress logo", src: "https://images.unsplash.com/photo-1629661413938-e04e84386764?q=80&w=200" },
    { name: "Playwright", hint: "Playwright logo", src: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=200" },
    { name: "TestRail", hint: "TestRail logo", src: "https://images.unsplash.com/photo-1529612700005-e35377bf1415?q=80&w=200" },
    { name: "Jira", hint: "Jira logo", src: "https://images.unsplash.com/photo-1616469829935-c2f334623b83?q=80&w=200" },
];

const ToolsSection = () => {
    return (
        <section id="tools" className="w-full py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Tools We Use</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Leveraging industry-leading tools to deliver robust and efficient testing solutions.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-8">
                    {tools.map((tool) => (
                        <Card key={tool.name} className="p-6 flex justify-center items-center h-28 bg-background hover:shadow-md transition-shadow">
                            <div className="relative w-40 h-10">
                                <Image
                                    src={tool.src}
                                    alt={`${tool.name} logo`}
                                    layout="fill"
                                    objectFit="contain"
                                    data-ai-hint={tool.hint}
                                />
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ToolsSection;
