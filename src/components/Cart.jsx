import React from 'react'
import './css/Browse.css'
import { useDispatch, useSelector } from 'react-redux'
import {removeFromCart} from '../redux/actions/cartActions'
import { Link } from 'react-router-dom'

export default function Cart() {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const removeFromCartHandler = (id) =>{
        dispatch(removeFromCart(id))
    }

    return (
        <div className="container">
            <h1>Your Cart</h1>
            <div className="productContainer">
                {
                    cart.length > 0?
                    cart.map(product =>(
                        <div className="productCard" key={product.id}>
                            <div className="imgContainer">
                                <img src={product.img} alt="" />
                            </div>
                            <div>
                                <h3>{product.name}</h3>
                                <button onClick={()=>removeFromCartHandler(product.cartId)}>Remove</button>
                            </div>
                        </div>
                    ))
                    :
                    <div className="nothingHere">
                        <h2 style={{marginBottom: 40}}>Looks like you haven't found what you want...</h2>
                        <Link to="/browse" className="button">Browse</Link>
                    </div>
                }
            </div>
        </div>
    )
}
