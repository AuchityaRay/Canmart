import { registerConstants, userConstants, userUpdateConstants } from "../../constant/constant"

export const initState = {
    user: [],
    token: "",
    message: '',
    loading: false,
    registered: false,
    otpverified: false
}

export default (state = initState, action) => {
    switch (action.type) {
        case registerConstants.REGISTER_REQUEST:
            state = {
                ...state,
                loading: true,
                registered: false,
            }
            break;
        case registerConstants.REGISTER_SUCCESS:
            state = {
                ...state,
                loading: false,
                registered: true,
                user: action.payload.user,
                token: action.payload.token,
                otpverified: false,
                authenticate: true,
            }
            break;
        case registerConstants.REGISTER_FAILURE:
            state = {
                ...state,
                loading: false,
                registered: false,
                error: action.payload.error
            }
            break;
        case userConstants.LOGOUT_REQUEST:
            state = {
                ...initState
            }
            break;
        case userUpdateConstants.USER_UPDATE_SUCCESS:
            state={
                ...state,
                userUpdated: action.payload.userUpdated,
                user: action.payload.user
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