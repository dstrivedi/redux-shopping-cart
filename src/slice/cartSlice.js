import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalItemInCart: 0,
    carts: [],
    totalPriceInCart: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart:(state, action) => {
            const {id, thumbnail, title, price, stock} = action.payload;
            const existingItem = state.carts.find(item => item.id === id);

            if(existingItem) {
                existingItem.quantity += 1;
                existingItem.totalPrice += existingItem.price;
                state.totalPriceInCart += existingItem.price;
            } else {
                const newCartItem = {
                    id, 
                    quantity:1,
                    title, 
                    totalPrice: price,
                    thumbnail,
                    price
                }
                state.carts.push(newCartItem);
                state.totalPriceInCart += newCartItem.price;
            }
            
            state.totalItemInCart += 1;
        },
        increaseQuantity: (state, action) => {
            const index = action.payload;
            if(state.carts[index]) {
                if(state.carts[index].quantity <= state.carts[index].stock) { 
                    state.totalItemInCart +=1;
                    state.carts[index].quantity += 1;
                    state.carts[index].totalPrice += (state.carts[index].price)
                    state.totalPriceInCart += state.carts[index].price;
                }
            }
        },
        decreaseQuantity:(state, action) => {
            const index = action.payload; 
            if(state.carts[index]) {
                if(state.carts[index].quantity > 1) {
                    state.totalItemInCart -= 1;
                    state.carts[index].quantity -= 1;
                    state.carts[index].totalPrice -= state.carts[index].price;
                    state.totalPriceInCart -= state.carts[index].price;
                }
            }
        },
        deleteCart:(state, action) => {
            const index = action.payload;
            const itemToDelete = state.carts[index];
            if(itemToDelete) {
                state.totalItemInCart -= itemToDelete.quantity;
                state.carts = state.carts.filter((_,i) => i !== index);
                state.totalPriceInCart = 0;
            }
        }
    }
});

export const {addToCart, increaseQuantity, decreaseQuantity, deleteCart} = cartSlice.actions;

export default cartSlice.reducer;



