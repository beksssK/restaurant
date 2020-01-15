import {FETCH_DISHES_ERROR, FETCH_DISHES_REQUEST, FETCH_DISHES_SUCCESS} from "../actions/actionTypes";

const initialState = {
    allProducts: [],
    loading: false,
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DISHES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_DISHES_SUCCESS:
            return {
                ...state,
                loading: false,
                allProducts: Object.keys(action.dishes).map(item => ({...action.dishes[item], id: item})),
            };
        case FETCH_DISHES_ERROR:
            console.log('errroooor');
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default productsReducer;
