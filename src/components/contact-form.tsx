
'use client';
import { useState, useMemo, type FormEvent } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { cn } from '@/lib/utils';


export default function ContactForm() {
    const { toast } = useToast();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [formKey, setFormKey] = useState(1);

    const emailSchema = z.string().email();

    const emailValidation = useMemo(() => {
        if (email === '') {
            return { isValid: null };
        }
        const result = emailSchema.safeParse(email);
        return { isValid: result.success };
    }, [email, emailSchema]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const contactEmail = 'contact.xelaris@gmail.com';
        const mailtoSubject = encodeURIComponent(`Contact Form: ${subject}`);
        const mailtoBody = encodeURIComponent(
`Name: ${name}
Email: ${email}

Message:
${message}`
        );
        
        window.location.href = `mailto:${contactEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;
        
        toast({
            title: "Success!",
            description: "Your email client has been opened with the message ready to send.",
        });

        // Reset the form
        setFormKey(prevKey => prevKey + 1);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    return (
        <form key={formKey} onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" placeholder="John Doe" required value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="space-y-2 relative">
                <Label htmlFor="email">Email Address</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className={cn({
                        'border-green-500 focus-visible:ring-green-500': emailValidation.isValid === true,
                        'border-red-500 focus-visible:ring-red-500': emailValidation.isValid === false,
                    })}
                />
                {emailValidation.isValid === true && (
                    <Check className="absolute right-3 top-9 h-5 w-5 text-green-500" />
                )}
                {emailValidation.isValid === false && (
                    <X className="absolute right-3 top-9 h-5 w-5 text-red-500" />
                )}
            </div>
            <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" placeholder="e.g., Automation Testing Quote" required value={subject} onChange={e => setSubject(e.target.value)} />
            </div>
            <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Your message here..." rows={5} required value={message} onChange={e => setMessage(e.target.value)} />
            </div>
            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Send Message
            </Button>
        </form>
    );
}
