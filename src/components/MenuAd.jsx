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
          From our range of whole grain Vietnamese coffee beans to our homemade Banh Mih sandwiches<br></br> Our menu
          contains a wide variety of delicious foods and beverages for your guaranteed delight<br></br> 
          <br></br><br></br>
        </p>
        <div className='menu-link'>
          <Link to='/Menu' reloadDocument>
            <button>VIEW MENU HERE</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MenuAd