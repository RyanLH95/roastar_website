import React from 'react'
import { MapPin } from 'lucide-react'

const LocationPin = ({ text }) => {
  return (
    <div className='pin'>
      <MapPin 
        size={40} 
        strokeWidth={1.2}
        className='pin-icon' />
      <p className='pin-text'>{text}</p>
    </div>
  )
}

export default LocationPin