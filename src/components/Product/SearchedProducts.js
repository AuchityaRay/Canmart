import React, { useEffect } from "react";
import Product from "../../components/Product/Product";
import product1Image from "../../assets/bg.png";
import product2Image from "../../assets/bg.png";
import product3Image from "../../assets/bg.png";
import product4Image from "../../assets/bg.png";
import { useDispatch, useSelector } from "react-redux";
import {getInitialData} from '../../actions/initialDataAction';

const SearchedProducts = ({ title="Search Results" }) => {


  const searchres = useSelector(state => state.searchres);
  const products = searchres?.searchres.searchData;
  

  return (
    <>
      <h2 className="text-2xl font-semibold my-12 mx-auto sm:px-20 pl-5 mb-10 ml-5 flex">
        Similar Products
      </h2>
      <div className="grid grid-cols-1 lg:mx-28 md:mx-8 sm:mx-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
      {products && products.length > 0 ? (
        products.map((p, key) => <Product key={key} product={p} />)
      ) : (
        <p className="text-2xl font-semibold" >No data found</p>
      )}
      </div>
    </>
  );
};

export default SearchedProducts;
