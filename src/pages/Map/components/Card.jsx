import React from 'react'
import { Link } from 'react-router-dom'
import { Map, Phone, Instagram, Facebook } from 'lucide-react'

const Card = () => {
  return (
    <div className='card'>
      <h2 className='info-title'>CONTACT INFORMATION</h2>

      <div className='info-card'>
        <h3 className='company-title'>ROASTAR SPECIALTY COFFEE</h3>

        <div className='company-info'>
          <div className='address'>
            <Map 
              style={{position: 'relative', top: '25px', left: '-120px'}}
              />
                <p>8 East St, Bromley, BR1 1QX</p>
          </div>
          <div className=''>
            <Phone size={20} style={{position: 'relative', top: '23px', left: '-90px'}}/>
            <p className='phone'>+44 020 4559 2984</p>
          </div>
          <div className='socials-info'>
            <Link to='https://www.instagram.com/roastar.coffee/'>
              <Instagram size={40} style={{position: 'relative', left: '-30px'}}/>
            </Link>
            <Link to='https://www.facebook.com/roastarcoffeeuk'>
              <Facebook size={40} strokeWidth={0.7} style={{fill: 'white'}}/>
            </Link>
          </div>
        </div>
      </div>
      <div className='contact-card'>
      <h2 className='form-title'>CONTACT FORM</h2>
       
      </div>
    </div>
  )
}

export default Card