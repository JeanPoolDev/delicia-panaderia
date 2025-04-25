import { createContext, useEffect, useState } from "react";
import { products } from '../../data/db'
import { STOCK } from "../constants/stock";

export const PanContext = createContext();

export function PanProvider({ children }) {

  const initalState = () => JSON.parse(localStorage.getItem('cart')) ?? [];

  const [productos] = useState(products);
  const [cart, setCart] = useState(initalState);

  const addToCart = (pan) => {

    const indexProduct = cart.findIndex(item => item.id === pan.id);

    if (indexProduct >= 0) {
      const cloneCart = [...cart]
      cloneCart[indexProduct].quantity += 1
      setCart(cloneCart)
    } else {
      pan.quantity = 1
      setCart([...cart, pan]);
    }
  }

  const addQuantity = (id) => {
    setCart(prevState => prevState.map(pan => {
      if (pan.id === id && pan.quantity < STOCK.MAX) {
        return {
          ...pan,
          quantity: pan.quantity + 1
        }
      }
      return pan
    }))
  }

  const minusQuantity = (id) => {
    setCart(prevState => prevState.map(pan => {
      if (pan.id === id && pan.quantity > STOCK.MIN) {
        return {
          ...pan,
          quantity: pan.quantity - 1
        }
      }
      return pan
    }))
  }

  const removeCart = (id) => {
    setCart(prevState => prevState.filter(pan => pan.id !== id))
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])

  return (
    <PanContext.Provider value={{
      productos,
      cart, setCart,
      addToCart,
      removeCart,
      addQuantity, minusQuantity
    }}>
      {children}
    </PanContext.Provider>
  );
};