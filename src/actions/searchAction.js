import { searchConstants } from "../constant/constant"
import axios from '../helpers/axios';

export const getSearchResult = (search)=>{
    return async dispatch=>{
        const res = await axios.post('/search',{
            search
        });
        if(res.status  === 200){
            const searchres = res.data;
            // localStorage.setItem('sellers',users);
            dispatch({
                type: searchConstants.SEARCH_SUCCESS,
                payload:{searchres}
            })
        }
    }

}
