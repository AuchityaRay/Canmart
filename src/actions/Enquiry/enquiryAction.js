import {enquiryConstants } from "../../constant/constant";
import axios from '../../helpers/axios';

export const sendEnquiry = (enquiry)=>{
    return async dispatch=>{
        dispatch({type:enquiryConstants.ENQUIRY_REQUEST})
        const res = await axios.post('/enquiry/create',{
            ...enquiry
        });
        if(res.status  === 200){
            const enquiry = res.data;
            dispatch({
                type:enquiryConstants.ENQUIRY_SUCCESS ,
                payload:{enquiry}
            })
        }
    }

}