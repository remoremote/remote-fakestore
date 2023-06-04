import { useState, createContext, useEffect } from 'react'

// create context
export const CartContext = createContext()

export default function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([])

  const addProduct = (productToAdd) => {
    setCartItems(prevItems => [...prevItems, productToAdd]);
  }

  const removeProduct = (productToRemove) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productToRemove.id));
  }

  // log cartItems whenever it changes
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems])

  return (
    <CartContext.Provider value={{ cartItems, addProduct, removeProduct }}>
      {props.children}
    </CartContext.Provider>
  );
}
