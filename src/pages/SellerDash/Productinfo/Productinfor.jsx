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
import profile from "./Avatar (1).png";
import edit from "./Button.png";
import deletee from "./_Button base.png";
import imag from "./Rectangle 71 (1).png";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { AiOutlineEdit , AiOutlineDelete} from "react-icons/ai";

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
                <li className="hover:text-button2 py-px">
                  <Link to="/" className="flex items-center mt-8 space-x-2">
                    <AiOutlineDashboard className="h-6 w-6" />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li className="hover:text-button2 py-px">
                  <Link to="/" className="flex items-center space-x-2">
                    <AiOutlineAppstoreAdd className="h-6 w-6" />
                    <span>Product Management</span>
                  </Link>
                </li>
                <li className="hover:text-button2 py-px">
                  <Link to="/" className="flex items-center space-x-2">
                    <AiOutlineShoppingCart className="h-6 w-6" />
                    <span>Inventory Management</span>
                  </Link>
                </li>
                <li className="hover:text-button2 py-px">
                  <Link to="/" className="flex items-center space-x-2">
                    <AiOutlineBarChart className="h-6 w-6" />
                    <span>Analytics & Reports</span>
                  </Link>
                </li>
                <li className="hover:text-button2 py-px">
                  <Link to="/" className="flex items-center space-x-2">
                    <AiOutlineQuestionCircle className="h-6 w-6" />
                    <span>Support & Help</span>
                  </Link>
                </li>
                <li className="hover:text-button2 py-px pt-6">
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
          <div className="flex items-center justify-between mb-4">
  <h2 className="text-xl font-bold">T-Shirt 1</h2>
  <div className="space-x-2">
    <button className="text-blue-500">
      <img src={edit} alt="" />
    </button>
    <button className="text-red-500">
      <img src={deletee} alt="" />
    </button>
  </div>
</div>
<div className="mb-4 border border-b border-greyfif">
  <ul className="flex space-x-4">
    <li>
      <button className="text-button2  border-b-4 border-blue">
        <span className="sr-only">Overview</span>
        Overview
      </button>
    </li>
    <li>
      <button className="text-button2">
        <span className="sr-only">Purchases</span>
        Purchases
      </button>
    </li>
    <li>
      <button className="text-button2">
        <span className="sr-only">Adjustments</span>
        Adjustments
      </button>
    </li>
    <li>
      <button className="text-button2">
        <span className="sr-only">History</span>
        History
      </button>
    </li>
  </ul>
</div>

<div className="flex">
            <div className="w-2/3">
                <div>
                <h1 className="text-left font-[600]">Primary Details</h1>
              {/* Left side with primary details */}
              <tr className="block py-2.5">
                <td className="text-prod text-left pr-36">Product Name</td>
                <td className="text-prod textleft">T-Shirt 1</td>
              </tr>
              <tr className="block py-2.5">
                <td className="text-prod text-left pr-44">Product ID</td>
                <td className="text-prod text-right ">456567</td>
              </tr>
              <tr className="block py-2.5">
                <td className="text-prod text-left pr-32">Product Category</td>
                <td className="text-prod textleft">Clothing</td>
              </tr>
              <tr className="block py-2.5">
                <td className="text-prod text-left pr-40">Expiry Date</td>
                <td className="text-prod textleft">13/4/23</td>
              </tr>
              <tr className="block py-2.5">
                <td className="text-prod text-left pr-36">Threshhold Value</td>
                <td className="text-prod textleft">12</td>
              </tr>
              
                </div>
                <div>
                <h1 className="text-left font-[600]">Supplier Details</h1>
              {/* Left side with primary details */}
              <tr className="block py-2.5">
                <td className="text-prod text-left pr-36">Supplier Name</td>
                <td className="text-prod textleft">Supplier 1</td>
              </tr>
              <tr className="block py-2.5">
                <td className="text-prod text-left pr-32">Contact Number</td>
                <td className="text-prod textleft">98789 86757</td>
              </tr>
              <div>
                <h1 className="text-left font-[600]">Stock Locations</h1>
                <thead>
                    <td className="text-left text-textcl pr-36">Store Name</td>
                    <td className="text-left text-textcl ">Store In Hand</td>
                </thead>
                <tr className="block py-2.5">
                    <td className="text-prod">Store 1</td>
                    <td className="text-prod">15</td>
                </tr>
                
                <tr className="block py-2.5">
                    <td className="text-prod">Store 2</td>
                    <td className="text-prod">19</td>
                </tr>
              </div>
              
                </div>
              {/* Add more primary details as needed */}
            </div>
            

            <div className="w-1/3 border border-2 flex flex-col items-center justify-center">

            <div className="w-1/3 flex">
              {/* Right side with image */}
              <img
                className="flex justify-center w-full h-auto object-cover h-36 w-32 border border-dotted px-1.5 py-2.5"
                src={imag}
                alt="Product"
              />
            </div>
            <div>
    <table className="table-auto w-full">
      <tbody>
        <tr>
          <td>Opening Stock</td>
          <td>40</td>
        </tr>
        <tr>
          <td>Remaining Stock</td>
          <td>34</td>
        </tr>
        <tr>
          <td>On the way</td>
          <td>15</td>
        </tr>
        <tr>
          <td>Threshold Value</td>
          <td>12</td>
        </tr>
      </tbody>
    </table>
  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDash;
