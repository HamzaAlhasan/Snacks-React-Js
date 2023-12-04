import {configureStore} from '@reduxjs/toolkit';
import  cartReducer  from './Slices/reducer-cart';

export const store = configureStore({
    reducer :{
        cart : cartReducer
    }
})