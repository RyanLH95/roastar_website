'use client'

import React, { useState } from 'react'
import Logo from './Logo.jsx'
import '../App.css'

const Navbar = () => {
    const state = useState()

    const navigation = [
      {_id:101, title: 'MENU', href: '/'},
      {_id:102, title: 'SHOP', href: '/Shop'},
      {_id:103, title: 'CAREERS', href: '/Careers'},
      {_id:104, title: 'CONTACT US', href: '/Contact-Us'},
      
    ];

  return (
    <div className="navbar">
      <div className="container">
        <Logo />
        <ul className="nav-list">
          {
            navigation.map((item) => (
              <a href={item?.href} key={item._id}>
                <li>
                  {item?.title}
                  <span className={`${item?.href === state && "color: red"}`}></span>
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