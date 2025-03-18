import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";
import { ContactSchema as contactSchema, Contact } from "@/typing/contact";
import { sendContactEmail } from "@/services/server/contact/email";
import { getContact, createContact } from "@/services/supabase/contacts";
import { z } from "zod";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!, // Use the service role key ONLY in the server
  { auth: { autoRefreshToken: false, persistSession: false } }
);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const data: z.infer<typeof contactSchema> = body.data;

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

  // TODO: create contact request

  // res.status(200).json({ message: "POST received" });
  return NextResponse.json({ message: "POST received" }, { status: 200 });

  // save request to Database

  // send email
}
