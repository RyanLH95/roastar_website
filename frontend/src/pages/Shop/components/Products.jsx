import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { fetchProducts } from '../../../api/shopifyApi.js'

const Products = () => {
  const [productsList, setProductsList] = useState([]);
  
  useEffect(() => {
    const getProducts = async () => {
      const productData = await fetchProducts();
      setProductsList(productData)
    };
    getProducts();
  }, []);
  
  return (
    <div className="product-container">
      <div className='product-grid'>
      {
        productsList.map(({ node }) => (
          <div
            className='product-card' 
            key={node?.id}
          >
            <Link
              to={`product/${node.id}`}
              reloadDocument
            >
              {node.images.edges.length > 0 && (
                <img 
                  src={node.images.edges[0].node.src} 
                  alt={node.title} 
                  width={300}
                />
              )}
              {/* <div dangerouslySetInnerHTML={{ __html: node.descriptionHtml }} /> */}
              <h2>{node.title}</h2>
            </Link>
            <p>£{node.variants.edges[0].node.priceV2.amount}</p>
            <button type='button'>ADD TO CART</button>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Products