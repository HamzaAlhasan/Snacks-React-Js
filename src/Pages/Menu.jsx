import React, { useState } from 'react'
import Header from '../Layout/Header'
import Button from '../components/Button';
import MenuCard from '../components/MenuCard';
import {data} from '../Data/data.js'
import '../Styles/Menu.css';
import { useDispatch } from 'react-redux';
import { addTocart } from '../Redux/Slices/reducer-cart.js';
function Menu() {
    const title = ['Burger','Chicken','Salad','Drink'];
    
const [items,setItems] =useState(data)

const handlefillter = (i)=>{
  const fillterdData = data.filter((cat)=>cat.categories ===i)
  setItems(fillterdData)
}
const dispatch = useDispatch()
  return (
  <>
  <Header />
  <div className="menutext">
            <h2>===</h2>
            <h1>Menu</h1>
            <h2>===</h2>
          </div>

          <div className="fillterButton">
            {title.map((title)=>{
                return <Button key={title} text={title} onClick={()=>{handlefillter(title)}} />
            })}
          </div>

          <div className="container">
          <div className="MenuCards" style={{marginTop:'80px' ,width:'100%'}}>
            <div className="row">
            {items.map((item)=>{
                return <div key={item.id} className="col-4" style={{marginBottom:'60px'}} ><MenuCard image={item.image} title={item.title} desc={item.desc} price={`${item.price} JOD`} onClick1={()=>{dispatch(addTocart(item))}}/></div>
            })}
            </div>
          </div>
          </div>
  </>
  )
}

export default Menu
