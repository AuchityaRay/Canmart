import { sellersConstants } from "../constant/constant"
import axios from '../helpers/axios';

export const getSellersList = ()=>{
    return async dispatch=>{
        const res = await axios.get('/sellers');
        if(res.status  === 200){
            const users = res.data;
            localStorage.setItem('sellers',users);
            dispatch({
                type: sellersConstants.SELLERS_SUCCESS,
                payload:{users}
            })
        }
    }

}
