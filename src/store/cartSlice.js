// ------------------------Import createSlice from redux toolkit----------------------------------//
import { createSlice } from '@reduxjs/toolkit'
//-----------------------------Import toast for notification-------------------------------------//
import { toast } from 'react-toastify';

//_____Initial State(cartItems--> after fetching api we want to kept data in local storage)______//
const INIT_STATE = {
    cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    cartTotalQuantity: 0,
    cartTotalAmount : 0
};

// +++++++++++++++++++++++CART SLICE for creating action on every Reducer+++++++++++++++++++++//
const cartSlice = createSlice({
    name: 'cart',
    initialState: INIT_STATE,
    reducers: {
        //===========reducer function for add item in cart===============//
        addCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
        // _________if you twice click add to cart thent simply item is increased in cart_________//
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].qnty += 1;
                toast.info("Item increase in cart!", {
                    position: "top-right"
                })
            } else {
                const tempProduct = { ...action.payload, qnty: 1 }
                state.cartItems.push(tempProduct)
                toast.success(`Successfully Added ${action.payload.name} in Cart!`, {
                    position: "bottom-right"
                })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        //===========reducer fn for remove item from cart======================// 
        removeFromCart: (state, action) => {
            toast.error('Successfully removed from cart!', {
                position: "top-right"
            })
            // ___________simply i removed clicked cart item from cart array_________//
            const filterCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            state.cartItems = filterCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
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
            }
            // _________if item quantity in cart is 1 , we simply filter that item from CartItems array______//
            else if (state.cartItems[itemIndex].qnty === 1) {
                const removeCartItem = state.cartItems.filter(
                    (item) => item.id !== action.payload.id
                );
                state.cartItems = removeCartItem;
                toast.error("Product removed from cart !", {
                    position: "bottom-left",
                });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        //================reducer Fn for items Total price=============//
        getTotals:(state, action) => {
            let  total = state.cartItems.reduce((cartTotal, cartItem) => {
                    const { price, qnty } = cartItem;
                    const itemTotal = price * qnty;
                    cartTotal += itemTotal;
                    return cartTotal;
                }, 0 );
            state.cartTotalAmount = total;
        },
        //================reducer Fn for clear whole cart=============//
        clearCart : (state, action) => {
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.error("Your Cart is Clear now !", {
                position: "bottom-left",
            });
        },
       



    }
});

//______________Action creators are generated for each case reducer function_________________________//
export const { addCart, removeFromCart, decreaseCart , getTotals , clearCart} = cartSlice.actions;


// _________we want all reducer in other file____________________//
export default cartSlice.reducer;