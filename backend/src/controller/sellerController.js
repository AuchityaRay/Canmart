const User = require('../models/user/User');
const generateToken = require('../config/token/generateToken');
const jwt = require('jsonwebtoken');



exports.signIn = async(req,res)=>{
    const { email, password } = req.body;
    //check if user exists
    const userFound = await User.findOne({ email });
  
    //Check if password is match
  if (userFound && (await userFound?.isPasswordMatched(password)) && userFound.role === 'seller') {
    const token = generateToken(userFound?.id);
    return res.status(200).json({
        _id: userFound?._id,
        fullname: userFound?.fullname,
        email: userFound?.email,
        mobileNumber: userFound?.mobileNumber,
        pincode: userFound?.pincode,
        token
      });
    } else {
      res.status(401).json({
        message:"Invalid Email/Password"
      })
    }
}
