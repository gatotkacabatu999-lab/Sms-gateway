import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface SmsLog {
  id: string;
  phone: string;
  message: string;
  api_key_hint: string;
  status: string;
  text_id: string;
  quota_remaining: number;
  error: string;
  created_at: string;
}
