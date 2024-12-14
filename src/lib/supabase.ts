import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'urlBase';
const supabaseKey = 'AnonKey';

export const supabase = createClient(supabaseUrl, supabaseKey);
