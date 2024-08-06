import React from 'react'
import "../styles/menu.css"
import { Data } from '../helpers/data.js'
import MenuItem from './MenuItem.js'

function menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Burgerlerimiz</h1>
      <div className='menuList'>
        {Data.map((menuItem, index) => {
          return (
          <MenuItem
            image={menuItem.image}
            name={menuItem.name}
            content={menuItem.content}
            price={menuItem.price}
            key={index} />
          )
        })}

      </div>
    </div>
  );
}

export default menu;