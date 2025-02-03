const express = require('express');
const { getAdminPage } = require('../controllers/adminController');
const router = express.Router();

router.get('/', getAdminPage);

module.exports = router;