const Category = require('../models/category/Category');
const slugify = require('slugify');

const createCategories=(categories,parentId=null)=>{
    const categoryList = [];
    let category;
    if(parentId == null){
        category = categories.filter(cat => cat.parentId == undefined);
    }else{
        category = categories.filter(cat => cat.parentId == parentId);
    }

    for(let cat of category){
        categoryList.push({
            _id:cat._id,
            img:cat.img,
            name:cat.name,
            slug:cat.slug,
            subcategory:createCategories(categories,cat._id)
        })
    }    


    return categoryList;
};

exports.createCategory = (req,res,imageUrls)=>{
    const category = {
        name:req.body.name,
        slug:slugify(req.body.name),
        img:imageUrls[0]
    }
    if(req.body.parentId){
        category.parentId = req.body.parentId;
    }

    const catG = new Category(category);
    catG.save()
    .then((categorySaved)=>{
        return res.status(200).json({
            categorySaved
        })
    })
    .catch((err)=>{
        return res.status(400).json({
            err
        })
    })
}

exports.getCategories = (req,res)=>{
    Category.find({})
    .then((categories)=>{
        const categoryList = createCategories(categories);
        res.status(200).json({categoryList});
    })
    .catch((error)=>{
        return res.status(400).json({
            error
        })
    })
}