
import React, { useEffect } from 'react'
// motion and useAnimation Hooks from Framer Motion //
import { motion, useAnimation } from "framer-motion"
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer"
import Popup from 'reactjs-popup';
import { Star } from 'lucide-react'
import MenuAd from './MenuAd';
import Reviews from "./Reviews";
import ReviewsTwo from "./ReviewsTwo"
import '../Home.css'

const Content = () => {
  return (
    <div className='about-us-section'>
      <p className='about-us'>
        Roastar Specialty
      </p>

          <div className='desc'>
            <div className="desc-section">
              
            </div>
            <div className='images'>
              <div className="image-one">
                <Link reloadDocument to='/Map' className='underline'>
                  <img 
                    src="../../../images/imageThree.png"
                    width={300}
                    height={300}
                  />
                  <p className='image-desc-one'>LOCATION</p>
                </Link>
              </div>

              <div className="image-two">
                <Popup trigger={
                  <div className='underline'>
                    <img
                      src="../../../images/imageOne.png"
                      width={300}
                      height={300}
                    />
                    <p className='image-desc-two'>DELIVERY</p>
                  </div>
                } modal nested>
                  { 
                    close => (
                      <div className='delivery'>
                          <div className='content'>
                              <p>Welcome to GFG!!!</p>
                          </div>
                          <div>
                              <button onClick=
                                  {() => close()}>
                                      Close modal
                              </button>
                          </div>
                      </div>
                    )
                  }
                </Popup>
              </div>

              <div className="image-three">
                <Link reloadDocument to='/Shop' className='underline'>
                  <img 
                    src="../../../images/imageTwo.png"
                    width={300}
                    height={300}
                  />
                <p className='image-desc-three'>SHOP</p>
                </Link>
              </div>
            </div>
          </div>

        <MenuAd />
        
        <div className="reviews-section">
          <p className="google">Google Reviews</p>
          <div className="stars">
            <p>4.9</p>
            <Star className="star" />
            <Star className="star" />
            <Star className="star" />
            <Star className="star" />
            <Star className="star" />
            <p className="stars-text">Based on 157 Reviews</p>
          </div>
          <Reviews />
          <ReviewsTwo />
        </div>
    </div>
  )
}

export default Content