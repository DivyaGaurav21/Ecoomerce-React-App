// --------------Import createSlice from redux toolkit--------------------//
import {createSlice} from '@reduxjs/toolkit'

const INIT_STATE = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount : 0
};



const cartSlice = createSlice({
    name: 'cart',
    initialState: INIT_STATE,
    reducers: {
        addCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].qnty += 1;
            } else {
                const tempProduct = { ...action.payload, qnty: 1 }
                state.cartItems.push(tempProduct)
            }
        },
        // updateCart: (state, action) => {
        //     let i = state.indexOf(action.payload);
        //     let updateCart = null;
        //         state.cart[i] = action.updateItem;
        //         updateCart = state.cart
        //     return cart [state , updateCart]

        // }

    }
});

// Action creators are generated for each case reducer function
export const { addCart } = cartSlice.actions;

export default cartSlice.reducer;