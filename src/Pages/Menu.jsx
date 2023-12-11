import React, { useState } from 'react'
import Header from '../Layout/Header'
import Button from '../components/Button';
import MenuCard from '../components/MenuCard';
import {data} from '../Data/data.js'
import '../Styles/Menu.css';
import { useDispatch } from 'react-redux';
import { addTocart } from '../Redux/Slices/reducer-cart.js';
import { useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
function Menu() {
    const title = ['Burger','Chicken','Salad','Drink'];
    
const [items,setItems] =useState(data)
const [searchData,setSearchData] = useState('');
const navigate =useNavigate();
const {isSignedIn} = useAuth();

const handlefillter = (i)=>{
  const fillterdData = data.filter((cat)=>cat.categories ===i)
  setItems(fillterdData)
}
function handleSearch(){
  const filterdSearch = data.filter((s)=>s.title.startsWith(searchData))
  setItems(filterdSearch)
}

function checkSigninCart(item){
  isSignedIn ? dispatch(addTocart(item)) : navigate('/login')

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

          <div className="search">
        <input placeholder="Search..." type="text"  onChange={(e)=>{setSearchData(e.target.value)}}/>
        <button type="submit" onClick={handleSearch}>Search</button>
      </div>


          <div className="fillterButton">
            {title.map((title)=>{
                return <Button key={title} text={title} onClick={()=>{handlefillter(title)}} />
            })}
          </div>

          <div className="container">
          <div className="MenuCards" style={{marginTop:'80px' ,width:'100%',display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
            
            {items.map((item)=>{
                return <div key={item.id} style={{marginBottom:'60px'}} ><MenuCard image={item.image} title={item.title} desc={item.desc} price={`${item.price} JOD`} onClick1={()=>{checkSigninCart(item)}}/></div>
            })}
            
          </div>
          </div>
  </>
  )
}

export default Menu
