import React from 'react'

function IconsCard({icon,title}) {
  return (
    <div class="card" style={{width: '9rem'}}>
  <img src={icon} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    </div>
    </div>
  )
}

export default IconsCard
