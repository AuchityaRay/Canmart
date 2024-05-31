import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import img from "./shirt.jpg";
import img1 from "./shirt2.jpg";
import img2 from "./shirt3.jpg";
import img3 from "./shirt4.jpg";
import img4 from "./shirt5.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { sendEnquiry } from "../../actions/Enquiry/enquiryAction";
import { getInitialData } from "../../actions/initialDataAction";
import { BiBriefcaseAlt2, BiServer} from "react-icons/bi"
import {HiUsers} from "react-icons/hi"
import {SlCalender} from "react-icons/sl"
import Calendar from '../../assets/calendar.png';
import User from '../../assets/user.png';
import Establishment from '../../assets/1.png';
import BusinessType from '../../assets/3.png'


const ViewProduct = () => {

  const {id} = useParams();

  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [seller, setSeller] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  const [sellerName, setSellerName] = useState();
  const dispatch = useDispatch();


  const initialData  = useSelector(state => state.initialData);
  const sellers = localStorage.getItem('sellers');
  const user = useSelector(state => state.user);

  useEffect(() => {
    for (let i = 0; i < initialData.products?.length; i++) {
      if (initialData.products[i]._id === id) {
        setName(initialData.products[i].name);
        setDescription(initialData.products[i].description);
        setPrice(initialData.products[i].price);
        setSeller(initialData.products[i].createdBy);
        setQuantity(initialData.products[i].quantity);
        setImg(initialData.products[i].productImages == ""?"":initialData.products[i].productImages[0].img);
      }
    }
    console.log("IMG = "+img);
  }, [initialData.products])

  useEffect(() => {
    if (sellers.sellers) {
      for (let i = 0; i < sellers.sellers.user.length; i++) {
        if (sellers.sellers.user[i]._id === seller) {
          setSellerName(sellers.sellers.user[i].fullname);
        }
      }
    }
  }, [])


  const navigate = useNavigate();
  const handleSendEquiry = () => {
    if (!user.authenticate) {
      navigate('/login')
    }

    const enquiry = {
      enquiryBy: `${user.user._id}`,
      enquiries: [
        {
          product: `${id}`
        }
      ]
    }
    dispatch(sendEnquiry(enquiry));
  }



  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/6 mt-10 h-5/6 lg:ml-16 lg:mr-1 md:mx-4">
          <div className="flex md:flex-col sm:flex-col lg:items-end lg:space-y-2">
            <img
              src={img1}
              alt="View 1"
              className="w-20 h-16 px-2 cursor-pointer"
            />

            {/* Add remaining small images here */}
            <img
              src={img1}
              alt="View 1"
              className="w-20 h-16 px-2 cursor-pointer"
            />
            <img
              src={img2}
              alt="View 1"
              className="w-20 h-16 px-2 cursor-pointer"
            />
            <img
              src={img3}
              alt="View 1"
              className="w-20 h-16 px-2 cursor-pointer"
            />
            <img
              src={img1}
              alt="View 1"
              className="w-20 h-16 px-2 cursor-pointer"
            />
          </div>
        </div>
        <div className="md:w-2/6 mt-10 lg:mx-2 md:mx-4">
          {/* <img src={require(`../../../../server/src/uploads/${img}`)} alt="Product Image" className="w-full h-96" /> */}
          {initialData.products?.length > 0 
            && img && <img src={img} alt="Product Image" className="w-full h-96" />
          }
        </div>

        <div className="md:w-3/6 lg:mr-16 lg:ml-1 md:mx-4 mt-10 p-5">
          <div className="p-4">
            <h1 className="text-4xl mb-2 capitalize ">{name}</h1>
            <p className="text-black mb-2">
              {description}
            </p>
            <p className="text-lg font-medium text-mustard mb-2">
              Price: {price}<br></br>Minimum order quantity- {quantity}
              Piece/Pieces
            </p>

            {/* Color Slider */}
            <h2>Green</h2>
            <div className="flex justify-center mt-7 mb-4">
              <FiChevronLeft className="w-5 h-7 mr-2 cursor-pointer" />
              <div className="flex space-x-4">
                <div className="w-9 h-9 rounded-full bg-black"></div>
                <div className="w-9 h-9 rounded-full bg-orange"></div>
                <div className="w-9 h-9 rounded-full bg-blue"></div>
                <div className="w-9 h-9 rounded-full bg-gray"></div>
                <div className="w-9 h-9 rounded-full bg-[#E8A118]"></div>
              </div>
              <FiChevronRight className="w-5 h-7 ml-2 cursor-pointer" />
            </div>

            {/* Size Slider */}
            <h2 className="mt-5">Select Size</h2>
            <div className="flex justify-center mt-7 mb-4">
              <FiChevronLeft className="w-5 h-7 mr-2 cursor-pointer" />
              <div className="flex space-x-4">
                <button className="w-7 h-7 border rounded-full text-sm flex items-center justify-center text-black">
                  XS
                </button>
                <button className="w-7 h-7 border rounded-full text-sm flex items-center justify-center text-black">
                  S
                </button>
                <button className="w-7 h-7 border rounded-full text-sm flex items-center justify-center text-black">
                  M
                </button>
                <button className="w-7 h-7 border rounded-full text-sm flex items-center justify-center text-black">
                  L
                </button>
                <button className="w-7 h-7 border rounded-full text-sm flex items-center justify-center text-black">
                  XXL
                </button>

                {/* Add more sizes here */}
              </div>
              <FiChevronRight className="w-5 h-7 ml-2 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around ml-4 lg:mr-14 sm:ml-3 flex-wrap">
        <div className="text-left">
          <h1 className="font-bold mb-3 text-lg">Seller detail</h1>
          <span className="font-semibold">Md: </span>
          <span className="mr-24">{sellerName}</span>
          <span className="font-semibold">Member since: </span>
          <span>1 year</span>
          <br></br>
          <span className="font-semibold">Address: </span>
          <span>
            Hno 662 maa gayatri villa patel nagar<br></br> maharajpur jabalpur
          </span>
          <br></br>
          <span className="font-semibold">Delivery time: </span>
          <span className="mr-5">7 Days</span>
          <span className="font-semibold">Supply ability: </span>
          <span>3000000 Per Day</span>
        </div>
        <div className="self-center pt-4">
          <button onClick={handleSendEquiry} className="bg-darkblue border text-xs border-darkblue text-white px-6 py-3 rounded-lg mr-3">
            Send Enquiry
          </button>
          <button className="bg-white border text-xs border-darkblue text-black px-6 py-3 rounded-lg">
            View Number
          </button>
        </div>
      </div>

      {/****************** */}
      <h4 className="font-bold text-black my-7">
        Mans Half Sleevs T Shirt Specification
      </h4>

      <div className="grid grid-cols-1 lg:mx-32 mx-2 md:grid-cols-3">
        {/* First Row */}
        <div className="bg-gray-200 border flex justify-center p-4">
          <h2 className="text-md font-bold">Gender :</h2>
          <p className="text-gray-600">Cannot Disclose</p>
        </div>
        <div className="bg-gray-200 border flex justify-center p-4">
          <h2 className="text-md font-bold">Product Type :</h2>
          <p className="text-gray-600">T-Shirt</p>
        </div>
        <div className="bg-gray-200 border flex justify-center p-4">
          <h2 className="text-md font-bold">Pattern :</h2>
          <p className="text-gray-600">Printed</p>
        </div>

        {/* Second Row */}
        <div className="bg-gray-200 border flex justify-center p-4">
          <h2 className="text-md font-bold">Collar :</h2>
          <p className="text-gray-600">With Collar</p>
        </div>
        <div className="bg-gray-200 border flex justify-center p-4">
          <h2 className="text-md font-bold">Sleeve Type :</h2>
          <p className="text-gray-600">Short Sleeve</p>
        </div>
        <div className="bg-gray-200 border flex justify-center p-4">
          <h2 className="text-md font-bold">Main Domestic : </h2>
          <p className="text-gray-600">All India</p>
        </div>
      </div>
      <h4 className="font-bold my-7">Company Details</h4>
      <p className="lg:mx-32 px-4 text-left">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
        ducimus illo inventore nostrum necessitatibus facilis fugit unde aut
        neque maxime, non dolor a suscipit ab aperiam ratione? Ut, id sed! Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Dolore aut sapiente
        voluptatem ad quidem eveniet minima doloremque numquam View Ut, id sed!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore aut
        sapiente voluptatem ad quidem eveniet minima doloremque numquam View
        doloremque numquam View
      </p>
      <div className="flex flex-wrap lg:mx-28 md:mx-8 sm:mx-8 mt-4">
        <div className="w-full flex items-center flex-col sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
          <div className="bg-[#5b98e2] p-4 h-20 w-20 rounded-full">
          <img src={BusinessType}/>

          </div>
          <h2 className="text-lg my-2 font-medium">Bussiness Type</h2>
          <p>Manufacturer Supplier</p>
        </div>
        <div className="w-full flex items-center flex-col sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
          <div className="bg-[#5b98e2] p-4 h-20 w-20 rounded-full">
            <img src={User}/>
          </div>
          <h2 className="text-lg my-2 font-medium">Employment Count</h2>
          <p>120</p>
        </div>
        <div className="w-full flex items-center flex-col sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
          <div className="bg-[#5b98e2] p-4 h-20 w-20 rounded-full">
          <img src={Establishment}/>

          </div>
          <h2 className="text-lg my-2 font-medium">Establishment</h2>
          <p>2003</p>
        </div>
        <div className="w-full flex items-center flex-col sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
          <div className="bg-[#5b98e2] p-4 h-20 w-20 rounded-full">
            <img src={Calendar}/>
          </div>
          <h2 className="text-lg my-2 font-medium">Working Days</h2>
          <p>Monday to Saturday</p>
        </div>
      </div>
    </>
  );
};

export default ViewProduct;
