import { createClient } from '@supabase/supabase-js';

// ✅ Vite에서는 `import.meta.env`를 사용해야 환경 변수를 읽을 수 있음
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("❌ Supabase 환경 변수가 제대로 로드되지 않았습니다.");
}

console.log("✅ Supabase URL:", supabaseUrl);
console.log("✅ Supabase Anon Key:", supabaseAnonKey ? "Loaded" : "Not Loaded!");

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: true }
});

export default supabase;
