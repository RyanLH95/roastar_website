import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Copyright } from 'lucide-react'
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
          <h3>8 East St</h3>
          <h3>Bromley</h3>
          <h3>BR1 1QX</h3>
        </div>
        <div className='socials'>
          <Link to='https://www.instagram.com/roastar.coffee/'>
            <Instagram className='insta'/>
          </Link>
          <Link to='https://www.facebook.com/roastarcoffeeuk'>
            <Facebook 
              strokeWidth={0.7}
              className='facebook' 
            />
          </Link>
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
          <div style={{textAlign: 'right'}}>
            <span style={{
                color: 'white', 
                position: 'relative', 
                left: '0vh', 
                fontSize: '12px'
                }}>
              <Copyright size={12}style={{position: 'relative', top: '2px', left: '-2px'}}/>Copyright 2024. All Rights Reserved</span>
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