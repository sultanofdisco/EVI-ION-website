import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';  // ✅ 추가
import path from 'path'; // EJS 템플릿을 사용하려면 필요

import applyRoutes from './routes/apply.js';
import applyProcRoutes from './routes/applyProc.js';
import adminRoutes from './routes/admin.js';
import mainRoutes from './routes/main.js';
import recruitingRoutes from './routes/recruiting.js';
import authRoutes from './routes/auth.js';  // ✅ 로그인 & 회원가입 라우트 추가

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  // ✅ 폼 데이터 처리 가능하도록 추가
app.use(cookieParser());  // ✅ JWT 쿠키 관리를 위한 미들웨어

// ✅ EJS 템플릿 엔진 설정
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'views')); 

// ✅ 정적 파일 제공 (CSS, JS 파일)
app.use(express.static(path.join(path.resolve(), 'public')));

// ✅ 로그인 & 회원가입 라우트 추가
app.use('/auth', authRoutes);

app.use('/apply', applyRoutes);
app.use('/applyProc', applyProcRoutes);
app.use('/admin', adminRoutes);
app.use('/', mainRoutes);
app.use('/recruiting', recruitingRoutes);

// 기본 페이지 (서버 상태 확인용)
app.get('/', (req, res) => {
  res.json({ success: true, message: "EVI$ION 백엔드 서버가 정상적으로 실행 중입니다!" });
});

// 오류 핸들링 미들웨어
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: '서버 내부 오류 발생' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
