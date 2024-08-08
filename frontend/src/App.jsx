import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Menu from './pages/Menu/Menu'
import Shop from './pages/Shop/Shop'
import ContactUs from './pages/ContactUs/ContactUs'
import Careers from './pages/Careers/Careers'
import ItemDetails from './pages/itemDetails/ItemDetails'
import Checkout from './checkout/Checkout'
import Confirmation from './checkout/Confirmation'
import Cart from './components/Cart'
import Submit from './pages/Careers/Submit'

function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Routes>
          {/* Main pages */}
          <Route path='/' element={<Home/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/Shop' element={<Shop/>}/>
          <Route path='/Menu' element={<Menu/>}/>
          <Route path='/ContactUs' element={<ContactUs />}/>
          <Route path='/Careers' element={<Careers />}/>
          <Route path='submit' element={<Submit />}/>
          {/* Ecommerce pages */}
          <Route path='item/:itemId' element={<ItemDetails />}/>
          <Route path='checkout' element={<Checkout />}/>
          <Route path='checkout/success' element={<Confirmation />}/>
        </Routes>
        <Cart />
        <Footer />
      </div>
    </Router>
  )
}

export default App
