import express from 'express';
import { getApplicants } from '../controllers/adminController.js';
import { authenticateUser, authorizeAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router();

// ✅ 관리자 전용 API (지원자 목록 조회)
router.get('/', authenticateUser, authorizeAdmin, getApplicants);

export default router;
