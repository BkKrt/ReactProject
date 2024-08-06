import React from 'react'
import BannerImage from '../Imagine/banner.png'
import '../styles/contact.css'

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{ backgroundImage: `url(${BannerImage})` }}></div>
      <div className='rightSide'>
        <h1> Bizimle iletişime geçin </h1>
        <form>
          <label>Ad Soyad</label>
          <input type='text' placeholder='Lütfen adınızı soyadınızı giriniz...'/>
          <label>E-mail</label>
          <input type='email' placeholder='Lütfen mailinizi giriniz...'/>
          <label>Mesajınız</label>
          <textarea placeholder='Lütfen mesajınızı giriniz...' rows="6"></textarea>
          <button>Gönder</button>
        </form>
      </div>
    </div>
  )
}

export default Contact