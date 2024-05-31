const Category = require('../models/category/Category');
const Product = require('../models/products/Product');
const User = require('../models/user/User');

exports.initialData = async(req,res)=>{
    const categories = await Category.find({});
    const products = await Product.find({});
    const user = await User.find({});
    const totalUsers = user.length;
    if(products){
        return res.json({
            products,
            categories,
            totalUsers
        })
    }
}