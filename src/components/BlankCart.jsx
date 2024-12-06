import { Link } from "react-router-dom";

function BlankCart() {
  return (
    <>
      <div className="button-section">
        <h2> Explore our offers now!</h2>

        <Link to="/shop">Online shop</Link>
      </div>
    </>
  );
}

export default BlankCart;
