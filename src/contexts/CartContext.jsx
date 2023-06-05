import { useState, createContext, useEffect } from 'react'

export const CartContext = createContext()

export default function CartContextProvider(props) {
  // Get initial cartItems from localStorage if they exist
  const initialCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const [cartItems, setCartItems] = useState(initialCartItems)

  const addProduct = (productToAdd) => {
    setCartItems(prevItems => [...prevItems, productToAdd]);
  }

  const removeProduct = (productToRemove) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productToRemove.id));
  }

  // When cartItems change, update localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems])

  return (
    <CartContext.Provider value={{ cartItems, addProduct, removeProduct }}>
      {props.children}
    </CartContext.Provider>
  );
}
