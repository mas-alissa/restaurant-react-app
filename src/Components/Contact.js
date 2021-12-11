import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton, Tooltip } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Footer from './Footer';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from 'react'

import emailjs from "emailjs-com";

export default function Contact() {

    const [correct,setCorrect] = useState("")

    const sendEmail = (e) => {
        setCorrect("We received your message. We will reply as soon as possible. ✅")
        e.preventDefault();
        setTimeout(() => {
            setCorrect("")
        
        },6000)
        emailjs.sendForm('service_9g5e22h', 'template_m58gbwc', e.target, 'user_SkNyBHbOS1ry62IeZ1tpO')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset() //لتفريغ الحقول بعد الضغط على كلمة ارسال
      };
    return (
        <div className="container-fluid">
        <div className="container">
        <h1>Contact Us</h1>
        <p style={{textShadow:"0 0 10px white",fontSize:"22px"}}>You can put your quistions or notations in message field below :</p>
            <div className="row">
                <div className="left col-lg-6 col-md-6 col-sm-12 border">
                <form onSubmit={sendEmail} style={{fontSize:"25px"}}>
               
               <label>First Name: </label>
               <div>
                <input type="text" name="fname" required className="fname-class" />
               </div>
               
               <label>Last Name : </label>
               <div>
                <input type="text" name="lname" required  className="lname-class" />
               </div>
              
               <label>Email : </label>
               <div>
                <input type="email"  name="email" required className="email-class" />
               </div>
              

               <label>Subject : <Tooltip title={"Write your subject of your question - اكتب هنا موضوع سؤالك"}><InfoIcon /></Tooltip></label>
               <div>
                <input type="text" name="subject" required  className="subject-class" />
               </div>

               <label>Message : <Tooltip title={"put your message here ... ضع رسالتك هنا في هذا الحقل"}><InfoIcon /></Tooltip></label>
               <div>
               <textarea  name="message" required className="textarea">
        
                </textarea>
               </div>

               <div className="flexe-boxe-submit">
               <input type="submit" value="Send" className="submitbtn" />
               <Tooltip title={"لقد استلمنا رسالتك وسيتم الرد باسرع وقت ممكن ✅"}>
               <span className="margin-Left-send-message" >{correct}</span>
               </Tooltip>
               </div>
                </form>
                
                </div>



                <div className="right col-lg-6 col-md-6 col-sm-12 border">
                <p style={{fontWeight:"bold",fontSize:"20px",fontFamily:"monospace",margin:"20px 0"}}>Location: Iraq - Baghdad</p>
                <p style={{fontWeight:"bold",fontSize:"20px",fontFamily:"monospace",margin:"20px 0"}}>Telephone Number : 0096412345678</p>
                <p style={{fontWeight:"bold",fontSize:"20px",fontFamily:"monospace",margin:"20px 0"}}>Email Address : restaurant@lyale-baghdad.iq</p>
                <p style={{fontWeight:"bold",fontSize:"20px",fontFamily:"monospace",margin:"20px 0"}}>Web-Site : https://www.lyale-baghdad.iq</p>
                <div className="flex-social-media">
                
                <IconButton  color="primary">
                    <FacebookIcon fontSize="large" />
                </IconButton>
             
                <IconButton  color="primary">
                    <TwitterIcon fontSize="large" />
                </IconButton>
                <IconButton  color="secondary">
                    <InstagramIcon fontSize="large" />
                </IconButton>
                <IconButton color="success">
                    <WhatsAppIcon fontSize="large" />
                </IconButton>
                </div>
                </div>
                
            </div>
        </div>
        <div className ="row">
        <div className="col-lg-12 p-0 mt-4">
        <Footer />
        </div>
        </div>
        </div>
        
    )
}
