import express from 'express';
import { getMainPage } from '../controllers/mainController.js';
const router = express.Router();

router.get('/', getMainPage);

module.exports = router;