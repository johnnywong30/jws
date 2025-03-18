import { SupabaseClient } from "@supabase/supabase-js";

type CreateContactRequest = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  subject: string;
  message: string;
};

export const createContactRequest = async (
  supabase: SupabaseClient<any, "public", any>,
  values: CreateContactRequest
) => {
  const { error } = await supabase.from("contact_requests").insert([values]);
  if (error) {
    console.error(error);
  }
};
