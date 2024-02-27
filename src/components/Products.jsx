import React from 'react'

const Products = () => {
  const navigation = [
    {_id: 101, title: 'imageOne',},
    {_id: 102, title: 'imageTwo',},
    {_id: 103, title: 'imageTwo',},
  ];

  return (
    <div className="products">
      <ul>
      {
        navigation.map((product) => (
          <li>
            {product?.title}
            <div className="product-one"></div>
          </li>
        ))
        }
        </ul>
      </div>
  )
}

export default Products