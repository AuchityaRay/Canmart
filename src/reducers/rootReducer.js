import { combineReducers } from "redux";
import userReducer from "./User/userReducer";
import registerReducer from "./User/registerReducer";
import productReducer from "./Product/productReducer";
import categoryReducer from "./Category/categoryReducer";
import initialDataReducer from "./initialDataReducer";
import sellersListReducer from "./sellersListReducer";
import enquiryReducer from "./Enquiry/enquiryReducer";
import searchReducer from "./searchReducer";


const rootReducer = combineReducers({
    user: userReducer,
    register: registerReducer,
    category: categoryReducer,
    product: productReducer,
    initialData: initialDataReducer,
    sellers:sellersListReducer,
    enquiry:enquiryReducer,
    searchres:searchReducer,
});



export default rootReducer;