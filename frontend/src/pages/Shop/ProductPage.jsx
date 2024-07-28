import React, { useState } from 'react'
import './ProductPage.css'

const ProductPage = () => {
  const [ quantity, setQuantity ] = useState(0)

  const images = '../../../../images/image-five.png'
  const price = '20'

  return (
    <div className='product-page-container'>
      <div className='product-page-content'>
        <div className='main-image'>
          <img width={300} src={images} alt=''/>
        </div>
        <div className='product-page-info'>
          <h3>ROASTAR PRODUCT</h3>
          <div>£{price}</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nihil eum distinctio. 
             Error doloremque explicabo ducimus ratione ad officia delectus! Fuga labore, 
             reprehenderit voluptatem itaque pariatur distinctio illo atque vero!
          </p>
          <div className='quantity'>
            <button onClick={() => setQuantity((prev) => prev === 0 ? 0 : prev - 1)}>-</button>
              <span>{quantity}</span>
            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div>
          <div>
            <button className='add-to-cart'>
              ADD TO CART
            </button>
          </div>
          <div className='product-information'>
            <p>Region:</p>
            <hr/>
            <p>Processing:</p>
            <hr/>
            <p>Roast Level:</p>
            <hr/>
            <p>Flavour Profile:</p>
            <hr/>
            <p>Recommended Brew Method:</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage