import { SendGridConfig } from "@/config/sendgrid";
import { SupabaseConfig, SupabaseServerConfig } from "@/config/supabase";

const Config = {
  sendGridConfig: SendGridConfig,
  supabaseConfig: SupabaseConfig,
  supabaseServerConfig: SupabaseServerConfig,
};

export default Config;

export type ConfigType = typeof Config;
