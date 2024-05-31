import { enquiryConstants } from "../../constant/constant";

const initState = {
    enquiry:[],
    enquirysent:false,
    loading:false,
    error:null
}

export default (state = initState,action)=>{
    switch(action.type){
        case enquiryConstants.ENQUIRY_REQUEST:
            state={
                ...state,
                loading:true,
            }
            break;
        case enquiryConstants.ENQUIRY_SUCCESS:
            state={
                ...state,
                loading:false,
                enquiry: action.payload.enquiry,
                enquirysent:true,
            }
            break;
    }

    return state;
}