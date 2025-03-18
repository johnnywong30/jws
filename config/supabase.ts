type SupabaseConfigType = {
  url: string;
  anonKey: string;
};

type SupabaseServerConfigType = {
  url: string;
  roleKey: string;
};

export const SupabaseConfig: SupabaseConfigType = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
};

export const SupabaseServerConfig: SupabaseServerConfigType = {
  url: process.env.SUPABASE_URL || "",
  roleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || "",
};
