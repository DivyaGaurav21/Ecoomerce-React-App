// --------------Import createSlice from redux toolkit--------------------//
import { createSlice } from '@reduxjs/toolkit'
//---------------Import toast for notification----------------------------//
import { toast } from 'react-toastify';

const INIT_STATE = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount : 0
};



const cartSlice = createSlice({
    name: 'cart',
    initialState: INIT_STATE,
    reducers: {
        //===========reducer function for add item in cart===============//
        addCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                toast.info("Already Added in cart!", {
                    position: "top-right"
                })
                state.cartItems[itemIndex].qnty += 1;
            } else {
                const tempProduct = { ...action.payload, qnty: 1 }
                state.cartItems.push(tempProduct)
                toast.success(`Successfully Added ${action.payload.rname} receipy in Cart!`, {
                    position: "bottom-right"
                })
            }
        },
        //===========reducer fn for remove item from cart======================// 
        removeFromCart: (state, action) => {
            toast.error('Successfully removed from cart!', {
                position: "top-right"
            })
            const filterCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            state.cartItems = filterCartItems;
        },

        


    }
});

// Action creators are generated for each case reducer function
export const { addCart , removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;