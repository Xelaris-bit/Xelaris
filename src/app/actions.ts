
'use server';
import { generateResponse, type GenerateResponseInput } from '@/ai/flows/generate-response';
import { processContactForm } from '@/ai/flows/contact-us-flow';
import { z } from 'zod';
import { Resend } from 'resend';

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

export async function handleContactForm(
  prevState: { error: any; data: any },
  formData: FormData
) {
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
        data: null,
      };
    }
    
    // Process form with Genkit AI
    const aiResult = await processContactForm(validatedFields.data);

    // Send email with Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    const toEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact.xelaris@gmail.com';

    const { data, error } = await resend.emails.send({
      from: 'Xelaris Contact Form <onboarding@resend.dev>',
      to: [toEmail],
      subject: `New Contact Form Submission: ${validatedFields.data.subject}`,
      reply_to: validatedFields.data.email,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${validatedFields.data.name}</p>
        <p><strong>Email:</strong> ${validatedFields.data.email}</p>
        <p><strong>Subject:</strong> ${validatedFields.data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedFields.data.message}</p>
        <hr />
        <h2>AI Analysis</h2>
        <p><strong>Category:</strong> ${aiResult.category}</p>
        <p><strong>Suggested Reply:</strong></p>
        <p>${aiResult.reply}</p>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { error: 'Failed to send the message. Please try again later.', data: null };
    }

    return { data: { message: 'Thank you for your message! We will get back to you shortly.' }, error: null };

  } catch (error) {
    console.error(error);
    return { error: 'An unexpected error occurred. Please try again.', data: null };
  }
}
