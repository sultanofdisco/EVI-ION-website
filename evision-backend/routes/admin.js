import express from 'express';
import adminController from '../controllers/adminController.js'; // 컨트롤러 가져오기

const router = express.Router();

// 지원자 목록 조회
router.get('/applicants', adminController.getApplicants);

// 관리자 페이지 기본 경로 추가
router.get('/', (req, res) => {
    res.send('관리자 페이지');
});

export default router;
