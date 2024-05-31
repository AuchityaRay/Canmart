const User = require('../models/user/User');
const generateToken = require('../config/token/generateToken');
const twilio = require('twilio');

// import { sendMail } from '../utils/sendMail';
// import { sendToken } from '../utils/sendToken';
// speekeasy library

exports.signUp = async (req, res) => {
    try {
        const { email, mobileNumber } = req.body;
        // Check if user already exists with the same email or mobile number
        const existingUser = await User.findOne({ $or: [{ email }, { mobileNumber }] });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already registered"
            });
        }

        const {
            ownername,
            companyname,
            otp,
            dateofregistration,
            address,
            city,
            country,
            industry

        } = req.body;

        const newUser = new User({
            ownername,
            email,
            companyname,
            mobileNumber,
            dateofregistration,
            address,
            city,
            country,
            industry,
            otp,
            role: 'user'
        });

        const savedUser = await newUser.save();
        const token = generateToken(savedUser.id, savedUser.role);

        return res.status(200).json({
            success: true,
            user: savedUser,
            token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};


exports.signIn = async (req, res) => {
    const { email, password } = req.body;
    //check if user exists
    const userFound = await User.findOne({ email });

    //Check if password is match
    if (userFound && (await userFound?.isPasswordMatched(password)) && userFound) {
        const token = generateToken(userFound?.id, userFound?.role);
        return res.status(200).json({
            _id: userFound?._id,
            fullname: userFound?.fullname,
            email: userFound?.email,
            mobileNumber: userFound?.mobileNumber,
            postalCode: userFound?.postalCode,
            role: userFound?.role,
            token
        });
    } else {
        res.status(401).json({
            message: "Invalid Email/Password"
        })
    }
}

exports.singInWithOTP = async(req,res)=>{
    const {mobileNumber} = req.body;
    console.log("mno"+mobileNumber);
    const userFound = await User.findOne({ mobileNumber });
    if (userFound) {
        const token = generateToken(userFound?.id, userFound?.role);
        return res.status(200).json({
            _id: userFound?._id,
            ownername: userFound?.ownername,
            company: userFound?.company,
            address: userFound?.address,
            email: userFound?.email,
            mobileNumber: userFound?.mobileNumber,
            city: userFound?.city,
            state: userFound?.state,
            country: userFound?.country,
            dateofregistration: userFound?.dateofregistration,
            industry: userFound?.industry,
            alternatemobile:userFound?.alternatemobile,
            alternateemail:userFound?.alternateemail,
            landmark:userFound?.landmark,
            address2:userFound?.address2,
            ifsc:userFound?.ifsc,
            bankname:userFound?.bankname,
            accountnumber:userFound?.accountnumber,
            accounttype:userFound?.accounttype,
            street:userFound?.street,
            postalCode:userFound?.postalCode,
            role: userFound?.role,
            token
        });
    } else {
        res.status(401).json({
            message: "Invalid OTP"
        })
    }

}


exports.mobileNoVerificatiion = async (req, res) => {
    const { mobileNumber } = req.body;
    console.log(mobileNumber)

    const accountSid = process.env.ACCOUNT_SID;
    const authToken = process.env.AUTH_TOKEN;
    const client = twilio(accountSid, authToken ,process.env.VIRTUAL_NUMBER);
    
    let otp = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit number
    otp.toString();
    

    const message = `Your OTP is: ${otp}`;

    if(process.env.PRODUCTION)
    {
        client.messages
        .create({
            body: message,
            from: process.env.VIRTUAL_NUMBER,
            to: mobileNumber
        })
        .then((message) => {
            res.status(200).json({
                otp: otp,
                message: "OTP send successfully"
            })
        }
        )
            .catch((error) => {
                res.status(401).json({
                    message: `Error sending OTP + ${error}`
                })
            });
    }
    else{
        console.log(otp);
        return res.status(200).json({
            otp: otp,
            message: "OTP send successfully"
        })

    }

};


exports.updateUser = async(req,res)=>{
    const {email,fullname,mobileNumber,address,state,city,postalCode,password} = req.body;
    const userFound = await User.findOne({ email });
    if (userFound) {
        const id = userFound?._id;
        const updatedUser = await User.updateMany({ _id:id },{
            $set:{
                fullname: req.body.fullname,
                email: req.body.email,
                mobileNumber: req.body.mobileNumber,
                postalCode: req.body.postalCode,
                state:req.body.state,
                city:req.body.city,
                address:req.body.address,
                alternatemobile:req.body.alternatemobile,
                alternateemail:req.body.alternateemail,
                landmark:req.body.landmark,
                address2:req.body.address2,
                ifsc:req.body.ifsc,
                bankname:req.body.bankname,
                accountnumber:req.body.accountnumber,
                accounttype:req.body.accounttype,
                street:req.body.street,
            }
        });
        if(updatedUser){
            return res.status(200).json({
                updatedUser: updatedUser,
                message:"User Updated",
            })
        }

    } else {
        res.status(401).json({
            message: "User Not Registered"
        })
    }

}