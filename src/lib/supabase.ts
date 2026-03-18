import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
// Supabase recently renamed anon key → publishable key; support both
const supabaseKey = (
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY
) as string

if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase credentials not set — data will not persist. Add VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY to .env.local')
}

// No Database generic — we cast results to our own types in hooks
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseKey || 'placeholder'
)
