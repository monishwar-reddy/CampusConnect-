import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'Sample'
export const supabaseAnonKey = 'Sample'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
