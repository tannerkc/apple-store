import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './css/Navbar.css'

export default function Navbar() {

    const cart = useSelector(state => state.cart)

    return (
        <div className="navbar">
            <Link to="/"><img width={25} src="./images/logo.svg" alt="" /></Link>
            <div className="nav">
                <Link to="/browse">Browse</Link>
                <Link to="/search">
                    <img width={20} style={{marginBottom: -50}} src="./images/search.svg" alt="" />
                </Link>
                <Link to="/cart">
                    <span className="cartCount">{cart.length}</span>
                    <img width={20} src="./images/cart.svg" alt="" />
                </Link>
            </div>
        </div>
    )
}