import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import supabase from './utils/supabaseClient.js';  // ✅ Supabase 클라이언트 추가

// 라우트 불러오기
import applyRoutes from './routes/apply.js';
import adminRoutes from './routes/admin.js';
import mainRoutes from './routes/main.js';
import recruitingRoutes from './routes/recruiting.js';
import authRoutes from './routes/auth.js';

dotenv.config();
const app = express();

// ✅ CORS 설정 (모든 출처 허용)
app.use(cors({
    origin: "*",  // ✅ 모든 출처에서 접근 가능
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // ✅ OPTIONS 추가 (Preflight 요청 해결)
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']  // ✅ Authorization 헤더 추가
}));

// ✅ 요청이 올 때마다 로그 찍기 (프론트 요청 확인)
app.use((req, res, next) => {
    console.log(`📡 [${req.method}] 요청 수신: ${req.originalUrl}`);
    next();
});

// ✅ 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ EJS 템플릿 엔진 설정
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'views'));

// ✅ 정적 파일 제공 (CSS, JS)
app.use(express.static(path.join(path.resolve(), 'public')));

// ✅ Supabase 연결 확인 (테스트용)
app.get('/health', async (req, res) => {
    try {
        console.log("📡 `/health` 엔드포인트 요청 감지");
        const { data, error } = await supabase.from('users').select('*').limit(1);
        if (error) throw error;
        res.json({ success: true, message: '✅ Supabase 연결 성공', data });
    } catch (error) {
        console.error('❌ Supabase 연결 실패:', error.message);
        res.status(500).json({ success: false, message: '❌ Supabase 연결 실패', error: error.message });
    }
});

// ✅ 라우트 추가
app.use('/auth', authRoutes);
app.use('/apply', applyRoutes);
app.use('/admin', adminRoutes);
app.use('/recruiting', recruitingRoutes);
app.use('/', mainRoutes);

// ✅ 기본 페이지 (서버 상태 확인)
app.get('/', (req, res) => {
    console.log("📡 `/` 엔드포인트 요청 감지");
    res.json({ success: true, message: "🚀 EVI$ION 백엔드 서버가 정상적으로 실행 중입니다!" });
});

// ✅ 오류 핸들링 미들웨어 개선
app.use((err, req, res, next) => {
    console.error('❌ 서버 오류:', err.stack);
    res.status(err.status || 500).json({ 
        success: false,
        message: err.message || '서버 내부 오류 발생'
    });
});

// ✅ 서버 실행 (외부 접근 가능하도록 0.0.0.0 설정)
const PORT = process.env.PORT || 3001;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log(`🔗 API 테스트: http://localhost:${PORT}/`);
    console.log(`🔗 API 테스트 (외부 접근): http://54.180.97.182:${PORT}/`);
});
app.use((req, res, next) => {
  console.log(`📡 [${req.method}] 요청 수신: ${req.originalUrl}`);
  next();
});
