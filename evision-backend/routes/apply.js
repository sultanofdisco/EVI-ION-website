import express from 'express';
import { getApplyPage, postApply } from '../controllers/applyController.js';

const router = express.Router();

router.get('/', getApplyPage);
router.post('/', postApply);

export default router;