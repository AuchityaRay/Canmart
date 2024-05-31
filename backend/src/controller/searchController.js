const Product = require('../models/products/Product');

exports.searchResult = async(req,res)=>{
    try{
        var search = req.body.search;
        const searchData = await Product.find({
            "name":{$regex: `.*${search}.*`, $options: "i"}
        })
        if(searchData.length > 0){
            res.status(200).json({
                searchData
            })
        }else{
            res.status(200).json({
                message:"No such products",
            })
        }
    }catch(error){
        console.log(error)
        res.status(400).json({
            msg:error.message
        })
    }
}