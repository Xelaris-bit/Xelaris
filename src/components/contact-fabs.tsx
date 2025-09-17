
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Mail, Phone, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const ContactFABs = () => {
    const [isOpen, setIsOpen] = useState(false);
    const email = 'contact.xelaris@gmail.com';
    const phone = '+919776198414';
    const whatsappMessage = "Hello! I'm interested in your services.";
    const whatsappLink = `https://wa.me/${phone.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;

    const fabActions = [
        { icon: <MessageSquare className="w-6 h-6" />, href: whatsappLink, label: 'WhatsApp' },
        { icon: <Mail className="w-6 h-6" />, href: `mailto:${email}`, label: 'Email' },
        { icon: <Phone className="w-6 h-6" />, href: `tel:${phone}`, label: 'Call' },
    ];

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">
            {fabActions.map((action, index) => (
                <div 
                    key={index}
                    className={cn(
                        'transition-all duration-300 ease-in-out flex items-center gap-3',
                        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
                    )}
                    style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
                >
                    <span className={cn(
                         'bg-card text-card-foreground text-sm font-medium py-1 px-3 rounded-md shadow-lg transition-opacity duration-300',
                         isOpen ? 'opacity-100' : 'opacity-0'
                    )}>
                        {action.label}
                    </span>
                    <Button
                        asChild
                        size="icon"
                        className="rounded-full w-14 h-14 bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg"
                        aria-label={action.label}
                    >
                        <Link href={action.href} target="_blank" rel="noopener noreferrer">
                            {action.icon}
                        </Link>
                    </Button>
                </div>
            ))}
            <Button
                size="icon"
                className="rounded-full w-16 h-16 bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                {isOpen ? <X className="w-8 h-8 transition-transform duration-300 rotate-90" /> : <MessageSquare className="w-8 h-8 transition-transform duration-300" />}
                <span className="sr-only">{isOpen ? 'Close contact options' : 'Open contact options'}</span>
            </Button>
        </div>
    );
};

export default ContactFABs;
