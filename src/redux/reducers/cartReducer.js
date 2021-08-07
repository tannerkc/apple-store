import { ADD_TO_CART, REMOVE_FROM_CART } from "../types/cartTypes";

export const cartReducer = (state = [], action) =>{
    switch(action.type){
        case ADD_TO_CART:
            return [...state, {name: action.payload.name, id: action.payload.id}]
        case REMOVE_FROM_CART:
            return state.filter(x=>x.id !== action.payload)
        default: 
            return state
    }
}
