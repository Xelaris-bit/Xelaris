'use server';
import { generateResponse, type GenerateResponseInput } from '@/ai/flows/generate-response';
import { processContactForm } from '@/ai/flows/contact-us-flow';
import { z } from 'zod';

const ActionInputSchema = z.object({
  userInquiry: z.string().min(10, 'Inquiry must be at least 10 characters.'),
  userType: z.enum(['potential_client', 'website_visitor', 'job_seeker']),
});

export async function generateCustomResponse(formData: FormData) {
  try {
    const validatedFields = ActionInputSchema.safeParse({
      userInquiry: formData.get('userInquiry'),
      userType: formData.get('userType'),
    });

    if (!validatedFields.success) {
      return {
        error: validatedFields.error.flatten().fieldErrors,
      };
    }

    const input: GenerateResponseInput = {
      ...validatedFields.data,
      companyName: 'Xelaris',
    };

    const result = await generateResponse(input);
    return { data: result };

  } catch (error) {
    console.error(error);
    return { error: 'An unexpected error occurred. Please try again.' };
  }
}

const ContactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  subject: z.string().min(5, 'Subject must be at least 5 characters.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export async function handleContactForm(formData: FormData) {
  try {
    const validatedFields = ContactFormSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    });

    if (!validatedFields.success) {
      return {
        error: validatedFields.error.flatten().fieldErrors,
      };
    }
    
    const result = await processContactForm(validatedFields.data);

    // This is where you would integrate with an email service to send the result
    console.log('AI Processed Response:', result);

    return { data: { message: 'Thank you for your message! We will get back to you shortly.' } };

  } catch (error) {
    console.error(error);
    return { error: 'An unexpected error occurred. Please try again.' };
  }
}
