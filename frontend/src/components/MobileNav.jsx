import React, { useState, useEffect } from 'react'
import { matchPath, useLocation } from 'react-router-dom';
import MobileMenu from '../assets/popups/mobilemenu/MobileMenu';
import { AnimatePresence } from 'framer-motion';

const MobileNav = () => {
    const [menu, setMenu] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();

    // arrow functions for opening and closing menu
    const close = () => setMenuOpen(false);
    const open = () => setMenuOpen(true);


    useEffect(() => {
      // Called to open and close hamburger menu
      close();

      // Function for changing colour upon scroll depending on page
      const changeMenuColour = () => {
        // specific path ways
        const menuHome = matchPath("/", pathname);
        const menuAboutUs = matchPath("/AboutUs", pathname);
        const menuShop = matchPath("/Shop", pathname);
        const menuIsMenu = matchPath("Menu", pathname);
        const menuContactUs = matchPath("ContactUs", pathname);
        const menuCareers = matchPath("Careers", pathname);
        const menuItemDetails = matchPath("item/:itemId", pathname)

        // px to determine when change colour activates
          if (menuHome && window.scrollY >= 650) {
            setMenu(true);
        } else if (menuAboutUs && window.scrollY >= 1) {
            setMenu(true);
        } else if (menuShop && window.scrollY >= 1) {
            setMenu(true);
        } else if (menuIsMenu && window.scrollY >= 0) {
            setMenu(true);
        } else if (menuContactUs && window.scrollY >= 180) {
            setMenu(true);
        } else if (menuCareers && window.scrollY >= 180) {
            setMenu(true);
        } else if (menuItemDetails && window.scrollY >= 0) {
            setMenu(true);
        } else {
            setMenu(false);
        }
      };

      // call event listener and return the removal of event
      changeMenuColour();
      window.addEventListener('scroll', changeMenuColour);

      return () => {
        window.removeEventListener('scroll', changeMenuColour);
      }
      // for useEffect to activate everytime the pathname changes
    },[pathname]);

  return (
    <>
      <button
        className={`nav-list-mobile ${menu ? 'nav-list-mobile-beige nav-list-mobile-green' : 'nav-list-mobile-beige'}`}
        onClick={() => (menuOpen ? close() : open())} 
      >
        <input name='menu' type='checkbox' />
          <span></span>
          <span></span>
          <span></span>
      </button>
      
      <AnimatePresence>
        {menuOpen && <MobileMenu menuOpen={menuOpen} handleClose={close}/>}
      </AnimatePresence>
    </>
  )
}

export default MobileNav