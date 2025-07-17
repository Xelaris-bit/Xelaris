
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { CheckCircle, Eye, Handshake, Lightbulb, Users, ShieldCheck, Gauge, Rocket, UserTie } from 'lucide-react';
import WhyChooseUsSection from '@/components/sections/why-choose-us';
import { FadeIn } from '@/components/fade-in';

const values = [
  {
    icon: <Handshake className="h-10 w-10 text-accent" />,
    title: 'Integrity',
    description: 'We uphold the highest standards of integrity and transparency in all our actions, building trust with our clients and partners.',
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: 'Customer Commitment',
    description: 'We are dedicated to our clients\' success, developing relationships that make a positive and lasting difference.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-accent" />,
    title: 'Quality',
    description: 'We provide outstanding, unsurpassed service that delivers premium value and ensures flawless product performance.',
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-accent" />,
    title: 'Innovation',
    description: 'We constantly pursue new ideas and creative solutions to drive success and stay ahead in a dynamic industry.',
  },
];

const teamMembers = [
  {
    name: 'Anshuman',
    role: 'CEO',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600',
    aiHint: 'male portrait',
    description: 'Visionary leader driving the company towards new frontiers of quality and innovation.'
  },
  {
    name: 'Anurag',
    role: 'CFO',
    imageUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=600',
    aiHint: 'male portrait',
    description: 'Financial strategist ensuring the company\'s sustainable growth and economic stability.'
  }
];

const journey = [
    { year: '2018', event: 'Xelaris Founded', description: 'Started our journey with a small team of passionate QA engineers.' },
    { year: '2020', event: '100th Project Completed', description: 'Reached a major milestone, delivering quality for diverse clients.' },
    { year: '2022', event: 'Introduced AI Testing', description: 'Expanded our services with cutting-edge AI-powered testing solutions.' },
    { year: '2024', event: 'Opened New Office', description: 'Grew our team and expanded our presence to serve a global market.' },
];


export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary/5 py-20 md:py-32">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">About Xelaris</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    Your dedicated partner in achieving software excellence and unparalleled quality.
                </p>
            </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-primary">Who We Are</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Xelaris is a premier software testing and quality assurance company dedicated to helping businesses deliver flawless, high-performing, and secure software. Founded by a team of veteran QA professionals, we bridge the gap between development and deployment, ensuring that your products meet the highest standards of quality.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Our expertise spans across various domains, from manual and automation testing to performance and security assessments. We leverage industry-leading tools and innovative methodologies to provide comprehensive testing solutions tailored to your unique needs.
                        </p>
                    </div>
                    <div>
                        <Image
                            src="https://images.unsplash.com/photo-1521737852577-684822188716?q=80&w=600"
                            alt="Team discussing project at Xelaris"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                            data-ai-hint="team collaboration"
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* Mission and Vision Section */}
        <section className="bg-secondary py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                             <CheckCircle className="h-12 w-12 text-accent" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                            <p className="text-muted-foreground">
                                To empower businesses by ensuring their software applications are of the highest quality. We are committed to providing comprehensive, reliable, and innovative testing solutions that accelerate development cycles, reduce risks, and enhance user satisfaction.
                            </p>
                        </div>
                    </div>
                     <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                            <Eye className="h-12 w-12 text-accent" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                            <p className="text-muted-foreground">
                                To be the globally recognized leader in software quality assurance, setting the industry standard for excellence, reliability, and innovation. We aim to build long-lasting partnerships with our clients, helping them launch flawless products.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Our Core Values Section */}
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        The principles that guide our work and define our culture.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <Card key={index} className="text-center p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
                           <CardHeader className="p-0 mb-4">{value.icon}</CardHeader>
                            <CardContent className="p-0">
                                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                                <p className="text-muted-foreground">{value.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Our Core Team Section */}
        <section className="py-16 md:py-24 bg-primary/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Core Team</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Meet the leaders driving our mission forward.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
                    {teamMembers.map((member) => (
                        <Card key={member.name} className="overflow-hidden text-center hover:shadow-xl transition-shadow duration-300 flex flex-col items-center pt-8">
                             <Image
                                src={member.imageUrl}
                                alt={`Portrait of ${member.name}`}
                                width={160}
                                height={160}
                                className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
                                data-ai-hint={member.aiHint}
                            />
                            <CardHeader>
                                <CardTitle className="text-2xl">{member.name}</CardTitle>
                                <CardDescription className="text-accent font-semibold">{member.role}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{member.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>


        {/* Our Journey Section */}
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Journey</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Tracing our path from a small startup to a trusted QA partner.
                    </p>
                </div>
                <div className="relative">
                    {/* The timeline line */}
                    <div className="hidden md:block absolute top-5 left-1/2 w-0.5 h-[calc(100%-2.5rem)] bg-border -translate-x-1/2"></div>

                    {journey.map((item, index) => (
                        <div key={index} className={`relative flex items-center mb-12 md:mb-0 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                            <div className="hidden md:block absolute top-5 left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2 border-4 border-secondary"></div>
                            <div className={`md:w-5/12 p-6 rounded-lg shadow-lg bg-background ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                                <time className="text-lg font-bold text-primary">{item.year}</time>
                                <h3 className="text-xl font-semibold mt-2 mb-2">{item.event}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <FadeIn><WhyChooseUsSection /></FadeIn>
      </main>
      <Footer />
    </div>
  );
}
