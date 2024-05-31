import { categoryConstants, productConstants, totalUsersConstants } from "../constant/constant";

const initState = {
    categories:[],
    products:[],
    totalUsers:0,
    loading:false,
    error:null
}

export default (state = initState,action)=>{
    switch(action.type){
        case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
            state={
                ...state,
                categories: action.payload.categories
            }
            break;
        case productConstants.PRODUCTS_SUCCESS:
            state={
                ...state,
                products: action.payload.products
            }
            break;
        case totalUsersConstants.TOTAL_USER_SUCCESS:
            state={
                ...state,
                totalUsers: action.payload.totalUsers
            }
            break;
    }

    return state;
}