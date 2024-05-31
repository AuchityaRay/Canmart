const {check,validationResult} = require("express-validator");

exports.validateSignUpRequest = [
    check('ownername')
    .notEmpty()
    .withMessage("Fullname is required"),
    check('email')
    .notEmpty()
    .withMessage("Email is required"),
    check('mobileNumber')
    .notEmpty()
    .withMessage("Mobile Number is required"),
];

exports.validateSignInRequest = [
    check('email')
    .notEmpty()
    .withMessage("Email is required"),
    check('password')
    .notEmpty()
    .withMessage("Password is required"),
];

exports.isRequestValidated = (req,res,next)=>{
    const errors = validationResult(req);
    if(errors.array().length > 0){
        return res.status(400).json({error: errors.array()[0].msg});
    }
    next();
}