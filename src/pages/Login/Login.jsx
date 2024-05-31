import React, { useState } from 'react';
import CloseIcon from '../../assets/close.png'; // Replace './close.svg' with your close icon path
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import customerslogoimg from "../../assets/customerslogoimg.png"
import googlelogo from "../../assets/google.png";
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { sendotp } from '../../actions/User/userAction';
import Navbar from '../../components/Navbar/Navbar';
import MsgBox from "../../components/MsgBox/MsgBox";
// import "./login.css"

const LoginPage = () => {

    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [mobileNumber, setMobileNumber] = useState(location.state?.mobileNumber || "");
    const [errorMsg, setErrorMsg] = useState(location.state?.wrongOtp || "");
    const [successMsg, setSuccessMsg] = useState("");
    const [otpScreen, SetOtpScreen] = useState(false);
    const [otp, SetOtp] = useState("");

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();

        dispatch(sendotp(mobileNumber, "login"))
            .then((sendOtpRes) => {
                if (!sendOtpRes) {
                    // Use the updated state variable
                    setErrorMsg("User Already logged in");
                } else {
                    setErrorMsg("");
                    navigate("/verify-user-login", {
                        state: {
                            mobileNumber: mobileNumber,
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
        <Navbar ispopup={true} />
        <div className="flex items-center justify-center h-screen bg-black">
            <div className="bg-white rounded-lg shadow-lg w-1/2 p-6">
                <div className="flex">
                    <div className="w-6/12">
                        <div className="carousel-container">
                            <Carousel
                                showThumbs={false}
                                showStatus={false}
                                showArrows={false}
                                infiniteLoop={true}
                            >
                                <div>
                                    <img src={customerslogoimg} alt="Image 1" />
                                </div>
                                <div>
                                    <img src="" alt="Image 2" />
                                </div>
                                <div>
                                    <img src="" alt="Image 3" />
                                </div>
                                <div>
                                    <img src="" alt="Image 4" />
                                </div>
                                <div>
                                    <img src="" alt="Image 5" />
                                </div>
                            </Carousel>
                            <p className='font-bold text-lg'>Generate Leads</p>
                            <div className="carousel-dots">
                                <span className="dot active"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                        </div>
                    </div>
                    <div className="w-80 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold mb-2 text-left pb-2">Login</h2>
                        <p className="text-sm text-[#9F9F9F]  mb-6 text-left">Please enter Login Credentials</p>

                        <div>
                            <label className="text-lg font-medium text-gray-700 block mb-1 text-left">Enter Mobile Number</label>
                            <input className="border border-[#E5E5E5] p-2 w-full mb-4" type="tel" maxLength="10" required value={mobileNumber}
                                onChange={(e)=>{setMobileNumber(e.target.value)}}
                             />
                            <p className="text-xs font-normal text-right text-[#9F9F9F] mb-6">Resend OTP</p>
                            {errorMsg &&
                                <MsgBox color={'red'} text={errorMsg} />
                            }
                            <button className="bg-black text-white rounded-full py-2 px-4 w-full mb-4" onClick={handleLogin}>
                                Send OTP
                            </button>
                        </div>

                        <div className="text-center">
                            <p className="text-sm mb-2 font-medium">New on Can mart? <span className='font-bold'>Sign Up</span></p>
                            <label className="flex items-center cursor-pointer">
                                <input type="checkbox" className="mr-2" required />
                                <span className="text-left text-xs text-[#9F9F9F]">
                                    By logging in, you agree to our Terms and Conditions & Privacy Policy
                                </span>
                            </label>
                        </div>

                        <div className="relative mt-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-[#E4E4E4]"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <span className="bg-white px-3 text-[#E4E4E4]">or</span>
                            </div>
                        </div>

                        {successMsg &&
                                    <MsgBox color={'green'} text={successMsg} />
                                }
                        <div className='flex items-center justify-center border bg-white border-[#E6E6E6] text-black rounded-full py-2 px-4 w-full mt-6'>
                            <div className='pr-2'>
                                <img src={googlelogo} alt="" srcset="" className="h-6 w-6" />
                            </div>
                            <div>
                                <button className="">
                                    Continue With Google
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className='h-fit relative bottom-9 left-14 pr-4'>
                        <button className="relative top-4 right-4" onClick={() =>
                            navigate('/')
                        }>
                            <img src={CloseIcon} alt="CloseIcon" srcset="" />
                        </button>
                    </div>

                </div>


            </div>
        </div>
        </>
    );
};

export default LoginPage;
