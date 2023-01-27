import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

import { toast } from 'react-toastify';

const initial_State = {
    data: localStorage.getItem("productItems")
        ? JSON.parse(localStorage.getItem("productItems"))
        : [],
    itemToDisplay: localStorage.getItem("productView")
        ? JSON.parse(localStorage.getItem("productView"))
        : "",
    loading: false,
    error: null
};

export const fetchCardsData = () => async (dispatch) => {
    // console.log("function called")
    try {
        dispatch(setLoading());
        const response = await axios.get('https://my-json-server.typicode.com/DivyaGaurav21/restaurentJSON/Cardsdata');
        dispatch(fetchCardsDataSuccess(response.data));
    } catch (error) {
        dispatch(fetchCardsDataFailed(error.message));
    }
};
export const addCardData = (cardData) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await axios.post('https://my-json-server.typicode.com/DivyaGaurav21/restaurentJSON/Cardsdata', cardData);
        dispatch(addCardDataSuccess(response.data));
    } catch (error) {
        dispatch(addCardDataFailed(error.message));
    }
};

export const updateCardData = (cardData) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await axios.put(`https://my-json-server.typicode.com/DivyaGaurav21/restaurentJSON/Cardsdata/${cardData.id}`, cardData);
        dispatch(updateCardDataSuccess(response.data));
    } catch (error) {
        dispatch(updateCardDataFailed(error.message));
    }
};

export const deleteCardData = (id) => async (dispatch) => {
    try {
        dispatch(setLoading());
        await axios.delete(`https://my-json-server.typicode.com/DivyaGaurav21/restaurentJSON/Cardsdata/${id}`);
        dispatch(deleteCardDataSuccess(id));
    } catch (error) {
        dispatch(deleteCardDataFailed(error.message));
    }
};






const productsSlice = createSlice({
    name: "products",
    initialState: initial_State,

    reducers: {
        setLoading: (state) => {
            state.loading = true;
        },
        fetchCardsDataSuccess: (state, action) => {
            state.data = action.payload;
            // console.log(action.payload)
            state.loading = false;
            state.error = null;
            localStorage.setItem("productItems", JSON.stringify(state.data));
        },
        fetchCardsDataFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addCardDataSuccess: (state, action) => {
            state.data.push(action.payload);
            state.loading = false;
            state.error = null;
            localStorage.setItem("productItems", JSON.stringify(state.data));
            toast.info(`${action.payload.name} is added for Sell`, {
                position: "top-right"
            })
        },
        addCardDataFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateCardDataSuccess: (state, action) => {
            const index = state.data.findIndex(card => card.id === action.payload.id);
            state.data[index] = action.payload;
            state.loading = false;
            state.error = null;
            localStorage.setItem("productItems", JSON.stringify(state.data));
            toast.info("Updated SuccessFully !!", {
                position: "top-right"
            })
        },
        updateCardDataFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteCardDataSuccess: (state, action) => {
            state.data = state.data.filter(card => card.id !== action.payload);
            state.loading = false;
            state.error = null;
            localStorage.setItem("productItems", JSON.stringify(state.data));
            toast.error(`Item is Removed successfully !`, {
                position: "top-right"
            })
        },
        deleteCardDataFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        sortOblect: (state, action) => {
            let sortedData = state.data.sort((a, b) => a.price - b.price);
            state.data = sortedData;
            localStorage.setItem("productItems", JSON.stringify(state.data));
        },
        productView: (state, action) => {
            state.itemToDisplay = action.payload;
            // Set the JSON string in local storage
            localStorage.setItem("productView", JSON.stringify(action.payload));
        }

      
    }
})

export const { setLoading, fetchCardsDataSuccess, fetchCardsDataFailed,
    addCardDataSuccess, addCardDataFailed,
    updateCardDataSuccess, updateCardDataFailed,
    deleteCardDataSuccess, deleteCardDataFailed, sortOblect, productView } = productsSlice.actions;




export default productsSlice.reducer;

// =============================================================//
