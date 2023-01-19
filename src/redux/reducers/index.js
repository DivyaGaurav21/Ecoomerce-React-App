
import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
const reducers = combineReducers({
    allProducts: productsReducer,
});
export default reducers;




// import { productsReducer, selectedProductsReducer } from "./productsReducer";
// const reducers = combineReducers({
//     allProducts: productsReducer,
//     product: selectedProductsReducer,
// });
// export default reducers;