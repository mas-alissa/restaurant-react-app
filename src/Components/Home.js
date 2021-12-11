import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import StarIcon from '@mui/icons-material/Star';
import { Tooltip } from '@mui/material';
export default function Home() {
  return (
    <div>

      {/* <Navbar /> */}


      {/* Carousel */}

      <div className="container-fluid">
        <div className="row">
          <div id="carouselExampleSlidesOnly" className="carousel slide w-100" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active pos-relative">
                <img src="images\food.jpg" className="d-block w-100 height" alt="food" />
                <p className="pg-pos-absolute styleFont">We are distinguished by the diversity of dishes</p>
              </div>
              <div className="carousel-item">
                <img src="images\food 2.jpg" className="d-block w-100 height" alt="food" />
                <p className="pg-pos-absolute styleFont">You can find various dishes from grills, types of dishes, soups, desserts ... and more</p>
              </div>
              <div className="carousel-item">
                <img src="images\irakeese brood.jpg" className="d-block w-100 height" alt="iraqi brood" />
                <p className="pg-pos-absolute styleFont">Where we prepare the bread in a fresh way and directly from the tandoor Worth a try!!</p>
              </div>
              <div className="carousel-item">
                <img src="images\desert.jpg" className="d-block w-100 height" alt="Sweets" />
                <p className="pg-pos-absolute styleFont">Iraqi sweets...worth a try!!
                  Iraqi sweets are varied, there are Znoud Al-Sit, Baklava, Kunafa</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="container">
      <Tooltip title="مرحبا بكم في مطعمنا ليالي بغداد"><h2 className="m-5 bg-warning size-size-font" style={{boxShadow:"0 0 10px white",textShadow:"0 0 15px gray"}}><span className="hideStarstitle"><StarIcon color="warning" /><StarIcon color="warning" /></span> Welcome to our restaurant Baghdad Nights <span className="hideStarstitle"><StarIcon color="warning" /><StarIcon color="warning" /></span></h2></Tooltip> 
        <div className="row mt-5 align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-ex-12">
            <p className="p-choosing-meat-fish bg-warning">🥩 MEAT AND FISH SPECIALTIES</p>
            <p className="paragraf-text-choosing-meat-fish">We are specialized in authentic Iraqi meat dishes from the charcoal grill. Deliciously tender and freshly grilled chicken or beef and specifically for Iraq, the unseasoned, tender and tasty lamb kebab. Quality starts with the right choice of meat. Come and taste it in our restaurant.</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-ex-12">
            <img className="w-100 img-style" src="images\bbq.jpg" alt="BBQ" />
          </div>
        </div>
      </section>

      <section className="container mb-4">
        <div className="row mt-5 align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img className="w-100 img-style" src="images\restaurant-food-quality-badge.jpg" alt="BBQ" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <p className="p-choosing-meat-fish bg-warning  mt-4 ">👌 THE BEST CHOICE IN QUALITY</p>
            <p className="paragraf-text-choosing-meat-fish">Obtaining a certificate of quality in the restaurant
              Where we offer you foods with care and in a highly clean and comfortable atmosphere...</p>
          </div>
        </div>
      </section>

      <section className="container-fluid">
      <p className="p-choosing-meat-fish" style={{backgroundColor:"#ffc107"}}><span className="hideStars"><StarIcon color="warning" /></span><StarIcon fontSize="large" color="warning" /> In out Restaurant <StarIcon fontSize="large" color="warning" /><span className="hideStars"><StarIcon color="warning" /></span></p>
      <div className="row justify-content-center">
      <div className="image-1 backgroundColor-paragraph col-lg-3 col-md-6 col-sm-12">
      <p className="paragraphWithImages"><StarIcon color="warning" /><StarIcon color="warning" /> Comforts <StarIcon color="warning" /><StarIcon color="warning" /></p>
      <p style={{textShadow:"0 0 10px black"}}>You will find comfort and tranquility in the restaurant where there is an open area in the open air and you can also enter inside and enjoy eating in a calm atmosphere</p>
      </div>
      <div className="image-2 backgroundColor-paragraph col-lg-3 col-md-6 col-sm-12">
      <p className="paragraphWithImages" ><StarIcon color="warning" /><StarIcon color="warning" /> joy <StarIcon color="warning" /><StarIcon color="warning" /></p>
      <p style={{textShadow:"0 0 10px black"}}>Enjoy the experience in our restaurant, you will find everything that makes you happy...
There is a children's recreation area...
There is a family section...</p>
      </div>
      <div className="image-3 backgroundColor-paragraph col-lg-3 col-md-6 col-sm-12">
      <p className="paragraphWithImages"><StarIcon color="warning" /><StarIcon color="warning" /> Hygiene <StarIcon color="warning" /><StarIcon color="warning" /></p>
      <p style={{textShadow:"0 0 10px black"}}>Rest assured, we take care of hygiene very meticulously. From eating and the quality of food to the cleanliness of the place</p>
      </div>

      </div>
      <div className="row justify-content-center mb-5">
      <div className=" m-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 shadow-divs">
        <video className="video-style" controls muted loop src="video\video kabab bbq.mp4" autoPlay></video>
        <h2 style={{textAlign:"center",fontFamily:"cursive",textShadow:"0 0 10px white"}}>The Best BBQ 🍖</h2>
        </div>
        <div className=" m-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 shadow-divs">
        <video className="video-style" controls muted loop src="video\fresh fish.mp4" autoPlay></video>
        <h2 style={{textAlign:"center",fontFamily:"cursive",textShadow:"0 0 10px white"}}>Frish Fish 🐠</h2>
        </div>

      </div>
      </section>
      
      <Footer />

      
    </div>
  )
}
