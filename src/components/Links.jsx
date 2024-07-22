import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
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
        <div className='image-two'>
          <img
            src='../../../images/delivery_link_image.png'
            width={300}
            height={300}
          />
          <p>DELIVERY</p>
        </div>
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