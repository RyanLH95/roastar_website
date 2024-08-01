import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import Content from '../../../assets/popups/delivery/Content';

const Links = () => {
  const [ modalOpen, setModalOpen ] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true)
  
  return (
    <div className='links-div'>
      <h2>EXPLORE OUR STORE</h2>
      <p>In Shop, at Home or on the Go!</p>
      <div className='link-images'>
        {/* leads to contact us page */}
        <div className='image-one'>
          <Link reloadDocument to='/ContactUs'>
            <img
              src='../../../images/location_link_image.png'
              width={300}
              height={300}
            />
            <p>LOCATION</p>
          </Link>
        </div>

        {/* component for popup links below */}
        <div 
          className='image-two'
          onClick={() => modalOpen ? close() : open()}
        >
          <img
            src='../../../images/delivery_link_image.png'
            width={300}
            height={300}
          />
          <p>DELIVERY</p>
        </div>
        
        {/* content of popup from backdrop components*/}
        <AnimatePresence>
          { modalOpen && <Content modalOpen={modalOpen} handleClose={close} />}
        </AnimatePresence>
        
        {/* Link to Roastar Shop */}
        <div className='image-three'>
          <Link reloadDocument to='/Shop'>
            <img
              src='../../../images/shop_link_image.png'
              width={300}
              height={300}
            />
            <p>SHOP</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Links