
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ServicesSection from '@/components/sections/services';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LayoutPanelLeft, Palette, Box } from 'lucide-react';

const devServices = [
    {
        icon: <LayoutPanelLeft className="w-10 h-10 text-accent" />,
        title: "Frontend Web Design",
        description: "We craft beautiful, responsive, and highly functional frontend designs that bring your web applications to life."
    },
    {
        icon: <Palette className="w-10 h-10 text-accent" />,
        title: "Website UI/UX Design",
        description: "Our UI/UX experts create intuitive and engaging user experiences that delight users and drive conversions."
    },
    {
        icon: <Box className="w-10 h-10 text-accent" />,
        title: "3D Model Design",
        description: "Leverage the power of three-dimensional design with our custom 3D modeling services for any application."
    }
];


export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <ServicesSection />

        <section id="dev-services" className="w-full py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Software Development</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Beyond testing, we also specialize in crafting stunning and effective digital experiences.
                    </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {devServices.map((service, index) => (
                        <Card key={index} className="text-center p-6 bg-background hover:shadow-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center">
                            <CardHeader className="p-0">
                                {service.icon}
                                <CardTitle className="mt-4 text-xl">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 mt-4 text-muted-foreground">
                                <p>{service.description}</p>
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
