import {combineReducers} from"redux";
import userReducer from "./user";
import requestReducer from "./request";
import switchReducer from "./switch";
import adminReducer from "./admin";

const rootReducer = combineReducers({userReducer,requestReducer, switchReducer, adminReducer}) 

export default rootReducer;