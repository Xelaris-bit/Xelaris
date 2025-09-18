
'use server';
import { z } from 'zod';
import { Resend } from 'resend';
import { generateResponse, type GenerateResponseInput } from '@/ai/flows/generate-response';

const ContactFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required.' }),
  email: z.string().email({ message: 'A valid email is required.' }),
  subject: z.string().min(1, { message: 'Subject is required.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function handleContactForm(prevState: any, formData: FormData) {
    const validatedFields = ContactFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Please correct the errors below.',
            success: false,
        };
    }

    const { name, email, subject, message } = validatedFields.data;
    
    if (!process.env.RESEND_API_KEY) {
        console.log('RESEND_API_KEY is not set');
        return {
            message: "Sorry, we couldn't send your message at this time. The service is not configured.",
            success: false,
            errors: {},
        };
    }

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
            from: 'Xelaris Contact Form <onboarding@resend.dev>',
            to: 'anshumanseoczar+resend@gmail.com',
            subject: `New Contact Form Submission: ${subject}`,
            reply_to: email,
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        });
        return { message: 'Thank you for your message! We will get back to you soon.', success: true, errors: {} };
    } catch (error) {
        console.error('Email sending error:', error);
        return {
            message: "Sorry, we couldn't send your message at this time. Please try again later.",
            success: false,
            errors: {},
        };
    }
}

const GenerateResponseSchema = z.object({
    userInquiry: z.string().min(10, { message: 'Inquiry must be at least 10 characters.' }),
    userType: z.enum(['potential_client', 'website_visitor', 'job_seeker']),
});

export async function generateCustomResponse(formData: FormData) {
    const validatedFields = GenerateResponseSchema.safeParse({
        userInquiry: formData.get('userInquiry'),
        userType: formData.get('userType'),
    });
    
    if (!validatedFields.success) {
        return {
            data: null,
            error: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        const response = await generateResponse(validatedFields.data as GenerateResponseInput);
        return { data: response, error: null };
    } catch (error: any) {
        console.error('AI response error:', error);
        return {
            data: null,
            error: error.message || "An unexpected error occurred.",
        };
    }
}
