const express = require('express');
const { getRecruitingPage } = require('../controllers/recruitingController');
const router = express.Router();

router.get('/', getRecruitingPage);

module.exports = router;