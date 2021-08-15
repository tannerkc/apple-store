import {ADD_PRODUCT, REMOVE_PRODUCT} from '../types/productTypes'

export const addProduct = (item) => async(dispatch)=>{
    try{
        dispatch({
            type: ADD_PRODUCT,
            payload: {
                name: item.name,
                img: item.img,
                productId: item.productId
            }
        })
    }
    catch(error){
        console.log(error)
    }
}

export const removeProduct = (productId) => async(dispatch)=>{
    dispatch({
        type: REMOVE_PRODUCT,
        payload: productId
    })
}