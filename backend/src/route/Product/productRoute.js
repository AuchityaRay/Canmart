const express = require('express');
const { requireSignin, adminMiddleware } = require('../../middleware/authMiddleware');
const { createProduct, getProductsbySlug, getAllProducts, getProductsById,updateProduct} = require('../../controller/productController');
const router = express.Router();
const multer = require('multer');
const shortid = require('shortid');
const AWS = require('aws-sdk');
require('dotenv').config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_BUCKET_REGION
});

const upload = multer({
  storage: multer.memoryStorage() // Limit the file size if needed
});

router.post('/addproduct',  upload.array('productImages'), (req, res) => {
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
      createProduct(req, res, imageUrls);
    })
    .catch(error => {
        console.error('Error uploading images:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
    });
    
    router.post('/updateproduct',updateProduct);
    router.get('/products/:slug', getProductsbySlug);
    router.post('/products/allproducts', getAllProducts);
router.post('/products/:id', getProductsById);

module.exports = router;