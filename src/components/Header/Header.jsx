import React from 'react'
import './Header.css'
import { BiCartAlt } from 'react-icons/bi';

function Header() {
  return (
    <div className="header-container">
        <p className='store-title'>Fake Store</p>
        <div>
            <p className='cart-counter-alert'>1</p>
            <div className="store-icon"><BiCartAlt /></div>
        </div>
    </div>
  )
}

export default Header