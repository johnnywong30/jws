import { SendGridConfig } from "@/config/sendgrid";
import { SupabaseConfig } from "@/config/supabase";

const Config = {
  sendGridConfig: SendGridConfig,
  supabaseConfig: SupabaseConfig,
};

export default Config;

export type ConfigType = typeof Config;
