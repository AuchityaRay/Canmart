import React, { useState } from "react";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineAppstoreAdd,
  AiOutlineFileText,
  AiOutlineBarChart,
  AiOutlineQuestionCircle,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { RiSearchLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import profile from "../../assets/profilepic.png";
import DashboardHome from "./SellerSubComponent/DashboardHome";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ProductManagementDash from "./ProductManagement/ProductManagementDash";
import EditProfile from "./EditProfile/EditProfile";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const SellerDash = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="min-h-screen flex flex-col sm:flex-row sm:justify-between">
      {/* Left Section */}
      <div className="lg:w-3/12 lg:pt-20 sm:w-1/4 shadow hidden lg:block md:block">
        <div className="p-4">
          <nav>
            <ul className="space-y-6 text-steelblue">
              <li className="hover:text-button2">
                <Link to="/sellerdash" className="flex items-center space-x-2">
                  <AiOutlineDashboard className="h-6 w-6" />
                  <span>Dashboard</span>
                </Link>
              </li>

              <li className="hover:text-button2">
                <Link to="/sellerproduct" className="flex items-center space-x-2">
                  <AiOutlineAppstoreAdd className="h-6 w-6" />
                  <span>Product Management</span>
                </Link>
              </li>
              <li className="hover:text-button2">
                <Link to="/sellerinventory" className="flex items-center space-x-2">
                  <AiOutlineShoppingCart className="h-6 w-6" />
                  <span>Inventory Management</span>
                </Link>
              </li>
              <li className="hover:text-button2">
                <Link to="/" className="flex items-center space-x-2">
                  <AiOutlineBarChart className="h-6 w-6" />
                  <span>Analytics & Reports</span>
                </Link>
              </li>
              <li className="hover:text-button2">
                <Link to="/" className="flex items-center space-x-2">
                  <AiOutlineQuestionCircle className="h-6 w-6" />
                  <span>Support & Help</span>
                </Link>
              </li>
              <li className="hover:text-button2">
                <Link to="/sellersetting" className="flex items-center space-x-2">
                  <AiOutlineSetting className="h-6 w-6" />
                  <span>Settings</span>
                </Link>
              </li>
              <li>
                <Link className="flex items-center space-x-2">
                  <AiOutlineLogout className="h-6 w-6" />
                  <span>Log Out</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/*for hamburger*/}

      <div className="pt-6 pb-2 pl-4 absolute lg:hidden text-left md:hidden block ">
        <button
          className="text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <AiOutlineClose className="h-6 w-6" />
          ) : (
            <AiOutlineMenu className="h-6 w-6" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="lg:w-3/12 lg:pt-20 sm:w-1/4 shadow overflow-hidden">
          <div className="p-4">
            <nav>
              <ul className="space-y-6">
                <li className="hover:text-button2">
                  <Link to="/" className="flex items-center mt-8 space-x-2">
                    <AiOutlineDashboard className="h-6 w-6" />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li className="hover:text-button2">
                  <Link to="/" className="flex items-center space-x-2">
                    <AiOutlineAppstoreAdd className="h-6 w-6" />
                    <span>Product Management</span>
                  </Link>
                </li>
                <li className="hover:text-button2">
                  <Link to="/" className="flex items-center space-x-2">
                    <AiOutlineShoppingCart className="h-6 w-6" />
                    <span>Inventory Management</span>
                  </Link>
                </li>
                <li className="hover:text-button2">
                  <Link to="/" className="flex items-center space-x-2">
                    <AiOutlineBarChart className="h-6 w-6" />
                    <span>Analytics & Reports</span>
                  </Link>
                </li>
                <li className="hover:text-button2">
                  <Link to="/" className="flex items-center space-x-2">
                    <AiOutlineQuestionCircle className="h-6 w-6" />
                    <span>Support & Help</span>
                  </Link>
                </li>
                <li className="hover:text-button2">
                  <Link to="/" className="flex items-center space-x-2">
                    <AiOutlineSetting className="h-6 w-6" />
                    <span>Settings</span>
                  </Link>
                </li>
                <li className="hover:text-button2">
                  <Link to="/" className="flex items-center space-x-2">
                    <AiOutlineLogout className="h-6 w-6" />
                    <span>Log Out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Right Section */}
      <div className="lg:max-h-16 max-h-20 lg:w-9/12 sm:w-3/4 shadow bg-white">
        <div className=" p-4 bg-gainsboro">
          <header className="flex justify-between mb-6 items-end">
            <div className="flex pl-8">
              <div className="relative w-96">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <RiSearchLine className="h-5 w-5 text-gray " />
                </span>
                <input
                  type="text"
                  className="Inline w-full pl-12 pr-10 py-2 border border-gray rounded-md bg-white sm:text-sm"
                  placeholder="Search,Product,Supplier,Order"
                />
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <IoIosNotificationsOutline className="h-5 w-5 text-gray" />
              <img
                className="h-8 w-8 mr-3 rounded-full object-cover"
                src={profile}
                alt="Profile"
              />
            </div>
          </header>
          {/*
          <EditProfile />*/}
          {/* <ProductManagementDash /> */}
          <DashboardHome />
          
        </div>
      </div>
    </div>
  );
};

export default SellerDash;
