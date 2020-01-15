import {ADD_TO_CART, REMOVE_FROM_CART} from "./actionTypes";


export const addToCart = dishName => ({type: ADD_TO_CART, dishName});

export const removeFromCart = dishName => ({type: REMOVE_FROM_CART, dishName});
