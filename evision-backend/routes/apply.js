import express from 'express';
import { getApplyPage } from '../controllers/applyController.js';
const router = express.Router();

router.get('/', getApplyPage);

module.exports = router;