'use client'

import React, { useState } from 'react'
import Logo from './Logo.jsx'
import '../App.css'

const Navbar = () => {

    const navigation = [
      {_id:101, title: 'Menu', href: '/'},
      {_id:102, title: 'Shop', href: '/Shop'},
      {_id:103, title: 'Contact-Us', href: '/Contact-Us'},
    ];

  return (
    <div className="navbar">
      <div className="container">
        <Logo />
      </div>
    </div>
  )
}

export default Navbar