import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";
import { ContactSchema as contactSchema, Contact } from "@/typing/contact";
import { sendContactEmail } from "@/services/server/contact/email";
import { getContact, createContact } from "@/services/supabase/contacts";
import {
  createContactRequest,
  CreateContactRequest,
} from "@/services/supabase/contactRequests";
import { z } from "zod";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!, // Use the service role key ONLY in the server
  { auth: { autoRefreshToken: false, persistSession: false } }
);

export async function POST(req: NextRequest) {
  const data: z.infer<typeof contactSchema> = await req.json();

  const contact: Contact = {
    firstName: data.firstName,
    lastName: data.lastName || "",
    emailAddress: data.emailAddress,
  };

  // check if contact exists
  let contactData;
  contactData = await getContact(supabase, contact.emailAddress);

  if (!contactData || contactData.length === 0) {
    // create contact if they do not exist
    contactData = await createContact(supabase, contact);
  }

  const contactId: number = contactData?.[0]?.id;

  // link contactRequestto existing contact record
  const contactRequest: CreateContactRequest = {
    contact: contactId,
    subject: data.subject,
    message: data.message,
  };

  // record contact message in supabase
  await createContactRequest(supabase, contactRequest);

  // send contact email to personal email through SendGrid
  await sendContactEmail(data);

  return NextResponse.json(
    { message: "Sent contact message!" },
    { status: 200 }
  );
}
