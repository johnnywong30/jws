import { createBrowserClient } from "@supabase/ssr";
import Config from "@/config";

export const connectToSupabase = () => {
  const supabase = createBrowserClient(
    Config.supabaseConfig.url,
    Config.supabaseConfig.anonKey
  );
  return supabase;
};
