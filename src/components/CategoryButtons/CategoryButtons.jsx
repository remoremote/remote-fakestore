import React from 'react'
import './CategoryButtons.css'


function CategoryButtons({category, onClick}) {
  return (
    <div className='category-link' onClick={onClick}>
        <a>{category}</a>
    </div>
  )
}

export default CategoryButtons
