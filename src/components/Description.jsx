// motion and useAnimation Hooks from Framer Motion //
import { motion, useAnimation } from "framer-motion"
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer"
import React, { useEffect } from 'react'
import Reviews from "./Reviews";
import ReviewsTwo from "./ReviewsTwo"
import '../App.css'

const Products = () => {
  const paraVariant = {
    visible: { opacity: 1, scale: 
      1, transition: { duration: 0.6 } },
    hidden: { opacity: 0, scale: 0.97 },
  }

  return (
    <div className='about-us-section'>
      <p className='about-us'>
        SPECIALLY IMPORTED
      </p>

        <motion.div
          animate="visible"
          initial="hidden"
          variants={paraVariant}
          className="paragraph"
          >
          <div className='desc'>
            <div className='images'>
              <div className="image-one">
                <img 
                  src="../../../images/imageOne.png"
                />
              </div>
              <div className="image-two">
                <img 
                  src="../../../images/imageTwo.png"
                  />
              </div>
              <div className="image-three">
                <img 
                  src="../../../images/imageThree.png"
                  />
              </div>
            </div>
            <div className="desc-section">
              <p 
                className="para-one">
                  Roastar Coffee is a Vietnamese Specialised Coffee Shop founded in 2019 where we have
                  been trading online with specially imported Vietnamese coffee which we sell as B2B and B2C, 
                  bringing awarness to Vietnamese-grown coffee.<br></br>
                  <br></br>
              </p>
              <span className='content-link learn-more'><Link to='/AboutUs'>Learn More</Link></span>
              <p 
                className="para-one">
                  Roastar Coffee was founded in 2019 where we have been trading online with specially imported Vietnamese 
                  coffee which we sell as B2B and B2C, bringing awarness to Vietnamese-grown coffee.<br></br>
                  
                  <br></br>
              </p>
            </div>
          </div>
        </motion.div>
        <Reviews />
        <ReviewsTwo />
    </div>
  )
}

export default Products