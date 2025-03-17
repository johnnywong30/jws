import { createClient } from "@/services/supabase/client";

type CreateContactRequest = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  subject: string;
  message: string;
};

export const createContactRequest = async (values: CreateContactRequest) => {
  const supabase = await createClient();
  const { error } = await supabase.from("contact_requests").insert([values]);
  if (error) {
    console.error(error);
  }
};
