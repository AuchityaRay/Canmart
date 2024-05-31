import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useResolvedPath } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import MsgBox from "../../components/MsgBox/MsgBox";
import Visible from "../../assets/visible.png";
import Hidden from "../../assets/hidden.png";
import { useDispatch, useSelector } from "react-redux";
import { register, sendotp } from "../../actions/User/userAction";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import googlelogo from "../../assets/google.png";
import Navbar from "../../components/Navbar/Navbar";

const countries = [
  { name: "United States", logo: "us" },
  { name: "United Kingdom", logo: "uk" },
  // Add more countries here...
];

const cities = [
  { name: "New York" },
  { name: "London" },
  // Add more cities here...
];


const SignUp = () => {
  const location = useLocation();
  const [ownername, setownername] = useState(location.state?.ownername || "");
  const [companyname, setcompanyname] = useState(location.state?.companyname || "");
  const [email, setEmail] = useState(location.state?.email || "");
  const [mobileNumber, setMobileNumber] = useState(location.state?.mobileNumber || "");
  const [address,setAddress] = useState(location.state?.address || "");
  const [city, setcity] = useState(location.state?.city || "");
  const [country, setcountry] = useState(location.state?.country || "");
  const [dateofregistration, setdateofregistration] = useState(location.state?.dateofregistration || "");
  const [errorMsg, setErrorMsg] = useState(location.state?.wrongOtp || "");
  const [checkbox, setCheckbox] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [industry, setIndustry] = useState("");
  
  const navigate = useNavigate();
  const auth = useSelector(state => state.user);

  // const user = useSelector((state) => state.register); // register = reducer Name
  const state = useSelector((state) => state); // register = reducer Name


  const handleCheckBox = (e) => {
    setCheckbox(!checkbox);
  };

  const dispatch = useDispatch();

  const registerUser = (e) => {

    e.preventDefault();
    dispatch(sendotp(mobileNumber,"signup"))
    .then((sendOtpRes) => {
      if(!sendOtpRes) { 
        // Use the updated state variable
          setErrorMsg("User Already Registered");
      } else {
        setErrorMsg(""); 
        navigate("/verify-user-signup", {
          state: {
            mobileNumber: mobileNumber,
            companyname,
            dateofregistration,
            ownername,
            city,
            country,
            address,
            email,
            industry,
            sendOtpRes: sendOtpRes
          },
        });
      }
      })
      .catch((error) => {
        console.log(error);
      });
  }; 

  return (
    <>
    <Navbar/>
    <div className="flex justify-center">
      <form className="w-1/2 bg-white p-6 rounded-lg" onSubmit={registerUser}>
        <div className="flex justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-left">
              Create an account
            </h2>
            <p className="text-base text-gray-500 mb-4 text-left">
              Already have an account?{" "}
              <span className="font-bold">Sign in</span>
            </p>
            <p className="text-sm font normal text-[#9F9F9F] mb-4 text-left">
              Please fill the information to create your Can mart account
            </p>
          </div>
          <div className="border flex bg-[#FFFFFF] border-[#E5E5E5] h-20 w-64 justify-center items-center">
            <div className="pr-3.5">
              <img src={googlelogo} alt="googlelogo" />
            </div>
            <div className="text-left">
              <p className="font-medium text-lg">Steve Watson</p>
              <p className="text-[#9F9F9F] font-normal text-base">Steveofficial@gmail.com</p>
            </div>
          </div>
        </div>

            {errorMsg &&
              <MsgBox color={'red'} text={errorMsg} />
            }
        <div className="grid grid-cols-2 gap-y-4 gap-x-11">
          <div className="text-left">
            <label className="text-base font-medium text-left">
              Company Name
            </label>
            <input
              className="border mt-2.5 border-[#E5E5E5] bg-[#FFFFFF] p-2  w-full"
              type="text"
              value={companyname}
              onChange={(e) => {
                setcompanyname(e.target.value);
              }}
              required
            />
          </div>
          <div className="text-left">
            <label className="text-base font-medium text-left">
              Owner Name
            </label>
            <input
              className="border mt-2.5 border-[#E5E5E5] bg-[#FFFFFF] p-2  w-full"
              type="text"
              value={ownername}
              onChange={(e) => {
                const inputValue = e.target.value;
                const validatedValue = inputValue
                  .replace(/[^A-Za-z\s]/g, "")
                  .slice(0, 15); // Remove non-alphabetic characters except space and limit to 15 characters
                setownername(validatedValue);
              }}
              required
              maxLength={15}
            />
          </div>
          <div className="text-left">
            <label className="text-base font-medium text-left">
              Date of Registration
            </label>
            <input
              className="border mt-2.5 border-[#E5E5E5] bg-[#FFFFFF] p-2  w-full hover:cursor-pointer "
              placeholder=" "
              value={dateofregistration}
              type="date"
              onChange={(e) => {
                  setdateofregistration(e.target.value);
                }}
                required
            />
          </div>
          <div className="text-left">
            <label className="text-base font-medium text-left">
              Our Industry
            </label>
            <input
              className="border mt-2.5 border-[#E5E5E5] bg-[#FFFFFF] p-2  w-full"
              type="text"
              value={industry}
              onChange={(e) => {
                setIndustry(e.target.value);
              }}
              required
            />
          </div>
          <div className="text-left flex flex-col">
            <label className="text-base font-medium text-left">Phone No</label>
            <input 
            className="border mt-2.5 border-[#E5E5E5] bg-[#FFFFFF] p-2  w-full" 
              country={"in"}
              value={mobileNumber}
              placeholder=""
              pattern="[0-9]{0,10}"
              maxLength={10}
              onChange={(e) => {
                let inputValue = e.target.value;
                let numericValue = inputValue.replace(/\D/g, ""); // Remove non-numeric characters
                setMobileNumber(numericValue);
              }}
              required
            />
          </div>
          <div className="text-left">
            <label className="text-base font-medium text-left">
              Email Address
            </label>
            <input
              className="border mt-2.5 border-[#E5E5E5] bg-[#FFFFFF] p-2  w-full"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="text-left">
            <label className="text-base font-medium text-left">Country</label>
            <select
              className="border mt-2.5 border-[#E5E5E5] bg-[#FFFFFF] p-2 w-full text-[#9F9F9F]"
              value={country}
              onChange={(e) => {
                setcountry(e.target.value);
              }}
              placeholder=""
              required
            >
              <option value="" disabled hidden>
                Select your Country
              </option>
              {countries.map((country) => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className="text-left">
            <label className="text-base font-medium text-left">City</label>
            <select
              className="border mt-2.5 border-[#E5E5E5] bg-[#FFFFFF] p-2  w-full text-[#9F9F9F]"
              value={city}
              onChange={(e) => {
                setcity(e.target.value);
              }}
              required
            >
              <option value="">Select your City</option>
              {cities.map((city) => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-2 text-left">
            <label className="text-base font-medium text-left">Address</label>
            <input
              className="border mt-2.5 border-[#E5E5E5] bg-[#FFFFFF] p-2  w-full"
              type="text"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              required
            />
          </div>
          <div className="col-span-2 flex items-center">
            <input className="mr-2" type="checkbox" required/>
            <span className="text-xs text-gray-500">
              I have read and accept Medella’s{" "}
              <span className="text-[#0088ff] underline">Terms of Use</span> and{" "}
              <span className="text-[#0088ff] underline">Privacy Policy</span>
            </span>
          </div>
        </div>

        <div>
          <button
            className="w-full h-11 bg-black text-white rounded-full py-2 px-4 mt-4"
            type="submit"
          >
            Register With Us
          </button>
        </div>
      </form>
      {/* </form> */}
    </div>
    </>
  );
};

export default SignUp;
