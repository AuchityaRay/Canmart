const express = require('express');
const { initialData } = require('../controller/initialDataController');
const router = express.Router();

router.get('/initialdata',initialData);

module.exports = router;