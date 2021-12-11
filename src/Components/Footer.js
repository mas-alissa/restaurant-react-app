import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
export default function Footer() {



  const [todayIs,setTodayIs] = useState("");
  // const [status,setStatue] = useState(true);
  
  useEffect(() =>{
    switch (new Date().getDay()) {
      case 0:
        setTodayIs("Sunday");
        break;
      case 1:
        setTodayIs("Monday");
        break;
      case 2:
         setTodayIs("Tuesday");  
        break;
      case 3:
        setTodayIs("Wednesday");  
        break;
      case 4:
        setTodayIs("Thursday"); 
        break;
      case 5:
        setTodayIs("Friday");
        // setStatue(true);
        break;
      case 6:
        setTodayIs("Saturday");
        // setStatue(true);
    }
  })
    return (
        <div>
             <footer className="container-fluid bg-warning boxShadow-footer pt-3 margin-top">
     
     <div className="row justify-content-around">
       <div className="col-lg-6 col-md-6 col-sm-12 mb-3 ">
         <p className="pargraf-footer" style={{margin:"0 0 5px 0",padding:0}}>Opening hours ⏰</p>
         <div className="bg-danger" style={{height:3,width:"60px"}}></div>
         <div id={todayIs && todayIs === "Monday" ? "Monday" : ""} className="d-flex justify-content-around mt-3 positionRelative">
         <p className="paragraph-opening-hours">Monday</p>
         <p className="paragraph-opening-hours">14:00 - 22:00</p>
         <div className="DayStatus">{todayIs === "Monday" ? "open" : null}</div>

       </div>
       <div id={todayIs && todayIs === "Tuesday" ? "Tuesday" : ""} className="d-flex justify-content-around positionRelative">
         <p className="paragraph-opening-hours">Tuesday</p>
         <p className="paragraph-opening-hours">14:00 - 22:00</p>
         <div className="DayStatus">{todayIs === "Tuesday" ? "open" : null}</div>

       </div>
       <div id={todayIs && todayIs === "Wednesday" ? "Wednesday" : ""} className="d-flex justify-content-around positionRelative">
         <p className="paragraph-opening-hours">Wednesday</p>
         <p className="paragraph-opening-hours">14:00 - 22:00</p>
         <div className="DayStatus">{todayIs === "Wednesday" ? "open" : null}</div>

       </div>
       <div id={todayIs && todayIs === "Thursday" ? "Thursday" : ""} className="d-flex justify-content-around positionRelative">
         <p className="paragraph-opening-hours">Thursday</p>
         <p className="paragraph-opening-hours">14:00 - 22:00</p>
         <div className="DayStatus">{todayIs === "Thursday" ? "open" : null}</div>

       </div>
       <div id={todayIs && todayIs === "Friday" ? "Friday" : ""} className="d-flex justify-content-around positionRelative">
         <p className="paragraph-opening-hours">Friday</p>
         <p className="paragraph-opening-hours">Closed</p>
         <div className="DayStatusFriday">{todayIs === "Friday" ? "close😌" : null}</div>

       </div>
       <div id={todayIs && todayIs === "Saturday" ? "Saturday" : ""} className="d-flex justify-content-around positionRelative">
         <p className="paragraph-opening-hours">Saturday</p>
         <p className="paragraph-opening-hours">14:00 - 22:00</p>
         <div className="DayStatus">{todayIs === "Saturday" ? "open" : null}</div>

       </div>
       <div id={todayIs && todayIs === "Sunday" ? "Sunday" : ""} className="d-flex justify-content-around positionRelative">
         <p className="paragraph-opening-hours">Sunday</p>
         <p className="paragraph-opening-hours">14:00 - 22:00</p>
         <div className="DayStatus">{todayIs === "Sunday"  ? "open" : null}</div>

       </div>
       </div>
       


       <div className="col-lg-6 col-md-6 col-sm-12">
         <p className="pargraf-footer" style={{margin:"0 0 5px 0",padding:0}}>Viste Our Face-book page 🌍</p>
         <div className="bg-danger" style={{height:3,width:"60px"}}></div>
         <div>
         {/* <p style={{margin:"0 0 5px 0",padding:0}}></p> */}
         <p className="paragraph-right-footers mt-4" style={{margin:"0 0 5px 0",padding:0}}>Follow our Face-book page for news about our restaurant.</p>
         <p className="paragraph-right-footers" style={{margin:"0 0 5px 0",padding:0}}>Sign up below for our newsletter and never miss an offer again!</p>
         <Link to="/"><img className="logo-facebook mt-3 mb-3" src="images\facebook-png-logo.png" alt="facebook-logo" /></Link>
       </div>
       </div>
       <div className="container-fluid text-center p-4" style={{backgroundColor:'black', color:"lightGray",textShadow:"0 0 10px white",fontFamily:'Libre Baskerville, serif',fontSize:"14px"}}>This page made with <span className="hartStyle">❤</span> <em>by Mohammed Al-Issa</em> <p style={{margin:"10px 0",fontSize:"10px"}}> © Copyright {new Date().getFullYear()}</p></div>

     </div>
     
   
   </footer>
        </div>
    )
}
