import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Homepage.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import CategoryButtons from '../../components/CategoryButtons/CategoryButtons';

function Homepage() {
  //create state for products
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  // State to hold the categories fetched from the API
  const [categories, setCategories] = useState([])

  //https://fakestoreapi.com/products

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
    .then(res => {
        setProducts(res.data)
        setFilteredProducts(res.data) // set filteredProducts to initially display all products
    })
    .catch(err => console.log(err))
    
    axios.get('https://fakestoreapi.com/products/categories')
    .then(res => {
        setCategories(['All', ...res.data]); // Add "All" to the categories list
    })
    .catch(err => console.log(err));

  }, [])

  const handleCategoryClick = (category) => {
    if(category === 'All'){
        setFilteredProducts(products);
    } else {
        const filtered = products.filter(product => product.category === category);
        setFilteredProducts(filtered);
    }
  }

  return (
    <div className="homepage-container">
      
      <div>
      {
        categories.map(i=><CategoryButtons
          key={i}
          category={i}
          onClick={() => handleCategoryClick(i)}
          />)
      }
      </div>

      <div className='prod-container'>
      {
        filteredProducts.map(item=><ProductCard 
          key={item.id}
          product={item} 
          />)
      }
      </div>
    </div>
  )
}

export default Homepage
