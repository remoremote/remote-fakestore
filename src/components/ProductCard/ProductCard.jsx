import React, { useEffect } from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom';


function ProductCard({product}) {
  //substring to limit amount of characters in title
  const title = product.title.length > 30 ? product.title.substring(0, 30) + "..." : product.title;


  return (
    <div className='product-card'>
      <Link to={`/details/${product?.id}`}>
        <img src={product.image} alt="" />
        <p>{title}</p>
        <p>{product.category}</p>
        <p>{product.price}</p>
      </Link>
    </div>
  )
}

export default ProductCard