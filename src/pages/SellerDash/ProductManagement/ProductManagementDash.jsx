// import React from "react";
import { RiEdit2Line, RiDeleteBin2Line } from "react-icons/ri";
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
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { AiOutlineEdit , AiOutlineDelete} from "react-icons/ai";


const products = [
  {
    id: 1,
    name: "Product 1",
    orderValue: 100,
    quantity: 5,
    orderId: "ABC123",
    expectedDelivery: "2023-07-01",
    status: "Pending",
  },
  {
    id: 2,
    name: "Product 2",
    orderValue: 200,
    quantity: 3,
    orderId: "DEF456",
    expectedDelivery: "2023-07-02",
    status: "Delivered",
  },
  {
    id: 3,
    name: "Product 1",
    orderValue: 100,
    quantity: 5,
    orderId: "ABC123",
    expectedDelivery: "2023-07-01",
    status: "Pending",
  },
  {
    id: 4,
    name: "Product 2",
    orderValue: 200,
    quantity: 3,
    orderId: "DEF456",
    expectedDelivery: "2023-07-02",
    status: "Delivered",
  },
  {
    id: 5,
    name: "Product 1",
    orderValue: 100,
    quantity: 5,
    orderId: "ABC123",
    expectedDelivery: "2023-07-01",
    status: "Pending",
  },
  {
    id: 6,
    name: "Product 2",
    orderValue: 200,
    quantity: 3,
    orderId: "DEF456",
    expectedDelivery: "2023-07-02",
    status: "Delivered",
  },
  {
    id: 7,
    name: "Product 1",
    orderValue: 100,
    quantity: 5,
    orderId: "ABC123",
    expectedDelivery: "2023-07-01",
    status: "Pending",
  },
  {
    id: 8,
    name: "Product 2",
    orderValue: 200,
    quantity: 3,
    orderId: "DEF456",
    expectedDelivery: "2023-07-02",
    status: "Delivered",
  },
  // Add more product items as needed
];
const ProductManagementDash = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
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
          </div>
          <div className="bg-offwhitegray py-4">
      <div className="mx-6 my-2 bg-white rounded">
        <h1 className="text-lg mx-2 pt-4 px-2 font-medium text-start">
          Overall Inventory
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4">
            <h2 className="text-sm text-blue font-medium text-start mb-2">
              Total Orders
            </h2>
            <div className="flex items-center justify-between">
              <p className="">37</p>
            </div>
            <p className="text-start mt-2 text-sm">Last 7 days</p>
          </div>

          <div className="p-4">
            <h2 className="text-sm text-yellow font-medium text-start mb-2">
              Total Received
            </h2>
            <div className="flex items-center justify-between">
              <p className="">32</p>
              <p className="">$ 25,000</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-start mt-2 text-sm">Last 7 days</p>
              <p className="text-start mt-2 text-sm">Revenue</p>
            </div>
          </div>

          <div className="p-4">
            <h2 className="text-sm text-darkblue font-medium text-start mb-2">
              Total Returned
            </h2>
            <div className="flex items-center justify-between">
              <p className="">32</p>
              <p className="">$ 25,000</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-start mt-2 text-sm">Last 7 days</p>
              <p className="text-start mt-2 text-sm">Cost</p>
            </div>
          </div>

          <div className="p-4">
            <h2 className="text-sm text-red font-medium text-start mb-2">
              On the way
            </h2>
            <div className="flex items-center justify-between">
              <p className="">32</p>
              <p className="">$ 25,000</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-start mt-2 text-sm">Ordered</p>
              <p className="text-start mt-2 text-sm">Cost</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white my-4 mx-6 rounded">
        <div className="mt-2 mb-10">
          <h2 className="text-lg text-start font-medium mb-4 mx-10">
            Products
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 text-darkgrey">Product</th>
                  <th className="py-2 px-4 text-darkgray">Order Value</th>
                  <th className="py-2 px-4 text-darkgrey">Quantity</th>
                  <th className="py-2 px-4 text-darkgrey">Order ID</th>
                  <th className="py-2 px-4 text-darkgrey">Expected Delivery</th>
                  <th className="py-2 px-4 text-darkgrey">Status</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="py-2 px-4">{product.name}</td>
                    <td className="py-2 px-4">{product.orderValue}</td>
                    <td className="py-2 px-4">{product.quantity}</td>
                    <td className="py-2 px-4">{product.orderId}</td>
                    <td className="py-2 px-4">{product.expectedDelivery}</td>
                    <td className="py-2 px-2 flex items-center">
                      <button className="">
                        <RiEdit2Line className="h-5 w-5" />
                      </button>
                      <button>
                        <RiDeleteBin2Line className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
          </div>
          </div>
    
      </div>
  
  );
};

export default ProductManagementDash;
