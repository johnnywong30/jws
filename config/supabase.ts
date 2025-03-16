type SupabaseConfigType = {
  url: string;
  key: string;
};

export const SupabaseConfig: SupabaseConfigType = {
  url: process.env.SUPABASE_URL || "",
  key: process.env.SUPABASE_KEY || "",
};
