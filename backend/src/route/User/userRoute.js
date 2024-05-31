const express = require("express");
const { signUp, signIn, singInWithOTP,updateUser } = require("../../controller/userController");
const {requireSignin} = require('../../middleware/authMiddleware');
const { validateSignUpRequest, isRequestValidated, validateSignInRequest } = require("../../utils/authValidator");
const router = express.Router();

//USER ROUTES
router.post('/signin',validateSignInRequest,isRequestValidated,signIn);
router.post('/signup',validateSignUpRequest,isRequestValidated,signUp);
router.post('/update-user',updateUser);
router.post('/signinotp',singInWithOTP);

// router.post('/profile',requireSignin,(req,res)=>{
//     res.status(200).json({
//         user:"profile"
//     })
// })

module.exports = router;