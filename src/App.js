
import { BrowserRouter , Link,  NavLink,  Route , Switch } from 'react-router-dom'
import Home from './Components/Home'
import './index.css'
import {commerce} from "./Lib/commerce"
import Navbar from './Components/Navbar'
import { useEffect, useState } from 'react'
import Cart from './Components/Cart'
import Products from './Components/Menu'
import Menu from './Components/Menu'
import CheckOut from './CheckOut'
import Contact from './Components/Contact'
import LastStep from './Components/LastStep'

export default function App() {

  const [products,setProducts] = useState([])
  const [cart,setCart] = useState({line_items: []})

  const [open, setOpen] = useState(false);

  const handleClick = () => {
      setOpen(true);
      console.log(open)
    };



    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [address,setAddress] = useState("")

    const [telephoneNumber,setTelephoneNumber] = useState("")

    const [errormsg,setErrorMsg] = useState("")


    const emptyall = () => {
      setErrorMsg("")
      setName("")
      setEmail("")
      setAddress("")
      setTelephoneNumber("")
    }
   
    
    const setSubmit = (e , history) => {
      
      let styleError = document.querySelector(".styleError");
      let styleErrorbutton = document.querySelector(".styleErrorbutton")
     
      e.preventDefault()
      if(name === "" || name.length <= 2 ) {
       
        styleError.classList.add("errormsg")
        styleErrorbutton.classList.add("errormsg")
        setErrorMsg("Please check name .. the name is not valid !! 🚧");
        
      }else if(email.indexOf("@") == -1){
        styleError.classList.add("errormsg")
        styleErrorbutton.classList.add("errormsg")
        setErrorMsg("Please check email address .. the email address is not valid !! 🚧")
      }   else if(isNaN(telephoneNumber) || telephoneNumber.length != 10 ){
        styleError.classList.add("errormsg")
        styleErrorbutton.classList.add("errormsg")
        setErrorMsg("Please check Telephone Number .. the Telephone Number is not valid !! 🚧")
      } else if(address.length < 7 || address === ""){
        styleError.classList.add("errormsg")
        styleErrorbutton.classList.add("errormsg")
        setErrorMsg("Please check address .. the address is not valid !! 🚧")
      } else{
        styleError.classList.remove("errormsg")
        styleErrorbutton.classList.remove("errormsg")
        styleError.classList.add("ok")
        styleErrorbutton.classList.add("ok")
        setErrorMsg("✔ OK!!")
       setTimeout(()=>{
        handleEmptyCart()
       },1500)
        setTimeout(() => 
          
          history.push("/checkout"),1500
         
        )
        
    
      
      }
    }

   



const fetchProducts = async () =>{
  const {data} = await commerce.products.list();
  setProducts(data)

}
console.log(products)

const fetchCart = async () =>{
  setCart(await commerce.cart.retrieve()) //  عمل سله فارغه
}

const handleAddToCart = async (productid, quantity) =>{
  handleClick()
  const {cart} = await commerce.cart.add(productid, quantity)
  setCart(cart)
  
}



const handleUpdateCart = async (productid, quantity) => {
  const {cart} = await commerce.cart.update(productid, {quantity});
setCart(cart)
}


const handleRemoveCart = async (productid) => {
  const {cart} = await commerce.cart.remove(productid);
  setCart(cart);
}

const handleEmptyCart = async () => {
  const {cart} = await commerce.cart.empty();
  setCart(cart);
}
useEffect(() => {
  fetchProducts();
  fetchCart();
  
},[])
console.log(cart)
const filter = (e) =>{
  let val = e.target.value.toUpperCase();
  if(val !== ""){
    const x = products.filter(item => item.name.toUpperCase().startsWith(val))
    setProducts(x)
  } else {
    fetchProducts()
  }
}

const handleClose = (event, reason) => {
  console.log(reason);
  if (reason === "clickaway") {
    return;
  }

  setOpen(false);
};





  return (
    <BrowserRouter>
    
      <Navbar totalItems={cart.total_items} />


    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/cart">
      <Cart cart={cart} handleUpdateCart={handleUpdateCart} handleRemoveCart={handleRemoveCart}  handleEmptyCart={handleEmptyCart} />
        </Route>
        <Route exact path="/menu">
        <Menu products={products} open={open} handleClose={handleClose}  onAddToCart={handleAddToCart} cart={cart} />
        </Route>
       
       <Route path="/contact" component={Contact} />
      
      <Route path="/checkout">
        <CheckOut name={name} email={email} address={address} telephoneNumber={telephoneNumber} emptyall={emptyall} />
      </Route>
          
        

        <Route path="/laststep">
          <LastStep   handleEmptyCart={handleEmptyCart} name={name} setName={setName} email={email} setEmail={setEmail} address={address} setAddress={setAddress} errormsg={errormsg} setSubmit={setSubmit} telephoneNumber={telephoneNumber} setTelephoneNumber={setTelephoneNumber} />
        </Route>
        
    </Switch>
    
    </BrowserRouter>
   
  )
}
