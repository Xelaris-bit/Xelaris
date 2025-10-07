import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils"
import { ScrollProgress } from '@/components/scroll-progress';
import ContactFABs from '@/components/contact-fabs';
import ScrollToTopButton from '@/components/scroll-to-top-button';

export const metadata: Metadata = {
  title: 'Xelaris: Software Excellence',
  description: 'Xelaris: Delivering Reliable and Scalable Software Solutions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-body text-foreground antialiased overflow-x-hidden"
      )}>
        <ScrollProgress />
        {children}
        <Toaster />
        <ContactFABs />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
