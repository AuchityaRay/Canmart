// import { Link, useNavigate } from "react-router-dom";
// import { BiUser, BiSolidDashboard } from 'react-icons/bi';
// import { BiStore } from 'react-icons/bi';
// import { TiUser } from "react-icons/ti"
// import { RiQuestionnaireLine } from "react-icons/ri"
// import { PiNotepadLight } from "react-icons/pi"
// import { FaListUl, FaSearch } from "react-icons/fa";
// import { RxDashboard } from "react-icons/rx";
// import React, { useEffect, useState } from "react";
// import { signOut } from "../../actions/User/userAction";
// import { useDispatch, useSelector } from "react-redux";
// import { getSearchResult } from '../../actions/searchAction';
// import Crown from '../../assets/crown.png';
// import { BiLogOut } from "react-icons/bi";
// import ProfileImg from '../../assets/profilepic.png';
// import { BiChevronDown,BiChevronUp } from "react-icons/bi";

// const Navbar = ({ showSearchBar=false, ispopup=false }) => {
//   const [input, setInput] = useState("");
//   const [searching, setSearching] = useState(false);
//   const [loc, setLoc] = useState("");
//   const navigate = useNavigate();
//   const auth = useSelector(state => state.user);
//   const auth2 = useSelector(state => state.register);
//   const initialData = useSelector(state => state.initialData);
//   const [dropdownOpen, setDropdownOpen] = useState(false); // State to track dropdown open/close
//   // const [authStatus,setAuthStatus] = useState("");
//   // const [lastname,setLastname] = useState(false);

//   // useEffect(()=>{
//   //   if(auth?.status === "login"){
//   //     setAuthStatus("login");
//   //     if(auth.user.fullname.split(" ")[1]){
//   //       setLastname(true);
//   //     }else{
//   //       setLastname(false);
//   //     }
//   //   }
//   //   else if(auth2?.registered === true){
//   //     setAuthStatus("register");
//   //     if(auth2.user.fullname.split(" ")[1]){
//   //       setLastname(true);
//   //     }else{
//   //       setLastname(false);
//   //     }
//   //   }
//   // },[])

//   // const dispatch = useDispatch();

//   // const logout = () => {
//   const [authStatus, setAuthStatus] = useState("");
//   const [lastname, setLastname] = useState(false);
//   const [isdropdown,setdropdown] = useState(false);

//   useEffect(() => {
//     if (auth?.authenticate === true) {
//       setAuthStatus("login");
//     }
//     else if (auth2?.registered === true) {
//       setAuthStatus("register");
//     }
//   }, [])

//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     setAuthStatus("logout");
//     dispatch(signOut());
//   };

//   const toggleDropdown = () => {
//     setdropdown(!isdropdown);
//   };
//   localStorage.setItem('s', "ss");

//   // useEffect(()=>{
//   //   navigate('/',{
//   //     state: {
//   //       key:"",
//   //       searching:false,
//   //     }
//   // })
//   // },[])

//   const handleKeyDown = (event) => {
//     if (event.key === "Enter") {
//       implementSearch();
//     }
//   };


//   const implementSearch = () => {
//     dispatch(getSearchResult(`${input}`));

//     navigate('/', {
//       state: {
//         key: input,
//         searching: true,
//       }
//     })

//   }

//   const renderLoggedInLinks = () => {
//     return (
//       <div className="flex relative">
//         <button className="mr-2 ml-52 text-black w-28">
//           <Link to={"/login"}>ABOUT</Link>
//         </button>
//         <button className="mr-4  text-black">
//           <Link to={"/login"}>HELP & SUPPORT</Link>
//         </button>
//         <div className="ml-16 flex items-center">
//           <p>
//             {
//               authStatus === "login" && (auth?.user.ownername)
//             }
//             {
//               authStatus === "register" && (auth2?.user.ownername)
//             }

//           </p>
//           <div className="h-9 w-9 bg-gray rounded-full ml-5 overflow-hidden">
//             <img className="relative bottom-1" src={ProfileImg} alt="" />
//           </div>
//           <p style={{ cursor:"pointer"}} className="font-semibold w-5 ml-1" onClick={toggleDropdown}>
//             {isdropdown?<BiChevronDown size={22} />:<BiChevronUp size={22} />}
//           </p>
//         </div>
//         // <div >

//         {/* // {
//         //   authStatus === "login" && ("Hi! "+auth?.user.fullname.split(" ")[0])
//         // }  
//         // {
//         //   authStatus === "register" && ("Hi! "+auth2?.user.fullname.split(" ")[0])
//         // }
        
//         // </div>
//         // <div className="border w-[34px] h-[34px] flex items-center justify-center border-[#aaaaaa] ">
       

//         // {
//         //   authStatus === "login" && lastname && (
//         //     auth.user.fullname.split(" ")[0][0] + auth.user.fullname.split(" ")[1][0]
//         //   )
//         // }         
//         // {
//         //   authStatus === "login" && !lastname && (
//         //     auth.user.fullname[0]
//         //   )
//         // }   
//         // {
//         //   authStatus === "register" && lastname && (
//         //     auth2.user.fullname.split(" ")[0][0] + auth2.user.fullname.split(" ")[1][0]
//         //   )
//         // }         
//         // {
//         //   authStatus === "register" && !lastname && (
//         //     auth2.user.fullname[0]
//         //   )
//         // }    


