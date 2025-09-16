// createAsyncThunk used for middleware or api calling and it takes two parameter name and async function  
// extraReducers work when we call async operation or directly call from ui part 


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products', async () => {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    return data.products
})

const initialState = {
    items: [],
    status: undefined,
    error: null
}

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled,(state,action) => {
            state.status = "succeeded",
            state.items = action.payload
        })
    }
})

export default productsSlice.reducer