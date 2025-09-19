
import { SmartResponseGenerator } from '@/components/smart-response-generator';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AiToolsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
        <Button asChild variant="ghost" className="mb-4 -ml-4">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">AI <span className="text-accent">Tools</span></h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Explore our suite of intelligent tools designed to streamline your workflow and enhance productivity.
            </p>
        </div>
        <SmartResponseGenerator />
      </div>
    </div>
  );
}
