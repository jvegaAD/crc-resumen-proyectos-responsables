// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://eahgrcsjdgxnmbybpqxg.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhaGdyY3NqZGd4bm1ieWJwcXhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4Mzg4ODEsImV4cCI6MjA1NzQxNDg4MX0.2Nf9dt1kLCuFZcK7IOR5Sch-wccgVzb0IYB-YjGR8O4";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);