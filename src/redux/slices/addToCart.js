import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // items: []
    // to set with localStorage 
    items: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
}

const addToCart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state,action) => {
            // state.value += 1;
            console.log(action);    
            state.items.push(action.payload)
            localStorage.setItem('cart',JSON.stringify(state.items))
        },
        removeItem: (state,action) => {
             // action.payload = product id
             const cartData = state.items.filter(item => item.id != action.payload)
             state.items = cartData  
             localStorage.setItem('cart',JSON.stringify(cartData))
        },
        clearAllItems: (state) => {
             state.items = []   // reset to empty array
             localStorage.setItem('cart',JSON.stringify(state.items))
        },
    }
})

export const { addItem, removeItem, clearAllItems } = addToCart.actions
export default addToCart.reducer