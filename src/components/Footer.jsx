import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Copyright, Phone } from 'lucide-react'
import '../App.css'

const Footer = () => {
   
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-address'>
          <img
            src='../../../logo/Logo ROASTAR-white.PNG'
            height={80}
            width={180}
          />
          <ul className='address'>
            <li>8 EAST ST</li>
            <li>BROMLEY</li>
            <li>BR1 1QX</li>
          </ul>
          <div className='phone-no'>
            <p>020 4559 2984</p>
          </div>
        </div>
        <div className='socials'>
          <p>
            <Link to='https://www.instagram.com/roastar.coffee/'>
              <Instagram 
                className='insta'
              />
           </Link>
          </p>
          <p>
            <Link to='https://www.facebook.com/roastarcoffeeuk'>
              <Facebook 
                strokeWidth={0.7}
                className='facebook'
             />
            </Link>
          </p>
        </div>

        <div className='footer-nav'>
          <div className={`footer-links`}>
            <Link 
              reloadDocument 
              to={'/AboutUs'} 
            >
              ABOUT US
            </Link>
          </div>
          <div className={`footer-links`}>
            <Link 
              reloadDocument 
              to={'/ContactUs'} 
            >
              CONTACT US
            </Link>
          </div>
          <div className={`footer-links`}>
            <Link 
              reloadDocument 
              to={'/Careers'} 
            >
              CAREERS
            </Link>
          </div>
          <div className={`footer-links`}>
            <Link 
              reloadDocument 
              to={'/Shop'} 
            >
              SHOP
            </Link>
          </div>
          <div style={{textAlign: 'center'}}>
            <span 
              style={{
                color: 'white', 
                position: 'relative',  
                fontSize: '12px'
              }}>
              <Copyright size={12}style={{position: 'relative', top: '1.5px', left: '-5px'}}/>Copyright 2024. All Rights Reserved
            </span>
          </div>
        </div>

        
      </div>
    </footer>
  )
}

export default Footer

/*
<div className={`footer-links`}>
  <Link 
    reloadDocument 
    to={'/Shipping'} 
  >
    Shipping, Delivery and Returns Policy
  </Link>
</div>
*/