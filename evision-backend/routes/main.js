import express from 'express';
import { getMainPage } from '../controllers/mainController.js';
const router = express.Router();

router.get('/', getMainPage);

export default router;