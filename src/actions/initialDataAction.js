import { categoryConstants, initialDataConstant, productConstants, totalUsersConstants } from "../constant/constant"
import axios from '../helpers/axios';

export const getInitialData = ()=>{
    return async dispatch=>{
        const res = await axios.get('/initialdata');
        if(res.status  === 200){
            const {categories,products,totalUsers} = res.data;
            localStorage.setItem('products',JSON.stringify(products));
            localStorage.setItem('totalUsers',totalUsers);
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                payload:{ categories}
            })
            dispatch({
                type: productConstants.PRODUCTS_SUCCESS,
                payload:{products}
            })
            dispatch({
                type: totalUsersConstants.TOTAL_USER_SUCCESS,
                payload:{totalUsers}
            })
        }
    }

}