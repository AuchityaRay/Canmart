import React, { useEffect, useState } from "react";
import companyLogo from "../../assets/tshirt1.png"; // Replace with your company logo path
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import googlelogo from "../../assets/google.png";
import img from "../../assets/img.png";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import buttonprev from "../../assets/Button - Previous slide.png";
import buttonnext from "../../assets/Button - Next slide.png";
import like from "../../assets/like.png";
import share from "../../assets/share.png";
import nocostemi from "../../assets/nocostemi.png";
import rightarrow from "../../assets/rightarrow.png";
import bankoffers from "../../assets/bankoffers.png";
import coupons from "../../assets/coupons.png";
import additionaloffers from "../../assets/additional offers.png";
import creditcard from "../../assets/creditcard.png";
import pencil from "../../assets/pencil.png";
import productinstallation from "../../assets/productinstallation.png";
import oneyearwarranty from "../../assets/1yearwarranty.png";
import twoyearwarranty from "../../assets/2yearwarranty.png";
import threeyearwarranty from "../../assets/3yearwarranty.png";
import plus from "../../assets/plus.png"
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendEnquiry } from "../../actions/Enquiry/enquiryAction";

const View = () => {
  const navigate = useNavigate();
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

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])



  return (
    <div className="">
      <div className="bg-black">
        <div>
          {/* Navbar options */}
          <nav className="w-full mx-auto flex items-center justify-between py-4 space-x-6">
            <ul className="w-full flex justify-evenly space-x-4 text-white overflow-x-auto font-normal text-lg">
              <li className="cursor-pointer">Clothes</li>
              <li className="cursor-pointer">Toys</li>
              <li className="cursor-pointer">Electronic Gadgets</li>
              <li className="cursor-pointer">Grocery</li>
              <li className="cursor-pointer">Fashion</li>
              <li className="cursor-pointer">Beauty</li>
              <li className="cursor-pointer">Grocery</li>
              <li className="cursor-pointer">Sports</li>
              <li className="cursor-pointer">Fashion</li>
              <li className="cursor-pointer">Beauty</li>
              <li className="cursor-pointer">Grocery</li>
              <li className="cursor-pointer">Sports</li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex w-10/12 bg-white p-6 space-x-4">
          <div className="flex flex-col md:flex-row w-1/2 space-y-4 md:space-y-0 md:space-x-4">
            <div className="absolute "> Home &gt; All Categories &gt; {name}</div>
            <div className="w-40 md:w-1/6 mt-10 h-5/6  md:mx-4 relative top-12">

              {/* Left */}
              {/* <div>h</div> */}
              <div className="flex md:flex-col sm:flex-col lg:items-end lg:space-y-2">
                {/* Add remaining small images here */}
                <button>
                  <img src={buttonprev} alt="" />
                </button>
                <img
                  src={img}
                  alt="View 1"
                  className="w-20 h-16 px-2 cursor-pointer border border-[#E0E0E0] rounded-lg"
                />
                <img
                  src={img}
                  alt="View 1"
                  className="w-20 h-16 px-2 cursor-pointer border border-[#E0E0E0] rounded-lg"
                />
                <img
                  src={img}
                  alt="View 1"
                  className="w-20 h-16 px-2 cursor-pointer border border-[#E0E0E0] rounded-lg"
                />
                <img
                  src={img}
                  alt="View 1"
                  className="w-20 h-16 px-2 cursor-pointer border border-[#E0E0E0] rounded-lg"
                />
                <button>
                  <img src={buttonnext} alt="" />
                </button>
              </div>
            </div>
            <div className="w-full">
              <div className="w-11/12 border rounded-lg  mt-10 lg:mx-2 md:mx-4">
                <img src={img} alt="" className="w-full h-96" />
              </div>
              <span className="flex pt-4 justify-evenly">
                <button className="w-32 h-10 border rounded-3xl">
                  Add to Cart
                </button>
                <button className="w-32 h-10 border rounded-3xl bg-black text-white">
                  Send Query
                </button>
              </span>
            </div>
          </div>
          <div className="w-1/2">
            <div className="text-left flex items-center justify-between pb-4">
              <div>
                <p className="text-base font-bold text-[#0C5273]">LG</p>
              </div>
              <div>
                <p className="bg-[#00b2594a] font-semibold text-base rounded">
                  10% Bank Disc Upto Rs3000 Off
                </p>
              </div>
            </div>
            <h2 className="text-left font-bold text-xl pb-1">
              {name}
            </h2>
            <div className="flex justify-end">
              <div>
                <img src={like} alt="Icon 1" className="h-6 w-6 mr-4" />
              </div>
              <div>
                <img src={share} alt="Icon 2" className="h-6 w-6" />
              </div>
            </div>
            <div className="text-left ml-5">
              <div className="mb-1.5">
                <span className="font-bold text-2xl mr-4">₹{price}</span>
                <span className="font-bold text-base text-[#03753C] bg-[#E5F7EE] rounded">
                  12% Off
                </span>
              </div>
              <div className="mb-1.5">
                <span className="font-normal text-base text-[#000000a6]">
                  M.R.P: <span className="underline">₹{price + 400}</span>{" "}
                </span>
                <span className="font-normal text-base text-[#000000a6]">
                  (Incl. of all taxes)
                </span>
              </div>
              <div className="mb-4">
                <span className="text-[#000000a6]">
                  <img
                    src={nocostemi}
                    alt=""
                    srcset=""
                    className="inline-block mr-2 "
                  />
                  No Cost EMI Available from{" "}
                  <span className="font-bold text-base text-[#141414]">
                    ₹8340.83/-
                  </span>{" "}
                  per month.
                </span>
              </div>
              <div className="font-bold text-base text-left h-14 border-b border-[#E0E0E0]">
                Warranty : 1 Year
              </div>
            </div>

            <div className="mt-4 text-left">
              <h1 className="font-bold text-2xl text-[#141414] mb-4">
                Offers (15){" "}
              </h1>
              <div className="flex items-center">
                <div className="mr-2">
                  <img src={additionaloffers} alt="" />
                </div>
                <div className="w-full mb-4">
                  <h2 className="font-bold text-sm text-[#141414]">
                    ADDITIONAL OFFERS
                  </h2>
                  <p className="font-normal text-sm text-[#000000a6] ">
                    Flat Rs.100 Off on first purchase of Rs.600 or more. Offer
                    valid on select a…
                  </p>
                  <p className="text-[#B5B5B5] font-normal text-sm">
                    2 Offer/s Available
                  </p>
                </div>
                <div>
                  <img src={rightarrow} alt="" />
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-2">
                  <img src={bankoffers} alt="" />
                </div>
                <div className="w-full mb-4">
                  <h2 className="font-bold text-sm text-[#141414]">
                    BANK OFFERS
                  </h2>
                  <p className="font-normal text-sm text-[#000000a6]">
                    Get Cashback up to Rs.50 with Cred Pay UPI on Android. Min
                    Txn Rs. 99
                  </p>
                  <p className="text-[#B5B5B5] font-normal text-sm">
                    10 Offer/s Available
                  </p>
                </div>
                <div>
                  <img src={rightarrow} alt="" />
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-2">
                  <img src={coupons} alt="" />
                </div>
                <div className="w-full mb-4">
                  <h2 className="font-bold text-sm text-[#141414]">COUPONS</h2>
                  <p className="font-normal text-sm text-[#000000a6]">
                    BUY any Headphones & Speakers or Smart Watch worth more than
                    Rs.30…
                  </p>
                  <p className="text-[#B5B5B5] font-normal text-sm">
                    3 Offer/s Available
                  </p>
                </div>
                <div>
                  <img src={rightarrow} alt="" />
                </div>
              </div>
              <div className="h-20 border-b border-[#E0E0E0]">
                <button className="w-1/5 h-12 border border-[#E0E0E0] rounded-full font-bold text-base">
                  View All
                </button>
              </div>
            </div>

            <div className="w-full mb-4 text-left h-48 border-b border-[#E0E0E0] pt-4">
              <h1 className="font-bold text-2xl text-[#141414] mb-4 ">
                Save more with easy EMIs{" "}
              </h1>
              <div className="flex items-center">
                <div className="mr-2">
                  <img src={creditcard} alt="" />
                </div>
                <div className="w-full mb-4">
                  <h2 className="font-bold text-sm text-[#141414]">
                    No Cost EMI on Debit Card Available
                  </h2>
                  <p className="font-normal text-sm text-[#000000a6]">
                    Congratulations! You’re Pre-Approved for Debit Card EMI
                  </p>
                </div>
                <div>
                  <img src={rightarrow} alt="" />
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-2">
                  <img src={creditcard} alt="" />
                </div>
                <div className="w-full mb-4">
                  <h2 className="font-bold text-sm text-[#141414]">
                    No Cost EMI on Credit Card Available
                  </h2>
                  <p className="font-normal text-sm text-[#000000a6]">
                    EMIs from ₹8340.83/month
                  </p>
                </div>
                <div>
                  <img src={rightarrow} alt="" />
                </div>
              </div>
            </div>

            <div className="text-left h-36 border-b border-[#E0E0E0] pt-4">
              <h2 className="font-bold text-lg text-[#141414] mb-2">
                Deliver to
              </h2>
              <div className="flex justify-between mb-2">
                <div>
                  <span className="mr-5 font-bold text-base">400020</span>
                  <span className="font-normal text-sm text-[#000000a6]">
                    Mumbai
                  </span>
                </div>
                <div>
                  <img src={pencil} alt="" />
                </div>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-base text-[#25AB21]">
                  In Stock <span className="text-[#000000a6]">|</span>
                </span>
                <span className="font-bold text-sm text-[#141414]">
                  Delivery by 10th Jul
                </span>
              </div>
            </div>

            <div className="text-left h-24 border-b border-[#E0E0E0] pt-4">
              <h2 className="text-lg text-[#9D9D9D] font-bold">Sold By</h2>
              <h3 className="text-base font-bold">{sellerName}</h3>
            </div>

            <div className="text-left h-44 border-b border-[#E0E0E0] pt-4">
              <h2 className="text-[#141414] text-sm font-bold mb-2">
                Installation Service
              </h2>
              <div className="flex h-24 items-center border rounded-lg border-[#E0E0E0]">
                <div className="mx-3">
                  <img src={productinstallation} alt="" />
                </div>
                <div>
                  <p className="font-normal text-sm text-[#000000a6]">
                    resQ Installation Service
                  </p>
                  <p className="font-bold text-base text-[#00B259]">
                    Included with the product
                  </p>
                  <button className="font-bold text-base text-[#0C5273]">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            <div className="text-left h-1/6 border-b border-[#E0E0E0] pt-4">
              <h2 className="font-bold text-base text-[#141414]">
                Device Protection Plans
              </h2>
              <p className="font-normal mb-2 text-sm text-[#000000a6]">
                Select a warranty plan to get coverage for accidental and liquid
                damage.
              </p>
              <div>
                <div className="flex h-24 items-center border rounded-xl mb-3 border-[#E0E0E0]">
                  <div className="mx-3">
                    <img src={oneyearwarranty} alt="" />
                  </div>
                  <div className="flex-grow">
                    <p className="font-normal text-sm text-[#000000a6] ">
                      1 Year - resQ Care Plan (RCP) Extended Warranty
                    </p>
                    <p className="font-bold text-base text-[#00B259]">
                      ₹1499.00
                    </p>
                    <button className="font-bold text-base text-[#0C5273]">
                      View Details
                    </button>
                  </div>
                  <div className="flex items-center">
                    <button className="border mr-3 rounded-full h-12 w-16 flex justify-center items-center">
                      Add
                    </button>
                  </div>
                </div>
                <div className="flex h-24 items-center border rounded-xl mb-3 border-[#E0E0E0]">
                  <div className="mx-3">
                    <img src={twoyearwarranty} alt="" />
                  </div>
                  <div className="flex-grow">
                    <p className="font-normal text-sm text-[#000000a6]">
                      2 Year - resQ Care Plan (RCP) Extended Warranty
                    </p>
                    <p className="font-bold text-base text-[#00B259]">
                      ₹2888.00
                    </p>
                    <button className="font-bold text-base text-[#0C5273]">
                      View Details
                    </button>
                  </div>
                  <div className="flex items-center">
                    <button className="border mr-3 rounded-full h-12 w-16 flex justify-center items-center">
                      Add
                    </button>
                  </div>
                </div>

                <div className="flex h-24 items-center border rounded-xl mb-3 border-[#E0E0E0]">
                  <div className="mx-3">
                    <img src={productinstallation} alt="" />
                  </div>
                  <div className="flex-grow">
                    <p className="font-normal text-sm text-[#000000a6]">
                      3 Year - resQ Care Plan (RCP) Extended Warranty
                    </p>
                    <p className="font-bold text-base text-[#00B259]">
                      ₹4499.00
                    </p>
                    <button className="font-bold text-base text-[#0C5273]">
                      View Details
                    </button>
                  </div>
                  <div className="flex items-center">
                    <button className="border mr-3 rounded-full h-12 w-16 flex justify-center items-center">
                      Add
                    </button>
                  </div>
                </div>
                <div className="flex items-center">
                  <button className="border mr-3 font-bold rounded-full h-12 w-44 flex justify-center items-center">View 1 more plans</button>
                </div>
              </div>
            </div>

            <div className="text-left flex justify-between h-28 border-b border-[#E0E0E0] pt-4">
              <div>
                <h2 className="font-bold text-2xl mb-4">Add to Compare</h2>
                <p className="font-normal text-base text-[#000000a6]">Compare details with other products</p>
              </div>
              <div className="border border-[#E0E0E0] rounded-full h-14 w-14 flex items-center justify-center">
                <button>
                    <img src={plus} alt="" />
                </button>
              </div>
            </div>

            <div className="text-left h-56 border-b border-[#E0E0E0] pt-4" >
              <h2 className="font-bold text-2xl">Key Features</h2>
              <ul className="list-disc text-black ml-4 mb-4">
                <li className="text-[#000000a6]">Double Twist Moving Ice Tray</li>
                <li className="text-[#000000a6]">Toughened Glass Shelves</li>
                <li className="text-[#000000a6]">Smart Inverter Compressor</li>
                <li className="text-[#000000a6]">Ecofriendly Refrigerant</li>
                <li className="text-[#000000a6]">Humidity Controller</li>
                <li className="text-[#000000a6]">Anti-Bacteria Gasket</li>
              </ul>
            </div>

            <div className="text-left h-80 border-b border-[#E0E0E0] pt-4">
              <h2 className="font-bold text-2xl mb-4">Description</h2>
              <p className="font-bold text-base mb-2">Smart Inverter Compressor</p>
              <p className="font-normal text-lg text-[#000000a6] mb-6">
                {description}
              </p>

              {/* <div className="flex items-center"> */}
                  <button className="border mr-3 font-bold rounded-full h-12 w-44 flex justify-center items-center">More Details</button>
                {/* </div> */}
            </div>

            <div className="text-left h-96 border-b border-[#E0E0E0] pt-4">
              <h2 className="font-bold text-2xl">Specification</h2>
              <h2 className="font-bold text-xl text-[#9d9d9da6]">GENERAL INFORMATION</h2>
              <div className="flex flex-col">
                <table className="border-collapse text-left">
                  <tbody>
                    <tr>
                      <td className="w-48 pb-2 pr-2 pt-2 font-bold text-base text-[#141414]">Stabilizer Free Operation </td>
                      <td className=" pb-2 pr-2 pt-2 text-base text-[#000000a6] font-medium">Yes </td>
                    </tr>
                    <tr>
                      <td className="w-48 pb-2 pr-2 pt-2 font-bold text-base text-[#141414]">Inverter Technology</td>
                      <td className=" pb-2 pr-2 pt-2 text-base text-[#000000a6] font-medium">Yes </td>
                    </tr>
                    <tr>
                      <td className="w-48 pb-2 pr-2 pt-2 font-bold text-base text-[#141414]">Refrigerant</td>
                      <td className=" pb-2 pr-2 pt-2 text-base text-[#000000a6] font-medium">Ecofriendly </td>
                    </tr>
                    <tr>
                      <td className="w-48 pb-2 pr-2 pt-2 font-bold text-base text-[#141414]">Deodorizer</td>
                      <td className=" pb-2 pr-2 pt-2 text-base text-[#000000a6] font-medium">Yes </td>
                    </tr>
                    <tr>
                      <td className="w-48 pb-2 pr-2 pt-2 font-bold text-base text-[#141414]">Model</td>
                      <td className=" pb-2 pr-2 pt-2 text-base text-[#000000a6] font-medium">GL-N292DDSY</td>
                    </tr>
                  </tbody>
                </table>
                <button className="border mr-3 font-bold rounded-full h-12 w-44 flex justify-center items-center">More Details</button>
              </div>
            </div>

            <div className="text-left h-32 border-b border-[#E0E0E0] pt-4">
              <h2 className="font-bold text-2xl mb-6">Cancellation & Returns</h2>
              <div>
                <span className="font-normal text-base text-[#000000a6] mr-2">Return and Refund - Please refer to the policy</span>
                <span><button className="font-bold text-base">Click here</button></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the content */}
    </div>
  );
};

export default View;
