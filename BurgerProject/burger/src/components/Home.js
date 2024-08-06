import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/home.css"
import BannerImage from '../Imagine/banneryeni.jpg'
function home() {
  return (
    <div className='mainPage' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='order'>
        <Link to="/menu">
          <button>SİPARİŞ VER</button>
        </Link>
      </div>
    </div>
  )
}

export default home