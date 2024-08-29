import React, { useState, useEffect } from 'react'
import { NavLink, matchPath, useLocation } from 'react-router-dom'
import '../App.css'

const Logo = () => {
  const [logo, setLogo] = useState(false);
  const { pathname } = useLocation();

  const logoHome = matchPath("/", pathname);
  const logoAboutUs = matchPath("/AboutUs", pathname);
  const logoShop = matchPath("/Shop", pathname);
  const logoMenu = matchPath("/Menu", pathname);
  const logoContactUs = matchPath("/ContactUs", pathname);
  const logoCareers = matchPath("/Careers", pathname);
  const logoItemDetails = matchPath("item/:itemId", pathname);

  
  useEffect(() => {
    const changeLogo = () => {
      if (logoHome && window.scrollY >= 650) {
        setLogo(true);
      } else if (logoAboutUs && window.scrollY >= 280){
        setLogo(true);
      } else if (logoShop && window.scrollY >= 0){
        setLogo(true);
      } else if (logoMenu && window.scrollY >= 0){
        setLogo(true);
      } else if (logoContactUs && window.scrollY >= 0){
        setLogo(true);
      } else if (logoCareers && window.scrollY >= 180){
        setLogo(true);
      } else if (logoItemDetails && window.scrollY >= 0){
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
      <div className="logo">
        <NavLink reloadDocument to='/'>
          <img 
            src={logo ? "../../../../logo/Logo ROASTAR-green.PNG" : "../../../../logo/Logo ROASTAR-white.PNG"}
            alt="roastar-logo green"
            className='roastar-logo green'
            height={50}
            width={150}  
          />
          <img 
            src={logo ? "../../../../logo/Logo ROASTAR-black.PNG" : "../../../../logo/Logo ROASTAR-beige.PNG"}
            alt="roastar-logo-black/beige"
            className='roastar-logo beige'
            height={50}
            width={150}  
          />
        </NavLink>
      </div>
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