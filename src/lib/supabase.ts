import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://api.hsweb.pics";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlzcyI6InN1cGFiYXNlIiwiaWF0IjoxNjQxNzY5MjAwLCJleHAiOjE3OTk1MzU2MDB9.pei5Gx1wqEkbcDs1CiHFuTWNuVRlcrG5dPmYdrAqDdY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  db: { schema: "yeoul_dnc" },
});

export type Inquiry = {
  id: number;
  company_name: string;
  contact_name: string;
  phone: string;
  industry: string;
  message: string;
  channel: string | null;
  budget: string | null;
  has_website: string | null;
  status: "new" | "in_progress" | "completed" | "cancelled";
  admin_memo: string | null;
  created_at: string;
  updated_at: string;
};
