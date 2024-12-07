import NavBar from "./NavBar";
import BlankCart from "./BlankCart";
import { useCart } from "./CartProvider";

function CartPage() {
  const { cart, addToCart } = useCart();

  function handleInputChange() {}
  return (
    <>
      <NavBar />

      <main>
        <div className="cart-container">
          {cart.length == 0 ? (
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
                  <button className="minus-button">-</button>
                  <input
                    type="number"
                    onChange={handleInputChange}
                    value={item.quantity}
                  />
                  <button className="plus-button">+</button>
                  <button className="remove-button">X</button>
                </div>
              </div>
            ))
          )}
          <button className="order-button">Submit Order</button>
        </div>
      </main>
    </>
  );
}
export default CartPage;
