import React from 'react'
import './ProductDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ProductDetails() {
  //show data for a specific product
  //the id is in the url
  //use hook to retrieve the value
  const {productId} = useParams()

  //create state to hold product data
  const [product, setProduct] = React.useState('')


  //https://fakestoreapi.com/products/1
  //I need to get the data when the page loads
  React.useEffect(
    ()=>{
      console.log('details')
      //make api call to get data
      axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(res =>{
        console.log(res.data)
        //store data in state
        setProduct(res.data)
      })
      .catch(err => console.log(err))

    }, [] //this means it only loads once
  )
  
  return (
    <div className='details-background'>
      <div className="details-container">
        <img src={product.image} alt="" />
        <div className="details-info">
          <p>{product.title}</p>
          <p>${product.price}</p>
          <p>Description</p>
          <p className='details-desc'>{product.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails