import { Snackbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Product({ product, onAddToCart, open, handleClose , price , cart }) {

    //   console.log(lastItem.name)

    return (

        <div key={product.id} className="product-style">
            <h1>{product.name}</h1>
            <img className="zoomIn-img" src={product.image.url} width="400" height="270" style={{ borderRadius: "50%", border: "5px solid black",margin:"10px 0" }} alt="food" />
            <button className="btnStyle" onClick={() => onAddToCart(product.id, 1)}>Add to cart <span style={{fontSize:"25px"}}>🛒</span></button>

            <p>{product.price.formatted_with_symbol}</p>
               
             <div dangerouslySetInnerHTML={{__html:product.description}} /> {/*تسمح للرياكت بقرائة البيانات بشكل جيد  */}
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message="You added new item to your cart 🛒"
                action={<span style={{ color: "red" }}>Total items : {cart.total_items}</span>}
            />

        </div>
    )
}
