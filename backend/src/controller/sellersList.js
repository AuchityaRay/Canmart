const User = require('../models/user/User');

exports.sellersList = async(req,res)=>{
    const users = await User.find({role:"seller"});
    if(users){
        return res.json({
            users
        })
    }
}