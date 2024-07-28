import React from 'react'
import ShopHeader from './components/ShopHeader'
import Products from './components/Products'
import '../../App.css'
import './Shop.css'

const Shop = () => {
  return (
    <div className='shop-container'>
      <ShopHeader />
      <Products />
    </div>
  )
}

export default Shop