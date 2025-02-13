import express from 'express';
import { register, login } from '../controllers/authController.js'; // ✅ 확장자 .js 추가 필요

const router = express.Router();

// 회원가입 페이지
router.get('/register', (req, res) => {
  res.render('register'); // 회원가입 EJS 페이지로 이동
});

// 로그인 페이지
router.get('/login', (req, res) => {
  res.render('login'); // 로그인 EJS 페이지로 이동
});

// 회원가입 요청 (POST)
router.post('/register', register);

// 로그인 요청 (POST)
router.post('/login', login);

export default router;  // ✅ ESM 방식으로 변경
