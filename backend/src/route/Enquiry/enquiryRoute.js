const express = require('express');
const router = express.Router();
const {createEnquiry} = require('../../controller/enquiryController');
const {requireSignin} = require('../../middleware/authMiddleware');

router.post('/enquiry/create',createEnquiry);

module.exports = router;