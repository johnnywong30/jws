"use server";
import { ContactSchema, ContactForm } from "@/typing/contact";
import { z } from "zod";
import { getCurrentEpoch } from "@/lib/time";

export const sendEmail = async (values: z.infer<typeof ContactSchema>) => {
  const contactForm: ContactForm = {
    firstName: values.firstName,
    lastName: values.lastName,
    emailAddress: values.emailAddress,
    subject: values.subject,
    message: values.message,
    attachments: values.attachments,
    time: getCurrentEpoch(),
  };
  console.log(contactForm);
};
