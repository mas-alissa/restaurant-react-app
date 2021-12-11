import { Tooltip } from '@mui/material'
import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
export default function CartItems({item,onUpdateCart,onRemoveCart}) {
    return (
        <div  style={{textAlign:"center"}}>
        
            <img src={item.image.url} width="200px" style={{border:"5px solid lightgray",borderRadius:"50%"}} />
            <h1 className="item-name-style">{item.name} <Tooltip title={"Total price for this type dish : " + item.line_total.formatted_with_symbol + " : المجموع الكلي لهذا الطبق "}><InfoIcon /></Tooltip></h1>
            <button type="button" className="btn-min-plus-style" onClick={() => onUpdateCart(item.id , item.quantity + 1)}>+</button>
            <button type="button" className="btn-min-plus-style" onClick={() => onUpdateCart(item.id , item.quantity - 1)}>-</button>
            
            <button type="button" className="btn-remove-item" onClick={() => onRemoveCart(item.id)}>Remove item </button>
            <h3 className="mt-3 mb-3">price per item : {item.price.formatted_with_symbol}</h3>
            <h3 className="mb-5">Quantity : {item.quantity}</h3>

        </div>
    )
}
