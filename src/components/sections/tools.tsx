
import Image from "next/image";
import { Card } from "@/components/ui/card";

const tools = [
    { name: "Selenium", hint: "Selenium logo", src: "https://cdn.simpleicons.org/selenium/43B02A" },
    { name: "Appium", hint: "Appium logo", src: "https://cdn.simpleicons.org/appium/" },
    { name: "JMeter", hint: "JMeter logo", src: "https://cdn.simpleicons.org/apachejmeter/D22128" },
    { name: "Postman", hint: "Postman logo", src: "https://cdn.simpleicons.org/postman/FF6C37" },
    { name: "Cypress", hint: "Cypress logo", src: "https://cdn.simpleicons.org/cypress/" },
    { name: "Playwright", hint: "Playwright logo", src: "https://cdn.simpleicons.org/playwright/2EAD33" },
    { name: "TestRail", hint: "TestRail logo", src: "https://cdn.simpleicons.org/testrail/78C678" },
    { name: "Jira", hint: "Jira logo", src: "https://cdn.simpleicons.org/jirasoftware/0052CC" },
];

const ToolsSection = () => {
    return (
        <section id="tools" className="w-full py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Tools <span className="text-accent">We Use</span></h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Leveraging industry-leading tools to deliver robust and efficient testing solutions.
                    </p>
                </div>
                <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-scroll">
                        {tools.map((tool) => (
                           <li key={tool.name}>
                                <Card className="p-6 flex justify-center items-center h-28 w-60 bg-background hover:shadow-md transition-shadow">
                                    <div className="relative w-40 h-10">
                                        <Image
                                            src={tool.src}
                                            alt={`${tool.name} logo`}
                                            fill
                                            objectFit="contain"
                                            data-ai-hint={tool.hint}
                                        />
                                    </div>
                                </Card>
                            </li>
                        ))}
                    </ul>
                     <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-scroll" aria-hidden="true">
                        {tools.map((tool) => (
                           <li key={tool.name}>
                                <Card className="p-6 flex justify-center items-center h-28 w-60 bg-background hover:shadow-md transition-shadow">
                                    <div className="relative w-40 h-10">
                                        <Image
                                            src={tool.src}
                                            alt={`${tool.name} logo`}
                                            fill
                                            objectFit="contain"
                                            data-ai-hint={tool.hint}
                                        />
                                    </div>
                                </Card>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ToolsSection;
