import { z } from 'zod';

export const projectTypes = [
  'Smart Contract Development',
  'dApp Development',
  'Web3 Consulting',
  'Blockchain Infrastructure',
  'Other',
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be at most 100 characters'),
  email: z
    .string()
    .trim()
    .email('Please enter a valid email address')
    .max(254, 'Email must be at most 254 characters'),
  projectType: z.enum(projectTypes, {
    message: 'Please select a project type',
  }),
  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be at most 5000 characters'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
