import { register } from "../../actions/User/userAction";
import { registerConstants, userConstants , otpConstants, userUpdateConstants} from "../../constant/constant";
import { initState as registerState } from "./registerReducer"

const initState = {
    authenticate:false,
    authenticating:false,
    isRegistered:registerState.registered,
    status:registerState.registered?"register":"",
    userUpdated:false,
    user:[],
};

export default (state = initState,action)=>{

    switch(action.type){
        case userConstants.LOGIN_REQUEST:
            state={
                ...state,
                authenticating:true
            }
            break;
        case userConstants.LOGIN_SUCCESS:
            state={
                ...state,
                user:action.payload.user,
                token:action.payload.token,
                role:action.payload.role,
                authenticate: true,
                authenticating:false,
                status:"login"
            }
            break;
        case userConstants.LOGOUT_REQUEST:
            state={
                ...initState
            }
            break;
        case otpConstants.OTP_SUCCESS:
            state={
                ...state,
                otpsent:action.payload.otpsent,
                otp:action.payload.otp,
                userAlreadyExistError: null
            }
            break;
        case otpConstants.OTP_FAILURE:
            state={
                ...state,
                otpsent:null,
                otp:null,
                userAlreadyExistError: action.payload.error
            }
            console.log("UserReducer state",state);
            break;
        case userUpdateConstants.USER_UPDATE_SUCCESS:
            state={
                ...state,
                userUpdated: action.payload.userUpdated,
                user:action.payload.user,
            }
            console.log("userReducer 67",state);
        case userUpdateConstants.USER_UPDATE_FAILURE:
            state={
                ...state,
                userUpdated: action.payload.userUpdated,
            }
    }
    return state;
}