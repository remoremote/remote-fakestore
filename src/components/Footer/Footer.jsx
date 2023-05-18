import React from 'react'
import './Footer.css'
import { BiDonateHeart } from 'react-icons/bi';

function Footer() {
  return (
    <div className="footer-container">
        <p>Made with <BiDonateHeart className='love-icon'/> by <a href="#">remoremote</a></p>
        <a href="#">Contact Us</a>
    </div>
  )
}

export default Footer