import express from 'express';
import { login } from '../controllers/authController.js';

const router = express.Router();

// ✅ 로그인 페이지 (EJS 렌더링)
router.get('/login', (req, res) => {
  res.render('login'); // ✅ login.ejs 페이지로 이동
});

// ✅ 로그인 요청 (POST)
router.post('/login', login);

export default router; // ✅ ESM 방식 유지
