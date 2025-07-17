'use client';
import { useState } from 'react';
import { generateCustomResponse } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Terminal } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

type UserType = 'potential_client' | 'website_visitor' | 'job_seeker';

export function SmartResponseGenerator() {
  const [userType, setUserType] = useState<UserType>('potential_client');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setResponse('');
    setError('');

    const formData = new FormData(event.currentTarget);
    const result = await generateCustomResponse(formData);

    if (result.error) {
        const errorMessage = typeof result.error === 'string' 
            ? result.error 
            : Object.values(result.error).flat().join(' ');
        
        setError(errorMessage);
        toast({
          variant: "destructive",
          title: "Error Generating Response",
          description: errorMessage,
        })
    } else if (result.data?.response) {
      setResponse(result.data.response);
    }
    setLoading(false);
  };

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Card className="border-primary/20 shadow-lg">
        <CardHeader>
          <CardTitle>Generate a Custom Response</CardTitle>
          <CardDescription>
            Craft the perfect message for any situation. Enter an inquiry and select a user type.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="userInquiry">User Inquiry</Label>
              <Textarea
                id="userInquiry"
                name="userInquiry"
                placeholder="e.g., 'I'd like to know more about your performance testing services.'"
                required
                rows={5}
                className="focus:ring-accent"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="userType">User Type</Label>
               <Select name="userType" defaultValue={userType} onValueChange={(value) => setUserType(value as UserType)}>
                <SelectTrigger className="focus:ring-accent">
                  <SelectValue placeholder="Select a user type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="potential_client">Potential Client</SelectItem>
                  <SelectItem value="website_visitor">Website Visitor</SelectItem>
                  <SelectItem value="job_seeker">Job Seeker</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" disabled={loading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Generate Response'}
            </Button>
          </form>
        </CardContent>
      </Card>
      
      <Card className="flex flex-col border-primary/20 shadow-lg">
        <CardHeader>
          <CardTitle>Generated Response</CardTitle>
          <CardDescription>
            Here's the AI-crafted response. Review and use as needed.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow flex items-center justify-center p-4">
          {loading && (
             <div className="flex items-center justify-center h-full">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
             </div>
          )}
          {response && (
            <div className="prose prose-sm max-w-none rounded-md border bg-muted/50 p-4 w-full h-full whitespace-pre-wrap font-sans text-foreground">
                {response}
            </div>
          )}
          {!loading && !response && (
             <div className="text-center text-muted-foreground p-8 border-2 border-dashed rounded-lg">
                <Terminal className="mx-auto h-12 w-12" />
                <h3 className="mt-4 text-lg font-medium">Waiting for input</h3>
                <p className="mt-1 text-sm">Your generated response will appear here.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
