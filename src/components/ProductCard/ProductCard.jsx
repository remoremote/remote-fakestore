import React, {useContext} from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom';
import { BiCartAlt, BiCartAdd } from 'react-icons/bi';
import { CartContext } from '../../contexts/CartContext';

function ProductCard({product}) {
  const title = product.title.length > 30 ? product.title.substring(0, 30) + "..." : product.title;

  //access global context
  const { cartItems, addProduct } = useContext(CartContext);

  const handleAddToCart = () => {
    addProduct(product);
  };

  const isInCart = cartItems.find(item => item.id === product.id) !== undefined;

  return (
    <div className='product-card'>
      <button className="product-card-icon" onClick={handleAddToCart}>
        {
        isInCart?
        <BiCartAdd />
        :
        <BiCartAlt />
        }
      </button>
      <Link to={`/details/${product?.id}`}>
        <img src={product.image} alt="" />
        <p>{title}</p>
        <p>{product.category}</p>
        <p>{product.price}</p>
      </Link>
    </div>
  )
}

export default ProductCard;
