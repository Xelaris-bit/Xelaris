import Image from "next/image";
import { Card } from "@/components/ui/card";

const tools = [
    { name: "Selenium", hint: "Selenium logo" },
    { name: "Appium", hint: "Appium logo" },
    { name: "JMeter", hint: "JMeter logo" },
    { name: "Postman", hint: "Postman logo" },
    { name: "Cypress", hint: "Cypress logo" },
    { name: "Playwright", hint: "Playwright logo" },
    { name: "TestRail", hint: "TestRail logo" },
    { name: "Jira", hint: "Jira logo" },
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
                                    src="https://placehold.co/200x60.png"
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
