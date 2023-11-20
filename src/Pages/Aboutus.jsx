import React from 'react'
import Header from '../Layout/Header'
import '../Styles/AboutUs.css';
import Footer from '../Layout/Footer'

function Aboutus() {
  return (
    <>
    <Header />
      <div className="col-12"> 
       <div className="aboutUscontent" >
       <div className="aboutUstext">
            <h2>===</h2>
            <h1>About us</h1>
            <h2>===</h2>
          </div>
        <div className='content' style={{marginTop:'50px',isolation:'isolate'}}>
            <h2 >About Us “ SNACKS “</h2>
            <p >Welcome To Snacks!</p>
            <p >We Are The Best Place To Go When You’re Looking For Delicious Mouthwatering Burgers,Chicken and Salads !</p>
            <p >Our Specialty Is The Flavors Starting From The North To The South!<br /> And West To The East!</p>
            <p >We Are The Diner Where You Find Amazing Combinations And Unexpected As Well, Amazing Atmosphere , Endless Joy, Magnificent Tastes And Affordable Prices !!</p>
        </div>
       </div>
       </div>
       <Footer />
    </>
  )
}

export default Aboutus
