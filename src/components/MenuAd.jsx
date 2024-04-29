import React from 'react'
import { Link } from 'react-router-dom'

const MenuAd = () => {
  return (
    <div className="menu-ad">
      <img 
        src="../../../images/imageThree.png"
        height={700}
        width={1440}
        className="ad"
      />
      <div className='menu-container'>
        <p className="paragraph-one">
          Roastar Coffee is a Vietnamese Specialised Coffee Shop founded in 2019<br></br> where we have
          been trading online with specially imported Vietnamese coffee<br></br> which we sell as B2B and B2C, 
          bringing awarness to Vietnamese-grown coffee.
          <br></br><br></br>
        </p>
        <div className='link'>
          <span className="content-link learn-more"><Link to='/AboutUs'>Learn More</Link></span>
          <span className="content-link view-menu"><Link to='/Menu'>View Menu</Link></span>
        </div>
      </div>
    </div>
  )
}

export default MenuAd