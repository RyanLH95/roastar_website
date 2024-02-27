'use client'

import React, { useState } from 'react'
import Logo from './Logo.jsx'
import '../App.css'

const Navbar = () => {
    const state = useState()

    const navigation = [
      {_id:101, title: 'MENU', href: '/'},
      {_id:102, title: 'SHOP', href: '/Shop'},
      {_id:103, title: 'ABOUT US', href: '/Careers'},
      {_id:104, title: 'CONTACT US', href: '/Contact-Us'},
      
    ];
    
    const [colour, setColour] = useState(false)
    const changeColour = () => {
      if (window.scrollY >= 700) {
        setColour(true) 
      } else {
        setColour(false)
      }
    }

    window.addEventListener('scroll', changeColour)
  return (
    <div className={colour ? 'navbar navbarbg' : 'navbar'}>
      <div className="container">
        <Logo />
        <ul className={colour ? 'nav-list nav-list-colour' : 'nav-list'}>
          {
            navigation.map((item) => (
              <a href={item?.href} key={item._id}>
                <li>
                  {item?.title}
                  <span className={`${item?.href === state && 'style=color: blue;'}`}></span>
                </li>
              </a>
            ))
          }
        </ul>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar