import App from './App';
import './index.css';
import React from 'react';

import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import productsReducer from "./store/reducers/productsReducer";
import cartReducer from "./store/reducers/cartReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
