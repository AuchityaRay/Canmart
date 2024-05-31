import { useDispatch } from "react-redux";
import {
  registerConstants,
  userConstants,
  otpConstants,
  userUpdateConstants
} from "../../constant/constant";
import axios from "../../helpers/axios";

export const login = (user) => {

  return async (dispatch) => {
    dispatch({ type: userConstants.LOGIN_REQUEST });
    const res = await axios.post(`/signin`, {
      ...user,
    });
    if (res.status === 200) {
      const user = res.data;
      const token = user.token;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("role", user.role);
      dispatch({
        type: userConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      if (res.status === 400 || res.status === 401) {
        dispatch({
          type: userConstants.LOGIN_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};


export const loginWithOTP = (mobileNumber) => {

  console.log(mobileNumber);
  mobileNumber =parseInt(mobileNumber);
  return async (dispatch) => {
    const res = await axios.post(`/signinotp`, {
      mobileNumber:mobileNumber,
    });
    if (res.status === 200) {
      const user = res.data;
      const token = user.token;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("role", user.role);
      dispatch({
        type: userConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      if (res.status === 400 || res.status === 401) {
        dispatch({
          type: userConstants.LOGIN_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};

export const register = (user) => {
  return async (dispatch) => {
    dispatch({ type: registerConstants.REGISTER_REQUEST });
    const res = await axios.post(`/signup`, {
      ...user,
    });
    if (res.status === 200) {
      const { user, token } = res.data;
      dispatch({
        type: registerConstants.REGISTER_SUCCESS,
        payload: {
          user: user,
          token: token,
        },
      });
    } else {
      if (res.status === 400 || res.status === 401) {
        dispatch({
          type: registerConstants.REGISTER_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: userConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
          role,
        },
      });
    } else {
      dispatch({
        type: userConstants.LOGIN_FAILURE,
        payload: {
          error: "Failed to login",
        },
      });
    }
  };
};

export const signOut = () => {
  return async (dispatch) => {
    localStorage.clear();
    
    dispatch({
      type: userConstants.LOGOUT_REQUEST,
    });
  };
};



export const updateUser = (user)=>{
  return async (dispatch) => {
    dispatch({ type: userUpdateConstants.USER_UPDATE_REQUEST })
    try{
      const res = await axios.post('/update-user',{
        ...user
      })
      if(res.status === 200){
        const { updatedUser } = res.data;
        console.log("userAction 144",user);
        dispatch({
          type:userUpdateConstants.USER_UPDATE_SUCCESS,
          payload:{
              userUpdated : true,
              user : user
          }
        })
        return true;
      }
      } catch (error) {
        dispatch({
          type:userUpdateConstants.USER_UPDATE_FAILURE,
          payload:{
            userUpdated : false,
          }
        })
        return false;
    }
  }
};


export const sendotp = (mobileNumber,sendOtpType) => {
  return async (dispatch) => {
    dispatch({ type: otpConstants.OTP_REQUEST });
    try {
      let res= '';
      if (sendOtpType === "login") {
        res = await axios.post(`/login/mobileverification`, {
          mobileNumber: `+91${mobileNumber}`,
        });
      }
      else{
        res = await axios.post(`/register/mobileverification`, {
          mobileNumber: `+91${mobileNumber}`,
        });
      }
      if (res.status === 200) {
        const { otp, message } = res.data;
        dispatch({
          type: otpConstants.OTP_SUCCESS,
          payload: {
            otpsent: true,
            otp: otp,
          },
        });
        return true;
      }
    } catch (error) {
      if (error.response && error.response.status === 400 && error.response.data.success === false) {
        console.log("userAction 151",error.response.data.message); // Log the error message
        dispatch({
          type: otpConstants.OTP_FAILURE,
          payload: { error: error.response.data.message },
        });
      }
      else
      {
        dispatch({
          type: otpConstants.OTP_FAILURE,
          payload: { error: error.response.data.message },
        });
        console.error(error);
      }
      return false;
    }
    
  };
};
