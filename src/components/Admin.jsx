import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, removeProduct } from '../redux/actions/productActions'
import {db} from '../firebase'
import { uuidv4 } from '../lib/uuidv4'

export default function Admin() {

    const [productName, setProductName] = useState('')
    const [productImg, setProductImg] = useState('')

    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    const handleCreateProduct = () =>{
        let productId = uuidv4()
        db.collection('products').doc(productId).set({
            name: productName,
            productId: productId,
            img: productImg
        })
        if(productName !== '' && productImg !== ''){
            dispatch(addProduct({name: productName, img: productImg, productId}))
            setProductName('')
            setProductImg('')
        }
    }

    const handleDeleteProduct = (productId) =>{
        db.collection('products').doc(productId).delete()
        dispatch(removeProduct(productId))
    }

    return (
        <div className="container">
            <div className="form">
                <div className="inputBox" style={{marginBottom: 20}}>
                    <input type="text" 
                    value={productName}
                    placeholder="product name" onChange={(e)=>setProductName(e.target.value)} />
                </div>

                <div className="inputBox" style={{marginBottom: 20}}>
                    <input type="text" 
                    value={productImg}
                    placeholder="product img url"  onChange={(e)=>setProductImg(e.target.value)} />
                </div>
                <button onClick={handleCreateProduct}>Add Product</button>
            </div>
            <div className="productList">
                {
                    products&&
                    products.map(product=>(
                        <div className="productListing">
                            <img src={product.img} alt="" />
                            <h3>{product.name}</h3>
                            <button onClick={()=>handleDeleteProduct(product.productId)} style={{marginTop: 0, background: '#E33A8B', height: '100%'}}>delete</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
