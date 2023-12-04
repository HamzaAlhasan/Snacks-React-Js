import React, { useState } from 'react'
import Header from '../Layout/Header'
import '../Styles/Cart.css';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { ClearCart, removeFromCart } from '../Redux/Slices/reducer-cart';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';

function Cart() {
  let items = useSelector((state)=>state.cart.items);
  const {signOut} = useAuth();
  const [error,setError] = useState('')
  const dispatch = useDispatch()
  let totalPrice = 0.0;
  const TotalCartPrice = items.map((item)=>{return totalPrice = totalPrice + item.price});
console.log(items)
console.log(error)
const navigate = useNavigate();
const handleCheckout = ()=>{
  if(items.length == 0){
    setError('Your cart is empty')
  }else{
    setError('')
    navigate('/checkout')
  }
}

  return (
    <>
      <Header />
      {signOut && localStorage.removeItem('cart')}
      <div className="container">
        <div className="carttext col-12 d-flex justify-content-center mt-4 align-items-center ">
          <h2>===</h2>
          <h1>Cart</h1>
          <h2>===</h2>
        </div>

        <table className="table">
                        <thead>
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Price</th>
                                    <th scope='col'>remove</th>
                                </tr>
                            </thead>
                            {items.map((item)=>{
                              return <tbody key={item.title}>
                              <tr>
                              <td>< img src ={item.image} alt ={item.title} style={{height:'200px'}}/></td>
                                  <td><h2>{item.title}</h2></td>
                                  <td><h4>{item.price} JOD</h4></td>
                                  <td><Button text='Remove' onClick={()=>{dispatch(removeFromCart(item))}}/></td>
                              </tr>
                          </tbody>
                            })}
                        </table>
                        <h3 style={{color:'Red',marginTop:'50px',marginBottom:'50px'}}>{error}</h3>
                        <div className="totalPrice col-12 my-5" style={{display:'flex',justifyContent:'space-between'}}>
                        <h2>Total price : {totalPrice} JOD</h2>
                        <Button text='Checkout' onClick={handleCheckout}/>
                        <Button text='Clear' onClick={()=>{dispatch(ClearCart())}}/>                 
      </div>
       </div>
    </>
  )
}

export default Cart