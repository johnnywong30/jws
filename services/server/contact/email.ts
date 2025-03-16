"use server";
import { ContactSchema, ContactForm } from "@/typing/contact";
import { z } from "zod";
import { getCurrentEpoch } from "@/lib/time";
import Config from "@/config";
import sg from "@sendgrid/mail";

sg.setApiKey(Config.sendGridConfig.apiKey);

export const sendContactEmail = async (
  values: z.infer<typeof ContactSchema>
) => {
  const personalEmail = Config.sendGridConfig.personalEmail;

  const contactForm: ContactForm = {
    firstName: values.firstName,
    lastName: values.lastName,
    emailAddress: values.emailAddress,
    subject: values.subject,
    message: values.message,
    attachments: values.attachments,
    time: getCurrentEpoch(),
  };

  try {
    await sg.send({
      to: personalEmail,
      from: personalEmail,
      subject: contactForm.subject,
      templateId: Config.sendGridConfig.contactTemplateId,
      personalizations: [
        {
          to: personalEmail,
          dynamicTemplateData: {
            firstName: contactForm.firstName,
            lastName: contactForm.lastName,
            messageBody: contactForm.message,
            contactEmail: contactForm.emailAddress,
            subject: contactForm.subject,
          },
        },
      ],
    });
  } catch (error) {
    console.log(error);
  }
};
