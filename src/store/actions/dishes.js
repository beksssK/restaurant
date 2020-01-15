import {FETCH_DISHES_ERROR, FETCH_DISHES_REQUEST, FETCH_DISHES_SUCCESS} from "./actionTypes";
import axiosDishes from "../../axios-dishes";


export const fetchDishesRequest = () => ({type: FETCH_DISHES_REQUEST});

export const fetchDishesSuccess = dishes => ({type: FETCH_DISHES_SUCCESS, dishes});

export const fetchDishesError = () => ({type: FETCH_DISHES_ERROR});

export const fetchDishes = () => {
    return async dispatch => {
        dispatch(fetchDishesRequest());
        try {
            let response = await axiosDishes.get('/dishes.json');
            dispatch(fetchDishesSuccess(response.data));
        } catch (e) {
            dispatch(fetchDishesError());
            console.log(e);
        }
    }
};
