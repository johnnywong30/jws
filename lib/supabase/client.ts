import { createClient } from "@supabase/supabase-js";
import Config from "@/config";

export const connectToSupabase = () => {
  const supabase = createClient(
    Config.supabaseConfig.url,
    Config.supabaseConfig.anonKey
  );
  return supabase;
};
