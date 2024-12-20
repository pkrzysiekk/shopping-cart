import { Link } from "react-router-dom";
import { useCart } from "./CartProvider";

export function NavBar() {
  const { cart, addToCart } = useCart();
  return (
    <div className="nav-bar">
      <div className="nav-bar-container">
        <ul>
          <li>
            <div className="nav-bar-logo">
              <p>
                <Link to="/">Shooppy</Link>
              </p>
            </div>
          </li>
          <li>
            <div className="nav-bar-home">
              <p>
                <Link to="/">Home</Link>
              </p>
            </div>
          </li>
          <li>
            <div className="nav-bar-shop">
              <p>
                <Link to="/shop">Online Shop</Link>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="nav-cart">
        <button className="shopping-cart">
          <Link to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 -960 960 960"
              width="48px"
              fill="currentColor"
            >
              <path d="M286.79-81Q257-81 236-102.21t-21-51Q215-183 236.21-204t51-21Q317-225 338-203.79t21 51Q359-123 337.79-102t-51 21Zm400 0Q657-81 636-102.21t-21-51Q615-183 636.21-204t51-21Q717-225 738-203.79t21 51Q759-123 737.79-102t-51 21ZM235-741l110 228h288l125-228H235Zm-30-60h589.07q22.97 0 34.95 21 11.98 21-.02 42L694-495q-11 19-28.56 30.5T627-453H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z" />
            </svg>
          </Link>
        </button>

        {cart.length > 0 ? (
          <p className="cart-number">({cart.length})</p>
        ) : null}
      </div>
    </div>
  );
}

export default NavBar;
