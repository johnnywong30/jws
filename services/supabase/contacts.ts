import { createClient } from "@/services/supabase/client";
import { Contact } from "@/typing/contact";

export const createContact = async (data: Contact) => {
  const supabase = await createClient();
  const result = await supabase.from("contacts").insert([data]);
  if (result.error) {
    console.error(result.error);
  }
};

// export const getContact = async
