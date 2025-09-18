
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Mail, Phone, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ContactFABs = () => {
    const [isOpen, setIsOpen] = useState(false);
    const email = 'contact.xelaris@gmail.com';
    const phone = '+919776198414';
    const whatsappMessage = "Hello! I'm interested in your services.";
    const whatsappLink = `https://wa.me/${phone.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;

    const fabActions = [
        { icon: <MessageSquare className="w-6 h-6" />, href: whatsappLink, label: 'WhatsApp', className: 'bg-[#25D366] hover:bg-[#25D366]/90 text-white' },
        { icon: <Mail className="w-6 h-6" />, href: `mailto:${email}`, label: 'Email', className: 'bg-[#EA4335] hover:bg-[#EA4335]/90 text-white' },
        { icon: <Phone className="w-6 h-6" />, href: `tel:${phone}`, label: 'Call', className: 'bg-[#4285F4] hover:bg-[#4285F4]/90 text-white' },
    ];

    const handleMainButtonClick = (e: React.MouseEvent) => {
        // This function will only be called if the button was not dragged.
        setIsOpen(!isOpen);
    };

    return (
        <motion.div
            drag
            dragMomentum={false} // Disables the "flick" effect
            whileDrag={{ scale: 1.05, cursor: 'grabbing' }}
            className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4"
        >
            {fabActions.map((action, index) => (
                <div 
                    key={index}
                    className={cn(
                        'transition-all duration-300 ease-in-out',
                        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none',
                    )}
                    style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
                >
                    <Button
                        asChild
                        size="icon"
                        className={cn("rounded-full w-14 h-14 shadow-lg transition-transform duration-200 hover:scale-110 hover:shadow-xl", action.className)}
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
                className="rounded-full w-14 h-14 bg-primary text-primary-foreground hover:bg-gradient-to-r from-primary to-accent shadow-xl cursor-grab"
                onPointerUp={handleMainButtonClick}
                aria-expanded={isOpen}
            >
                <div className="relative w-8 h-8 flex items-center justify-center">
                    <X className={cn("w-8 h-8 transition-all duration-300 absolute", isOpen ? 'transform rotate-0 opacity-100' : 'transform -rotate-90 opacity-0')} />
                    <MessageSquare className={cn("w-8 h-8 transition-all duration-300 absolute", isOpen ? 'transform rotate-90 opacity-0' : 'transform rotate-0 opacity-100')} />
                </div>
                <span className="sr-only">{isOpen ? 'Close contact options' : 'Open contact options'}</span>
            </Button>
        </motion.div>
    );
};

export default ContactFABs;
