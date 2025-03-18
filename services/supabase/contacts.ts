import { createClient } from "@/services/supabase/client";
import { Contact } from "@/typing/contact";

export const createContact = async (data: Contact) => {
  const supabase = await createClient();
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
