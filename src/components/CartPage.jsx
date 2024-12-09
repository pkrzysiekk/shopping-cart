import NavBar from "./NavBar";
import BlankCart from "./BlankCart";
import { useCart } from "./CartProvider";
import { useState } from "react";

function CartPage() {
  const {
    cart,
    addToCart,
    incrementProduct,
    decrementProduct,
    removeProduct,
    removeCart,
  } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  function handleOrder() {
    removeCart();
    setOrderPlaced(true);
  }
  return (
    <>
      <NavBar />

      <main>
        <div className="cart-container">
          {cart.length == 0 && !orderPlaced ? (
            <BlankCart />
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.product.id}>
                <div className="cart-item-name">
                  <p className="product-title">{item.product.title}</p>
                  <p className="product-price">
                    {item.product.price * item.quantity} $
                  </p>
                </div>
                <div className="buttons">
                  <button
                    className="minus-button"
                    onClick={() => {
                      decrementProduct(item.product, item.quantity);
                    }}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    onChange={() => {}}
                    value={item.quantity}
                  />
                  <button
                    className="plus-button"
                    onClick={() => {
                      incrementProduct(item.product);
                    }}
                  >
                    +
                  </button>
                  <button
                    className="remove-button"
                    onClick={() => {
                      removeProduct(item.product);
                    }}
                  >
                    X
                  </button>
                </div>
              </div>
            ))
          )}
          {orderPlaced && (
            <p>
              Order placed! More information will be provided via mail you
              provided!
            </p>
          )}
        </div>
        {cart.length == 0 ? null : (
          <button className="order-button" onClick={handleOrder}>
            Submit Order
          </button>
        )}
      </main>
    </>
  );
}
export default CartPage;
