'use client'
import React, { useState } from 'react'
import { reviewSlideOne, reviewSlideTwo, reviewSlideThree, reviewSlideFour, reviewSlideFive, reviewSlideSix } from '../assets/slider/index'
import Slider from 'react-slick'
import '../App.css'

const Reviews = () => {
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
          top: "220px",
          left: "720px",
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
              width: "10px",
              height: "6px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              background: "green",
              cursor: "pointer"
            }
            : {
              width: "10px",
              height: "6px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              background: "black",
              cursor: "pointer",
            }
        }
      ></div>
    ),
  };

  return (
    <>
        <div className="reviews">
          <Slider {...settings}>
            <div className="review-one review">
              <img 
                src={reviewSlideOne}
                alt="slideone"
                width={600}
              />
            </div>
            <div className="review-two review">
              <img 
                src={reviewSlideTwo}
                alt="reviewtwo"
                width={600}
              />
            </div>
            <div className="review-three review">
              <img 
                src={reviewSlideThree}
                alt="reviewthree"
                width={600}
              />
            </div>
            <div className="review-four review">
              <img 
                src={reviewSlideFour}
                alt="reviewfour"
                width={600}
              />
            </div>
            <div className="review-five review">
              <img 
                src={reviewSlideFive}
                alt="reviewfive"
                width={600}
              />
            </div>
            <div className="review-six review">
              <img 
                src={reviewSlideSix}
                alt="reviewsix"
                width={600}
              />
            </div>
          </Slider>
        </div>
    </>
  )
}

export default Reviews
