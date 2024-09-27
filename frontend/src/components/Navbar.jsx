import React, { useState, useEffect } from 'react'
import { Badge, Box, IconButton } from '@mui/material'
import { matchPath, useLocation, NavLink, useNavigate } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { shades } from '../theme.js'
import Logo from './Logo.jsx'
import '../App.css'
import MobileNav from './MobileNav.jsx'

// Array that features all navlinks required. Will use in .map component
const navigation = [ 
  {_id:102, title: 'ABOUT US', href: '/AboutUs'},
  {_id:103, title: 'SHOP', href: '/Shop'},
  {_id:104, title: 'MENU', href: '/Menu'},
  {_id:105, title: 'CONTACT US', href: '/ContactUs'},
];

const withoutSidebarRoutes = ["/submit"];

const Navbar = () => {
    const { pathname } = useLocation();
    const active = useLocation().pathname; // returns current location and url

    const [colour, setColour] = useState(false); // changes the state of colour upon scrolling

    useEffect(() => {
      const changeColour = () => {
        const isHome = matchPath("/", pathname)
        const isAboutUs = matchPath("/AboutUs", pathname)
        const isShop = matchPath("/Shop", pathname)
        const isMenu = matchPath("/Menu", pathname)
        const isContactUs = matchPath("/ContactUs", pathname)
        const isCareers = matchPath("/Careers", pathname)
        const isItemDetails = matchPath("item/:itemId", pathname)

          if (isHome && window.scrollY >= 650) {
            setColour(true)
        } else if (isAboutUs && window.scrollY >= 280) {
            setColour(true)
        } else if (isShop && window.scrollY >= 0) {
            setColour(true)
        } else if (isContactUs && window.scrollY >= 180) {
            setColour(true)
        } else if (isMenu && window.scrollY >= 0) {
            setColour(true)
        } else if (isCareers && window.scrollY >= 180) {
            setColour(true)
        } else if (isItemDetails && window.scrollY >= 0) {
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
    <div className={`${colour ? 'navbar navbarbg' : 'navbar'}`}>
      <div className="nav-container">
        <Logo />
        <MobileNav />
        <div className='item-container'>
          <ul className={`nav-list ${colour ? 'nav-list-beige nav-list-green' : 'nav-list-beige'}`}>
            {
              navigation.map((item) => (
                <NavLink 
                  reloadDocument
                  to={item?.href} 
                  key={item._id} 
                >
                  <li className={`mobile ${active === item?.href ? 'nav-list-green active' : 'nav-list-green'}`}> 
                    {item?.title}
                    <span className={`${active === item?.href ? 'nav-list-green active' : 'nav-list-green'}`}/>
                  </li>
                </NavLink>
              ))
            }
          </ul>
          <div className='cart'>
            <Badge
              className='cart-badge'
              color="secondary"
              sx={{
                "& .MuiBadge-badge": {
                  right: 12,
                  top: 5,
                  padding: '0 4px',
                  height: '14px',
                  minWidth: '13px',
                  zIndex: 100,
                }
              }}
            >
              <button 
                className={`cart-btn ${colour ? 'cart-beige cart-black' : 'cart-beige'}` }
                
              >
                <ShoppingCart 
                  style={{
                    position: 'absolute', 
                    left: '6px', 
                    top: '7px'
                  }}
                />
              </button>
            </Badge>
          </div>
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