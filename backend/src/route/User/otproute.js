const express = require("express");
const { mobileNoVerificatiion } = require('../../controller/userController');
const { userRegisteredMiddleware } = require('../../middleware/authMiddleware');
const router = express.Router();

//USER ROUTES
router.post('/register/mobileverification',userRegisteredMiddleware,mobileNoVerificatiion);
router.post('/login/mobileverification',mobileNoVerificatiion);


// router.post('/profile',requireSignin,(req,res)=>{
//     res.status(200).json({
//         user:"profile"
//     })
// })

module.exports = router;