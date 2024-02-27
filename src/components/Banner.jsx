import React from 'react'
import '../App.css'

const Banner = () => {
  return (
    <div className="banner">
      <img 
        src="src/assets/slider/Screenshot 2024-02-26 at 14.10.07.png"
        alt="slidetwo"
        height={700}
        width={1440}
        className="slidertwo"
      />
      <div className="slogan">
        <h1 className="slogan-content slogan">
          <span className="origin">
            VIETNAMESE
          </span> 
          <br></br>
          Specialty Coffee
        </h1>
        <p className="slogan-content time"></p>
      </div>
    </div>
  )
}

export default Banner