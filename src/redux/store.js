import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/addToCart'
import productReducer from './slices/productApi'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer
    }
})

export default store;