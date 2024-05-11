
import React, { useEffect } from 'react'
// motion and useAnimation Hooks from Framer Motion //
import { motion, useAnimation } from "framer-motion"
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer"
import Popup from 'reactjs-popup';
import { Star } from 'lucide-react'
import MenuAd from './MenuAd';
import FeaturedProducts from './FeaturedProducts';
import '../Home.css'

const Content = () => {
  return (
    <div className='about-us-section'>
      <p className='about-us'>
        Roastar Specialty
      </p>
      <h5 className='slogan-title'>The Taste of Vietnam at your Doorstep</h5>

          <div className='desc'>
            <div className='images'>
              <div className="image-one">
                <Link reloadDocument to='/Map' className='underline'>
                  <img 
                    src="../../../images/location_link_image.png"
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
                      src="../../../images/delivery_link_image.png"
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
                          <Link to='https://deliveroo.co.uk/menu/london/bromley/roastar-speciality-coffee-8-east-street'>
                            <div className='deliveroo'>
                              <img
                                src='../../../icon/deliveroo_icon.png'
                                width={250}
                                className='deliv'
                              />
                            </div>
                          </Link>
                          <Link to='https://www.ubereats.com/gb/store/roastar-speciality-coffee/0oJZk_Y8WdGYpXWoQ1Qe_Q'>
                            <div className='uber-eats'>
                              <img
                                src='../../../icon/uber_eats_icon.png'
                                width={200}
                              />
                            </div>
                          </Link>
                        </div>
                        <div className='close'>
                          <button 
                            onClick={() => close()}
                            className='close-button'
                          >
                            X
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
                    src="../../../images/shop_link_image.png"
                    width={300}
                    height={300}
                  />
                <p className='image-desc-three'>SHOP</p>
                </Link>
              </div>
            </div>
          </div>

        <MenuAd />
        
        <div className="fp-section">
          <div className='fp-container'>
            <h1 style={
              {
                textAlign: 'center', 
                position: 'relative',
                top: '10vh'
              }}
            >
              FEATURED PRODUCTS
            </h1>
            <FeaturedProducts />
          </div>
        </div>
    </div>
  )
}

export default Content