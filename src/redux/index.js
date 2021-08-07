import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { cartReducer } from "./reducers/cartReducer";
import thunk from 'redux-thunk'

const reducers = combineReducers({
    cartReducer: cartReducer,
})

const middleware = [thunk]

const initialState = {
    cart: [],
    products: [
        {
            name: 'iphone',
            img: 'https://www.apple.com/v/iphone/home/az/images/chapternav/iphone_12_pro_dark__c1xodf0hb1w2_large.svg'
        },
        {

        },
        {

        }
    ],
}

const store = createStore(reducers, initialState, compose(applyMiddleware(...middleware)))

export default store;