const express = require('express');
const router = express.Router();

router.get('/', getApplicants);

module.exports = router;