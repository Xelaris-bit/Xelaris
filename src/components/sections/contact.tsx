
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/contact-form";

const ContactSection = () => {
    return (
        <section id="contact-form" className="w-full py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Fill out the form below or use the contact details to get in touch.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold">Get in Touch</h3>
                            <p className="text-muted-foreground mt-2">Find us at our office or reach out via email or phone.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <MapPin className="h-6 w-6 text-accent mt-1" />
                                <div>
                                    <h4 className="font-semibold">Our Office</h4>
                                    <p className="text-muted-foreground">89, Kulasukarpada, Cuttack City, 754209</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <Mail className="h-6 w-6 text-accent mt-1" />
                                <div>
                                    <h4 className="font-semibold">Email Us</h4>
                                    <a href="mailto:contact.xelaris@gmail.com" className="text-muted-foreground hover:text-primary">contact.xelaris@gmail.com</a>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <Phone className="h-6 w-6 text-accent mt-1" />
                                <div>
                                    <h4 className="font-semibold">Call Us</h4>
                                    <a href="tel:+919776198414" className="text-muted-foreground hover:text-primary">+91 9776198414</a>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden border">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d371.0477525432783!2d86.23367077280695!3d20.463295488628745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a197d2acfba326b%3A0xb1358de08ae7b4a9!2sKULASUKARPADA%20POST%20OFFICE!5e0!3m2!1sen!2sin!4v1758165318807!5m2!1sen!2sin" 
                                width="600" 
                                height="450" 
                                style={{border:0}} 
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full"
                            ></iframe>
                        </div>
                    </div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Send a Message</CardTitle>
                            <CardDescription>We&apos;ll get back to you as soon as possible.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ContactForm />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
