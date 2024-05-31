export const sendToken = (res,user,statusCode)=>{

    const token=user.getJWTToken();
    
    const options ={
        httpOnly:true,
        expires:new Date (Date.now()+process.env.JWT_COOKIE_EXPIRE*60*1000);
    }

    const userData ={
        _id:user._id,
        name:user.fullname,
        email:user.email,
    }

    res.status(statusCode).cookie("token",token,options).json({
        success:true,
        user:userData,
    })
}