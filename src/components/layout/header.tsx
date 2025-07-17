'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Xelaris' },
  { href: '#tools', label: 'Tools' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-primary">
          <Logo className="h-8 w-8" />
          <span className="font-headline">Xelaris</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="#contact">Get a Free Quote</Link>
            </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col p-6 space-y-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                  <Logo className="h-7 w-7" />
                  <span className="font-headline">Xelaris</span>
                </Link>
                <nav className="flex flex-col items-start gap-4">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      {link.label}
                    </Link>
                  ))}
                </nav>
                 <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Get a Free Quote</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
