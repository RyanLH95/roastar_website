import React from 'react'
import { Link } from 'react-router-dom'

const MenuAd = () => {
  return (
    <div className="menu-ad">
      <div className='menu-image'> 
        <img 
          src="../../../images/imageThree.png"
          height={700}
          width={1440}
          className="ad"
        />
      </div>
      <div className='menu-container'>
        <p className="paragraph-one">
          Roastar Coffee is a Vietnamese Specialised Coffee Shop founded in 2019<br></br> where we have
          been trading online with specially imported Vietnamese coffee<br></br> which we sell as B2B and B2C, 
          bringing awarness to Vietnamese-grown coffee.
          <br></br><br></br>
        </p>
        <div className='link'>
        
        </div>
      </div>
    </div>
  )
}

export default MenuAd