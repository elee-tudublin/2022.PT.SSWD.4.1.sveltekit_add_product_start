// Import the supabase client
import { createClient } from '@supabase/supabase-js'

// Read the url and anon key from .env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a supabase client instance for use in the application
export const supabase = createClient(supabaseUrl, supabaseAnonKey)