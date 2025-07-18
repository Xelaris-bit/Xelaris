'use server';
/**
 * @fileOverview A flow for processing contact form submissions.
 *
 * - processContactForm - A function that processes the contact form data.
 * - ContactFormInput - The input type for the processContactForm function.
 * - ContactFormOutput - The return type for the processContactForm function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContactFormInputSchema = z.object({
  name: z.string().describe('The full name of the person submitting the form.'),
  email: z.string().email().describe('The email address of the person.'),
  subject: z.string().describe('The subject of the message.'),
  message: z.string().describe('The message content.'),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

const ContactFormOutputSchema = z.object({
  reply: z.string().describe('A drafted reply to the user\'s message.'),
  category: z.enum(['sales', 'support', 'general', 'spam']).describe('The category of the inquiry.'),
});
export type ContactFormOutput = z.infer<typeof ContactFormOutputSchema>;

export async function processContactForm(input: ContactFormInput): Promise<ContactFormOutput> {
  return contactUsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contactUsPrompt',
  input: {schema: ContactFormInputSchema},
  output: {schema: ContactFormOutputSchema},
  prompt: `You are an AI assistant for Xelaris, a software testing company.
  A user has submitted the following contact form:
  Name: {{{name}}}
  Email: {{{email}}}
  Subject: {{{subject}}}
  Message: {{{message}}}

  First, categorize this message into one of the following categories: sales, support, general, or spam.
  Second, draft a brief, professional, and helpful reply to the user, acknowledging their message and letting them know the appropriate team will get back to them shortly.
  `,
});

const contactUsFlow = ai.defineFlow(
  {
    name: 'contactUsFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: ContactFormOutputSchema,
  },
  async (input) => {
    // In a real application, you would add logic here to:
    // 1. Save the message to a database.
    // 2. Send an email notification to your team.
    // 3. Send an auto-reply email to the user.
    
    const {output} = await prompt(input);
    return output!;
  }
);
