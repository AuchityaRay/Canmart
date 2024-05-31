import { categoryConstants } from '../../constant/constant';
import axios from '../../helpers/axios';

export const getAllCategories =()=>{
    return async dispatch=>{
        dispatch({
            type:categoryConstants.GET_ALL_CATEGORIES_REQUEST
        });
        const res = await axios.get('category/getcategory');
        if(res.status === 200){

            const {categoryList} = res.data;
            localStorage.getItem('categories',JSON.stringify(categoryList));

            dispatch({
                type:categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                payload:{
                    categories:categoryList
                }
            })
        }else{
            dispatch({
                type:categoryConstants.GET_ALL_CATEGORIES_FAILURE,
                payload:{error:res.data.error}
            })
        }
    }
}