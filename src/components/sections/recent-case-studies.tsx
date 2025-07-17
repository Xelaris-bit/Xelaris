import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    title: 'Boosting E-commerce Performance by 200%',
    description: 'Discover how our performance testing helped a major e-commerce platform handle massive traffic spikes during peak seasons, resulting in a 200% performance boost and zero downtime.',
    imageUrl: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=600',
    aiHint: 'e-commerce website',
  },
  {
    title: 'Ensuring Flawless Mobile Banking App Launch',
    description: 'We partnered with a fintech startup to conduct comprehensive manual and automated testing for their new mobile banking app, ensuring a secure and bug-free launch that earned a 4.8-star rating.',
    imageUrl: 'https://images.unsplash.com/photo-1580974928064-07aeef7061a2?q=80&w=600',
    aiHint: 'mobile banking',
  },
  {
    title: 'Automating API Testing for a SaaS Provider',
    description: 'Our team implemented a robust API automation framework that reduced testing time by 80% and increased test coverage by 95% for a leading SaaS company.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600',
    aiHint: 'software dashboard',
  },
];

const RecentCaseStudiesSection = () => {
    return (
        <section id="recent-case-studies" className="w-full py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Recent Case Studies</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Explore how we've helped our clients achieve their quality and performance goals.
                    </p>
                </div>
                <div className="grid gap-8 lg:grid-cols-3 mb-12">
                    {caseStudies.map((study, index) => (
                        <Card key={index} className="overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
                            <Image
                                src={study.imageUrl}
                                alt={study.title}
                                width={600}
                                height={400}
                                className="w-full h-48 object-cover"
                                data-ai-hint={study.aiHint}
                            />
                            <CardHeader>
                                <CardTitle>{study.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col">
                                <p className="text-muted-foreground mb-4 flex-grow">{study.description}</p>
                                <Button variant="link" asChild className="p-0 self-start">
                                    <Link href="/case-studies">Read More</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="text-center">
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/case-studies">View All Case Studies</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default RecentCaseStudiesSection;
