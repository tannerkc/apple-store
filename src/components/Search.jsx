import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/actions/cartActions'
import './css/Search.css'

export default function Search() {

    const [queried, setQueried] = useState(null)

    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    const addToCartHandler = (product) =>{
        dispatch(addToCart(product))
    }

    const handleSearch = (e) =>{
        let results = products.filter(product=>product.name.toLowerCase().includes(e.toLowerCase()))
        setQueried(results)

        if(e == ''){
            setQueried(null)
        }
    }

    return (
        <div className="container">
            <div className="inputBox">
                <input 
                    type="text" 
                    placeholder="Search..."
                    onChange={(e)=>{handleSearch(e.target.value)}}
                />
            </div>
            <div className="productContainer" style={{marginTop: 50}}>
            {
                queried?
                queried.map(product =>(
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
                :
                <h2>Search to view products</h2>
            }            
            </div>
        </div>
    )
}
