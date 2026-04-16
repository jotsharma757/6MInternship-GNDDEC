import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./1Cart";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
});

