import Link from 'next/link';
import { Linkedin, Twitter, Facebook } from 'lucide-react';
import { Logo } from '@/components/logo';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4 items-start">
             <Link href="/" className="flex items-center gap-0 font-bold text-2xl">
                <Logo className="h-8 w-8 text-accent" />
                <span className="font-headline">elaris</span>
            </Link>
            <p className="text-sm text-secondary-foreground/80">Xelaris a Leading QA Company Providing Top-Tier Software Testing Solutions.</p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter" className="text-secondary-foreground/80 hover:text-accent transition-colors"><Twitter /></Link>
              <Link href="#" aria-label="Facebook" className="text-secondary-foreground/80 hover:text-accent transition-colors"><Facebook /></Link>
              <Link href="#" aria-label="LinkedIn" className="text-secondary-foreground/80 hover:text-accent transition-colors"><Linkedin /></Link>
            </div>
          </div>
          <div className="md:pl-2.5">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="hover:text-accent transition-colors text-sm">About Us</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors text-sm">Services</Link></li>
              <li><Link href="/case-studies" className="hover:text-accent transition-colors text-sm">Case Studies</Link></li>
              <li><Link href="/careers" className="hover:text-accent transition-colors text-sm">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Resources</h4>
            <ul className="mt-4 space-y-2">
                <li><Link href="/smart-responder" className="hover:text-accent transition-colors text-sm">Smart Responder</Link></li>
                <li><a href="#" className="hover:text-accent transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-accent transition-colors text-sm">Terms of Service</a></li>
            </ul>
          </div>
           <div>
            <h4 className="font-semibold text-lg">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-secondary-foreground/80">
                <li>89, Kulasukarpada, Cuttack City, 754209</li>
                <li className='pt-2'><a href="mailto:contact@xelaris.com" className="hover:text-accent transition-colors">contact@xelaris.com</a></li>
                <li><a href="tel:+919776198414" className="hover:text-accent transition-colors">+91 9776198414</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Xelaris. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
