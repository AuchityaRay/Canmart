const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

//create schema
const userSchema = new mongoose.Schema(
  {

    ownername: {
      required: [true, "Full name is required"],
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    mobileNumber:{
        type: Number,
        required: [true, "Mobile Number is required"],
    },
    role:{
      type:String,
      required:[true,"Role is required"],
      default:"user",
    },
    companyname:{
      type:String,
      required:true
    },
    dateofregistration:{
      type:Date,
      required:true,
    },
    address:{
      type:String,
      required:true
    },
    city:{
      type:String,
      required:true
    },
    state:{
      type:String,
      required:true
    },
    country:{
      type:String,
      required:true
    },
    industry:{
      type:String,
      required:true
    },

    alternatemobile:{
      type:Number,
    },
    alternateemail:{
      type:String,
    },
    landmark:{
      type:String,
    },
    address2:{
      type:String,
    },
    ifsc:{
      type:String,
    },
    bankname:{
      type:String,
    },
    accountnumber:{
      type:Number,
    },
    accounttype:{
      type:String,
    },
    street:{
      type:String,
    },
    postalCode:{
      type:String
    },





    password: {
      type: String,
    },

    avatar:{
      type:String,
    },
    otp:{
      type:Number,
    },
    otpExpiry:{
      type:Date,
    },
    verified:{
      type:Boolean,
      default:false
    }

  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);


//Hash password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  //hash password
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//match password
userSchema.methods.isPasswordMatched = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};



//Compile schema into model
const User = mongoose.model("User", userSchema);

module.exports = User;
