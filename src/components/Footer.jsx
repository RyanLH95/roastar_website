import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook } from 'lucide-react'
import '../App.css'

const Footer = () => {

  const navigation = [
    {_id: 202, title: 'About Us', href: '/AboutUs'},
    {_id: 203, title: 'Contact Us', href: '/ContactUs'},
    {_id: 204, title: 'Careers', href: '/Careers'},
    {_id: 205, title: 'Shop', href: '/Shop'},
    {_id: 206, title: 'Shipping, Delivery and Returns Policy', href: '/Shipping'},
  ]
   
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-address'>
          <img
            src='../../../logo/Logo ROASTAR-white.PNG'
            height={80}
            width={180}
            className='roastar-white' 
            />
          <h3>8 East St</h3>
          <h3>Bromley</h3>
          <h3>BR1 1QX</h3>
        </div>

        <div className='footer-nav'>
          <div className={`footer-links`}>
            <Link 
              reloadDocument 
              to={'/AboutUs'} 
            >
              About Us
            </Link>
          </div>
          <div className={`footer-links`}>
            <Link 
              reloadDocument 
              to={'/ContactUs'} 
            >
              Contact Us
            </Link>
          </div>
          <div className={`footer-links`}>
            <Link 
              reloadDocument 
              to={'/Careers'} 
            >
              Careers
            </Link>
          </div>
          <div className={`footer-links`}>
            <Link 
              reloadDocument 
              to={'/Shop'} 
            >
              Shop
            </Link>
          </div>
          <div className={`footer-links`}>
            <Link 
              reloadDocument 
              to={'/Shipping'} 
            >
              Shipping, Delivery and Returns Policy
            </Link>
          </div>
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
      </div>
    </div>
  )
}

export default Footer