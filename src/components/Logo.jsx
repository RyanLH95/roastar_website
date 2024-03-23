'use client'

import React, { useState, useEffect } from 'react'
import { Link, matchPath, useLocation } from 'react-router-dom'
import { Transition } from 'react-transition-group'
import '../App.css'

const Logo = () => {
  const [logo, setLogo] = useState(false);
  const { pathname } = useLocation();

  const logoHome = matchPath("/", pathname);
  const logoAboutUs = matchPath("/AboutUs", pathname);
  const logoShop = matchPath("/Shop", pathname);
  
  useEffect(() => {
    const changeLogo = () => {
      if (logoHome && window.scrollY >= 650) {
        setLogo(true);
      } else if (logoAboutUs && window.scrollY >= 0){
        setLogo(true);
      } else if (logoShop && window.scrollY >= 0){
        setLogo(true);
      } else {
        setLogo(false);
      }
    }

      changeLogo();
      window.addEventListener('scroll', changeLogo);

      return () => {
        window.removeEventListener('scroll', changeLogo)
      }
  }, [pathname])
  
  return (
    <>
    <Transition timeout={1000}>
      <div 
        className="logo"
        >
          <Link reloadDocument to='/'>
            <img 
              src="src/assets/logo/Logo ROASTAR-green.PNG"
              className='roastar-logo green'
              height={50}
              width={150}  
            />
            <img 
              src={logo ? "src/assets/logo/Logo ROASTAR-black.PNG" : "src/assets/logo/Logo ROASTAR-beige.PNG"}
              className='roastar-logo beige'
              height={50}
              width={150}  
            />
          </Link>
      </div>
    </Transition>
    </>
  )
}

export default Logo

/* this is one way to activate logo change on scroll function */

/*
const [logo, setLogo] = useState(document.documentElement.scrollTop)

<>
  <div 
    className="logo"
    >
      <img 
        src={logo < 650 ? "src/assets/logo/Logo ROASTAR-beige.PNG" : "src/assets/logo/Logo ROASTAR-green.PNG"}
        height={50}
        width={150}  
      />
  </div>
</>
 )
}
*/

/*
const [logo, setLogo] = useState('')
const pathname = useLocation()

useEffect(() => {
  let changeLogo = () => {
    const logoHome = matchPath("/", Pathname)
    const logoAboutUs = matchPath("/AboutUs", Pathname)
    const logoShop = matchPath("/Shop", Pathname)
    const logoMenu = matchPath("/Menu", Pathname)
    const logoContactUs = matchPath("/ContactUs", Pathname)

    const blackLogo = 'src/assets/logo/Logo ROASTAR-black.PNG'
    const beigeLogo = 'src/assets/logo/Logo ROASTAR-beige.PNG'

      if (logoHome && window.scrollY >= 650) {
        setLogo(blackLogo)
    } else if (logoAboutUs && window.scrollY >= 0) {
        setLogo(blackLogo)
    } else if (logoShop && window.scrollY >= 0) {
        setLogo (blackLogo)
    } else if (logoMenu && window.scrollY >= 0) {
        setLogo (blackLogo)
    } else if (logoShop && window.scrollY >= 0) {
        setLogo (blackLogo)
    } else
        setLogo(beigeLogo)
    }
  };

  changeLogo()
  window.addEventListener('scroll', changeLogo)

  return () => {
        window.removeEventListener('scroll', changeLogo)
      }
    }, [pathname])
  }
  */