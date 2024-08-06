import React from 'react'

export default function menuItem({ image, name, content, price }) {
  return (
    <div className='menuItem'>
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <h6 style={{marginTop:`0px`}}>{content}</h6>
      <p>
        <i style={{color:`red`}}>{price} TL</i>
      </p>
    </div>
  )
}
