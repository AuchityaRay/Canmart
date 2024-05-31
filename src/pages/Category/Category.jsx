import React, { useEffect, useState } from 'react';
import shirt1 from "../../assets/shirt1.png"
import shirt2 from "../../assets/shirt2.png"
import shirt3 from "../../assets/shirt3.png"
import shirt4 from "../../assets/shirt4.png"
import shirt5 from "../../assets/shirt5.png"
import blackshirt from "../../assets/black shirt.png"
import shirtbadminton from "../../assets/shirtbadminton.png"
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ViewCategoryPage = () => {
const navigate = useNavigate();
  const {id} = useParams();

  const [subCategory,setSubCategory] = useState(null);
  const [parentName,setparentName] = useState(null);

  const initialData = useSelector(state => state.initialData);
  const category = initialData.categories;

  useEffect(()=>{
    const parentCat = category.filter(checkParentName);
    const result = category.filter(checkParent);
    
    function checkParentName(a){
      return a._id == id;
    }

    function checkParent(a){
      return a.parentId == id
    }

    setparentName(parentCat[0].name);
    setSubCategory(result);

    console.log(result)
  },[])

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  const [isBuyChecked,setbuyChecked] = useState(true);
  const [isSellChecked,setsellChecked] = useState(false);
  const [isBuyDisabled,setbuydisabled] = useState(false);
  const [isSellDisabled,setselldisabled] = useState(true);
  const [isPopup,setPopup] = useState(false);

  const imageUrls = [
    shirtbadminton, shirtbadminton, shirtbadminton, shirtbadminton, shirtbadminton, shirtbadminton, shirtbadminton, shirtbadminton, shirtbadminton, shirtbadminton, shirtbadminton, shirtbadminton, shirtbadminton, shirtbadminton, shirtbadminton, shirtbadminton, shirtbadminton, shirtbadminton, shirtbadminton, shirtbadminton
  ];

  const handleBuyClick=()=>{
    setbuyChecked(true);
    setsellChecked(false);
    setbuydisabled(false);
    setselldisabled(true);
  } 
  
  const handleSellClick=()=>{
    setbuyChecked(false);
    setsellChecked(true);
    setbuydisabled(true);
    setselldisabled(false);
  }

  const handlePopupToggle=()=>{
    setPopup(!isPopup);
  }

  return (
    <div>
{/* POPUP  */}
{isPopup &&
  <div className='fixed top-0 left-0 bg-[#000000c3] w-full h-screen z-50 flex items-center justify-center'>
  <div className='popup absolute w-[600px] h-[400px] bg-white top-20 rounded-lg'>
    <div className='text-shadeofgray font-bold w-full flex p-2 pr-4 justify-end cursor-pointer text-lg' onClick={handlePopupToggle}>X</div>
    <div className='text-2xl font-semibold flex justify-center items-center h-16 mb-5'>Connect Instantly With Suppliers</div>
    <form className='w-full flex flex-col items-center'>

      <div className={`w-[320px] h-12 rounded border flex items-center p-4 ${isBuyDisabled ? "border-gray" : "border-black"}`}>
        <input type="radio" className='h-4 w-4 peer form-radio accent-black' checked={isBuyChecked} onClick={handleBuyClick} />
        <p className={`ml-2 text-sm ${isBuyDisabled ? "text-gray" : "text-black"}`}>Want to buy</p>
      </div>

      <div className={`mt-5 w-[320px] h-12 rounded border flex items-center p-4 ${isSellDisabled ? "border-gray" : "border-black"}`}>
        <input type="radio" className='h-4 w-4 peer form-radio accent-black' checked={isSellChecked} onClick={handleSellClick} />
        <p className={`ml-2 text-sm ${isSellDisabled ? "text-gray" : "text-black"}`}>Want to sell</p>
      </div>

      <button className='mt-7 w-[320px] rounded-full h-12 bg-black text-white flex items-center justify-center'>Submit</button>
    </form>
  </div>
</div>

}
{/* POPUP  */}

      <Navbar />
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
      <div className='flex w-[78%] h-12 items-center m-auto'>
        <span className='font-bold text-base mr-2.5 cursor-pointer' onClick={()=>{navigate('/')}}>Home</span> <span className='mr-2.5 text-[#000000a6]'>&gt;</span> <span className='font-bold text-base mr-2.5'>All Categories</span> <span className='mr-2.5 text-[#000000a6]'>&gt;</span> <span className='text-[#000000a6]'>Fashion & Clothes</span>
      </div>
      <div className='flex justify-end'>
        <div className="flex mr-8 w-[87%] h-full justify-between">
          <div className="w-72 h-1/2 bg-white border border-[#E4E4E4] shadow-sm rounded">
            <div className="p-4">
              <div className="bg-black text-white h-14 flex items-center justify-start">
                <h1 className="text-xl font-bold pl-4">Filters</h1>
              </div>
              <div className="flex flex-col m-2.5">
                <div>
                  <p className="text-sm font-medium text-xl mb-4 text-left">Sort By</p>
                  <select className="mb-6 mt-2 font-medium text-lg border rounded-md h-12 w-full m-auto w-64">
                    <option value="latest" selected>Latest Arrivals</option>
                    <option value="old">Old</option>
                    <option value="new">New</option>
                  </select>
                </div>

                <div className="flex h-16 border border-y-[#E7E7E7] border-x-0 items-center justify-between">
                  <span className="ml-3 text-xl font-medium">Active Supplier</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="flex border border-[#E7E7E7] w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-[#00B259] rounded-2xl peer dark:bg-[#00B259] peer-checked:after:translate-x-full peer-checked:after:bg-[#00B259] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#00B2592B]"></div>
                  </label>
                </div>

                <div className="flex h-16 border border-b-[#E7E7E7] border-x-0 border-t-0 items-center justify-between">
                  <span className="text-left ml-3 text-xl font-medium">TI Trusted</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="flex border border-[#E7E7E7] w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-[#00B259] rounded-2xl peer dark:bg-[#00B259] peer-checked:after:translate-x-full peer-checked:after:bg-[#00B259] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#00B2592B]"></div>
                  </label>
                </div>

                <div>
                  <h1 className="text-xl font-medium my-3 text-left">Business Type</h1>
                  <div className="flex items-center mb-2">
                    <input type="checkbox" id="manufacturer" className="mr-3 h-4 w-4 accent-[#DADADA]" />
                    <label htmlFor="manufacturer">Manufacturer</label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input type="checkbox" id="supplier" className="mr-3 h-4 w-4 accent-[#DADADA]" />
                    <label htmlFor="supplier">Supplier</label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input type="checkbox" id="explorer" className="mr-3 h-4 w-4 accent-[#DADADA]" />
                    <label htmlFor="explorer">Explorer</label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input type="checkbox" id="trader" className="mr-3 h-4 w-4 accent-[#DADADA] checked:bg-[#000000]" />
                    <label htmlFor="trader">Trader</label>
                  </div>
                </div>

                <h1 className="text-sm font-medium text-xl mb-4 text-left">Budget</h1>
                <select className="mb-6 mt-2 font-medium text-lg border rounded-md h-12 w-full m-auto w-64">
                  <option value="100000-200000">1,00,000 - 2,00,000</option>
                  <option value="below-10000">Below 10,000</option>
                  <option value="10000-30000">10,000 - 30,000</option>
                  <option value="30000-50000">30,000 - 50,000</option>
                  <option value="50000-70000">50,000 - 70,000</option>
                  <option value="70000-90000">70,000 - 90,000</option>
                  <option value="90000-100000">90,000 - 1,00,000</option>
                </select>
                <button className="bg-black text-white py-2 px-4 rounded-full w-48 h-12">Apply Filters</button>
              </div>
            </div>
          </div>

          <div className="w-[72%]">
            <div className='mb-6'>
              <div className='flex justify-between mb-3'>
                <h1 className="text-2xl font-medium" >Top {parentName} Categories</h1>
                <div className='h-10 w-10 bg-black flex justify-center items-center'>
                  <span className='text-white font-bold'>&gt;</span>
                </div>
              </div>
              <div className="flex justify-evenly">


              {subCategory?.map((c,key)=>(
                <div key={key}  className='flex justify-center items-center mr-2 h-48 w-60 bg-white border border-[#E6E6E6] shadow-sm rounded-lg'>
                  <img className="max-h-full max-w-full" src={c.img} alt="T-Shirt" />
                </div>
              ))
              }



              </div>
            </div>
            <div className='bg-[#F8F8F8] h-60'>
              <h1 className="text-2xl font-medium py-4 text-left ml-4">Explore Categories</h1>
              <div className="flex flex-wrap">
                <div className="w-48 h-12 m-2 bg-white flex justify-between items-center border border-[#CECECE] shadow-sm rounded-md">
                  <img className="pl-2 h-10 w-14" src={blackshirt} alt="T-Shirt" />
                  <p className="font-medium text-base text-left pr-2">Body Fit T-shirts</p>
                </div>
                <div className="w-48 h-12 m-2 bg-white flex justify-between items-center border border-[#CECECE] shadow-sm rounded-md">
                  <img className="pl-2 h-10 w-14" src={blackshirt} alt="T-Shirt" />
                  <p className="font-medium text-base text-left pr-2">Body Fit T-shirts</p>
                </div>
                <div className="w-48 h-12 m-2 bg-white flex justify-between items-center border border-[#CECECE] shadow-sm rounded-md">
                  <img className="pl-2 h-10 w-14" src={blackshirt} alt="T-Shirt" />
                  <p className="font-medium text-base text-left pr-2">Body Fit T-shirts</p>
                </div>
                <div className="w-48 h-12 m-2 bg-white flex justify-between items-center border border-[#CECECE] shadow-sm rounded-md">
                  <img className="pl-2 h-10 w-14" src={blackshirt} alt="T-Shirt" />
                  <p className="font-medium text-base text-left pr-2">Body Fit T-shirts</p>
                </div>
                <div className="w-48 h-12 m-2 bg-white flex justify-between items-center border border-[#CECECE] shadow-sm rounded-md">
                  <img className="pl-2 h-10 w-14" src={blackshirt} alt="T-Shirt" />
                  <p className="font-medium text-base text-left pr-2">Body Fit T-shirts</p>
                </div>
                <div className="w-48 h-12 m-2 bg-white flex justify-between items-center border border-[#CECECE] shadow-sm rounded-md">
                  <img className="pl-2 h-10 w-14" src={blackshirt} alt="T-Shirt" />
                  <p className="font-medium text-base text-left pr-2">Body Fit T-shirts</p>
                </div>
                <div className="w-48 h-12 m-2 bg-white flex justify-between items-center border border-[#CECECE] shadow-sm rounded-md">
                  <img className="pl-2 h-10 w-14" src={blackshirt} alt="T-Shirt" />
                  <p className="font-medium text-base text-left pr-2">Body Fit T-shirts</p>
                </div>
                <div className="w-48 h-12 m-2 bg-white flex justify-between items-center border border-[#CECECE] shadow-sm rounded-md">
                  <img className="pl-2 h-10 w-14" src={blackshirt} alt="T-Shirt" />
                  <p className="font-medium text-base text-left pr-2">Body Fit T-shirts</p>
                </div>
                {/* Add more cards here */}
              </div>
            </div>
            <div className="w-full h-0.5 bg-[#EBEBEB] my-8"></div>
            <div>
              <h1 className="text-2xl font-medium py-4 text-left ml-4">Top Products</h1>
              <div className="grid grid-cols-4 gap-4">
                {
                  imageUrls.map((ImageURL, ind) => (
                    <div className="p-1 mb-2 bg-white border border-[#E4E4E4] shadow-md rounded-md">
                      <img className="p-3 w-full" src={ImageURL} alt="T-Shirt" />
                      <p className="mt-2 font-medium text-sm text-left">Grey And Also Available In Different Colour Mens Plain..</p>
                      <p className="font-medium text-sm text-left">Price: 200 $ (Approx.)</p>
                      <div className="flex ">
                        <span className="mr-1 text-green">&#9733;</span>
                        <span className="mr-1 text-green">&#9733;</span>
                        <span className="mr-1 text-green">&#9733;</span>
                        <span className="mr-1 text-green">&#9733;</span>
                        <span>&#9734;</span>
                      </div>
                      <button className="bg-black text-white py-2 px-4 mt-2 rounded-full w-11/12" onClick={handlePopupToggle}>Send Query</button>
                      <button className="bg-white text-black py-2 px-4 mt-2 mb-4 border font-medium rounded-full w-11/12">View Number</button>
                    </div>
                  ))
                }

                {/* Add more cards here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCategoryPage;
