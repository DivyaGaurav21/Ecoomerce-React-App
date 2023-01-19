import { ActionTypes } from "../constants/action-types";
const intialState = {
    products: [
        {
            id: 1,
            title: 'Divya Gaurav',
            cateogary : 'Programmer'
        }
    ],
};

export const productsReducer = (state , { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
};

// export const productsReducer = (state = intialState, { type, payload }) => {
//     switch (type) {
//         case ActionTypes.SET_PRODUCTS:
//             return { ...state, products: payload };
//         default:
//             return state;
//     }
// };