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
                state.cartItems[itemIndex] = {
                    ...state.cartItems[itemIndex],
                    qnty: state.cartItems[itemIndex].qnty + 1
                }
                toast.info("Item increase in cart!", {
                    position: "top-right"
                })
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

        //===========reducer fn for derease item in cart====================//
        decreaseCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (state.cartItems[itemIndex].qnty > 1) {
                state.cartItems[itemIndex].qnty -= 1;

                toast.info("Decreased product quantity", {
                    position: "bottom-left",
                });
            } else if (state.cartItems[itemIndex].qnty === 1) {
                const removeCartItem = state.cartItems.filter(
                    (item) => item.id !== action.payload.id
                );

                state.cartItems = removeCartItem;

                toast.error("Product removed from cart !", {
                    position: "bottom-left",
                });
            }
        },
       



    }
});

// Action creators are generated for each case reducer function
export const { addCart, removeFromCart, decreaseCart } = cartSlice.actions;

export default cartSlice.reducer;