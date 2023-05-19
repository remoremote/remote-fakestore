import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Homepage.css'
import ProductCard from '../../components/ProductCard/ProductCard'


function Homepage() {
  //create state for products
  const [products, setProducts] = useState([]);
  // State to hold the categories fetched from the API
  const [categories, setCategories] = useState([])

  //https://fakestoreapi.com/products

  //I need to make api call when the page loads
  //set up useEffect
  useEffect(
    () => {
      console.log('homepage loaded')
      //call api to get products
      axios.get(`https://fakestoreapi.com/products`)
      .then(res => {
        console.log(res.data);
        //store this data in state
        setProducts(res.data)
      })
      .catch(err => console.log(err))
      
      //call api to get products
      axios.get('https://fakestoreapi.com/products/categories')
      .then(res => {
        console.log(res.data);
        setCategories(res.data);
      })
      .catch(err => console.log(err));

    }, [] //empty array tequired to run ONLY on first render
   )


  return (
    <div className="homepage-container">
      <div>
        {categories.map(category => 
          <a key={category} className='category-link'>
            {category}
          </a>
        )}
      </div>
      <div className='prod-container'>
      {
        products.map(item=><ProductCard 
          key={item.id}
          product={item} 
          />)
      }
      </div>
    </div>
  )
}

export default Homepage