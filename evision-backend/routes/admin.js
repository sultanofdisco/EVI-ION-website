import express from 'express';
import { getApplicants } from '../controllers/adminController.js'; 

const router = express.Router();

router.get('/', getApplicants);

export default router;
