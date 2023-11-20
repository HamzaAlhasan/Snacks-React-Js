import React from 'react'
import '../Styles/Main.css';
import Footer from './Footer';
import Header from './Header';
function Main({children}) {

  return (
    <>
      <Header />
      {children}
      <Footer />
      </>
   
  ) 
}

export default Main
