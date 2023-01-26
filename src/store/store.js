import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import productsReducer from './productSlice'
// import { getProducts } from './productSlice'




export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer
    },
})

export default store;