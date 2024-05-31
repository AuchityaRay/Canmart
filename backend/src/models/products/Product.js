const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },    
    slug:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true,
    },
    discountprice:{
        type:Number,
        required:true
    },
    minquantity:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true,
        trim:true,
    },
    parentcategory:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Category',
        required:true,
    },
    productImages:[
        { img:{type:String} }
    ],
    reviews:[
        {
            userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
            review: String
        }
    ],
    category: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'Category',
        required:true,
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required:true,
    },
    

},{timestamps:true});

module.exports = mongoose.model('Product',productSchema);