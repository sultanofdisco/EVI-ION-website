const express = require('express');
const { getApplyPage } = require('../controllers/applyController');
const router = express.Router();

router.get('/', getApplyPage);

module.exports = router;