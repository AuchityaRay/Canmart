const Product = require('../models/products/Product');
const Category = require('../models/category/Category');
const slugify = require('slugify');

exports.createProduct = (req, res, imageUrls) => {
    try {
        const {
            name,
            description,
            price,
            discountprice,
            parentcategory,
            minquantity,
            category,
            createdBy
        } = req.body;

        let productImages = [];
        if (imageUrls.length > 0) {
            productImages = imageUrls.map(imageUrl => {
                return { img: imageUrl }
            });
        }

        const product = new Product({
            name,
            slug: slugify(name),
            description,
            price,
            discountprice,
            minquantity,
            category,
            parentcategory,
            productImages: productImages[0],
            createdBy,
        });

        product.save()
            .then((product) => {
                return res.status(200).json({
                    product
                })
            })
            .catch((error) => {
                return res.status(400).json({ error })
            })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

exports.updateProduct = async(req, res) => {
    const {
        pid,
        name,
        description,
        price,
        discountprice,
        parentcategory,
        minquantity,
        category,
        createdBy
    } = req.body;
    const productFound = await Product.findOne({ _id:pid });
    if (productFound) {
        const id = productFound?._id;
        const updateProduct = await Product.updateMany({ _id: id }, {
            $set: {
                _id: productFound?._id,
                name,
                slug: slugify(name),
                description,
                price,
                discountprice,
                parentcategory,
                minquantity,
                category,
                createdBy
            }
        });
        if (updateProduct) {
            return res.status(200).json({
                product: updateProduct
            })
        }

    } else {
        res.status(401).json({
            message: "Product Not Found"
        })
    }

}

exports.getProductsbySlug = (req, res) => {
    const { slug } = req.params;
    Category.findOne({ slug: slug }).select('id')
        .then((category) => {

            Product.find({ category: category.id })
                .then((products) => {
                    return res.status(200).json({
                        products
                    })
                })
                .catch((error) => {
                    return res.status(400).json({
                        error
                    })
                })
        })
        .catch((error) => {
            return res.status(400).json({
                error
            })
        })
}

exports.getAllProducts = async (req, res) => {
    const product = await Product.find({});
    if (product) {
        return res.json({
            product
        })
    }
}

exports.getProductsById = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (product) {
        console.log(product)
    }
}

