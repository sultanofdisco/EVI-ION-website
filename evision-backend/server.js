import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import supabase from './utils/supabaseClient.js';

// 라우트 불러오기
import applyRoutes from './routes/apply.js';
import adminRoutes from './routes/admin.js';
import mainRoutes from './routes/main.js';
import recruitingRoutes from './routes/recruiting.js';
import authRoutes from './routes/auth.js';

const app = express();

// ✅ CORS 설정 개선 (모든 출처 허용)
app.use(cors({
    origin: "*",  // ✅ 모든 출처에서 접근 가능
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// ✅ 프록시 지원 (AWS/GCP에서 IP 문제 해결)
app.set('trust proxy', 1);

// ✅ 요청 로깅 (디버깅 용도)
app.use((req, res, next) => {
    console.log(`📡 [${req.method}] 요청 수신: ${req.originalUrl}`);
    next();
});

// ✅ 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ 정적 파일 제공
app.use(express.static(path.join(path.resolve(), 'public')));

// ✅ 라우트 추가
app.use('/auth', authRoutes);
app.use('/apply', applyRoutes);
app.use('/admin', adminRoutes);
app.use('/recruiting', recruitingRoutes);
app.use('/', mainRoutes);

// ✅ 기본 페이지 (서버 상태 확인)
app.get('/', (req, res) => {
    res.json({ success: true, message: "🚀 EVI$ION 백엔드 서버 정상 작동 중!" });
});

// ✅ 서버 실행 (외부 접근 가능)
const PORT = 3001;
const HOST = "0.0.0.0";

app.listen(PORT, HOST, () => {
    console.log(`🚀 Server is running on:`);
    console.log(`   🔗 Local:   http://localhost:${PORT}/`);
    console.log(`   🌍 External: http://54.180.97.182:${PORT}/`); // ✅ 실제 서버 주소 출력
});
