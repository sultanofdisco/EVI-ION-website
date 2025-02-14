import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import supabase from './utils/supabaseClient.js';  // ✅ Supabase 클라이언트 추가

// 라우트 불러오기
import applyRoutes from './routes/apply.js';
import applyProcRoutes from './routes/applyProc.js';
import adminRoutes from './routes/admin.js';
import mainRoutes from './routes/main.js';
import recruitingRoutes from './routes/recruiting.js';
import authRoutes from './routes/auth.js';

dotenv.config();
const app = express();

app.use(cors());
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
    const { data, error } = await supabase.from('users').select('*').limit(1);
    if (error) throw error;
    res.json({ success: true, message: 'Supabase 연결 성공', data });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Supabase 연결 실패', error: error.message });
  }
});

// ✅ 라우트 추가
app.use('/auth', authRoutes);
app.use('/apply', applyRoutes);
app.use('/applyProc', applyProcRoutes);
app.use('/admin', adminRoutes);
app.use('/', mainRoutes);
app.use('/recruiting', recruitingRoutes);

// 기본 페이지 (서버 상태 확인)
app.get('/', (req, res) => {
  res.json({ success: true, message: "EVI$ION 백엔드 서버가 정상적으로 실행 중입니다!" });
});

// 오류 핸들링 미들웨어
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: '서버 내부 오류 발생' });
});

// 서버 실행
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
