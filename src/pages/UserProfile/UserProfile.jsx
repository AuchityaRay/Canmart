import React, { useEffect, useState } from "react";
import M1 from "../../assets/m1.png";
import M2 from "../../assets/m2.png";
import M3 from "../../assets/m3.png";
import Navbar from "../../components/Navbar/Navbar";
import defaultprofile from "../../assets/defaultprofile.png";
import { GrLocation } from "react-icons/gr";
import { RiCalendar2Line } from "react-icons/ri";
import { RiStarSmileFill } from "react-icons/ri";
import { RiEdit2Fill } from "react-icons/ri";
import { RiPhoneFill } from "react-icons/ri";
import { RiMailFill } from "react-icons/ri";
// import DonutChart from 'react-donut-chart'
import ReactApexChart from 'react-apexcharts';
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const UserProfile = () => {

  const navigate = useNavigate();

  const [percentage, setPercentage] = useState(79); // Set the initial percentage value here

  const chartData = {
    series: [percentage, 100 - percentage], // Calculate the remaining percentage
    options: {
      // ... (other options)
      dataLabels: {
        enabled: false, // Set to false to remove the percentage labels
      },
      legend: {
        show: false, // Set to false to remove the legend
      },
      annotations: {
        position: "center", // Set the position to center
        points: [
          {
            x: 0, // x-coordinate
            y: 0, // y-coordinate
            marker: {
              size: 0, // Hide the marker
            },
            label: {
              text: `${percentage}%`, // Dynamic percentage value
              style: {
                fontSize: "24px",
                fontWeight: "bold",
                color: "#000000",
                cssClass: "center-label", // Add a CSS class to style the label
              },
            },
          },
        ],
      },
      colors: ["#00D369", "#E6E6E6"],
    },
  }
  const [authStatus, setAuthStatus] = useState("");
  const auth = useSelector(state => state.user);
  const auth2 = useSelector(state => state.register);


  const [ownername, setOwnerName] = useState(null);
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [street, setStreet] = useState(null);
  const [email, setEmail] = useState(null);
  const [dateofregistration, setDateOfRegistration] = useState(null);
  const [industry, setIndustry] = useState(null);
  const [mobileNumber, setMobileNumber] = useState(null);
  const [address, setAddress] = useState(null);
  const [address2, setAddress2] = useState(null);
  const [alternateemail, setalternateemail] = useState(null);
  const [alternatemobile, setalternatemobile] = useState(null);
  const [ifsc, setifsc] = useState(null);
  const [bankname, setbankname] = useState(null);
  const [accountnumber, setaccountnumber] = useState(null);
  const [accounttype, setaccounttype] = useState(null);
  const [postalCode, setPostalCode] = useState(null);
  const [landmark, setLandmark] = useState(null);

  useEffect(() => {
    console.log("auth", auth)
    console.log("auth2", auth2)
    if (auth?.authenticate === true) {
      setAuthStatus("login");
      setEmail(auth.user.email);
      setAddress(auth.user.address);
      setOwnerName(auth.user.ownername);
      setCountry(auth.user.country);
      setCity(auth.user.city);
      setState(auth.user.state);
      setIndustry(auth.user.industry);
      setDateOfRegistration(auth.user.dateofregistration);
      setMobileNumber(auth.user.mobileNumber);
      setalternateemail(auth.user.alternateemail);
      setalternatemobile(auth.user.alternatemobile);
      setifsc(auth.user.ifsc);
      setbankname(auth.user.bankname);
      setaccountnumber(auth.user.accountnumber);
      setaccounttype(auth.user.accounttype);
      setStreet(auth.user.street);
      setAddress2(auth.user.address2);
      setPostalCode(auth.user.postalCode);
      setLandmark(auth.user.landmark);
    }
    else if (auth2?.registered === true) {
      setAuthStatus("register");
    }


    profileCompeltenessCheck();
  }, [percentage])

  const handleEdit = () => {
    navigate('/editprofile');
  }

  const hideAccountNumber = () => {
    var hiddenaccno = "";
    var accno = accountnumber?.toString();
    for (let i = 0; i < accno?.length - 4; i++) {
      hiddenaccno = hiddenaccno + "*";
    }
    return hiddenaccno
  }


  const profileCompeltenessCheck = () => {
    const totalFields = 17;
    var completedFields = 0;
    var incompletedFields = 0;
    ownername ? completedFields++ : incompletedFields++;
    email ? completedFields++ : incompletedFields++;
    address ? completedFields++ : incompletedFields++;
    address2 ? completedFields++ : incompletedFields++;
    city ? completedFields++ : incompletedFields++;
    street ? completedFields++ : incompletedFields++;
    state ? completedFields++ : incompletedFields++;
    country ? completedFields++ : incompletedFields++;
    alternateemail ? completedFields++ : incompletedFields++;
    alternatemobile ? completedFields++ : incompletedFields++;
    bankname ? completedFields++ : incompletedFields++;
    ifsc ? completedFields++ : incompletedFields++;
    accountnumber ? completedFields++ : incompletedFields++;
    accounttype ? completedFields++ : incompletedFields++;
    mobileNumber ? completedFields++ : incompletedFields++;
    postalCode ? completedFields++ : incompletedFields++;
    landmark ? completedFields++ : incompletedFields++;

    var percentComplete = (completedFields / totalFields) * 100;
    percentComplete = parseInt(percentComplete);
    setPercentage(percentComplete);
  }

  const handleSidebarClickOne = () => {
    navigate('/userprofile')
  }
  const handleSidebarClickTwo = () => {
    navigate('/addproduct')
  }
  const handleSidebarClickThree = () => {
    navigate('/manageproducts')
  }



  return (
    <div className="bg-[#F8F8F8]">
      <Navbar showSearchBar={true} />
        <div className="bg-black h-[1300px] w-[50px] mt-5 pt-16 flex flex-col items-center absolute left-0">
          <span className="mb-7 h-4 w-4"
            onClick={handleSidebarClickOne}
          >
            <img className="w-full h-full cursor-pointer " src={M1} alt="" />
          </span>
          <span className="mb-7 h-4 w-4"
            onClick={handleSidebarClickTwo}
          >
            <img className="w-full h-full cursor-pointer" src={M2} alt="" />
          </span>
          <span className="mb-7 h-4 w-4"
            onClick={handleSidebarClickThree}>
            <img className="w-full h-full cursor-pointer " src={M3} alt="" />
          </span>
        </div>


      <div className="flex w-11/12  ml-auto p-4 ">


        {/* First segment */}
        <div className="flex flex-col w-[85%] justify-between mx-1 p-4 ">
          <div className="flex justify-between bg-white h-44 items-center">
            <div className="flex justify-center relative left-5">
              <img
                src={defaultprofile}
                alt="User Profile"
                className="h-36 w-36 rounded-full mr-6"
              />
              <div className="text-left">
                <h1 className="text-xl font-semibold mb-3">
                  {ownername}
                </h1>
                <p className="text-[#696969] font-normal text-base flex justify-center items-center">
                  <span>
                    <GrLocation className="text-[#696969]" />
                  </span>{" "}
                  {address}
                </p>
              </div>
            </div>
            <div className="flex justify-center relative h-full top-5">
              <div className="bg-[#FFD2D2] mr-3 flex items-center justify-center relative top-2 rounded h-8 w-8">
                <RiCalendar2Line size={20} />
              </div>
              <div className="text-left">
                <p className="text-base text-[#696969] font-mormal">Membership</p>
                <p className="text-base font-medium">3 years</p>
              </div>
            </div>
            <div className="flex justify-center relative h-full top-5">
              <div className="bg-[#D2D4FF] mr-3 flex items-center justify-center rounded h-8 w-8 relative top-2 ">
                <RiStarSmileFill size={20} />
              </div>
              <div className="text-left ">
                <p className="text-base text-[#696969] font-mormal">Ratings</p>
                <p className="text-base font-medium">4.5k</p>
              </div>
            </div>
            <div className="relative h-full top-2 right-2 flex" onClick={handleEdit}>
              <span>
                <RiEdit2Fill size={20} />{" "}
              </span>
              <span> Edit</span>
            </div>
          </div>

          {/* Second segment */}
          <div className="mt-8 bg-white h-80">
            <div className="flex justify-between h-12 items-center border border-b-[#DFDFDF] border-x-0 border-t-0 mb-4">
              <h2 className="text-lg font-semibold relative left-7">
                Contact Information
              </h2>
              <div className="relative h-full top-2 right-3 flex cursor-pointer" onClick={handleEdit}>
                <span>
                  <RiEdit2Fill size={20} />{" "}
                </span>
                <span> Edit</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 gap-y-12 px-6">
              <div className="flex items-center">
                <div className="bg-[#FFD2D2] mr-3 flex items-center justify-center rounded h-8 w-8 relat">
                  <RiPhoneFill size={20} />
                </div>
                <div className="text-left">
                  <p className="text-base text-[#696969] font-normal">
                    Primary Number
                  </p>
                  <p className="text-base font-medium">+91 {mobileNumber}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-[#D2D4FF] mr-3 flex items-center justify-center rounded h-8 w-8 relative ">
                  <RiPhoneFill size={20} />
                </div>
                <div className="text-left">
                  <p className="text-base text-[#696969] font-normal">
                    Alternative Number
                  </p>
                  <p className="text-base font-medium">+91 {alternatemobile}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-[#FFD2D2] mr-3 flex items-center justify-center rounded h-8 w-8 relative ">
                  <RiMailFill size={20} />
                </div>
                <div className="text-left">
                  <p className="text-base text-[#696969] font-normal">
                    Primary Email
                  </p>
                  <p className="text-base font-medium">
                    {email}
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-[#D2D4FF] mr-3 flex items-center justify-center rounded h-8 w-8 relative ">
                  <RiMailFill size={20} />
                </div>
                <div className="text-left">
                  <p className="text-base text-[#696969] font-normal">
                    Alternative Email
                  </p>
                  <p className="text-base font-medium">
                    {alternateemail}
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-[#FFD2D2] mr-3 flex items-center justify-center rounded h-8 w-8 relative ">
                  <GrLocation size={20} />
                </div>
                <div className="text-left">
                  <p className="text-base text-[#696969] font-normal">
                    Primary Address
                  </p>
                  <p className="text-base font-medium">
                    {address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Third segment */}
          <div className="mt-8 bg-white h-64">
            <div className="flex justify-between h-12 items-center border border-b-[#DFDFDF] border-x-0 border-t-0 mb-4">
              <h2 className="text-lg font-semibold relative left-7">
                Company Information
              </h2>
              <div className="relative h-full top-2 right-3 flex cursor-pointer" onClick={handleEdit}>
                <span>
                  <RiEdit2Fill size={20} />{" "}
                </span>
                <span> Edit</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 gap-y-12 px-6">
              <div className="flex items-center">
                <div className="bg-[#FFD2D2] mr-3 flex items-center justify-center rounded h-8 w-8 relat"></div>
                <div className="text-left">
                  <p className="text-base text-[#696969] font-normal">
                    Company Name
                  </p>
                  <p className="text-base font-medium">------</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-[#D2D4FF] mr-3 flex items-center justify-center rounded h-8 w-8 relative "></div>
                <div className="text-left">
                  <p className="text-base text-[#696969] font-normal">
                    Company Website
                  </p>
                  <p className="text-base font-medium">----------</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-[#FFD2D2] mr-3 flex items-center justify-center rounded h-8 w-8 relative "></div>
                <div className="text-left">
                  <p className="text-base text-[#696969] font-normal">GSTIN</p>
                  <p className="text-base font-medium">----------------</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-[#D2D4FF] mr-3 flex items-center justify-center rounded h-8 w-8 relative ">
                  <RiMailFill size={20} />
                </div>
                <div className="text-left">
                  <p className="text-base text-[#696969] font-normal">PAN</p>
                  <p className="text-base font-medium">----------------</p>
                </div>
              </div>


            </div>
          </div>


          {/* Fourth segment */}
          <div className="mt-8 bg-white h-64">
            <div className="flex justify-between h-12 items-center border border-b-[#DFDFDF] border-x-0 border-t-0 mb-4">
              <h2 className="text-lg font-semibold relative left-7">
                Bank Details
              </h2>
              <div className="relative h-full top-2 right-3 flex cursor-pointer  " onClick={handleEdit}>
                <span>
                  <RiEdit2Fill size={20} />{" "}
                </span>
                <span> Edit</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 gap-y-12 px-6">
              <div className="flex items-center">
                <div className="bg-[#FFD2D2] mr-3 flex items-center justify-center rounded h-8 w-8 relat"></div>
                <div className="text-left">
                  <p className="text-base text-[#696969] font-normal">
                    IFSC Code
                  </p>
                  <p className="text-base font-medium">{ifsc}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-[#D2D4FF] mr-3 flex items-center justify-center rounded h-8 w-8 relative "></div>
                <div className="text-left">
                  <p className="text-base text-[#696969] font-normal">
                    Account Number
                  </p>
                  <p className="text-base font-medium">{hideAccountNumber() + accountnumber?.toString().slice(-4)}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-[#FFD2D2] mr-3 flex items-center justify-center rounded h-8 w-8 relative "></div>
                <div className="text-left">
                  <p className="text-base text-[#696969] font-normal">Bank Name</p>
                  <p className="text-base font-medium">{bankname}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-[#D2D4FF] mr-3 flex items-center justify-center rounded h-8 w-8 relative ">
                  <RiMailFill size={20} />
                </div>
                <div className="text-left">
                  <p className="text-base text-[#696969] font-normal">Account Type</p>
                  <p className="text-base font-medium">{accounttype}</p>
                </div>
              </div>


            </div>
          </div>

        </div>

        {/* Third segment - Mobile card view */}
        <div className="hidden md:block w-[11.5rem] h-96 relative top-24 bg-white border border-[#F5F5F5] shadow-md">
          <div className="bg-gray-300 rounded-lg py-3">
            <h2 className="text-base font-semibold border border-b-[#D9D9D9] border-x-0 border-t-0 pb-2">Profile Completeness</h2>
            <div className="relative h-36 w-full mx-auto flex items-center justify-center">
              <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="donut"
                width="210"
              />
              <p className="absolute inset-0 flex items-center justify-center text-base font-normal text-[#000000]">
                {percentage}%
              </p>
            </div>
            <ul className="mt-4 ml-3 list-disc pl-6 mb-2 text-left w-[80%] text-base font-medium text-[#0078AD]">
              <li className=" mb-3">Please add GST Number</li>
              <li className=" mb-3">Please add Website Link</li>
              <li className=" mb-3">Please Verify Primary Number</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
