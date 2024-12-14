import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tfmzozvazfbrapkzxrcz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmbXpvenZhemZicmFwa3p4cmN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMzMjMwNTIsImV4cCI6MjAzODg5OTA1Mn0.IddIxLB1B4rg0A87lp4ZQzyu1mhTppo7SW_CjP3rwCw';

export const supabase = createClient(supabaseUrl, supabaseKey);