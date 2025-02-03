const express = require('express');
const { getMainPage } = require('../controllers/mainController');
const router = express.Router();

router.get('/', getMainPage);

module.exports = router;