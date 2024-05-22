import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../pages/Shop/helpers';

const FeaturedProducts = ({ items }) => {
  console.log(items)
  return (
    <div className='product-grid'>
      {products.map(item => {
        return (
          <div  
            key={item.id}
            className='product-card'
          >
            <Link >
              <div >
                <img 
                  src={item.image}
                  alt={`Preview of ${item.title}`}
                  width={300}
                  height={300}
                  className=""
                />
                <div className="product-info">
                  <h3>{item.title}</h3>
                  <p>£{item.price}</p>
                  <button
                    className="add-to-cart">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  )
}

export default FeaturedProducts