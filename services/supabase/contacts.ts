import { Contact } from "@/typing/contact";
import { SupabaseClient } from "@supabase/supabase-js";

export const getContact = async (
  supabase: SupabaseClient<any, "public", any>,
  emailAddress: string
) => {
  const { data, error } = await supabase
    .from("contacts")
    .select()
    .eq("emailAddress", emailAddress)
    .limit(1);
  if (error) {
    console.error(error);
  }
  return data;
};

export const createContact = async (
  supabase: SupabaseClient<any, "public", any>,
  data: Contact
) => {
  const { data: contactData, error } = await supabase
    .from("contacts")
    .insert([data])
    .select();
  if (error) {
    console.error(error);
  }
  return contactData;
};

// export const getContact = async
