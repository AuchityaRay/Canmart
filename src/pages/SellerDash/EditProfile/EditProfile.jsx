import React, { useEffect, useState , useRef} from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../../actions/User/userAction";

const EditProfile = () => {
  const navigate = useNavigate();

  const [ownername, setOwnerName] = useState(null);
  const [companyname, setcompanyname] = useState(null);
  const [address, setaddress] = useState(null);
  const [city, setcity] = useState(null);
  const [state, setstate] = useState(null);
  const [industry, setindustry] = useState(null);
  const [address2, setaddress2] = useState(null);
  const [mobileNumber, setmobileNumber] = useState(null);
  const [email, setemail] = useState(null);
  const [alternateemail, setalternatemail] = useState(null);
  const [alternatemobile, setalternatemobile] = useState(null);
  const [postalCode, setpostalCode] = useState(null);
  const [country, setcountry] = useState(null);
  const [street, setstreet] = useState(null);
  const [landmark, setlandmark] = useState(null);
  const [ifsc, setifsc] = useState(null);
  const [bankname, setbankname] = useState(null);
  const [accounttype, setaccounttype] = useState(null);
  const [accountnumber, setaccountnumber] = useState(null);
  const [authStatus, setAuthStatus] = useState("");
  const [isPopup,setPopup] = useState(false);
  const [id,setId] = useState(null);
  const [otp1,setotp1] = useState();
  const [otp2,setotp2] = useState();
  const [otp3,setotp3] = useState();
  const [otp4,setotp4] = useState();
  const otp1Ref = useRef(null);
  const otp2Ref = useRef(null);
  const otp3Ref = useRef(null);
  const otp4Ref = useRef(null);

  const auth = useSelector(state => state.user);
  const auth2 = useSelector(state => state.register);

  useEffect(() => {
    console.log("auth", auth)
    console.log("auth2", auth2)
    if (auth?.authenticate === true) {
      setAuthStatus("login");
      setemail(auth.user.email);
      setId(auth.user._id);
      setOwnerName(auth.user.ownername);
      setaddress(auth.user.address);
      setaddress2(auth.user.address2);
      setaccountnumber(auth.user.accountnumber);
      setaccounttype(auth.user.accounttype);
      setcompanyname(auth.user.companyname);
      setstate(auth.user.state);
      setaddress(auth.user.address);
      setcountry(auth.user.country);
      setcity(auth.user.city);
      setstreet(auth.user.street);
      setbankname(auth.user.bankname);
      setlandmark(auth.user.landmark);
      setindustry(auth.user.industry);
      setmobileNumber(auth.user.mobileNumber);
      setalternatemail(auth.user.alternateemail);
      setalternatemobile(auth.user.alternatemobile);
      setpostalCode(auth.user.postalCode);
      setifsc(auth.user.ifsc);
    }
    else if (auth2?.registered === true) {
      setAuthStatus("register");
    }
  }, [auth])

  const dispatch = useDispatch();

  const handleKeyUp = (event, refToFocus,refToFocusBack,setOtpValue) => {
    const maxLength = parseInt(event.target.getAttribute('maxlength'));
    const currentLength = event.target.value.length;

    if (event.key === 'Backspace' && currentLength === 0 && refToFocusBack) {
      refToFocusBack.current.focus();
    }

    if (event.key !== 'Backspace' && currentLength === maxLength && refToFocus) {
      refToFocus.current.focus();
    }
    setOtpValue(event.target.value);
  };

  const updateUserDetails = () => {
    const user = {
      id,
      ownername,
      email,
      mobileNumber,
      address,
      city,
      state,
      country,
      alternateemail,
      alternatemobile,
      landmark,
      address2,
      ifsc,
      bankname,
      accountnumber,
      accounttype,
      street,
      postalCode,
    }

    dispatch(updateUser(user)).then(() => {
      handleViewProfile();
    })

  }

  const handleViewProfile=()=>{
    navigate('/userprofile');
  }

  const handlePopupToggle=(event)=>{
    event.preventDefault()
    setPopup(!isPopup);
  }

  return (
    <>
    
    {isPopup &&
  <div className='fixed top-0 left-0 bg-[#000000c3] w-full h-screen z-50 flex items-center justify-center'>
  <div className='popup absolute w-[600px] h-[425px] bg-white top-20 rounded-lg'>
    <div className='text-shadeofgray font-bold w-full flex p-2 pr-4 justify-end cursor-pointer text-lg' onClick={handlePopupToggle}>X</div>
    <div className='text-2xl font-semibold flex justify-center items-center h-12'>For Security, Please Identify Yourself</div>
    <div className="text-base font-normal text-[#9F9F9F] w-3/5 mx-auto mb-4">To Identify Yourself, Please Enter the 4 digit One Time Password (OTP) sent via SMS on your mobile
(+91-6263668723)</div>
    
<div className="w-80 flex mx-auto flex-col justify-center">
            
            <div className="">
              <label className="text-base font-medium text-gray-700 block mb-1 text-center pb-4">Enter OTP</label>
              <div className="flex justify-center space-x-4 ">
            <input
              type="text"
              maxLength={1}
              className="border border-[#000000] w-10 h-10 rounded px-2 py-2 text-lg text-center bg-[#FFFFFF]"
              onKeyUp={(e) => handleKeyUp(e, otp2Ref, null, setotp1)}
              ref={otp1Ref}
            />
            <input
              type="text"
              maxLength={1}
              className="border border-[#000000] w-10 h-10 rounded px-2 py-2 text-lg text-center bg-[#FFFFFF]"
              onKeyUp={(e) => handleKeyUp(e, otp3Ref, otp1Ref, setotp2)}
              ref={otp2Ref}
            />
            <input
              type="text"
              maxLength={1}
              className="border border-[#000000] w-10 h-10 rounded px-2 py-2 text-lg text-center bg-[#FFFFFF]"
              onKeyUp={(e) => handleKeyUp(e, otp4Ref, otp2Ref, setotp3)}
              ref={otp3Ref}
            />
            <input
              type="text"
              maxLength={1}
              className="border border-[#000000] w-10 h-10 rounded px-2 py-2 text-lg text-center bg-[#FFFFFF]"
              onKeyUp={(e) => handleKeyUp(e, null, otp3Ref, setotp4)}
              ref={otp4Ref}
            />
          </div>
            </div>
            
            <div className="text-center">
              <p className="text-sm mb-2 font-medium text-[#9F9F9F] py-4">Did n’t receive OTP ? <span className='font-bold text-black'>Resend</span></p>
            </div>

            <button className="bg-black text-white rounded-full py-2 px-4 w-[80%] mx-auto" onClick={handlePopupToggle}>
                Submit
              </button>
          </div>

  </div>
</div>

}

    <div className="min-h-screen w-full flex flex-col  items-center px-10 py-10 bg-[#f3f3f3]">


      <div className="bg-white w-[1200px] h-[460px] flex-col shadow">
        <div className="border-b border-[#1a1a1d24] h-14 w-full flex items-center px-5 justify-between ">
          <p className="font-semibold">Personal Information</p>
          <p className="bg-white text-black rounded-full text-sm  border h-9 w-32 items-center justify-center flex cursor-pointer" onClick={handleViewProfile}>View Profile</p>
        </div>

        <div className="flex px-12">

          <form className="flex-col ">
            <div className="flex w-[600px] justify-between items-center mt-5">
              <label>Name*</label>
              <input className="text-sm px-3 rounded border w-[340px] h-10 border-[#1a1a1d5a] mr-5" placeholder={ownername} onChange={(e)=>{setOwnerName(e.target.value)}}></input>
            </div>
            <div className="flex w-[698px] justify-between items-center mt-8">
              <label>Mobile Number*</label>
              <span>
                <input className="text-sm px-3 rounded border w-[340px] h-10 border-[#1a1a1d5a] mr-5" placeholder={mobileNumber} onChange={(e)=>{setmobileNumber(e.target.value)}}></input>
                <button className="underline text-blue" onClick={handlePopupToggle}>Click To Verify</button>
              </span>
            </div>
            <div className="flex w-[698px] justify-between items-center mt-8">
              <label>Email ID*</label>
              <span>
                <input className="text-sm px-3 rounded border w-[340px] h-10 border-[#1a1a1d5a] mr-5" placeholder={email} onChange={(e)=>{setemail(e.target.value)}}></input>
                <button className="underline text-blue" onClick={handlePopupToggle}>Click To Verify</button>
              </span>
            </div>
            <div className="flex w-[698px] justify-between items-center mt-8">
              <label>Alternate Mobile Number*</label>
              <span>
                <input className="text-sm px-3 rounded border w-[340px] h-10 border-[#1a1a1d5a] mr-5" placeholder={alternatemobile} onChange={(e)=>{setalternatemobile(e.target.value)}}></input>
                <button className="underline text-blue" onClick={handlePopupToggle}>Click To Verify</button>
              </span>
            </div>
            <div className="flex w-[698px] justify-between items-center mt-8">
              <label>Alternate Email ID*</label>
              <span>
                <input className="text-sm px-3 rounded border w-[340px] h-10 border-[#1a1a1d5a] mr-5" placeholder={alternateemail} onChange={(e)=>{setalternatemail(e.target.value)}}></input>
                <button className="underline text-blue" onClick={handlePopupToggle}>Click To Verify</button>
              </span>
            </div>
          </form>

          <div className="flex flex-col justify-center items-center w-full pl-32">
            <div className="bg-gray border-4 border-white shadow-lg rounded-full w-36 h-36"></div>
            <p className="mt-3">Profile Picture</p>
          </div>

        </div>
        <div className=" w-full h-16 flex items-center justify-end px-20 pb-5">
          <button className="bg-black text-white text-sm w-48 rounded-full h-10" onClick={updateUserDetails}>Save</button>
        </div>

      </div>





      <div className="bg-white w-[1200px] h-[460px] flex-col mt-8 shadow">
        <div className="border-b border-[#1a1a1d24] h-14 w-full flex items-center px-5 justify-between ">
          <p className="font-semibold">Address Information</p>
        </div>

        <div className="flex px-12 ">

          <form className="flex-col mr-10">
            <div className="flex w-[550px] justify-between items-center mt-5">
              <label>PIN Code</label>
              <input className="text-sm px-3 rounded border w-[340px] h-10 border-[#1a1a1d5a] mr-5" placeholder={postalCode} onChange={(e)=>{setpostalCode(e.target.value)}}></input>
            </div>
            <div className="flex w-[550px] justify-between items-center mt-8">
              <label>State</label>
              <input className="text-sm px-3 rounded border w-[340px] h-10 border-[#1a1a1d5a] mr-5" placeholder={state} onChange={(e)=>{setstate(e.target.value)}}></input>
            </div>
            <div className="flex w-[550px] justify-between items-center mt-8">
              <label>City</label>
              <input className="text-sm px-3 rounded border w-[340px] h-10 border-[#1a1a1d5a] mr-5" placeholder={city} onChange={(e)=>{setcity(e.target.value)}}></input>
            </div>
            <div className="flex w-[550px] justify-between items-center mt-8">
              <label>Address Line 1</label>
              <input className="text-sm px-3 rounded border w-[340px] h-10 border-[#1a1a1d5a] mr-5" placeholder={address} onChange={(e)=>{setaddress(e.target.value)}}></input>
            </div>
            <div className="flex w-[550px] justify-between items-center mt-8">
              <label>Address Line 2</label>
              <input className="text-sm px-3 rounded border w-[340px] h-10 border-[#1a1a1d5a] mr-5" placeholder={address2} onChange={(e)=>{setaddress2(e.target.value)}}></input>
            </div>
          </form>

          <form className="flex-col ">
            <div className="flex w-[550px] justify-between items-center mt-5">
              <label>Country</label>
              <input className="text-sm px-3 rounded border w-[340px] h-10 border-[#1a1a1d5a] mr-5" placeholder={country} onChange={(e)=>{setcountry(e.target.value)}}></input>
            </div>
            <div className="flex w-[550px] justify-between items-center mt-8">
              <label>Street</label>
              <input className="text-sm px-3 rounded border w-[340px] h-10 border-[#1a1a1d5a] mr-5" placeholder={street} onChange={(e)=>{setstreet(e.target.value)}}></input>
            </div>
            <div className="flex w-[550px] justify-between items-center mt-8">
              <label>Landmark</label>
              <input className="text-sm px-3 rounded border w-[340px] h-10 border-[#1a1a1d5a] mr-5" placeholder={landmark}  onChange={(e)=>{setlandmark(e.target.value)}}></input>
            </div>
          </form>

        </div>







        <div className=" w-full h-16 flex items-center justify-end px-20 pb-5">
          <button className="bg-black text-white text-sm w-48 rounded-full h-10" onClick={updateUserDetails}>Save</button>
        </div>

      </div>



      <div className="bg-white w-[1200px] h-[300px] flex-col mt-8 shadow">
        <div className="border-b border-[#1a1a1d24] h-14 w-full flex items-center px-5 justify-between ">
          <p className="font-semibold">Bank Information</p>

        </div>

        <div className="flex px-12 ">

          <form className="flex-col mr-10">
            <div className="flex w-[550px] justify-between items-center mt-5">
              <label>IFSC Code</label>
              <input className="text-sm px-3 rounded border w-[340px] h-10 border-[#1a1a1d5a] mr-5" placeholder={ifsc} onChange={(e)=>{setifsc(e.target.value)}}></input>
            </div>
            <div className="flex w-[550px] justify-between items-center mt-8">
              <label>Bank Name</label>
              <input className="text-sm px-3 rounded border w-[340px] h-10 border-[#1a1a1d5a] mr-5" placeholder={bankname} onChange={(e)=>{setbankname(e.target.value)}}></input>
            </div>
          </form>

          <form className="flex-col ">
            <div className="flex w-[550px] justify-between items-center mt-5">
              <label>Account Number</label>
              <input className="text-sm px-3 rounded border w-[340px] h-10 border-[#1a1a1d5a] mr-5" placeholder={accountnumber} onChange={(e)=>{setaccountnumber(e.target.value)}}></input>
            </div>
            <div className="flex w-[550px] justify-between items-center mt-8">
              <label>Account Type</label>
              <input className="text-sm px-3 rounded border w-[340px] h-10 border-[#1a1a1d5a] mr-5" placeholder={accounttype} onChange={(e)=>{setaccounttype(e.target.value)}}></input>
            </div>
          </form>

        </div>







        <div className=" w-full h-16 flex items-center justify-end px-20 pb-5">
          <button className="bg-black text-white text-sm w-48 rounded-full h-10 mt-20" onClick={updateUserDetails}>Save</button>
        </div>

      </div>




    </div>
    </>
  );
};

export default EditProfile;
