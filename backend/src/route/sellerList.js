const express = require('express');
const { sellersList } = require('../controller/sellersList');
const router = express.Router();

router.get('/sellers',sellersList);

module.exports = router;