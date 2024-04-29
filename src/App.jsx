import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Shop from './pages/Shop/Shop'
import ContactUs from './pages/ContactUs/ContactUs'
import Map from './pages/Map/Map'

function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/Shop' element={<Shop/>}/>
          <Route path='/ContactUs' element={<ContactUs/>}/>
          <Route path='/Map' element={<Map/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
