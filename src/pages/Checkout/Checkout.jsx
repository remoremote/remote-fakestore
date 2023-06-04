import React, { useContext } from 'react'
import './Checkout.css'
import { CartContext } from '../../contexts/CartContext';
import CartItem from '../../components/CartItem/CartItem';

function Checkout() {
  const { cartItems, removeProduct } = useContext(CartContext);

  return (
    <div className='cart-container'>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => <CartItem key={item.id} item={item} removeProduct={removeProduct} />)}
        </tbody> 
      </table>
    </div>
  );
}

export default Checkout;
