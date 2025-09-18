import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Code, GraduationCap, Megaphone, Palette } from 'lucide-react';

const services = [
  {
    title: 'eLearning',
    icon: <GraduationCap className="w-8 h-8 text-accent" />,
    description: 'Seeking premium quality eLearning solutions at pocket-friendly rates? We deliver custom courses, mobile learning, and more to meet your needs.',
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600',
    aiHint: 'online education',
    href: '/services'
  },
  {
    title: 'Multimedia',
    icon: <Palette className="w-8 h-8 text-accent" />,
    description: 'In this digital age, compelling multimedia is key. We create stunning 2D/3D animations, graphics, and UI/UX designs that captivate your audience.',
    imageUrl: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=600',
    aiHint: 'graphic design',
    href: '/services'
  },
  {
    title: 'Software',
    icon: <Code className="w-8 h-8 text-accent" />,
    description: 'We deliver top-tier software development services by blending extensive domain expertise with cutting-edge technology to build robust web apps and portals.',
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600',
    aiHint: 'software development',
    href: '/services'
  },
  {
    title: 'Digital Marketing',
    icon: <Megaphone className="w-8 h-8 text-accent" />,
    description: 'The internet has firmly established itself as the future for all of us. We help you navigate it with SEO, social media, and content marketing strategies.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600',
    aiHint: 'digital marketing',
    href: '/services'
  },
  {
    title: 'QA/Testing',
    icon: <Bot className="w-8 h-8 text-accent" />,
    description: 'Our final content delivery undergoes a rigorous Quality Assurance process to guarantee flawless performance, security, and user experience across all platforms.',
    imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e6973bea12?q=80&w=600',
    aiHint: 'quality assurance',
    href: '/services'
  }
];

const WhatWeDoSection = () => {
    return (
        <section id="what-we-do" className="w-full py-16 md:py-24 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Best Services</h2>
                    <div className="mt-4 w-24 h-1.5 bg-accent mx-auto rounded-full" />
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
                    {services.map((service, index) => (
                        <Card key={index} className="overflow-hidden flex flex-col bg-card text-card-foreground hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
                           <CardContent className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 mb-4">
                                    {service.icon}
                                    <h3 className="text-xl font-semibold">{service.title}</h3>
                                </div>
                                <div className="relative h-40 w-full mb-4 rounded-md overflow-hidden">
                                    <Image
                                        src={service.imageUrl}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={service.aiHint}
                                    />
                                </div>
                                <p className="text-muted-foreground mb-4 flex-grow text-sm">{service.description}</p>
                                <Button variant="outline" asChild className="self-start mt-auto">
                                    <Link href={service.href}>Read More <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                           </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDoSection;
