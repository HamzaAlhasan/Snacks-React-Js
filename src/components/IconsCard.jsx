import React from 'react'

function IconsCard({icon,title}) {
  return (
    <div className="card" style={{width: '9rem'}}>
  <img src={icon} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    </div>
    </div>
  )
}

export default IconsCard
