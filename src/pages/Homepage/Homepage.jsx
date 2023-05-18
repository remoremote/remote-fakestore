import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Homepage.css'
import ProductCard from '../../components/ProductCard/ProductCard'


function Homepage() {
  //create state for characters
  const [products, setProducts] = useState([]);

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
    }, [] //empty array tequired to run ONLY on first render
   )


  return (
    <div className="homepage-container">
      <div className='prod-container'>
      {
        products.map(item=><ProductCard 
          key={item.id}
          product={item} 
          />)
        //products.map(item=><p key={item.id}>{item.title}</p>)
      }
      </div>
    </div>
  )
}

export default Homepage