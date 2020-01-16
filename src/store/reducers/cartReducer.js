import {
    ADD_TO_CART,
    INIT_CART,
    REMOVE_FROM_CART
} from "../actions/actionTypes";

const initialState = {
    cart: [],
    totalPrice: 150,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let itemIndex = state.cart.findIndex(item => item.id === action.dishInfo.id);
            if(itemIndex >= 0 ){
                let currentArray = [...state.cart];
                let currentItem = {...currentArray[itemIndex]};
                currentItem.count = state.cart[itemIndex].count + 1;
                currentArray[itemIndex] = currentItem;
                return {
                    ...state,
                    cart: currentArray,
                    totalPrice: state.totalPrice + currentItem.price,
                }
            }else {
                return {
                    ...state,
                    cart: [...state.cart, {...action.dishInfo, count: 1}],
                    totalPrice: state.totalPrice + action.dishInfo.price,
                };
            }
        case REMOVE_FROM_CART:
            let removeIndex = state.cart.findIndex(item => item.id === action.dishInfo.id);
            let currentArray = [...state.cart];
            let currentItem = {...currentArray[removeIndex]};
            if(currentItem.count > 1){
                currentItem.count = state.cart[removeIndex].count - 1;
                currentArray[removeIndex] = currentItem;
                return {
                    ...state,
                    cart: currentArray,
                    totalPrice: state.totalPrice - currentItem.price
                }
            } else{
                return {
                    ...state,
                    cart: state.cart.filter(item => item.id !== currentItem.id),
                    totalPrice: state.totalPrice - currentItem.price
                }
            }
        case INIT_CART:
            return {
                ...state,
                cart: [],
                totalPrice: 150,
            };
        default:
            return state;
    }
};

export default cartReducer;
