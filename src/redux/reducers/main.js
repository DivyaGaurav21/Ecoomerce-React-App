// ------------combine all reducer-------------//
import { combineReducers } from "redux";

// ---------import add reducer--------------------//
import { cartReducer } from "./reducer";


const rootReducer = combineReducers({
    cartReducer
})


export default rootReducer;
