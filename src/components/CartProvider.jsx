import { createContext, useContext, useEffect, useState } from "react";
import { productInCart } from "../helperFunctions/productInCart";
import { getEditedCart } from "../helperFunctions/getEditedCart";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    if (quantity > 0) {
      if (productInCart(cart, product)) {
        const editedCart = getEditedCart(cart, product, quantity);
        setCart(editedCart);
      } else {
        const productToAdd = { product, quantity: quantity };
        setCart([...cart, productToAdd]);
      }
    }
  };

  const incrementProduct = (product) => {
    const editedCart = getEditedCart(cart, product, 1);
    setCart(editedCart);
  };
  const decrementProduct = (product, quantity) => {
    if (quantity != 1) {
      const editedCart = getEditedCart(cart, product, -1);
      setCart(editedCart);
    } else {
      removeProduct(product);
    }
  };
  const removeProduct = (product) => {
    const newCart = cart.filter((item) => item.product.id != product.id);
    setCart(newCart);
  };
  const removeCart = () => {
    setCart([]);
  };
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        incrementProduct,
        decrementProduct,
        removeProduct,
        removeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => {
  const context = useContext(CartContext);

  return context;
};
export { CartProvider, useCart };
