import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react';

const Links = () => {
  const [ showLink, setShowLink ] = useState(false)

  const handleClick = () => {
    setShowLink(!showLink)
  }
  
  return (
    <div className='links-div'>
      <h2>EXPLORE OUR STORE</h2>
      <p>In Shop, at Home or on the Go!</p>
      <div className='link-images'>
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

        <div className='image-two' onClick={handleClick}>
          <img
            src='../../../images/delivery_link_image.png'
            width={300}
            height={300}
          />
          <p>DELIVERY</p>
        </div>
        
        {showLink && (
            <div 
              className='delivery no-scroll close-animation'
              style={{animation:'appear .3s linear'}}
            >
              <div className='close'>
                <button 
                  className='close-button'
                  onClick={handleClick}
                > 
                  <X size={40}/>
                </button>
              </div>
            </div>
          )}
        
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