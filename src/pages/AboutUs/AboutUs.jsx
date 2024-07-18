import React from 'react'
import AboutHeader from './components/AboutHeader'
import AboutContent from './components/AboutContent'
import '../../App.css'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className='about-us-container'>
      <AboutHeader />
      <AboutContent />
    </div>
  )
}

export default AboutUs