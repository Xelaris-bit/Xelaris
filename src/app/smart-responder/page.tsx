import { SmartResponseGenerator } from '@/components/smart-response-generator';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SmartResponderPage() {
  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <Button asChild variant="ghost" className="mb-4 -ml-4">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary tracking-tight">Smart Response Generator</h1>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">An internal tool to generate AI-powered responses for various user inquiries. Select a user type, provide their query, and let AI craft a professional response.</p>
        </div>
        <SmartResponseGenerator />
      </div>
    </div>
  );
}
