import React, { useEffect, useState } from "react";
import M1 from "../../assets/m1.png";
import M2 from "../../assets/m2.png";
import M3 from "../../assets/m3.png";
import Navbar from "../../components/Navbar/Navbar";
import products from "../../assets/product.png"
import services from "../../assets/services.png"
import { useDispatch, useSelector } from "react-redux";
import { createProduct, updateProduct } from "../../actions/Product/productAction";
import { useLocation, useNavigate } from "react-router-dom";

const EditProduct = () => {

  const { state } = useLocation();
  const productId = state.p_Id || "";

  const [selectedImage, setSelectedImage] = useState(null);
  const [isPopup, setPopup] = useState(false);
  const [name, setName] = useState(null);
  const [category, setCategory] = useState(null);
  const [categoryname, setCategoryname] = useState(null);
  const [parentcategory, setParentCategory] = useState(null);
  const [parentcategoryname, setParentCategoryName] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [discountprice, setDiscountPrice] = useState(null);
  const [minquantity, setMinQuantity] = useState(null);
  const [productImages, setProductImages] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(null);

  const [childCategories, setChildCategories] = useState(null);
  const [parentCategories, setParentCategories] = useState(null);


  const initialData = useSelector(state => state.initialData);
  const categories = initialData.categories;
  const allproducts = useSelector(state => state.product.products);
  const navigate = useNavigate();

  const auth = useSelector(state => state.user);

  useEffect(() => {
    const res2 = allproducts.filter(checkProduct);
    function checkProduct(p) {
      return p._id === productId;
    }
    console.log("allproducts",allproducts);
    console.log("res2",res2);
    setCurrentProduct(res2);
  }, [allproducts])

  useEffect(() => {
    if (currentProduct) {
      setName(currentProduct[0]?.name);
      setPrice(currentProduct[0]?.price);
      setDiscountPrice(currentProduct[0]?.discountprice);
      setCategory(currentProduct[0]?.category);
      setParentCategory(currentProduct[0]?.parentcategory);
      setDescription(currentProduct[0]?.description);
      setMinQuantity(currentProduct[0]?.minquantity);
    }
  }, [currentProduct])

  useEffect(() => {
    const res1 = categories.filter(checkParentCategory);

    function checkParentCategory(a) {
      return a.parentId == undefined;
    }
    setParentCategories(res1);


    const res3 = categories.filter(filterCategoryName);
    function filterCategoryName(fcn) {
      return fcn._id == category;
    }
    setCategoryname(res3[0]?.name);

    const res4 = categories.filter(filterParentCategoryName);
    function filterParentCategoryName(fcn) {
      return fcn._id == parentcategory;
    }
    setParentCategoryName(res4[0]?.name);
  }, [category, parentcategory]);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    // setSelectedImage(file);
    setProductImages(files);
  };

  const handlePopupToggle = () => {
    setPopup(!isPopup);
  }

  const dispatch = useDispatch();


  const handleUpdateProduct = () => {

    const product = {
      pid: productId,
      name,
      category,
      minquantity,
      parentcategory,
      price,
      discountprice,
      description,
      createdBy: auth?.user._id,
      // productImages,
    }


    dispatch(updateProduct(product)).then(data => {
      
      if(data){
        navigate('/manageproducts');
      }
    })
  }

  useEffect(() => {
    if (auth) {
      console.log("A = " + auth.user._id);
    }
    if (parentcategory) {
      console.log(parentcategory);
      const res2 = categories.filter(checkChildCategory);

      function checkChildCategory(a) {
        return a.parentId == parentcategory;
      }

      setChildCategories(res2);
      console.log(childCategories);
    }
  }, [parentcategory])


  const handleSidebarClickOne = () => {
    navigate('/userprofile')
  }
  const handleSidebarClickTwo = () => {
    navigate('/addproduct')
  }
  const handleSidebarClickThree = () => {
    navigate('/manageproducts')
  }

  return (
    <>

      {isPopup &&
        <div className='fixed top-0 left-0 bg-[#000000c3] w-full h-screen z-50 flex items-center justify-center'>
          <div className='popup absolute w-[600px] h-[425px] bg-white top-20 rounded-lg'>
            <div className='text-shadeofgray font-bold w-full flex p-2 pr-4 justify-end cursor-pointer text-lg' onClick={handlePopupToggle}>X</div>
            <div className='text-2xl font-semibold flex justify-center items-center h-12'>What are you looking to add</div>
            <div className="text-base font-normal text-[#9F9F9F] mb-4">Please select your preference to add</div>
            <div className='w-full flex items-center justify-center'>

              <div className={`rounded border flex items-center p-4 bg-[#FCFCFC] flex flex-col mr-3 h-56`}>
                <p className={`ml-2 font-bold text-lg `}>Products</p>
                <img src={products} alt="" />
              </div>

              <div className={`rounded border flex items-center p-4 bg-[#FCFCFC] flex flex-col h-56`}>
                <p className={`ml-2 font-bold text-lg `}>Services</p>
                <img src={services} alt="" />
              </div>

            </div>
            <div className="h-[10%]">
              <button className='mt-6 w-[34%] rounded-full h-[70%] m-auto bg-black text-white flex items-center justify-center'>Next</button>
            </div>
          </div>
        </div>

      }


      <Navbar showSearchBar={true} />
      <div className="flex">
        <div className="bg-black h-[1300px] w-[50px] mt-5 pt-16 flex flex-col items-center ">
          <span className="mb-7 h-4 w-4"
            onClick={handleSidebarClickOne}
          >
            <img className="w-full h-full cursor-pointer " src={M1} alt="" />
          </span>
          <span className="mb-7 h-4 w-4"
            onClick={handleSidebarClickTwo}
          >
            <img className="w-full h-full cursor-pointer" src={M2} alt="" />
          </span>
          <span className="mb-7 h-4 w-4"
            onClick={handleSidebarClickThree}>
            <img className="w-full h-full cursor-pointer " src={M3} alt="" />
          </span>
        </div>

        <div className="container mx-auto p-4 ">
          <h1 className="text-2xl font-bold mb-4 text-left">Edit Product</h1>
          <div className="mb-9 bg-white h-72">
            <div className="flex justify-between mb-4 items-center">
              <h2 className="text-xl font-semibold relative top-4 left-8 mb-6">
                Product Image
              </h2>
              <button className="cursor-pointer" onClick={handlePopupToggle}>
                <h2 className="text-lg font-semibold underline relative right-5">
                  Click to add more images
                </h2>
              </button>
            </div>
            <label
              htmlFor="imageUpload"
              className="border-dashed w-64 relative left-12 border bg-[#FCFCFC] border-gray rounded-lg p-8 flex flex-col items-center justify-center mb-4 cursor-pointer"
            >
              {selectedImage ? (
                <div
                  className="w-60 h-24 bg-cover bg-center rounded-lg mb-2"
                  style={{ backgroundImage: `url(${URL.createObjectURL(selectedImage)})` }}
                />
              ) : (
                <div className="w-20 h-20 bg-[#979797] rounded-full flex items-center justify-center mb-2">
                  <span className="text-5xl relative bottom-1 text-[#FCFCFC]">+</span>
                </div>
              )}
              <span className="text-base font-semibold text-[#5E5E5E]">
                {selectedImage ? 'Change Product Image' : 'Upload Product Image'}
              </span>
              <input
                id="imageUpload"
                type="file"
                className="absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer"
                accept="image/*"
                onChange={handleImageUpload}
                multiple
              />
            </label>
          </div>
          <div className="bg-white h-2/5">
            <div className="flex my-10 mx-auto w-[95%] ">
              <div className="w-1/3 pr-4">
                <label
                  htmlFor="productName"
                  className="block text-xl font-normal text-left mb-3"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="productName"
                  className="w-full border border-[#C1C1C1] rounded py-2 px-4"
                  placeholder={name}
                  onChange={(e) => { setName(e.target.value) }}
                />
              </div>
              <div className="w-1/3 px-4">
                <label
                  htmlFor="productCategory"
                  className="block text-xl font-normal text-left mb-3"
                >
                  Select Product Category
                </label>


                <select
                  id="productCategory"
                  className="w-full border border-[#C1C1C1] rounded py-2 px-4"
                  defaultValue=""
                  onChange={(e) => { setCategory(e.target.value) }}
                >
                  <option defaultValue={true} hidden>{categoryname}</option>
                  {/* Add your product categories here as <option> elements */}
                  {
                    childCategories?.map((p, key) => (
                      <option key={key} value={p._id} label={p.name}></option>
                    ))
                  }
                </select>


              </div>
              <div className="w-1/3 pl-4">
                <label
                  htmlFor="minQuantity"
                  className="block text-xl font-normal text-left mb-3"
                >
                  Add Product Minimum Quantity
                </label>
                <input
                  placeholder={minquantity}
                  type="number"
                  id="minQuantity"
                  className="w-full border border-[#C1C1C1] rounded py-2 px-4"
                  onChange={(e) => { setMinQuantity(e.target.value) }}

                />
              </div>
            </div>
            <div className="flex my-10 mx-auto  w-[95%] ">
              <div className="w-1/3 pr-4">
                <label
                  htmlFor="productPrice"
                  className="block text-xl font-normal text-left mb-3"
                >
                  Add Product Price
                </label>
                <input
                  type="number"
                  id="productPrice"
                  className="w-full border border-[#C1C1C1] rounded py-2 px-4"
                  placeholder={price}
                  onChange={(e) => { setPrice(e.target.value) }}
                />
              </div>
              <div className="w-1/3 px-4">
                <label
                  htmlFor="discountPrice"
                  className="block text-xl font-normal text-left mb-3"
                >
                  Add Product Discount Price
                </label>
                <input
                  type="number"
                  id="discountPrice"
                  placeholder={discountprice}
                  className="w-full border border-[#C1C1C1] rounded py-2 px-4"
                  onChange={(e) => { setDiscountPrice(e.target.value) }}

                />
              </div>
              <div className="w-1/3 pl-4">
                <label
                  htmlFor="parentCategory"
                  className="block text-xl font-normal text-left mb-3"
                >
                  Parent Category
                </label>
                <select
                  id="productCategory"
                  className="w-full border border-[#C1C1C1] rounded py-2 px-4"
                  defaultValue=""
                  onChange={(e) => { setParentCategory(e.target.value) }}
                >
                  <option defaultValue={true} hidden>{parentcategoryname}</option>
                  {/* Add your product categories here as <option> elements */}
                  {
                    parentCategories?.map((p, key) => (
                      <option key={key} value={p._id} label={p.name}></option>
                    ))
                  }
                </select>
              </div>
            </div>
            <div className="my-10 mx-auto  h-46 w-[95%] ">
              <label
                htmlFor="descreption"
                className="block text-xl font-normal text-left mb-3"
              >
                Description
              </label>
              <textarea
                id="description"
                className="w-full border border-[#C1C1C1] rounded py-2 px-4"
                rows="4"
                placeholder={description}
                onChange={(e) => { setDescription(e.target.value) }}
              ></textarea>
            </div>
            <div className="flex justify-end w-[97%]">
              <button className="bg-black text-white py-2 px-4 w-32 rounded-full" onClick={handleUpdateProduct}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;