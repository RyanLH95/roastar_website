import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

const navigation = [
    {_id: 202, title: 'About Us', href: '/AboutUs'},
    {_id: 203, title: 'Contact Us', href: '/ContactUs'},
    {_id: 204, title: 'Careers', href: '/Careers'},
    {_id: 205, title: 'Shop', href: '/Shop'},
    {_id: 206, title: 'Shipping, Delivery and Returns Policy', href: '/Shipping'},
  ]

const Footer = () => {
   
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-address'>
          <h1>Roastar Specialty Coffee</h1>
          <h3>8 East St</h3>
          <h3>Bromley</h3>
          <h3>BR1 1QX</h3>
        </div>
        <ul className='footer-links'>
          {
            navigation.map((item) => (
              <NavLink
                reloadDocument
                to={item?.href}
                key={item?._id}
              >
                <li>
                  {item?.title}
                </li>
              </NavLink>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Footer