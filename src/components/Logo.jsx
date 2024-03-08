import React, { useState, useEffect } from 'react'
import { Transition } from 'react-transition-group'
import '../App.css'

const Logo = () => {
  const [logo, setLogo] = useState(document.documentElement.scrollTop)

  
  useEffect(() => {
    window.addEventListener('scroll',() => {
      setLogo(document.documentElement.scrollTop);
    })
  }, [])
  
  return (
    <>
      <img 
        src={logo < 650 ? "src/assets/logo/Logo ROASTAR-beige.PNG" : "src/assets/logo/Logo ROASTAR-green.PNG"}
        height={50}
        width={150}  
        className="logo"
      />
    </>
  )
}

export default Logo