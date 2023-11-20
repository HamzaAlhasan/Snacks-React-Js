import React from 'react'
import Button from './Button'

function MenuCard({image,title,desc,price}) {
  return (
    <div className="card" id='card2' style={{width: '18rem'}}>
  <img src={image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}</p>
    <p className="card-text">{price}</p>
    <Button text='Add to cart' />
  </div>
</div>
  )
}

export default MenuCard