//         // </div>
//         // <div className="border border-[#5B98E2] rounded-lg mr-3">
//         //   <div className="h-[28px] flex items-center justify-center text-sm">Registered Users</div>
//         //   <div className="bg-[#5B98E2] w-[140px] h-[22px] text-white text-sm flex items-center justify-center rounded-bl-lg rounded-br-lg">{initialData?.totalUsers}</div> */}

//         {isdropdown &&
//         <div className="bg-white w-[180px] rounded-md h-[100px] z-10 absolute right-0 top-12 shadow border border-[#1a1a1d2c] p-5">
//           <div className="flex items-center justify-start cursor-pointer">
//             <TiUser size={23} className="mr-3 ml-2"/>
//             <p>Profile</p>
//           </div>

//           <div className="flex items-center justify-start mt-3 cursor-pointer " onClick={handleLogout}>
//             <BiLogOut size={23} className="mr-3 ml-2"/>
//             <p>Sign Out</p>
//           </div>
//         </div>
//         }
//       </div>
        



//   {/* const renderNonLoggedInLinks = () => {
//     return (
//       <div className="flex">
//         <button className="mr-2 ml-52 text-black w-28">
//           <Link to={"/login"}>ABOUT</Link>
//         </button>
//         <button className="mr-4  text-black">
//           <Link to={"/login"}>HELP & SUPPORT</Link>
//         </button>
//         <button className={`mr-4 ml-5 ${ispopup?"text-black":"text-white"} ${ispopup?"bg-[#1a1a1d]":"bg-black"} rounded-full h-10 w-28`}>
//           <Link to={"/login"}>LOGIN</Link>
//         </button>
//         <Link to={"/signup"}>
//           <button className=" rounded-full h-10 w-28  text-black border">
//             REGISTER
//           </button>
//         </Link>
//       </div>
//     );
//   };

//   return (
//     <>
//       <div className={`w-full sm:flex h-16 sm:h-20 justify-between items-center sm:px-10 px-5 ${!ispopup?"bg-white":"bg-[#1a1a1d]"} `}
//       >
//         <div className="text-lg font-bold flex items-center">
//           <img className="w-5 h-4 mr-2" src={Crown}></img>
//           <Link to={"/"}>Can Mart</Link>
//         </div>

//         <div className="hidden lg:flex sm:flex items-center flex-1 flex-row-reverse">
//           {authStatus === "login" || authStatus === "register" ? renderLoggedInLinks() : renderNonLoggedInLinks()}
         
// {/*          
//          {showSearchBar &&
//           <div className="relative flex mr-6"> 
//             <div className="absolute left-3 top-1/2 transform -translate-y-1/2" onClick={implementSearch}>
//               <FaSearch className="text-gray"  />
//             </div>
//             <input
//               type="text"
//               className="text-sm border border-[#5B98E2] rounded-md w-[395px] h-[40px] pl-10 pr-3 mr-3"
//               placeholder="Search for product categorie"
//               onChange={(e)=>{setInput(e.target.value)}}
//               onKeyDown={handleKeyDown}
//             />
//           </div>
//          } */}


//           {showSearchBar &&
//             <div className="relative flex mr-6"> {/* Added ml-2 for leftward shift */}
//               <div className="absolute right-5 top-1/2 transform -translate-y-1/2" onClick={implementSearch}>
//                 <FaSearch className="text-white bg-black rounded-full shadow-md p-2 h-8 w-8" />
//               </div>
//               <input
//                 type="text"
//                 className="text-sm rounded-full w-[350px] h-[40px] pl-10 pr-3 mr-3 bg-[#e8e8e8] border border-[#1a1a1d29]"
//                 // placeholder="Search for product categorie"
//                 onChange={(e) => { setInput(e.target.value) }}
//                 onKeyDown={handleKeyDown}
//               />
//             </div>
//           }



//         </div>
//       // </div>
//     // </>
//   );
// };
// }
// export default Navbar;



// New Code 
import { Link, useNavigate } from "react-router-dom";
import { BiUser, BiSolidDashboard } from 'react-icons/bi';
import { BiStore } from 'react-icons/bi';
import { TiUser } from "react-icons/ti"
import { RiQuestionnaireLine } from "react-icons/ri"
import { PiNotepadLight } from "react-icons/pi"
import { FaListUl, FaSearch } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import React, { useEffect, useState } from "react";
import { signOut } from "../../actions/User/userAction";
import { useDispatch, useSelector } from "react-redux";
import { getSearchResult } from '../../actions/searchAction';
import Crown from '../../assets/crown.png';
import { BiLogOut } from "react-icons/bi";
import ProfileImg from '../../assets/profilepic.png';
import { BiChevronDown,BiChevronUp } from "react-icons/bi";

