// src/ai/flows/generate-response.ts
'use server';
/**
 * @fileOverview A flow for generating personalized responses to user inquiries.
 *
 * - generateResponse - A function that generates a response based on the user's inquiry.
 * - GenerateResponseInput - The input type for the generateResponse function.
 * - GenerateResponseOutput - The return type for the generateResponse function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateResponseInputSchema = z.object({
  userInquiry: z.string().describe('The user inquiry to generate a response for.'),
  userType: z.enum(['potential_client', 'website_visitor', 'job_seeker']).describe('The type of user making the inquiry.'),
  companyName: z.string().default('Xelaris').describe('The name of the company.'),
});
export type GenerateResponseInput = z.infer<typeof GenerateResponseInputSchema>;

const GenerateResponseOutputSchema = z.object({
  response: z.string().describe('The generated response to the user inquiry.'),
});
export type GenerateResponseOutput = z.infer<typeof GenerateResponseOutputSchema>;

export async function generateResponse(input: GenerateResponseInput): Promise<GenerateResponseOutput> {
  return generateResponseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateResponsePrompt',
  input: {schema: GenerateResponseInputSchema},
  output: {schema: GenerateResponseOutputSchema},
  prompt: `You are a helpful AI assistant for the software testing company, {{{companyName}}}.

  A {{{userType}}} has the following inquiry: {{{userInquiry}}}.
  Generate a personalized and helpful response to this inquiry.
  The response should be professional, informative, and tailored to the user type.
  Make sure the response aligns with company goals.
  `,
});

const generateResponseFlow = ai.defineFlow(
  {
    name: 'generateResponseFlow',
    inputSchema: GenerateResponseInputSchema,
    outputSchema: GenerateResponseOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
