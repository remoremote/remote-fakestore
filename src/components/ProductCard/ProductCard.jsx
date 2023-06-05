import React, {useContext} from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom';
import { BiMinus, BiCartAdd } from 'react-icons/bi';
import { CartContext } from '../../contexts/CartContext';

function ProductCard({product}) {
  // If the product title is more than 30 characters, trim it and add ellipsis
  const title = product.title.length > 30 ? product.title.substring(0, 30) + "..." : product.title;

  // Access global context
  // addProduct is a function that adds a product to the cart
  // removeProduct is a function that removes a product from the cart
  // cartItems is an array of the products currently in the cart
  const { cartItems, addProduct, removeProduct } = useContext(CartContext);

  // Check if the current product is in the cart
  // If it is, isInCart will be true, else it will be false
  const isInCart = cartItems.find(item => item.id === product.id) !== undefined;

  // Function to handle the click event of the button
  const handleClick = () => {
    // If the product is already in the cart, remove it
    if (isInCart) {
      removeProduct(product);
    } 
    // If the product is not in the cart, add it
    else {
      addProduct(product);
    }
  }

  return (
    <div className='product-card'>
      <button className="product-card-icon" onClick={handleClick} title="Fast Checkout">
        {
        isInCart ?
        <BiMinus />
        :
        <BiCartAdd />
        }
      </button>
      <Link to={`/details/${product?.id}`}>
        <img src={product.image} alt="" />
        <p>{title}</p>
        <p>{product.category}</p>
        <p>${product.price}</p>
      </Link>
    </div>
  )
}

export default ProductCard;
