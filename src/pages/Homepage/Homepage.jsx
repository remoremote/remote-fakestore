import React, { useEffect } from 'react'
import axios from 'axios'
import './Homepage.css'

function Homepage() {
  //set up useEffect
  useEffect(
    ()=> {
       axios.get(``)
       .then(res)
       .catch(err => console.log(err)) //make api call
    }, []
  )

  return (
    <div>
      <button>All</button>
    </div>
  )
}

export default Homepage