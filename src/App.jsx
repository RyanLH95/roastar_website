import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Shop from './pages/Shop/Shop'
import ContactUs from './pages/ContactUs/ContactUs'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/Shop' element={<Shop/>}/>
          <Route path='/ContactUs' element={<ContactUs/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
