const express = require("express");
const { signUp, signIn, requireSignin } = require("../controllers/adminContoller");
const router = express.Router();

//USER ROUTES
router.post('/seller/signin',signIn);
router.post('/seller/signup',signUp);


module.exports = router;