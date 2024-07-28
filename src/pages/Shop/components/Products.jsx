import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../helpers'

const Products = ({ items }) => {
  console.log(items)
  return (
    <div className="product-container">
      <div className='product-content'>
        <div className='product-grid'>
          {products.map(item => {
            return (
              <div  
                className='product-card'
                key={item.id}
              >
                <Link to='/ProductPage'>
                  <div className='product-link'>
                    <img 
                      src={item.image}
                      alt={`Preview of ${item.title}`}
                      width={200}
                      height={200}
                    />
                    <div className="product-info">
                      <h3>{item.title}</h3>
                      <p>£{item.price}</p>
                    </div>
                  </div>
                </Link>
                <button  
                  type='button'
                  name='btn' 
                >
                  <span>ADD TO CART</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Products