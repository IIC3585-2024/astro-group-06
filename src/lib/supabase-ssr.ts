import { createBrowserClient } from "@supabase/ssr";

export const createBrowserSupabaseClient = () =>
  createBrowserClient(
    // FILL WITH YOUR SUPABASE URL,
    // FILL WITH YOUR SUPABASE ANON KEY
);
