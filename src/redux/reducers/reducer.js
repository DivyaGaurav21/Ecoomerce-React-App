const INIT_STATE = {
    carts : []
}


// --------------reducer function for add to cart----------------//
export const cartReducer = (state = INIT_STATE, { type, payload }) => {
    switch (type) {
        case 'ADD_CART':
            return {
                ...state,
                carts: [...state.carts , payload]
            }
        default:
            return state;
    }
}