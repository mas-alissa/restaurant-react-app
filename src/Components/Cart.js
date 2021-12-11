
import { Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import NewFooter from '../NewFooter'

import CartItem from './CartItems'
import Footer from './Footer'

export default function Cart({cart,handleUpdateCart,handleRemoveCart,handleEmptyCart,formatted_with_symbol}) {

    const Emptycart = () =>(
        <div>
        <h1 style={{marginTop:"50px",fontFamily:"Anton, sans-serif",textAlign:"center",color:"yellow"}}>No items in shopping cart</h1>
        <NewFooter />
        </div>
        )

    const FilledCard = () => (
        
        
        <div style={{marginTop:"50px"}}>
     <div  className="postion-fixed">
            
            <p>Total : {cart.subtotal.formatted_with_symbol}</p>
            <button className="emptyCartBtn" onClick={handleEmptyCart}>Empty Cart</button>
            <button className="checkOutCartBtn ml-3"><Link to="/laststep" style={{ textDecoration: 'none',color:"green" }}>Check Out</Link></button>
            {/* <img style={{opacity:0.8}} src="images\paymentmethods.png" alt="payment" /> */}
        </div>
            <div style={{textAlign:"center"}}>{formatted_with_symbol}</div>
            <Grid container >
            {cart.line_items.map((item) => (
                
                <Grid item xs={12} sm={12} md={6} lg={4} key={item.id} >
                <papar>
                <CartItem item={item} onUpdateCart={handleUpdateCart} onRemoveCart={handleRemoveCart}/>
                </papar>
                </Grid>
                
            
            ))}
</Grid>
            {/* <div style={{textAlign:"center",marginTop:"30px"}}>
                <button type="button" className="emptyCartBtn" onClick={handleEmptyCart}>Emptycart</button>
            </div> */}

            

            <Footer />
           
        </div>
        
    )
    return (
        <div>
      {/* {console.log(cart.line_items[0].id)} */}
         <h1 style={{fontFamily:"Anton, sans-serif",textAlign:"center",textShadow:"0 0 10px white"}}>Your shopping cart</h1>
         
         {!cart.line_items.length ? <Emptycart /> : <FilledCard />}
        
        </div>
    )
}
