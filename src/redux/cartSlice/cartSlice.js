import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemsList: [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const findItem = state.itemsList.find(item => item.id === action.payload.id)
            if(findItem){
                findItem.amount++
                findItem.totalPrice += findItem.price
            }else{
                state.itemsList.push({
                    id: action.payload.id,
                    price: action.payload.price,
                    amount: action.payload.amount,
                    totalPrice: action.payload.price,
                    title: action.payload.title
                })
            }
            
        },
        removeItem: (state, action) => {
            const findItem = state.itemsList.find(item => item.id === action.payload.id)

            if(findItem.amount === 1){
                state.itemsList = state.itemsList.filter(item => item.id !== action.payload.id)
            }else{
                findItem.amount--
                findItem.totalPrice -= findItem.price
            }
        },
        filterItems: (state, action) => {
            state.itemsList = state.itemsList.filter(item => item.id !== action.payload)
            
        },
    }

})


export const {
    addItem,
    removeItem,
    filterItems,
} = cartSlice.actions

