import React from 'react'
import './CartItem.css'

function CartItem({ item, removeProduct }) {
  return (
    <tr className="cart-item">
      <td>{item.title}</td>
      <td>{item.price}</td>
      <td>1</td>
      <td><button onClick={() => removeProduct(item)}>Remove</button></td>
    </tr>
  );
}

export default CartItem;
