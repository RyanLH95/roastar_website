import React from 'react'
import { Link } from 'react-router-dom'

const Desc = () => {
  return (
      <div className='desc-container'>
        <div className='desc-content'>
          <div className='desc-text'>
            <h2>Vietnamese Style Coffee</h2>
            <p>
              Roastar Coffee is a Vietnamese Specialised Coffee Shop founded in 2019<br></br> where we have
              been trading online with specially imported Vietnamese coffee<br></br> which we sell as B2B and B2C, 
              bringing awarness to Vietnamese-grown coffee.
              <br></br><br></br>
            </p>
            <h3 className='link-to'>
              <Link to='/AboutUs' reloadDocument>
                CLICK FOR MORE
              </Link>
            </h3>
          </div>
          <img 
            src='../../../images/location_link_image.png'
            width={600}
          />
        </div>
      </div>
  )
}

export default Desc