const express = require("express");
const router = express.Router();
const { createCategory, getCategories } = require("../../controller/categoryController");
const { requireSignin,  adminMiddleware } = require("../../middleware/authMiddleware");
const AWS = require('aws-sdk');
const multer = require('multer');
const shortid = require('shortid');
require('dotenv').config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_BUCKET_REGION
});

const upload = multer({
  storage: multer.memoryStorage() // Limit the file size if needed
});

router.post('/category/create',requireSignin,adminMiddleware, upload.array('categoryImages'), (req, res) => {
  const files = req.files;

  // Create an array to store the promises for each image upload
  const uploadPromises = files.map(file => {
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `${shortid.generate()}_${file.originalname}`,
      Body: file.buffer,
      ACL: 'public-read' // Optional: Set the desired access control level
    };

    return s3.upload(params).promise();
  });

  // Execute all upload promises
  Promise.all(uploadPromises)
    .then(uploadedImages => {
      // Create an array of the uploaded image URLs
      const imageUrls = uploadedImages.map(uploadedImage => uploadedImage.Location);

      // Call the createProduct function with the imageUrls
      createCategory(req, res, imageUrls);
    })
    .catch(error => {
      console.error('Error uploading images:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

router.get('/category/getcategory',getCategories);

module.exports = router;