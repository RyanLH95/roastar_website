
import React, { useEffect } from 'react'
// motion and useAnimation Hooks from Framer Motion //
import { motion, useAnimation } from "framer-motion"
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer"
import PopupLink from './PopupLink';
import Desc from './Desc'
import MenuAd from './MenuAd';
import Points from './Points';
import FeaturedShop from './FeaturedShop';
import '../Home.css';

const Content = () => {
  return (
    <div className='main-content'>
      
        <h2 className='lg-text'>
          EXPLORE OUR STORE
        </h2>
        <p className='sm-text'>In Shop, at Home or on the Go!</p>

      <div className='img-container'>
        <div className="image-one">
          <Link reloadDocument to='/ContactUs' className='underline'>
            <img 
              src="../../../images/location_link_image.png"
              width={300}
              height={300}
            />
            <p className='image-desc-one'>LOCATION</p>
          </Link>
        </div>

        <div className="image-two">
          <PopupLink />
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

      <section className='desc'>
        <Desc />
      </section>

      <section className='menu'>
        <MenuAd />
      </section>

      <section className='points'>
        <Points />
      </section>

      <section className='shop'>
        <FeaturedShop />
      </section>
    </div>
  )
}

export default Content