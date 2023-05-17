import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (card, quantity) => {
    if (!isInCart(card.id)) {
      setCart((item) => [...item, { ...card, quantity }]);
    } else {
      cart.forEach((_card) => {
        if (card.id === _card.id) {
          _card.quantity = _card.quantity + quantity;
        }
      });
    }
    console.log(cart);
  };

  const delToCart = (data) => {
    const newCar = cart.filter((card) => card.id !== data.id);
    setCart(newCar);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((card) => card.id === id);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, delToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
