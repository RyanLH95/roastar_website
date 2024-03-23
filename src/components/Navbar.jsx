'use client'

import React, { useState, useEffect } from 'react'
import { Link, matchPath, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import '../App.css'

// Array that features all navlinks required. Will use in .map component
const navigation = [ 
  {_id:102, title: 'ABOUT US', href: '/AboutUs'},
  {_id:103, title: 'SHOP', href: '/Shop'},
  {_id:104, title: 'MENU', href: '/Menu'},
  {_id:105, title: 'CONTACT US', href: '/ContactUs'},
];

const Navbar = () => {
    const { pathname } = useLocation();

    const state = useState()
    const [colour, setColour] = useState(false)

    useEffect(() => {
      const changeColour = () => {
        const isHome = matchPath("/", pathname)
        const isAboutUs = matchPath("/AboutUs", pathname)
        const isShop = matchPath("/Shop", pathname)
        const isMenu = matchPath("/Menu", pathname)
        const isContactUs = matchPath("/ContactUs", pathname)

        if (isHome && window.scrollY >= 650) {
          setColour(true)
        } else if (isAboutUs && window.scrollY >= 0) {
            setColour(true)
        } else if (isShop && window.scrollY >= 0) {
            setColour(true)
        } else if (isContactUs && window.scrollY >= 0) {
            setColour(true)
        } else if (isMenu && window.scrollY >= 0) {
            setColour(true)
        } else {
            setColour(false)
        }
      }; 
      
      // invoke once to check in case page is already scrolled down when rendering
      changeColour();
      window.addEventListener('scroll', changeColour);

      return () => {
        window.removeEventListener('scroll', changeColour)
      }
    }, [pathname])
    
  return (
    <div className={colour ? 'navbar navbarbg' : 'navbar'}>
      <div className="container">
        <Logo />
        <ul className={colour ? 'nav-list-beige nav-list-green' : 'nav-list-beige'}
          >
          {
            navigation.map((item) => (
              <Link reloadDocument to={item?.href} key={item._id}>
                <li className={`item ${item?.href === pathname && 'color hsl(96, 24%, 44%)'}`}>
                  {item?.title}
                  <span className={`item ${item?.href === pathname && 'color hsl(96, 24%, 44%)'}`}/>
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

/* const offsets = { '/': 650, '/AboutUs': 0} */

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