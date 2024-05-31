const express = require('express');
const { searchResult } = require('../controller/searchController');
const router = express.Router();

router.post('/search',searchResult);

module.exports = router;