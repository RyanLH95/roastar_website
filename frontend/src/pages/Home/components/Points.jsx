import React from 'react'

const Points = () => {
  return (
    <div className='points-container'>
      <div className='points-title'>
        <h2>THE TASTE OF VIETNAM AT YOUR DOORSTEP!</h2>
      </div>
      <div className='points-banner'>
        <img 
          src='../../../images/image-four.png'
          width={800}
        />
      </div>
      <div className='points-content'>
        <div className='points-image'>
          <img 
            src='../../../images/loyalty_card_back.png'
            width={400}
          />
        </div>
        <div className='points-text'>
          <h3>ROASTAR REWARDS</h3>
          <p>Pick up a points card at our shop and earn points for every coffee 
            you buy and earn yourself a free coffee on us!</p>
        </div>
      </div>
    </div>
  )
}

export default Points