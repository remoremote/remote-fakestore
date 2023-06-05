import React, { useContext } from 'react'
import './Header.css'
import { BiCartAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext'; // import the CartContext

function Header() {
  const { cartItems } = useContext(CartContext); // get cartItems from context
  const cartCount = cartItems.length; // count the items in the cart

  return (
    <div className="header-container">
        <Link to='/' className='store-title'>Fake Store</Link>
      <div>
        <p className='cart-counter-alert'>{cartCount}</p> {/* show cartCount here */}
        <Link to='/checkout' className="icon-notification store-icon">
          <BiCartAlt />
        </Link>
      </div>
    </div>
  )
}

export default Header;
