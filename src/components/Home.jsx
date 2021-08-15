import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/actions/cartActions'
import './css/Home.css'

export default function Home() {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

  const addToCartHandler = (product) =>{
    dispatch(addToCart(product))
  }

  return (
    <div className="main">
      <div className="iphone_intro">
        <h2>iPhone 12 and iPhone 12 mini</h2>
        <h1>Blast past fast.</h1>
        <button onClick={()=>addToCartHandler(products[0])}>Add to Cart</button>
      </div>
      <img src="./images/a02.png" alt="" />
    </div>
  )
}
