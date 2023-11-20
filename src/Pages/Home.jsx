import React from 'react'
import '../Styles/Main.css';
import Card from '../components/Card';
import MenuCard from '../components/MenuCard';
import Burger from '../assets/images/burger.jpg'
import Hotdog from '../assets/images/hotdog.jpg';
import Zinger from '../assets/images/zinger.jpg';
import FoodIcon from '../assets/images/FoodIcon.png';
import DrinkIcon from '../assets/images/DrinkIcon.png';
import SaladIcon from '../assets/images/SaladIcon.png';
import IconsCard from '../components/IconsCard';
import BurgerMeal1 from '../assets/images/burgerMeal1.jpg';
import BurgerMeal2 from '../assets/images/burgerMeal2.jpg';
import BurgerMeal3 from '../assets/images/burgerMeal5.jpg';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Main from '../Layout/Main';

function Home() {
  
    const images = [Zinger,Burger,Hotdog];
  const icons = [{'icon' : FoodIcon,'title' : 'Food'},{'icon': DrinkIcon,'title' : 'Drink'},{'icon':SaladIcon,'title':'Salad'}];
  const Meals = [{'image':BurgerMeal1,'title':'Mexican Beef Burger','desc':'chiese,onion,180 gram,tomato','price':'4.5 JOD'},
                 {'image':BurgerMeal2,'title':'Russain Beef Burger','desc':'chiese,onion,180 gram,tomato','price':'5.5 JOD'},
                 {'image':BurgerMeal3,'title':'Italiesh Beef Burger','desc':'chiese,onion,180 gram,tomato','price':'5 JOD'}
                ];
                
  return (
    <Main>
   <div className="continer">
    <div className="text">
    <h1>A Good Food Makes</h1>
    <h1>A Great Day</h1>
    <p>Introducing Snacks,the best way to lunch a stuuning restaurant website</p>
    <Link to='/menu'><Button text='Get Stated'svg={ <svg width="26" height="26" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="37" cy="37" r="35.5" stroke="black" stroke-width="3"></circle>
        <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
    </svg>} /></Link>
    </div>
   </div>

        <div className='Categories'>
          <h1>Categories</h1>
          <div className='icons'>
          {icons.map((icon)=>{
            return <IconsCard icon={icon.icon} title={icon.title}/>
          })}
          </div>
        </div>

        <div className='popularSancks'>
          <h1>Popular Snacks</h1>
         <div className='Images'>
         {images.map((img)=>{
          return <Card image={img} />
         })}
         </div>
         </div>

         <div className='menu'>
          <div className="menutext">
            <h2>===</h2>
            <h1>Menu</h1>
            <h2>===</h2>
          </div>
          <div className="menuHome">
            {Meals.map((meal)=>{
              return <div className="col-4"><MenuCard image={meal.image} title={meal.title} desc={meal.desc} price={meal.price} /></div>
            })}
          </div>
        
          <div className='Seemore'>
            <Link to='/menu'><Button text='See more' /></Link>
          </div>
         </div>
         </Main>  
  )
}

export default Home
