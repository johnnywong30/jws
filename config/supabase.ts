type SupabaseConfigType = {
  url: string;
  anonKey: string;
};

export const SupabaseConfig: SupabaseConfigType = {
  url: process.env.SUPABASE_URL || "",
  anonKey: process.env.SUPABASE_ANON_KEY || "",
};
