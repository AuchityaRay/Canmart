import React, { useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { createProduct } from '../../actions/Product/productAction';
import {useNavigate} from 'react-router-dom'
const CardView = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [category, setCategory] = useState('');
  const [buyingPrice, setBuyingPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');
  const [thresholdValue, setThresholdValue] = useState('');
  const [image, setImage] = useState(null);

  const handleDiscard = () => {
    setProductName('');
    setProductDescription('');
    setCategory('');
    setBuyingPrice(0);
    setQuantity(0);
    setUnit('');
    setThresholdValue('');
    setImage(null);
  };

  const prod = useSelector(state => state.product);
const navigate = useNavigate();
  useEffect(()=>{
    if(prod.productCreated){
      navigate('/sellerinventory');
    }
  },[])

  const dispatch = useDispatch();

  const handleAddProduct = () => {
    const product = {
      name:productName,
      description:productDescription,
      price:buyingPrice,
      quantity,
      category,
    };

    dispatch(createProduct(product));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="flex justify-center items-center h-screen w-full absolute bg-[#cdcdcd7b] left-0 top-0 z-50">
      <div className="p-4 shadow-lg  w-1/4 rounded-lg absolute bg-white z-50">
        <h2 className="text-xl font-bold mb-4 text-black">New Product</h2>

        {/* <div className="relative mb-4">
          <input
            type="file"
            accept="image/*"
            onChange={(e)=>setImage(e.target.files)}
            className="border border-dashed border-blue-500 px-2 py-1 rounded-lg bg-white w-40 h-14"
            multiple
          />
          <label className="font-medium  text-black">Drag Image or Upload</label>
        </div> */}

        <div className="flex mb-4">
          <label className="font-medium w-1/3  text-black">Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="border  border-[#858d9d] px-2 py-1 rounded-lg w-2/3"
            placeholder="Enter product name"
          />
        </div>

        <div className="flex mb-4">
          <label className="font-medium w-1/3  text-black">Product ID</label>
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            className="border  border-[#858d9d] px-2 py-1 rounded-lg w-2/3"
            placeholder='Enter product ID'
          />
        </div>

        <div className="flex mb-4">
          <label className="font-medium w-1/3  text-black">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border px-2  border-[#858d9d] py-1 rounded-lg w-2/3"
            placeholder='Select product category'
          />
        </div>

        <div className="flex mb-4">
          <label className="font-medium w-1/3  text-black">Buying Price</label>
          <input
            type="number"
            value={buyingPrice}
            onChange={(e) => setBuyingPrice(e.target.value)}
            className="border px-2 py-1  border-[#858d9d] rounded-lg w-2/3"
            placeholder='Enter buying price'
          />
        </div>

        <div className="flex mb-4">
          <label className="font-medium w-1/3  text-black">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="border px-2 border-[#858d9d] py-1 rounded-lg w-2/3"
            placeholder='Enter product quantity'
          />
        </div>

        <div className="flex mb-4">
          <label className="font-medium w-1/3  text-black">Unit</label>
          <input
            type="text"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="border border-[#858d9d] px-2 py-1 rounded-lg w-2/3"
            placeholder='Enter product unit'
          />
        </div>

        <div className="flex mb-4">
          <label className="font-medium w-1/3  text-black">Threshold Value</label>
          <input
            type="number"
            value={thresholdValue}
            onChange={(e) => setThresholdValue(e.target.value)}
            className="border  border-[#858d9d] px-2 py-1 rounded-lg w-2/3"
            placeholder='Enter threshhold value'
          />
        </div>

        <div className="flex flex-row-reverse">
          <button
            onClick={handleAddProduct}
            className="bg-blue border font-medium px-4 py-2 rounded-lg text-white"
          >
            Add Product
          </button>
          <button
            onClick={handleDiscard}
            className="border border-[#858d9d] text-[#858d9d] mr-2 text-blue-500 font-medium px-4 py-2 rounded-lg"
          >
            Discard
          </button>

        </div>
      </div>
    </div>
  );
};

export default CardView;
