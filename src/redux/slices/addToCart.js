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
               // reduce quantity instead of removing all
  const item = state.items.find(i => i.id === action.payload);
  if (item && item.quantity > 1) {
    item.quantity -= 1;
  } else {
    state.items = state.items.filter(i => i.id !== action.payload);
  }
  localStorage.setItem('cart', JSON.stringify(state.items));
        },
        clearAllItems: (state) => {
             state.items = []   // reset to empty array
             localStorage.setItem('cart',JSON.stringify(state.items))
        },
    }
})

export const { addItem, removeItem, clearAllItems } = addToCart.actions
export default addToCart.reducer