import React from 'react'
import './Header.css'
import { BiCartAlt, BiHeart } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header-container">
        <a href='/' className='store-title'>Fake Store</a>
      <div>
          <button className="store-icon"><BiHeart /></button>
        <a href='/checkout' className="icon-notification">
            <p className='cart-counter-alert'>1</p>
            <button className="store-icon"><BiCartAlt /></button>
        </a>
      </div>
    </div>
  )
}

export default Header