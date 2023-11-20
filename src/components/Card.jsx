import React from 'react'

function Card({image}) {
  return (
    <div className="card" style={{width: '18rem'}}>
    <img src={image} className="card-img-top" alt="..." width='300px' height='300px' />
  </div>
  )
}

export default Card
