import React, { useEffect, useState } from 'react';
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
import { BiBell } from 'react-icons/bi';
import { BiHome } from 'react-icons/bi';
import { BiCart } from 'react-icons/bi';
import { BiUserCircle } from 'react-icons/bi';
import { BiAnalyse } from 'react-icons/bi';
import { BiSupport } from 'react-icons/bi';
import { BiLogOut } from 'react-icons/bi';
import { BiSearch } from 'react-icons/bi';
import { BiEdit } from 'react-icons/bi';
import { AiFillSetting } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AiOutlineFilter } from 'react-icons/ai';
import './Inventory.css';
import Avatar from '../../assets/client.avif';
import { useSelector } from 'react-redux';
import profile from "../../assets/profilepic.png";
import AddProduct from "./AddProduct";

const Inventory = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [asellerproducts, setASellerProducts] = useState([]);
  var sellerProducts = []
  const [isPopupOpen, setIsPopupOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleModal = () => {
    setModal(!modal);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };



  const addProduct = () => {

  }




  const user = useSelector(state => state.user);
  const initialData = useSelector(state => state.initialData);
  const products = initialData.products;
  useEffect(() => {
    for (let i = 0; i < products?.length; i++) {
      if (products[i].createdBy === user.user._id) {
        sellerProducts.push(products[i]);
      }
    }

    if(sellerProducts.length > 0){
      setASellerProducts(sellerProducts);
    }
  }, [])

  return (


    <>
                  {isPopupOpen && <AddProduct className="h-6 w-1/2 z-50 "/>}

      {/* <div className='h-screen w-full flex bg-[#f9f9f9]'> */}
      <div className={`app ${isPopupOpen ? "backdrop-blur-lg pointer-events-none h-screen w-full flex bg-[#f9f9f9]" : "h-screen w-full flex bg-[#f9f9f9]"}`}>
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
        <div className='h-full w-full pl-5 pr-5'>
        <div className="mx-6 my-2 bg-white rounded">
        <h1 className="text-lg mx-2 pt-4 px-2 font-medium text-start">
          Overall Inventory
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4">
            <h2 className="text-sm text-blue font-medium text-start mb-2">
              Categories
            </h2>
            <div className="flex items-center justify-between">
              <p className="">14</p>
            </div>
            <p className="text-start mt-2 text-sm">Last 7 days</p>
          </div>

          <div className="p-4">
            <h2 className="text-sm text-totalprod font-medium text-start mb-2">
              Total Products
            </h2>
            <div className="flex items-center justify-between">
              <p className="">868</p>
              <p className="">₹ 25,000</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-start mt-2 text-sm">Last 7 days</p>
              <p className="text-start mt-2 text-sm">Revenue</p>
            </div>
          </div>

          <div className="p-4">
            <h2 className="text-sm text-topsell font-medium text-start mb-2">
              Top Selling
            </h2>
            <div className="flex items-center justify-between">
              <p className="">5</p>
              <p className="">₹ 25,000</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-start mt-2 text-sm">Last 7 days</p>
              <p className="text-start mt-2 text-sm">Cost</p>
            </div>
          </div>

          <div className="p-4">
            <h2 className="text-sm text-lowcosts font-medium text-start mb-2">
              Low Stocks
            </h2>
            <div className="flex items-center justify-between">
              <p className="">12</p>
              <p className="">2</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-start mt-2 text-sm">Ordered</p>
              <p className="text-start mt-2 text-sm">Not in Stock</p>
            </div>
          </div>
        </div>
      </div>


            <div className='bg-[#ffffff] h-[530px] shadow mt-5'>

          {modal &&
              <div class="fixed top-0 left-0 right-0 z-50 absolute flex items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative w-full max-w-md max-h-full">
                  <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button onClick={toggleModal} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      <span onClick={toggleModal} class="sr-only">Close modal</span>
                    </button>
                    <div class="px-6 py-6 lg:px-8">
                      <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">New Product</h3>
                      <form class="space-y-6" action="#">
                        <div>
                          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                          <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Product Name" required></input>
                        </div>
                        <div>
                          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                          <input type="text" name="category" id="category" placeholder="Enter product category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required></input>
                        </div>
                        <div class="flex justify-between">
                          <div class="flex items-start">
                            <div class="flex items-center h-5">
                              <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required></input>
                            </div>
                            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                          </div>
                          <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                        </div>
                        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                          Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
          }








              <div className='w-full h-12 flex text-lg pl-4 items-center justify-between'>
                <span>Products</span>
                <div className='flex text-sm'>
                  <button onClick={togglePopup} className='bg-button mr-2 text-white rounded h-9 pl-2 pr-2' type='button'>Add Product
                  </button>
                  <div className='flex relative mr-2 h-9 rounded border border-gray pl-4 pr-4'>
                    <button className='flex items-center justify-center '><AiOutlineFilter size={17} color='grey' className='mr-1' /> Filters</button>
                  </div>
                  <button className='border border-gray rounded h-9 pl-4 pr-4 '>Search</button>
                </div>
              </div>

              <table className='w-full'>
                <thead>
                  <tr className='h-10 border-b border-gray'>
                    <th><span className='flex font-semibold  text-shadeofgray text-sm ml-4'>Products</span></th>
                    <th><span className='flex font-semibold  text-shadeofgray text-sm ml-4'>Buying Selling</span></th>
                    <th><span className='flex font-semibold  text-shadeofgray text-sm ml-4'>Quantity</span></th>
                    <th><span className='flex font-semibold  text-shadeofgray text-sm ml-4'>Threshold Value</span></th>
                    <th><span className='flex font-semibold  text-shadeofgray text-sm ml-4'>Expiry Date</span></th>
                    <th><span className='flex font-semibold  text-shadeofgray text-sm ml-4'>Availability</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='text-xs h-10 border-b border-gray text-grey'>
                    <td><span className='flex ml-4'>Tshirt-1</span></td>
                    <td><span className='flex ml-4'>$4306</span></td>
                    <td><span className='flex ml-4'>43</span></td>
                    <td><span className='flex ml-4'>7353</span></td>
                    <td><span className='flex ml-4'>11/12/22</span></td>
                    <td><span className='flex ml-4 text-green font-semibold'>
                      In - stock
                    </span></td>
                  </tr>
                  <tr className='text-xs h-10 border-b border-gray text-grey'>
                    <td><span className='flex ml-4'>Tshirt-1</span></td>
                    <td><span className='flex ml-4'>$4306</span></td>
                    <td><span className='flex ml-4'>43</span></td>
                    <td><span className='flex ml-4'>7353</span></td>
                    <td><span className='flex ml-4'>11/12/22</span></td>
                    <td><span className='flex ml-4 text-red font-semibold'>
                      Out of stock
                    </span></td>
                  </tr>                 <tr className='text-xs h-10 border-b border-gray text-grey'>
                    <td><span className='flex ml-4'>Tshirt-1</span></td>
                    <td><span className='flex ml-4'>$4306</span></td>
                    <td><span className='flex ml-4'>43</span></td>
                    <td><span className='flex ml-4'>7353</span></td>
                    <td><span className='flex ml-4'>11/12/22</span></td>
                    <td><span className='flex ml-4 text-red font-semibold'>
                      Out of stock
                    </span></td>
                  </tr>                 <tr className='text-xs h-10 border-b border-gray text-grey'>
                    <td><span className='flex ml-4'>Tshirt-1</span></td>
                    <td><span className='flex ml-4'>$4306</span></td>
                    <td><span className='flex ml-4'>43</span></td>
                    <td><span className='flex ml-4'>7353</span></td>
                    <td><span className='flex ml-4'>11/12/22</span></td>
                    <td><span className='flex ml-4 text-red font-semibold'>
                      Out of stock
                    </span></td>
                  </tr>                 <tr className='text-xs h-10 border-b border-gray text-grey'>
                    <td><span className='flex ml-4'>Tshirt-1</span></td>
                    <td><span className='flex ml-4'>$4306</span></td>
                    <td><span className='flex ml-4'>43</span></td>
                    <td><span className='flex ml-4'>7353</span></td>
                    <td><span className='flex ml-4'>11/12/22</span></td>
                    <td><span className='flex ml-4 text-red font-semibold'>
                      Out of stock
                    </span></td>
                  </tr>                 <tr className='text-xs h-10 border-b border-gray text-grey'>
                    <td><span className='flex ml-4'>Tshirt-1</span></td>
                    <td><span className='flex ml-4'>$4306</span></td>
                    <td><span className='flex ml-4'>43</span></td>
                    <td><span className='flex ml-4'>7353</span></td>
                    <td><span className='flex ml-4'>11/12/22</span></td>
                    <td><span className='flex ml-4 text-red font-semibold'>
                      Out of stock
                    </span></td>
                  </tr>                 <tr className='text-xs h-10 border-b border-gray text-grey'>
                    <td><span className='flex ml-4'>Tshirt-1</span></td>
                    <td><span className='flex ml-4'>$4306</span></td>
                    <td><span className='flex ml-4'>43</span></td>
                    <td><span className='flex ml-4'>7353</span></td>
                    <td><span className='flex ml-4'>11/12/22</span></td>
                    <td><span className='flex ml-4 text-red font-semibold'>
                      Out of stock
                    </span></td>
                  </tr>                 <tr className='text-xs h-10 border-b border-gray text-grey'>
                    <td><span className='flex ml-4'>Tshirt-1</span></td>
                    <td><span className='flex ml-4'>$4306</span></td>
                    <td><span className='flex ml-4'>43</span></td>
                    <td><span className='flex ml-4'>7353</span></td>
                    <td><span className='flex ml-4'>11/12/22</span></td>
                    <td><span className='flex ml-4 text-green font-semibold'>
                      In - stock
                    </span></td>
                  </tr>                 <tr className='text-xs h-10 border-b border-gray text-grey'>
                    <td><span className='flex ml-4'>Tshirt-1</span></td>
                    <td><span className='flex ml-4'>$4306</span></td>
                    <td><span className='flex ml-4'>43</span></td>
                    <td><span className='flex ml-4'>7353</span></td>
                    <td><span className='flex ml-4'>11/12/22</span></td>
                    <td><span className='flex ml-4 text-green font-semibold'>
                      in - stock
                    </span></td>
                  </tr>


                </tbody>
              </table>

              <div className='h-20  w-full flex justify-between items-center'>
                <button className='ml-3 text-xs font-semibold text-grey border h-8 w-20 border-gray rounded'>Previous</button>
                <span className='text-xs text-shadeofgray'>Page 1 of 10</span>
                <button className='mr-3 text-xs font-semibold text-grey border h-8 w-20 border-gray rounded'>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Inventory