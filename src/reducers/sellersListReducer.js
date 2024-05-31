import { sellersConstants} from "../constant/constant";

const initState = {
    sellers:[],
    loading:false,
    error:null
}

export default (state = initState,action)=>{
    switch(action.type){
        case sellersConstants.SELLERS_SUCCESS:
            state={
                ...state,
                sellers: action.payload.users
            }
            break;
    }

    return state;
}