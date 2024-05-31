import { searchConstants} from "../constant/constant";

const initState = {
    searchres:[],
    loading:false,
    error:null
}

export default (state = initState,action)=>{
    switch(action.type){
        case searchConstants.SEARCH_SUCCESS:
            state={
                ...state,
                searchres:action.payload.searchres
            }
            break;
    }

    return state;
}