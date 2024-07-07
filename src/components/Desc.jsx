import React from 'react'
import { Link } from 'react-router-dom'

const Desc = () => {
  return (
      <div className='desc-container'>
        <div className='desc-content'>
          <div className='desc-text'>
            <h3>VIETNAMESE STYLE COFFEE</h3>
            <p>
              Roastar Coffee is a Vietnamese Specialised Coffee Shop founded in 2019 where we have
              been trading online with specially imported Vietnamese coffee which we sell as B2B and B2C, 
              bringing awarness to Vietnamese-grown coffee.
              <br></br><br></br>
            </p>
            <h4 className='link-to'>
              <Link to='/AboutUs' reloadDocument>
                CLICK FOR MORE
              </Link>
            </h4>
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