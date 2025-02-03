const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// 🔹 라우트 불러오기
const applyRoutes = require('./routes/apply');
const applyProcRoutes = require('./routes/applyProc'); // 새로 추가된 라우트
const adminRoutes = require('./routes/admin');
const mainRoutes = require('./routes/main');
const recruitingRoutes = require('./routes/recruiting');

dotenv.config(); // .env 파일 불러오기
const app = express();

// 🔹 미들웨어 설정
app.use(express.json()); // JSON 요청을 파싱하도록 설정
app.use(cors()); // CORS 허용 (프론트엔드와 연결할 때 필요)

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

// 🔹 에러 처리 미들웨어 (전역 오류 핸들링)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: '서버 내부 오류 발생' });
});

// 🔹 서버 실행
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
