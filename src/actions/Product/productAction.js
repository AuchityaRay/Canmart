import { productConstants } from '../../constant/constant';
import axios from '../../helpers/axios';

export const getAllProducts =()=>{
    return async dispatch=>{
        dispatch({
            type:productConstants.PRODUCTS_REQUEST
        });
        const res = await axios.post('products/allproducts');
        if(res.status === 200){

            const products = res.data;

            dispatch({
                type:productConstants.PRODUCTS_SUCCESS,
                payload:{
                    products:products
                }
            })
        }else{
            dispatch({
                type:productConstants.PRODUCTS_FAILURE,
                payload:{error:res.data.error}
            })
        }
    }
}


export const createProduct = (product)=>{
    const formData = new FormData();
    for (const image of product["productImages"]) {
        formData.append("productImages", image);
      }
    for (const key in product) {
        if (product[key] !== undefined && key !==  "productImages") {
          formData.append(key, product[key]);
        }
      }
    return async dispatch=>{
        const res = await axios.post('/addproduct',formData)
        if(res.status === 200){
            const product = res.data;
            dispatch({
                type:productConstants.CREATE_PRODUCTS_SUCCESS,
                payload:{product}
            })
            return true;
        }
    }
}

export const updateProduct = (obj) =>{
    return async dispatch=>{
        const res = await axios.post('/updateproduct',{
            ...obj
        })
        if(res.status === 200){
            const product = res.data;
            dispatch({
                type:productConstants.UPDATE_PRODUCTS_SUCCESS,
                payload:{product}
            })
            return true;
        }
    }
}