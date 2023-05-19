import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [qtyCart, setQtyCart] = useState(0);
  const [upd, setUpd] = useState(false);

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
    upd ? setUpd(false) : setUpd(true);
  };

  const addQtyCart = () => {
    const qty = cart.reduce((acc, act) => acc + act.quantity, 0);
    setQtyCart(qty);
  };

  const delToCart = (data) => {
    const newCar = cart.filter((card) => card.id !== data.id);
    setCart(newCar);
    upd ? setUpd(false) : setUpd(true);
  };

  useEffect(() => {
    addQtyCart();
  }, [upd]);

  const clearCart = () => {
    setCart([]);
    upd ? setUpd(false) : setUpd(true);
  };

  const isInCart = (id) => {
    return cart.some((card) => card.id === id);
  };

  return (
    <CartContext.Provider
      value={{ cart, qtyCart, addToCart, delToCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
