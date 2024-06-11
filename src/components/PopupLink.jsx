import React from 'react'
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom'

const PopupLink = () => {
  return (
    <>
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
            <div className='delivery requires-no-scroll'>
              <div className='delivery-text'>
                <p>Pick Your Delivery</p>
              </div>
              <div className='content'>
                <Link to='https://deliveroo.co.uk/menu/london/bromley/roastar-speciality-coffee-8-east-street'>
                  <div className='deliveroo'>
                    <img
                      src='../../../icon/deliveroo_icon.png'
                      width={250}
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
    </>
  )
}

export default PopupLink