import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Transition } from 'react-transition-group'
import '../App.css'

const Logo = () => {
  const [logo, setLogo] = useState(document.documentElement.scrollTop)

  // Applies scroll event without creating new listeners each render
  useEffect(() => {
    window.addEventListener('scroll',() => {
      setLogo(document.documentElement.scrollTop);
    })
  }, [])
  
  return (
    <>
    <Transition timeout={1000}>
      <div 
        className="logo"
        >
          <a href='/'>
            <div className='roastar-logo-beige'>
              <img 
                src={logo < 650 ? "src/assets/logo/Logo ROASTAR-beige.PNG" : "src/assets/logo/Logo ROASTAR-green.PNG"}
                height={50}
                width={150}  
              />
            </div>
          </a>
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