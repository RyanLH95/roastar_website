// motion and useAnimation Hooks from Framer Motion //
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import React, { useEffect } from 'react'
import '../App.css'

const Products = () => {
  const paraVariant = {
    visible: { opacity: 1, scale: 
      1, transition: { duration: 0.6 } },
    hidden: { opacity: 0, scale: 0.97 },
  }

  return (
    <div className='about-us-section'>
      <p className='about-us'>Why ROASTAR?</p>
        <motion.div
          animate="visible"
          initial="hidden"
          variants={paraVariant}
          className="paragraph"
          >
          <div className='paragraph-one'>
            <img 
              src=""
              className="image-one"/>
            <p className="para-one">Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br></br> 
              Expedita eligendi est ab voluptate magnam,<br></br> quisquam velit optio modi eos non,
              quo delectus eveniet totam possimus. Modi enim quas ea ducimus.</p>
          </div>
          <div className='paragraph-two'>
            <img className="image-two"/>
            <p className="para-one">Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br></br> 
            Expedita eligendi est ab voluptate magnam,<br></br> quisquam velit optio modi eos non,
            quo delectus eveniet totam possimus. Modi enim quas ea ducimus.</p>
          </div>
        </motion.div>
    </div>
  )
}

export default Products