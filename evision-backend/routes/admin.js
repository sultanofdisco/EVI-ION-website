const express = require('express');
const { getApplicants } = require('../controllers/adminController');

const router = express.Router();

router.get('/applicants', getApplicants); // 지원자 목록 조회

module.exports = router;
