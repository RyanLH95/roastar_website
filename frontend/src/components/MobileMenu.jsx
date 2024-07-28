import React, { useState, useEffect } from 'react'
import { matchPath, useLocation, NavLink } from 'react-router-dom';

const navigation = [ 
    {_id:101, title: 'HOME', href: '/'},
    {_id:102, title: 'ABOUT US', href: '/AboutUs'},
    {_id:103, title: 'SHOP', href: '/Shop'},
    {_id:104, title: 'MENU', href: '/Menu'},
    {_id:105, title: 'CONTACT US', href: '/ContactUs'},
    {_id:106, title: 'CAREERS', href: '/Careers'},
  ];

const MobileMenu = () => {
    const { pathname } = useLocation();
    const active = useLocation().pathname;

    const [menu, setMenu ] = useState(false);


    useEffect(() => {
      const changeMenu = () => {
        const menuHome = matchPath("/", pathname);
        const menuAboutUs = matchPath("/AboutUs", pathname);
        const menuShop = matchPath("/Shop", pathname);
        const menuIsMenu = matchPath("Menu", pathname);
        const menuContactUs = matchPath("ContactUs", pathname);
        const menuCareers = matchPath("Careers", pathname);
        const menuProductPage = matchPath("/ProductPage", pathname)

          if (menuHome && window.scrollY >= 650) {
            setMenu(true);
        } else if (menuAboutUs && window.scrollY >= 0) {
            setMenu(true);
        } else if (menuShop && window.scrollY >= 0) {
            setMenu(true);
        } else if (menuIsMenu && window.scrollY >= 0) {
            setMenu(true);
        } else if (menuContactUs && window.scrollY >= 0) {
            setMenu(true);
        } else if (menuCareers && window.scrollY >= 180) {
            setMenu(true);
        } else if (menuProductPage && window.scrollY >= 0) {
            setMenu(true);
        } else {
            setMenu(false);
        }
      };

      changeMenu();
      window.addEventListener('scroll', changeMenu);

      return () => {
        window.removeEventListener('scroll', changeMenu);
      }
    },[pathname]);

  return (
    <div className={`nav-list-mobile ${menu ? 'nav-list-mobile-beige nav-list-mobile-green' : 'nav-list-mobile-beige'}`}>
      <input name='menu' type='checkbox' />
    
        <span></span>
        <span></span>
        <span></span>
      
      <ul className='mobile-menu cannot-scroll' >
        {
          navigation.map((item) => (
            <NavLink 
              reloadDocument
              to={item?.href} 
              key={item._id} 
            >
              <li className={`${active === item?.href ? 'nav-list-green active' : 'nav-list-green'}`}> 
                {item?.title}
                <span className={`${active === item?.href ? 'nav-list-green active' : 'nav-list-green'}`}/>
              </li>
            </NavLink>
          ))
        }
      </ul>
    </div>
  )
}

export default MobileMenu