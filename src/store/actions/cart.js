import {ADD_TO_CART, ORDERS_ERROR, ORDERS_REQUEST, ORDERS_SUCCESS, REMOVE_FROM_CART} from "./actionTypes";
import axiosDishes from "../../axios-dishes";


export const addToCart = dishInfo => ({type: ADD_TO_CART, dishInfo});
export const removeFromCart = dishInfo => ({type: REMOVE_FROM_CART, dishInfo});

export const orderRequest = () => ({type: ORDERS_REQUEST});
export const orderSuccess = () => ({type: ORDERS_SUCCESS});
export const orderError = error => ({type: ORDERS_ERROR, error});

export const sendOrder = order => {
    return async dispatch => {
        dispatch(orderRequest());
        try{
            await axiosDishes.post('orders.json', order);
            dispatch(orderSuccess());
        } catch (e) {
            console.error('Error happened: ', e);
            dispatch(orderError(e));
        }
    }
};
