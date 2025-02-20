import { z } from "zod";

export type ContactForm = {
  firstName: string;
  lastName?: string;
  emailAddress: string;
  subject: string;
  message: string;
  time: number; // epoch timestamp
};

export const ContactSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters long.")
    .trim(),
  lastName: z.string().trim().optional(),
  emailAddress: z.string().email("Invalid email address."),
  subject: z.string().trim(),
  message: z
    .string()
    .min(5, "Message must be at least 5 characters long.")
    .trim(),
});
