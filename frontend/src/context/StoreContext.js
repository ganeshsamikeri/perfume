import { createContext, useState } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, size) => {
    const existing = cart.find(
      (item) => item._id === product._id && item.size === size
    );

    if (existing) {
      setCart(
        cart.map((item) =>
          item._id === product._id && item.size === size
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, size, qty: 1 }]);
    }
  };

  const removeFromCart = (id, size) => {
    setCart(cart.filter((item) => !(item._id === id && item.size === size)));
  };

  const updateQty = (id, size, qty) => {
    setCart(
      cart.map((item) =>
        item._id === id && item.size === size ? { ...item, qty } : item
      )
    );
  };

  return (
    <StoreContext.Provider value={{ cart, addToCart, removeFromCart, updateQty }}>
      {children}
    </StoreContext.Provider>
  );
};
