import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://aycixvbjldecjoybxpih.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5Y2l4dmJqbGRlY2pveWJ4cGloIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQyNzMzMjksImV4cCI6MjAwOTg0OTMyOX0.oxV3mb756Qccbf3IoUFVoPhx3s78tq1-w3Oe3yRfvHY'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
