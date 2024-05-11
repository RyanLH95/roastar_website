import React from 'react'
import { Link } from 'react-router-dom'
import { Map, Phone, Instagram, Facebook } from 'lucide-react'
import ContactForm from './ContactForm'

const Card = () => {
  return (
    <div className='card'>
      <h2 className='company-title'>ROASTAR SPECIALTY COFFEE</h2>

      <div className='info-card'>
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
            <Link to='https://www.instagram.com/roastar.coffee/' style={{position: 'absolute'}} >
              <Instagram size={30} style={{position: 'relative', left: '-50px'}}/>
            </Link>
            <Link to='https://www.facebook.com/roastarcoffeeuk' style={{position: 'absolute'}}>
              <Facebook size={30} strokeWidth={0.1} style={{fill: 'white'}}/>
            </Link>
          </div>
        </div>
      </div>
      <div className='contact-card'>
        <ContactForm />
      </div>
    </div>
  )
}

export default Card