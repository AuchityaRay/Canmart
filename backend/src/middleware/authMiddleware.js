const jwt = require("jsonwebtoken");
const User = require('../models/user/User');

exports.requireSignin = (req, res, next) => {

    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token, process.env.JWT_KEY);
        req.user = user;
    }else{
        return res.status(400).json({
            message:"Authorization Required"
        })       
    }
    next();

    // jwt.decode();   
}

exports.userMiddleware = (req, res, next) => {
    if (req.user.role !== 'user') {
        return res.status(400).json({
            message: "User Access Denied"
        })
    }
    next();
}

exports.adminMiddleware = (req, res, next) => {
    if (req.user.role !== 'seller') {
        return res.status(400).json({
            message: "Admin Access Denied"
        })
    }
    next();
}

exports.superAdminMiddleware = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(400).json({
            message: "Super Admin Access Denied"
        })
    }
    next();

}
exports.userRegisteredMiddleware = async (req, res, next) => {
    let { mobileNumber } = req.body;
    mobileNumber = mobileNumber.split('+91')[1];
    const existingUser = await User.findOne({ $or: [{ mobileNumber }] });
    if (existingUser) {
        return res.status(400).json({
            success: false,
            message: "User already registered"
        });
    }
    next();
}