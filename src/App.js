import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import UserProfile from "./pages/UserProfile/UserProfile";
import ViewNumber from "./subComponent/ViewNumber";
import EnterOTP from "./subComponent/EnterOTP";
import LoginWithOTP from "./subComponent/LoginWithOTP";
import SignInCreation from "./subComponent/SignInCreation";
import Inventory from "./pages/Inventory/Inventory";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { isUserLoggedIn } from "./actions/User/userAction";
import SellerDash from "./pages/SellerDash/SellerDash";
import EditProfile from "./pages/SellerDash/EditProfile/EditProfile";
import ProductManagementDash from "./pages/SellerDash/ProductManagement/ProductManagementDash";
import ViewSingleProduct from "./pages/ViewSingleProduct/ViewSingleProduct";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import ViewProduct from "./pages/View/view";
import ViewCategory from "./pages/Category/Category";
import { getInitialData } from "./actions/initialDataAction";
import ManageProducts from "./pages/ManageProducts/ManageProducts";
import AddProduct from "./pages/AddProduct/AddProduct"
import ManageInquiry from "./pages/ManageInquiries/ManageInquiry";
import EditProduct from "./pages/EditProduct/EditProduct";

function App() {

    const dispatch = useDispatch();
    const auth = useSelector(state => state.user);
  
    useEffect(() => {
      if (!auth.authenticate) {
        dispatch(isUserLoggedIn());
      }
    },[auth]);
    
    useEffect(()=>{
      dispatch(getInitialData());
    },[]);


  return (
    <div className="App">
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/login"} element={<Login />} />
          <Route exact path={"/signup"} element={<SignUp />} />
          <Route exact path={"/userprofile"} element={<UserProfile />} />
          <Route exact path={"/editprofile"} element={<EditProfile />} />
          <Route exact path={"/forgot-password"} element={<ForgetPassword />} />

          <Route exact path={"/verify-user-signup"} element={<EnterOTP />} />
          <Route exact path={"/verify-user-login"} element={<LoginWithOTP />} />
          <Route exact path={"/signincreation"} element={<SignInCreation />} />
          <Route exact path={"/sellerinventory"} element={<Inventory/>} />
          <Route exact path={"/sellerdash"} element={<SellerDash />} />
          <Route exact path={"/sellersetting"} element={<EditProfile />} />
          <Route exact path={"/sellerproduct"} element={<ProductManagementDash />} />
          <Route exact path={"/product/:id"} element={<ViewSingleProduct />} />
          <Route exact path={"/admin"} element={<AdminDashboard />} />
          <Route exact path={"/userdash"} element={<UserDashboard/>} />
          <Route exact path={"/viewproduct/:id"} element={<ViewProduct/>} />
          <Route exact path={"/viewcategory/:id"} element={<ViewCategory/>} />
          <Route exact path={"/manageproducts"} element={<ManageProducts/>} />
          <Route exact path={"/addproduct"} element={<AddProduct/>} />
          <Route exact path={"/editproduct"} element={<EditProduct/>} />
          <Route exact path={"/manageinquiry"} element={<ManageInquiry/>} />

        </Routes>
    </div>
  );
}

export default App;
