import React,{ useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import AboutUs from './components/AboutUs'
import './App.css'


function App() {

  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <AboutUs />
    </div>
  )
}

export default App
