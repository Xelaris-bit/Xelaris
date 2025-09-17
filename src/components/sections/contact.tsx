'use client';
import { useState, useEffect, useActionState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { handleContactForm } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

const SubmitButton = ({ pending }: { pending: boolean }) => {
    return (
        <Button type="submit" disabled={pending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Send Message'}
        </Button>
    );
};


const ContactSection = () => {
    const [isClient, setIsClient] = useState(false);
    const { toast } = useToast();
    const [formState, formAction, isPending] = useActionState(handleContactForm, { error: null, data: null });
    const [formKey, setFormKey] = useState(Date.now());

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (formState.error) {
            const errorMessage = typeof formState.error === 'string'
                ? formState.error
                : Object.values(formState.error).flat().join(' ');
            toast({
                variant: "destructive",
                title: "Error",
                description: errorMessage,
            });
        }
        if (formState.data) {
            toast({
                title: "Success!",
                description: formState.data.message,
            });
            // Reset the form by changing the key
            setFormKey(Date.now());
        }
    }, [formState, toast]);

    if (!isClient) {
        return null;
    }
    
    return (
        <section id="contact" className="w-full py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Have a project in mind or just want to say hello? We'd love to hear from you.
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
                             <Image
                                src="https://images.unsplash.com/photo-1519017684936-8e7c191a34d5?q=80&w=600"
                                alt="Map to Xelaris office"
                                width={600}
                                height={400}
                                className="w-full"
                                data-ai-hint="city map"
                            />
                        </div>
                    </div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Send a Message</CardTitle>
                            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form key={formKey} action={formAction} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input id="name" name="name" placeholder="John Doe" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input id="subject" name="subject" placeholder="e.g., Automation Testing Quote" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea id="message" name="message" placeholder="Your message here..." rows={5} required />
                                </div>
                                <SubmitButton pending={isPending} />
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
