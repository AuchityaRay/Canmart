import React , {useState , useEffect , useRef  }from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { register } from "../actions/User/userAction";
import CloseIcon from '../assets/close.png'; // Replace './close.svg' with your close icon path
import passwordkeylock from '../assets/passwordkeylock.png';
import Navbar from "../components/Navbar/Navbar";

const EnterOTP = () => {
  const [otp1,setotp1] = useState();
  const [otp2,setotp2] = useState();
  const [otp3,setotp3] = useState();
  const [otp4,setotp4] = useState();
  const otp1Ref = useRef(null);
  const otp2Ref = useRef(null);
  const otp3Ref = useRef(null);
  const otp4Ref = useRef(null);
  const location =  useLocation();
  const {ownername,email,mobileNumber,companyname, city,country,industry,otp,dateofregistration,address } = location.state || {};
  const auth = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleOTPSent = () => {
    // Handle login functionality
  };

  const handleContinue = ()=> {
    const UserOtp = `${otp1}${otp2}${otp3}${otp4}`
    const user = {
      ownername,
      companyname,
      email,
      mobileNumber,
      city,
      country,
      industry,
      dateofregistration,
      address,
      otp: auth?.otp ? auth?.otp : '',
    }

    if(UserOtp.toString() === user.otp.toString()){
      dispatch(register(user)).then(() => {
        navigate("/", {
          state: {
            userData: user
          },
        });
      })
      .catch((error) => {
        // Handle any errors that occur during the action dispatch
        const formData = {
          ownername,
          companyname,
          email,
          mobileNumber,
          city,
          country,
          industry,
          dateofregistration,
          address,
          wrongOtp: error.toString(),
        };
    
        navigate("/signup", { state: formData });
      });
    }
    else{
      const formData = {
        ownername,
        companyname,
        email,
        mobileNumber,
        city,
        country,
        industry,
        dateofregistration,
        address,
        wrongOtp: "Wrong OTP"
      };
  
      navigate("/signup", { state: formData });
    }

  
  }
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

  const handleSvgClick = () => {
    const formData = {
      // Prepare the form data to be passed as state
      // fullname: fullname,
      // email: email,
      // mobileNumber: mobileNumber,
      // company: company, 
      // postalCode: postalCode,
      wrongOtp: ""
    };

    navigate("/signup", { state: formData });
  };

  // return (
  //   <div>
  //     <div className="flex flex-col items-center justify-center min-h-screen bg-pencil">
  //       <div className="max-w-md px-7 py-9 bg-white">
  //         <div className="flex items-center justify-between">
  //           <h1 className="text-2xl font-bold mb-3 text-left">Enter OTP</h1>
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             className="h-6 w-6 text-gray-700 cursor-pointer"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //             onClick={handleSvgClick}
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               strokeWidth={2}
  //               d="M6 18L18 6M6 6l12 12"
  //             />
  //           </svg>
  //         </div>
  //         <h2 className="text-lg font-bold mb-3">Verification Code</h2>
  //         <p className="text-center text-lg font-medium leading-6 mb-6">
  //           Please enter the verification code that we have sent to your mobile number
  //         </p>
  //         <div className="flex justify-center space-x-4 mb-3">
  //           <input
  //             type="text"
  //             maxLength={1}
  //             className="w-3/12 h-14 rounded px-4 py-2 text-lg text-center bg-input"
  //             onKeyUp={(e) => handleKeyUp(e, otp2Ref, null, setotp1)}
  //             ref={otp1Ref}
  //           />
  //           <input
  //             type="text"
  //             maxLength={1}
  //             className="w-3/12 h-14 rounded px-4 py-2 text-lg text-center bg-input"
  //             onKeyUp={(e) => handleKeyUp(e, otp3Ref, otp1Ref, setotp2)}
  //             ref={otp2Ref}
  //           />
  //           <input
  //             type="text"
  //             maxLength={1}
  //             className="w-3/12 h-14 rounded px-4 py-2 text-lg text-center bg-input"
  //             onKeyUp={(e) => handleKeyUp(e, otp4Ref, otp2Ref, setotp3)}
  //             ref={otp3Ref}
  //           />
  //           <input
  //             type="text"
  //             maxLength={1}
  //             className="w-3/12 h-14 rounded px-4 py-2 text-lg text-center bg-input"
  //             onKeyUp={(e) => handleKeyUp(e, null, otp3Ref, setotp4)}
  //             ref={otp4Ref}
  //           />
  //         </div>
  //         <button className="w-full bg-darkblue text-white font-normal py-2 px-4 rounded mt-6" onClick={handleContinue}>
  //           Continue
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <>
    <Navbar ispopup={true} />
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="bg-white rounded-lg shadow-lg w-1/2 p-6">
        <div className="flex">
          <div className="w-6/12 flex justify-center items-center ml-4">
            <img src={passwordkeylock} alt="" srcset="" />
          </div>
          <div className="w-80 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-2 text-left pb-2">OTP Verification</h2>
            <p className="text-sm text-[#9F9F9F]  mb-6 text-left">Enter OTP sent to **** *** ****</p>
            
            <div>
              <label className="text-lg font-medium text-gray-700 block mb-1 text-left pb-4">Enter OTP</label>
              <div className="flex justify-start space-x-4 mb-3">
            <input
              type="text"
              maxLength={1}
              className="border border-[#000000] w-14 h-14 rounded px-4 py-2 text-lg text-center bg-[#FFFFFF]"
              onKeyUp={(e) => handleKeyUp(e, otp2Ref, null, setotp1)}
              ref={otp1Ref}
            />
            <input
              type="text"
              maxLength={1}
              className="border border-[#000000] w-14 h-14 rounded px-4 py-2 text-lg text-center bg-[#FFFFFF]"
              onKeyUp={(e) => handleKeyUp(e, otp3Ref, otp1Ref, setotp2)}
              ref={otp2Ref}
            />
            <input
              type="text"
              maxLength={1}
              className="border border-[#000000] w-14 h-14 rounded px-4 py-2 text-lg text-center bg-[#FFFFFF]"
              onKeyUp={(e) => handleKeyUp(e, otp4Ref, otp2Ref, setotp3)}
              ref={otp3Ref}
            />
            <input
              type="text"
              maxLength={1}
              className="border border-[#000000] w-14 h-14 rounded px-4 py-2 text-lg text-center bg-[#FFFFFF]"
              onKeyUp={(e) => handleKeyUp(e, null, otp3Ref, setotp4)}
              ref={otp4Ref}
            />
          </div>
            </div>
            
            <div className="text-center">
              <p className="text-sm mb-2 font-medium text-[#9F9F9F] py-4">Didn’t You receive the OTP? <span className='font-bold text-black'>Resend OTP </span></p>
            </div>

            <button className="bg-black text-white rounded-full py-2 px-4 w-full mb-4" onClick={handleContinue}>
                Verify
              </button>
          </div>

          <div className='h-fit relative bottom-9 left-14'>
          <button className="relative top-4 right-8" onClick={handleSvgClick} >
          <img src={CloseIcon} alt="CloseIcon" srcset=""  />
        </button>
          </div>
          
        </div>
        
        
      </div>
    </div>
    </>
  );
};

export default EnterOTP;
