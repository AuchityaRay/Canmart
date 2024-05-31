import React from "react";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  return (
    <div className="flex justify-center">
    <Link to={`/product/${product._id}`} >
      <div className="bg-white border-2 w-60 p-8 border-white rounded-lg shadow-lg">
        <img
          src={product.productImages[0]?.img}
          alt={product.name}
          className="h-40 w-30 object-cover object-center border border-black rounded-lg"
        />
        <div className="">
          <h1 className="text-2xl py-4 font-medium text-gray-800">
            {product.name}
          </h1>
          <Link to="/sellerpage">
            <button className="ml-2 bg-brown text-black px-4 py-2 rounded">
              Send Enquiry
            </button>
          </Link>
        </div>
      </div>
    </Link>
    </div>
  );
};

export default Product;
