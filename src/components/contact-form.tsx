
'use client';
import { useState, useEffect, useActionState, useMemo } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Check, X } from "lucide-react";
import { handleContactForm } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { cn } from '@/lib/utils';

const SubmitButton = ({ pending }: { pending: boolean }) => {
    return (
        <Button type="submit" disabled={pending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Send Message'}
        </Button>
    );
};

export default function ContactForm() {
    const { toast } = useToast();
    const [formState, formAction, isPending] = useActionState(handleContactForm, { error: null, data: null });
    const [formKey, setFormKey] = useState(1);
    const [emailValue, setEmailValue] = useState('');

    const emailSchema = z.string().email();

    const emailValidation = useMemo(() => {
        if (emailValue === '') {
            return { isValid: null }; // No validation state if empty
        }
        const result = emailSchema.safeParse(emailValue);
        return { isValid: result.success };
    }, [emailValue, emailSchema]);


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
            setFormKey(prevKey => prevKey + 1);
            setEmailValue('');
        }
    }, [formState, toast]);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.target.value);
    };

    return (
        <form key={formKey} action={formAction} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" placeholder="John Doe" required />
            </div>
            <div className="space-y-2 relative">
                <Label htmlFor="email">Email Address</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    required
                    value={emailValue}
                    onChange={handleEmailChange}
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
                <Input id="subject" name="subject" placeholder="e.g., Automation Testing Quote" required />
            </div>
            <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Your message here..." rows={5} required />
            </div>
            <SubmitButton pending={isPending} />
        </form>
    );
}
