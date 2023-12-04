import { createSlice } from "@reduxjs/toolkit";

const storedcart = JSON.parse(localStorage.getItem('cart')) || [];
const initialState = {
    items : storedcart
}
export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers :{
        addTocart : (state,action) =>{
            state.items.push(action.payload)
            localStorage.setItem('cart',JSON.stringify(state.items))
        },
        removeFromCart : (state,action)=>{
            state.items = state.items.filter((item)=> item.id !== action.payload.id)
            localStorage.setItem('cart',JSON.stringify(state.items))
        },
        ClearCart : (state)=>{
            state.items = [];
            localStorage.removeItem('cart');
        }
    }
}) 

export const {addTocart,removeFromCart,ClearCart} = cartSlice.actions;
export default cartSlice.reducer; 