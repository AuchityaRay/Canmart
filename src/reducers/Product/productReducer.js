import { productConstants } from "../../constant/constant";

const initState={
    products:[],
    productCreated:false,
}

export default (state = initState,action)=>{
    switch(action.type){
        case productConstants.PRODUCTS_SUCCESS:
            state={
                ...state,
                products:action.payload.products,
                productCreated:false,
            }
            break;
        case productConstants.CREATE_PRODUCTS_SUCCESS:
            state={
                ...state,
                products:[...state.products, action.payload.product.product],
                productCreated:true
            }
            break;
        case productConstants.UPDATE_PRODUCTS_SUCCESS:
            state={
                ...state,
            }
    }

    return state;
}