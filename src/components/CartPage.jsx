import NavBar from "./NavBar";
import BlankCart from "./BlankCart";

function CartPage() {
  return (
    <>
      <NavBar />

      <main>
        <div className="cart-container">
          <BlankCart />
        </div>
      </main>
    </>
  );
}
export default CartPage;
