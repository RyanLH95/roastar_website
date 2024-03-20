'use client'

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import '../App.css'

const Navbar = () => {
    const state = useState()

    const offsets = { '/': 650, '/AboutUs': 0}

    // Array that features all navlinks required. Will use in .map component
    const navigation = [ 
      {_id:101, title: 'ABOUT US', href: '/AboutUs'},
      {_id:102, title: 'SHOP', href: '/Shop'},
      {_id:103, title: 'MENU', href: '/Menu'},
      {_id:104, title: 'CONTACT US', href: '/ContactUs'},
    ];
    
    const [colour, setColour] = useState(false)

    useEffect(() => {
      const changeColour = () => {
        setColour(window.scrollY >= offsets[window.location.pathname] ?? 650)
      };

      window.addEventListener('scroll', changeColour);

      return () => {
        window.removeEventListener('scroll', changeColour)
      }
    }, [])

     
    
  return (
    <div className={colour ? 'navbar navbarbg' : 'navbar'}>
      <div className="container">
        <Logo />
        <ul className={colour ? 'nav-list-beige nav-list-green' : 'nav-list-beige'}
          >
          {
            navigation.map((item) => (
              <Link to={item?.href} key={item._id}>
                <li className={colour ? 'nav-link nav-link-colour' : 'nav-link'}>
                  {item?.title}
                  <span className={`${item?.href === state && 'style=color: blue;'}`}></span>
                </li>
              </Link>
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


//This my old function that I was using
/*
const changeColour = () => {
      if (window.scrollY >= 650) {
        setColour(true) 
      } else {
        setColour(false)
      }
    }
*/