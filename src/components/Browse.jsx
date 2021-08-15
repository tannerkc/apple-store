import React from 'react'
import './css/Browse.css'
import { useDispatch, useSelector } from 'react-redux'
import {addToCart} from '../redux/actions/cartActions'

export default function Browse() {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    const addToCartHandler = (product) =>{
        dispatch(addToCart(product))
    }

    return (
        <div className="container">
        <h1>Top Products</h1>
        <div className="productContainer">
            {
                products&&
                products.map(product =>(
                    <div className="productCard" key={product.id}>
                        <div className="imgContainer">
                            <img src={product.img} alt="" />
                        </div>
                        <div>
                            <h3>{product.name}</h3>
                            <button onClick={()=>addToCartHandler(product)}>Add to Cart</button>
                        </div>
                    </div>
                ))
            }            
        </div>
        </div>
    )
}
