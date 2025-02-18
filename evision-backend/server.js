import dotenv from 'dotenv';
dotenv.config();

console.log("✅ JWT_SECRET:", process.env.JWT_SECRET || "환경 변수 로드 실패");

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import supabase from './utils/supabaseClient.js';

// 🔹 기존 `require()` 방식이 아닌 `import` 방식 사용
import applyRoutes from './routes/apply.js';
import adminRoutes from './routes/admin.js';
import mainRoutes from './routes/main.js';
import recruitingRoutes from './routes/recruiting.js';
import authRoutes from './routes/auth.js';

const app = express();

// ✅ CORS 설정
app.use(cors({
    origin: ["http://localhost:5173", "http://evision-web.com"],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.options('*', cors());

// ✅ 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ 라우트 추가 (여기서 `cors()`를 직접 적용하지 않음)
app.use('/auth', authRoutes);
app.use('/apply', applyRoutes);
app.use('/admin', adminRoutes);
app.use('/recruiting', recruitingRoutes);
app.use('/', mainRoutes);

// ✅ 서버 실행
const PORT = 3001;
const HOST = "0.0.0.0";

app.listen(PORT, HOST, () => {
    console.log(`🚀 Server is running on:`);
    console.log(`   🔗 Local:   http://localhost:${PORT}/`);
    console.log(`   🌍 External: http://54.180.97.182:${PORT}/`);
});
