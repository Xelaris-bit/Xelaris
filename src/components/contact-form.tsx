
'use client';
import { useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from '@/hooks/use-toast';
import { handleContactForm } from '@/app/actions';
import { Loader2 } from 'lucide-react';

const initialState = {
  message: '',
  errors: {},
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Send Message'}
    </Button>
  );
}

export default function ContactForm() {
    const { toast } = useToast();
    const [state, formAction] = useFormState(handleContactForm, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state.message) {
            if (state.success) {
                toast({
                    title: "Success!",
                    description: state.message,
                });
                formRef.current?.reset();
            } else {
                 toast({
                    variant: "destructive",
                    title: "Oops! Something went wrong.",
                    description: state.message,
                });
            }
        }
    }, [state, toast]);

    return (
        <form ref={formRef} action={formAction} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" placeholder="John Doe" required />
                {state.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name[0]}</p>}
            </div>
            <div className="space-y-2 relative">
                <Label htmlFor="email">Email Address</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    required
                />
                 {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>}
            </div>
            <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" placeholder="e.g., Automation Testing Quote" required />
                {state.errors?.subject && <p className="text-sm font-medium text-destructive">{state.errors.subject[0]}</p>}
            </div>
            <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Your message here..." rows={5} required />
                 {state.errors?.message && <p className="text-sm font-medium text-destructive">{state.errors.message[0]}</p>}
            </div>
            <SubmitButton />
        </form>
    );
}
