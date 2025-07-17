import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const jobOpenings = [
  {
    title: 'Senior QA Automation Engineer',
    location: 'Innovate City (Remote)',
    type: 'Full-time',
  },
  {
    title: 'Manual Test Analyst',
    location: 'Innovate City (On-site)',
    type: 'Full-time',
  },
  {
    title: 'Performance Test Lead',
    location: 'Remote',
    type: 'Contract',
  },
   {
    title: 'Junior QA Tester',
    location: 'Innovate City (Hybrid)',
    type: 'Internship',
  },
];

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">Careers at Xelaris</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Join our team of passionate experts and help us shape the future of software quality.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Current Openings</h2>
            <div className="space-y-6">
                {jobOpenings.map((job, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardHeader className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                            <div>
                                <CardTitle>{job.title}</CardTitle>
                                <CardDescription>{job.location}</CardDescription>
                            </div>
                            <div className="text-muted-foreground md:text-center">
                                {job.type}
                            </div>
                            <div className="md:text-right">
                                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                                    <Link href="#">Apply Now</Link>
                                </Button>
                            </div>
                        </CardHeader>
                    </Card>
                ))}
            </div>
             <div className="text-center mt-12">
                <p className="text-muted-foreground">Don't see a role that fits? Send us your resume anyway!</p>
                <Button variant="outline" className="mt-4">
                    <a href="mailto:careers@xelaris.com">Submit Your Resume</a>
                </Button>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
