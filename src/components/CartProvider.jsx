import { createContext, useContext, useEffect, useState } from "react";
import { productInCart } from "../helperFunctions/productInCart";
import { getProductToEdit } from "../helperFunctions/getProductToEdit";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    if (quantity > 0) {
      if (productInCart(cart, product)) {
        const productToEdit = getProductToEdit(cart, product);
        console.log(productToEdit);
      } else {
        const productToAdd = { product, quantity: quantity };
        setCart([...cart, productToAdd]);
      }
    }
  };
  useEffect(() => {
    console.log(cart);
  }, [cart]);
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
