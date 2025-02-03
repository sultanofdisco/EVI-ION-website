import express from 'express';
import { getApplicants } from '../controllers/adminController.js';

const router = express.Router();

router.get('/applicants', getApplicants); // 지원자 목록 조회

module.exports = router;
