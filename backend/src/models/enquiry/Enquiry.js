const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({

    enquiryBy:{
        type: String,
        required:true,
    },
    enquiries:[
        {
            product: {
                type: mongoose.Schema.Types.ObjectId, ref: 'Product',
                required:true,
            }
        }
    ]

},{timestamps:true});

module.exports = mongoose.model('Enquiry',enquirySchema);