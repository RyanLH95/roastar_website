import React from 'react'
import { Link } from 'react-router-dom'
import { Map, Phone, Instagram, Facebook } from 'lucide-react'
import ContactForm from './ContactForm'
import '../ContactUs.css'

const Card = () => {
  return (
    <div className='card'>
      <div className='info-card'>
      <h2 className='company-title'>ROASTAR SPECIALTY COFFEE</h2>
        <div className='company-info'>
          <div className='card-address'>
            <Map 
              style={{
                position: 'relative', 
                top: '25px', 
                left: '-8em'
              }}
            />
                <p>8 East St, Bromley, BR1 1QX</p>
          </div>
          <div className=''>
            <Phone 
              size={20} 
              style={{
                position: 'relative', 
                top: '23px', 
                left: '-6em'
              }}
            />
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