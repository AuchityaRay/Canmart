import React, { useDebugValue, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Bg from "../../assets/bg.jpg";
import Footer from "../../commonComponents/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getInitialData } from "../../actions/initialDataAction";
import { getSellersList } from '../../actions/sellersList';
import { useLocation } from "react-router-dom";
import SearchedProducts from "../../components/Product/SearchedProducts";
import { signOut } from "../../actions/User/userAction";
import Categories from "./Categories";
import PopularCategories from "./PopularCategories";
import PopularProducts from "../../components/Carousel/PopularProducts";
import GetLeads from "./GetLeads";
import Analytics from "./Analytics";
import Customers from "./Customers";

const Home = () => {
  const { state } = useLocation();
  const { key,searching } = state || {};
  const search = key;


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInitialData());
  }, [])

  useEffect(() => {
    const data = {
      search
    }
    dispatch(getSellersList(data));

  }, [])


  return (
    <div>
      <Navbar showSearchBar={true}/>
{!searching &&
      <>
      <div className="w-full flex items-center justify-center relative">
        <img className="w-full" src={Bg} alt="" style={{
          filter:"brightness(20%)"
        }} />
        <p className="absolute text-white text-[60px] font-bold">Largest B2B Platfrom for Shop <br /> Owners and Businesses</p>
      </div>
        <Categories/>
        <PopularCategories/>
        <PopularProducts title={"Popular Products"}/>
        <GetLeads/>
        <Analytics/>
        <Customers/>
        <Footer/>
      </>
}
{/* {searching  && 
  <SearchedProducts/>
} */}
    </div>
  );
};
export default Home;
