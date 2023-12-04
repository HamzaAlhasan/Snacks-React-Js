import React from 'react'
import '../Styles/Header.css';
import { Link } from 'react-router-dom';
import IconNavBar from '../assets/images/IconNavbar.png';
import { UserButton, useAuth, useUser } from '@clerk/clerk-react';
import {useSelector} from 'react-redux'

function Header() {
  const {userId,isSignedIn} = useAuth();
  const {user} = useUser();
  const items = useSelector((state)=>state.cart.items);
  console.log(items.length)
  return (
    <>
     <nav >
    <Link className="logo" to="/" > <img src={IconNavBar} width='40px' height='40px' style={{marginBottom:'6px'}}/> Snacks</Link>
    <div style={{display:'flex',alignItems:'center'}}>
      <Link to="/" >Home</Link>
      <Link to='/menu' >Menu</Link>
      <Link to="/aboutUs" >About</Link>
      <Link to="/contactUs" >Contact</Link>
      {isSignedIn && <Link to='/cart'>Cart{items.length}</Link>} 
      <UserButton showName/>
      {!isSignedIn &&   <><Link to='/register'><button className='Signup'>Signup</button></Link>
                    <Link to='/login'><button className='Login'>Login</button></Link></>}
    </div>
  </nav>
  
    </>
  )
}

export default Header
