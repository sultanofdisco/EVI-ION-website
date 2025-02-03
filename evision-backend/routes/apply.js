const express = require('express');
const router = express.Router();

router.get('/', getApplyPage);

module.exports = router;