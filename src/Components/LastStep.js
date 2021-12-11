import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router';
import { Tooltip } from '@mui/material';
import Footer from './Footer';
export default function LastStep({ name ,setName , email , setEmail , address , setAddress , errormsg , setSubmit , telephoneNumber , setTelephoneNumber }) {
    const history = useHistory()
    return (
        <div>
        <form onSubmit={(e) => setSubmit(e , history )}>
            <h3 style={{textAlign:"center",textShadow:"0 0 10px white",marginBottom:"20px"}}>Put you information here <Tooltip title="ضع بياناتك في الحقول ادناه"><InfoIcon /></Tooltip></h3>
            <p className="styleError" >{errormsg}</p>
            <Tooltip title="ادخل الأسم (يجب ان لا يقل عن 3 حروف)">
            <input className="inputtextlaststep"  type="text" placeholder="👨‍✈️ | 🧕 put your name here* ..."  onChange={(e) => setName(e.target.value)} />
            </Tooltip>
            <Tooltip title="ادخل البريد الألكتروني">
            <input className="inputtextlaststep" type="text" placeholder="📧 put your email here* ..."  onChange={(e) => setEmail(e.target.value)} />
            </Tooltip>
            <Tooltip title="ادخل رقم الهاتف \ او رقم الجوال (يجب ان يكون الرقم متكون من 10 ارقام)">
            <input className="inputtextlaststep" type="text" placeholder="☎ put your Telephone Number here* ..."  onChange={(e) => setTelephoneNumber(e.target.value)} />
            </Tooltip>
            <Tooltip title="ادخل العنوان يجب ان (يجب ان لا يقل عن 7 حروف)">
            <input className="inputtextlaststep" type="text" placeholder="🏠 put your addres here* ..."  onChange={(e) => setAddress(e.target.value)} />
            </Tooltip>
            <p style={{textAlign:"center",fontSize:"18px",fontStyle:"italic"}}>Note : this sign (*) means that fields importent.(must be full it). <span><Tooltip  title="هذه العلامه تعني يجب ملء الحقل المعني   (*)"><InfoIcon /></Tooltip></span></p> 
         
           <hr />
            <h3 style={{textAlign:"center",textShadow:"0 0 10px white",margin:"30px 0"}}>Check please your information below <Tooltip title="if everything is ok then click on make order - افحص بياناتك جيد قبل تثبيث الطلب اذا كل شي جيد فضغط على تثبيت الطلب  "><InfoIcon /></Tooltip></h3>
          <div style={{textAlign:"center",border:"3px solid black",width:"75%",margin:"auto",borderRadius:"20px",padding:"20px"}}>

            <p className="checkGegevens">Your name is : {"👨‍✈️ | 🧕 " + name}</p> 
            <p className="checkGegevens">Your email is : {"📧 "  + email}</p> 
            <p className="checkGegevens">Your Telephone Number is : {"☎ " + telephoneNumber}</p>
            <p className="checkGegevens">Your address is : {"🏠 " + address}</p>
            {/* <p className="checkGegevens">The total price is : {"💵 " + cartinfo.subtotal.formatted_with_symbol}</p>  لا يعمل لا ادري لماذا ؟؟؟؟!!!!!*/}
            
          </div>
          <p className="styleErrorbutton mt-3" >{errormsg}</p>
          <Tooltip title="تثبيت الطلب">
          <input className="hoverOnMakeOrder" style={{display:"block",margin:"auto",marginTop:"20px",marginBottom:"20px",backgroundColor:"maroon",color:"white",padding:"10px 20px", borderRadius:"20px",borderColor:"transparent",fontSize:"20px",fontWeight:"bold",fontFamily:"cursive",textShadow:"0 0 10px white"}} type="submit" value="Make order" />

          </Tooltip>
           
        </form>
        <Footer />
        </div>
    )
}
