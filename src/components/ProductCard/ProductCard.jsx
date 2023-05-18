import React, { useEffect } from 'react'
import './ProductCard.css'

function ProductCard({product}) {
  //substring to limit amount of characters in title
  const title = product.title.length > 25 ? product.title.substring(0, 25) + "..." : product.title;


  return (
    <div className='product-card'>
      <img src={product.image} alt="" />
      <p>{title}</p>
      <p>{product.category}</p>
      <p>{product.price}</p>
    </div>
  )
}

export default ProductCard