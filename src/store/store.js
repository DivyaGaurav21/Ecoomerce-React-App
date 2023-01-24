import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import productReducer, {productsFetch} from './productSlice'


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer
    },
})

store.dispatch(productsFetch());

export default store;