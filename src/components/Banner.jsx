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
        <h1 className="slogan-content slogan">FINEST VIETNAMESE COFFEE</h1>
        <p className="slogan-content time">Open Monday - Sunday 9:00am - 5:00pm</p>
      </div>
    </div>
  )
}

export default Banner