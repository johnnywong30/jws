import { SupabaseClient } from "@supabase/supabase-js";

export type CreateContactRequest = {
  contact: number;
  subject: string;
  message: string;
};

export const createContactRequest = async (
  supabase: SupabaseClient<any, "public", any>,
  values: CreateContactRequest
) => {
  const { data: contactData, error } = await supabase
    .from("contactRequests")
    .insert([values])
    .select();
  if (error) {
    console.error(error);
  }
  return contactData;
};
