import { createSlice } from "@reduxjs/toolkit";

const Cart = createSlice({
    name: "Shopping Cart",
    initialState: { cartItems: [] },

    reducers: {

        addCart: (state, action) => {
            const product = state.cartItems.find(item => item.id === action.payload.id);

            if (product) {
                product.count += 1;
            } else {
                state.cartItems.push({ ...action.payload, count: 1 });
            }
        },

        removeCart: (state, action) => {
            const product = state.cartItems.find(item => item.id === action.payload);

            if (product) {
                if (product.count > 1) {
                    product.count -= 1; // decrease count by 1
                } else {
                    // remove product if count is 1
                    state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
                }
            }
        }
    }
});

export const { addCart, removeCart } = Cart.actions;
export default Cart.reducer;