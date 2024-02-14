import React from 'react'
import '../App.css'

const Banner = () => {
  return (
    <div className="banner">
      <img 
        src="src/assets/slider/Screenshot 2024-01-29 at 13.35.43.png"
        alt="roastar"
        height={600}
        width={1440}
        className="sliderone"
      />
      <div className="slogan">
        <p className="slogan-writing">FINEST VIETNAMESE COFFEE</p>
      </div>
    </div>
  )
}

export default Banner