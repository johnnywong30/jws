import { z } from "zod";
import { SupabaseRow } from "@/typing/supabase";

export type ContactForm = {
  firstName: string;
  lastName?: string;
  emailAddress: string;
  subject: string;
  message: string;
  attachments?: FileList;
  time: number; // epoch timestamp
};

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

const DOCUMENT_LIST_SCHEMA = (
  typeof window === "undefined" ? z.any() : z.instanceof(FileList)
)
  .refine(
    (files) => {
      for (let i = 0; i < files.length; i++) {
        if (files[i].size > MAX_FILE_SIZE) {
          return false;
        }
      }
      return true;
    },
    { message: "File size must be 5MB or less." }
  )
  .refine(
    (files) => {
      for (let i = 0; i < files.length; i++) {
        if (
          ![
            "application/pdf",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ].includes(files[i].type)
        ) {
          return false;
        }
      }
      return true;
    },
    {
      message: "Invalid file type. Only .pdf and .docx are allowed.",
    }
  );

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
  attachments: DOCUMENT_LIST_SCHEMA.optional(),
});

export type Contact = {
  firstName: string;
  lastName: string;
  emailAddress: string;
};

export type ContactSchema = Contact & SupabaseRow;

export type ContactRequest = {
  contact: number;
  subject: string;
  message: string;
};

export type ContactRequestSchema = ContactRequest & SupabaseRow;
