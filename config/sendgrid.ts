type SendGridConfigType = {
  apiKey: string;
  personalEmail: string;
  contactTemplateId: string;
};

export const SendGridConfig: SendGridConfigType = {
  apiKey: process.env.SENDGRID_API_KEY || "",
  personalEmail: process.env.PERSONAL_EMAIL || "",
  contactTemplateId: process.env.CONTACT_TEMPLATE_ID || "",
};
