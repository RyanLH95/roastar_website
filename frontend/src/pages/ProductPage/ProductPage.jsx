import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';
import '../../App.css';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  /*
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  */

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(``, {
        method: 'POST',
        header: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': ''
        },
        body: JSON.stringify({
          query: `
              product(id: "gid//shopify/Product/${id}") {
                id
                title
                descriptionHtml
                images(first: 1) {
                  edges {
                    node {
                      src
                    }
                  }
                }
              }
          `
        })
      })

      const data = await response.json();
      setProduct(data?.product?.edges)
    };

    fetchProduct();
  }, [id])

  if (!product) return <div>Loading...</div>
  return (
    <div className='product-page-container'>
      <h1>{product?.title}</h1>
      {product.images.edges.length > 0 && (
        <img src={product.images.edges[0].node.src} alt={product.title} />
      )}
      <div dangerouslySetInnerHTML={{ __html: product?.descriptionHtml }}/>
    </div>
  )
}

export default ProductPage;