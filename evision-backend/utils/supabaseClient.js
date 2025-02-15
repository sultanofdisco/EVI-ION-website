import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();  // ✅ 환경변수 로드

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE;  // ✅ 서비스 역할 키 사용

console.log("✅ Supabase URL:", supabaseUrl);
console.log("✅ Supabase Service Role Key:", supabaseServiceRoleKey ? "Loaded" : "Not Loaded!");

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false }
});

export default supabase;
