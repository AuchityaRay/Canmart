const Enquiry = require('../models/enquiry/Enquiry');

exports.createEnquiry = (req, res) => {

    const enquiry = new Enquiry({
        enquiryBy: req.body.enquiryBy,
        enquiries: req.body.enquiries
    });

    enquiry.save()
        .then((enquiry) => {
            return res.status(200).json({
                enquiry
            })
        })
        .catch((error) => {
            return res.status(400).json({
                error
            })
        })
}
