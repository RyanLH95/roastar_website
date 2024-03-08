'use client'
import React, { useState } from 'react'
import { slideone, slidetwo, slidethree } from '../assets/slider/index.js'
import Slider from 'react-slick'
import '../App.css'

const Banner = () => {
  const [dotActive, setDotActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 1000,
    beforeChange: (_prev, next) => {
      setDotActive(next);
    },
    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          top: "700px",
          left: "550px",
          transform: "translate(-50%, 0)",
          zIndex: 9,
        }}
      >
        <ul
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            listStyleType: "none",
            gap: 10,
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={
          i === dotActive
            ? {
              width: "50px",
              height: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              background: "#6b8b55",
              cursor: "pointer"
            }
            : {
              width: "50px",
              height: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              background: "#f2ecd4",
              cursor: "pointer",
            }
        }
      ></div>
    ),
  };

  return (
       <>
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

          
          <div className="banner">
            <Slider {...settings}>
              <div className="sliderone">
                <img 
                  src={slideone}
                  alt="slideone"
                  height={720}
                  width={1440}
                  className="slides"
                  priority='true'
                />
              </div>
              <div className="slidertwo">
                <img 
                  src={slidetwo}
                  alt="slidetwo"
                  height={720}
                  width={1440}
                  className="slides"
                />
              </div>
              <div className="sliderthree">
                <img 
                  src={slidethree}
                  alt="slidethree"
                  height={720}
                  width={1440}
                  className="slides"
                />
              </div>
            </Slider>
          </div>
       </>
  )
}

export default Banner