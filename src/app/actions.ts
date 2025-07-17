'use server';
import { generateResponse, type GenerateResponseInput } from '@/ai/flows/generate-response';
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
