import React from 'react'
import './Header.css'
import { BiCartAlt } from 'react-icons/bi';

function Header() {
  return (
    <div className="header-container">
        <p className='store-title'>Fake Store</p>
        <div className="icon-notification">
            <p className='cart-counter-alert'>1</p>
            <button className="store-icon"><BiCartAlt /></button>
        </div>
    </div>
  )
}

export default Header