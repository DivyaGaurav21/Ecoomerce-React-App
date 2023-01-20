// --------------Import createSlice from redux toolkit--------------------//
import {createSlice} from '@reduxjs/toolkit'

const INIT_STATE = {
    carts: []
}


const cartSlice = createSlice({
    name: 'cart',
    initialState: INIT_STATE,
    reducers: {
        addCart: (state , action) => {
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }
        },

    }
});

// Action creators are generated for each case reducer function
export const { addCart } = cartSlice.actions;

export default cartSlice.reducer;