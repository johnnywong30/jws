type SupabaseConfigType = {
  url: string;
  anonKey: string;
};

export const SupabaseConfig: SupabaseConfigType = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
};
