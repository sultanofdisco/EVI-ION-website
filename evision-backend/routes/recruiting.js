import express from 'express';
import { getRecruitingPage } from '../controllers/recruitingController.js';
const router = express.Router();

router.get('/', getRecruitingPage);

export default router;