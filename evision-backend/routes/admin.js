import express from 'express';
import { getApplicants } from '../controllers/adminController.js'; // ✅ 구조 분해 할당으로 가져오기

const router = express.Router();

// ✅ 관리자 페이지에서 지원자 목록을 렌더링
router.get('/', getApplicants);

// ✅ 지원자 목록을 JSON 형식으로 조회하는 API (필요한 경우)
router.get('/applicants', async (req, res) => {
    try {
        const applicants = await getApplicants(req, res);
        res.json(applicants);
    } catch (error) {
        res.status(500).json({ error: '지원자 목록을 가져오는 중 오류 발생' });
    }
});

export default router;
