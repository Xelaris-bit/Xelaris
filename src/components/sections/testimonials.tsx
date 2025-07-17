import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
    {
        quote: "Xelaris transformed our release process. Their automation testing expertise is unparalleled, saving us countless hours and improving our product quality tenfold.",
        name: "Jane Doe",
        company: "CEO, TechInnovate",
        avatar: "JD"
    },
    {
        quote: "The performance testing team at Xelaris identified critical bottlenecks we never would have found. Our app is now faster and more reliable than ever.",
        name: "John Smith",
        company: "CTO, AppSolutions",
        avatar: "JS"
    },
    {
        quote: "Working with Xelaris was a breeze. Their manual testers have an incredible eye for detail, ensuring our user experience is flawless. Highly recommended!",
        name: "Emily White",
        company: "Product Manager, CreativeSoft",
        avatar: "EW"
    }
];

const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="w-full py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        We are proud to have earned the trust of innovative companies worldwide.
                    </p>
                </div>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-4xl mx-auto"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 p-4">
                                <Card className="h-full">
                                    <CardContent className="flex flex-col items-center justify-center text-center p-8 h-full">
                                        <p className="text-muted-foreground italic mb-6">&quot;{testimonial.quote}&quot;</p>
                                        <div className="flex items-center">
                                            <Avatar>
                                                <AvatarImage src={`https://placehold.co/40x40.png?text=${testimonial.avatar}`} />
                                                <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                                            </Avatar>
                                            <div className="ml-4 text-left">
                                                <p className="font-semibold">{testimonial.name}</p>
                                                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
};

export default TestimonialsSection;
