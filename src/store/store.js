import { configureStore } from '@reduxjs/toolkit'

// =======_______________ we need all the reducer of cartSlice and Product slice_________________=========//
import cartReducer from './cartSlice'
import productsReducer from './productSlice'




// __________this configureStore function just collect together all reducer of application_________________//
export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer
    },
})

// ________we used this store(centeralized stored state of app) in our app(root component) BY provider_______//
export default store;