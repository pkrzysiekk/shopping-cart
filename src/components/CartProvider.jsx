import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => {
  const context = useContext(CartContext);

  return context;
};
export { CartProvider, useCart };