const Navbar = ({ showSearchBar=false, ispopup=false }) => {
  const [input, setInput] = useState("");
  const [searching, setSearching] = useState(false);
  const [loc, setLoc] = useState("");
  const navigate = useNavigate();
  const auth = useSelector(state => state.user);
  const auth2 = useSelector(state => state.register);
  const initialData = useSelector(state => state.initialData);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to track dropdown open/close
  const [authStatus, setAuthStatus] = useState("");
  const [lastname, setLastname] = useState(false);
  const [isdropdown,setdropdown] = useState(false);
  const [userId,setUserId] = useState(null);
  
  useEffect(() => {
    console.log("auth",auth)
    console.log("auth2",auth2)
    if (auth?.authenticate === true) {
      setAuthStatus("login");
      setUserId(auth?.user._id);
    }
    else if (auth2?.registered === true) {
      setAuthStatus("register");
    }
  }, [])

  const dispatch = useDispatch();

  const handleLogout = () => {
    setAuthStatus("logout");
    dispatch(signOut());
  };

  const toggleDropdown = () => {
    setdropdown(!isdropdown);
  };
  localStorage.setItem('s', "ss");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      implementSearch();
    }
  };

  const implementSearch = () => {
    dispatch(getSearchResult(`${input}`));

    navigate('/', {
      state: {
        key: input,
        searching: true,
      }
    })

  }

  const handleProfileClick=()=>{
      navigate(`/userprofile`);
  }

  const renderLoggedInLinks = () => {
    return (
      <div className="flex relative">
        <button className="mr-2 ml-52 text-black w-28">
          <Link to={"/"}>ABOUT</Link>
        </button>
        <button className="mr-4  text-black">
          <Link to={"/"}>HELP & SUPPORT</Link>
        </button>
        <div className="ml-16 flex items-center">
          <p>
            {
              authStatus === "login" && (auth?.user.ownername)
            }
            {
              authStatus === "register" && (auth2?.user.ownername)
            }

          </p>
          <div className="h-9 w-9 bg-gray rounded-full ml-5 overflow-hidden">
            <img className="relative bottom-1" src={ProfileImg} alt="" />
          </div>
          <p style={{ cursor:"pointer"}} className="font-semibold w-5 ml-1" onClick={toggleDropdown}>
            {isdropdown?<BiChevronDown size={22} />:<BiChevronUp size={22} />}
          </p>
        </div>

        {isdropdown &&
        <div className="bg-white w-[180px] rounded-md h-[100px] z-10 absolute right-0 top-12 shadow border border-[#1a1a1d2c] p-5">
          <div className="flex items-center justify-start cursor-pointer" onClick={handleProfileClick}>
            <TiUser size={23} className="mr-3 ml-2"/>
            <p>Profile</p>
          </div>

          <div className="flex items-center justify-start mt-3 cursor-pointer " onClick={handleLogout}>
            <BiLogOut size={23} className="mr-3 ml-2"/>
            <p>Sign Out</p>
          </div>
        </div>
        }
      </div>
        
    );
  };



  const renderNonLoggedInLinks = () => {
    return (
      <div className="flex">
        <button className="mr-2 ml-52 text-black w-28">
          <Link to={"/"}>ABOUT</Link>
        </button>
        <button className="mr-4  text-black">
          <Link to={"/"}>HELP & SUPPORT</Link>
        </button>
        <button className={`mr-4 ml-5 ${ispopup?"text-black":"text-white"} ${ispopup?"bg-[#1a1a1d]":"bg-black"} rounded-full h-10 w-28`}>
          <Link to={"/login"}>LOGIN</Link>
        </button>
        <Link to={"/signup"}>
          <button className=" rounded-full h-10 w-28  text-black border">
            REGISTER
          </button>
        </Link>
      </div>
    );
  };

  return (
    <>
      <div className={`w-full sm:flex h-16 sm:h-20 justify-between items-center sm:px-10 px-5 ${!ispopup?"bg-white":"bg-[#1a1a1d]"} `}
      >
        <div className="text-lg font-bold flex items-center">
          <img className="w-5 h-4 mr-2" src={Crown}></img>
          <Link to={"/"}>Can Mart</Link>
        </div>

        <div className="hidden lg:flex sm:flex items-center flex-1 flex-row-reverse">
          {authStatus === "login" || authStatus === "register" ? renderLoggedInLinks() : renderNonLoggedInLinks()}


          {showSearchBar &&
            <div className="relative flex mr-6"> {/* Added ml-2 for leftward shift */}
              <div className="absolute right-5 top-1/2 transform -translate-y-1/2" onClick={implementSearch}>
                <FaSearch className="text-white bg-black rounded-full shadow-md p-2 h-8 w-8" />
              </div>
              <input
                type="text"
                className="text-sm rounded-full w-[350px] h-[40px] pl-10 pr-3 mr-3 bg-[#e8e8e8] border border-[#1a1a1d29]"
                // placeholder="Search for product categorie"
                onChange={(e) => { setInput(e.target.value) }}
                onKeyDown={handleKeyDown}
              />
            </div>
          }



        </div>
      </div>
    </>
  );
};

export default Navbar;