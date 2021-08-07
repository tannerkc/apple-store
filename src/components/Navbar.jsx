import React from 'react'
import './css/Navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <img width={25} src="./images/logo.svg" alt="" />
            <div className="nav">
                <a href="/browse">Browse</a>
                <a href="/cart">
                    <img width={20} src="./images/cart.svg" alt="" />
                </a>
            </div>
        </div>
    )
}
