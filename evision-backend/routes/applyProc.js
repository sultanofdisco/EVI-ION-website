const express = require('express');
const { postApply } = require('../controllers/applyProcController');
const router = express.Router();

router.post('/', postApply);

module.exports = router;