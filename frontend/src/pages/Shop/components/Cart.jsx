import React, { useState } from 'react'
import { Trash } from 'lucide-react'

const Cart = () => {
  const data = [
    {
        "title": "Roastar Box Bundle",
        "image": "../../../../../images/image-five.png",
        "id": 1,
        "price": "40.95"
    },
    {
        "title": "Vietnam Robusta Gift Box",
        "image": "../../../../../images/image-four.png",
        "id": 2,
        "price": "50.95"
    }
  ];

  return (
    <div className='cart-card'>
      <div className='cart-container'>
        <h2>PRODUCTS IN CART</h2>
          {data?.map(product => {
            return (
              <div className='item' key={product.id}>
                <img width={100} src={product.image} alt=''/>
                <div className='item-info'>
                  <h3>{product.title}</h3>
                  <p className='price'>£{product.price}</p>
                </div>
                <Trash className='delete' size={18} style={{position: 'relative', top: '1.5rem',}}/>
              </div>
            );
          })}
         <div className='total'>
           <span>SUBTOTAL</span>
           <p class>£123</p>
        </div>
        <button className='checkout'>CHECKOUT</button>
        <span className='reset'>RESET CART</span>
      </div>
    </div>
  )
}

export default Cart