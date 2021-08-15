import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { db } from '../firebase';
import { cartReducer, productReducer } from './reducers';

let productsData = [];
const productsRef = db.collection('products')

productsRef.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        productsData.push(doc.data())
    });
})

const reducers = combineReducers({
    cart: cartReducer,
    products: productReducer
})

const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    products: productsData || [],
}

const store = createStore(reducers, initialState, compose(applyMiddleware(thunk)))

export default store;