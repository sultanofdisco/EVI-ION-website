import express from 'express';
import { postApply } from '../controllers/applyProcController.js';
const router = express.Router();

router.post('/', postApply);

module.exports = router;