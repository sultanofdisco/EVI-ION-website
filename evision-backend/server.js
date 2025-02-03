import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import middleware from './middleware.js'; // 미들웨어 파일 분리

// 🔹 라우트 불러오기
import applyRoutes from './routes/apply.js';
import applyProcRoutes from './routes/applyProc.js'; // 새로 추가된 라우트
import adminRoutes from './routes/admin.js';
import mainRoutes from './routes/main.js';
import recruitingRoutes from './routes/recruiting.js';

dotenv.config(); // .env 파일 불러오기
const app = express();

// 🔹 미들웨어 설정 (외부 파일로 분리)
middleware(app);

// 🔹 API 라우트 등록 (경로에서 `/api` 제거)
app.use('/apply', applyRoutes);          // 지원 관련 API
app.use('/applyProc', applyProcRoutes);  // 지원 프로세스 관련 API
app.use('/admin', adminRoutes);          // 관리자 관련 API
app.use('/', mainRoutes);            // 메인 페이지 관련 API
app.use('/recruiting', recruitingRoutes);// 모집 관련 API

// 🔹 기본 라우트 (서버 상태 확인용)
app.get('/', (req, res) => {
    res.send('🚀 EVI-ION 백엔드 서버가 정상적으로 실행 중입니다!');
});

// 🔹 서버 실행
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
