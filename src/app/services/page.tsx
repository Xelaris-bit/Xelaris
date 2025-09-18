
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Check, Code, GraduationCap, Megaphone, Palette } from 'lucide-react';

const servicesByCategory = [
    {
        category: "eLearning",
        icon: <GraduationCap className="w-10 h-10 text-accent" />,
        items: [
            "Custom eLearning",
            "SCORM & AICC",
            "Mobile Learning",
            "Blended Learning",
            "Flash to HTML"
        ]
    },
    {
        category: "Software",
        icon: <Code className="w-10 h-10 text-accent" />,
        items: [
            "Portals/Websites",
            "WordPress",
            "Web Apps"
        ]
    },
    {
        category: "3D & Multimedia",
        icon: <Palette className="w-10 h-10 text-accent" />,
        items: [
            "3D Animation",
            "2D Animation",
            "Web",
            "Graphics",
            "UI/UX",
            "Audio and Video"
        ]
    },
    {
        category: "QA/Testing",
        icon: <Bot className="w-10 h-10 text-accent" />,
        items: [
            "Manual Testing",
            "Automation Testing",
            "API Testing",
            "Performance Testing",
            "Mobile App Testing",
            "eLearning Testing",
            "Selenium Testing"
        ]
    },
    {
        category: "Digital Marketing",
        icon: <Megaphone className="w-10 h-10 text-accent" />,
        items: []
    }
];


export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
         <section id="services" className="w-full py-16 md:py-24 bg-primary/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">Our Services</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Comprehensive solutions tailored to your unique needs, ensuring excellence from every angle.
                    </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {servicesByCategory.map((service, index) => (
                        <Card key={index} className="p-6 hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                           <CardHeader className="flex flex-row items-center gap-4 p-0">
                                {service.icon}
                                <CardTitle className="text-xl">{service.category}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 mt-6 flex-grow">
                                {service.items.length > 0 ? (
                                    <ul className="space-y-2">
                                        {service.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start gap-3">
                                                <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                                                <span className="text-muted-foreground">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-muted-foreground">Comprehensive digital marketing strategies to elevate your brand.</p>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
