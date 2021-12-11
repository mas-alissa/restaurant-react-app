import { Tooltip } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Components/Footer'



export default function checkOut({name , email  , address , telephoneNumber , emptyall}) {
    return (
        <div className="container-fluid">
        <div className="container">
            <div className="row" style={{position:"relative"}}>
                <img src="images\food 1.jpg" alt="checkout" width="100%" style={{opacity:"0.8",borderRadius:"20px",boxShadow:"0 0 10px black"}} />
                <h1 className="absolute-checkout p-2">Thank you for choosing our restaurant</h1>
                  
            </div>
            <div className="order-style mt-5 p-3 mb-5">
            <p style={{textAlign:"center",color:"red",fontSize:"20px"}}>Order Details</p>
            <p className="">Order number: {Math.floor(Math.random() * 1000000000)}</p>
            <p>Order Date : 📆 {new Date().getDay() == 0 ? "Sunday" : new Date().getDay() == 1 ? "Monday" : new Date().getDay() == 2 ? "Tuesday" : new Date().getDay() == 3 ? "Wednesday" : new Date().getDay() == 4 ? "Thursday" : new Date().getDay() == 5 ? "Friday" : "Saturday" } {new Date().getDate()}-{new Date().getMonth() + 1}-{new Date().getFullYear()} {new Date().getHours()}:{new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes()}:{new Date().getSeconds() < 10 ? "0" + new Date().getSeconds() : new Date().getSeconds()}</p>
            <p>Name : 👨‍✈️ | 🧕 {name}</p>
            <p>Telephone Number : ☎ {telephoneNumber}</p>
            <p>Email : 📧 {email}</p>
            <p>Address : 🏠 {address}</p>
            <Tooltip title="سيتم توصيل الطلب في فتره على تتجاوز ساعه واحده."><p style={{textAlign:"center",fontStyle:"italic",color:"mediumaquamarine"}}><span style={{fontSize:"25px"}}>🛵</span> The order will be delivered in no more than one hour.</p></Tooltip>
            <p style={{textAlign:"center"}}>Thank you for buying and see you again !!</p>
            </div>
            <div style={{textAlign:"center"}}>
                <button onClick={emptyall} className="goToHomePageBtn mb-3"><Link className="linkstyle" to="/">Go Back To Home Page</Link></button>
            </div>
          
            
            
        </div>
        <div className="row">
        <div className="col-lg-12 p-0">
        <Footer />
        </div>
        </div>
        
        </div>
    )
}
