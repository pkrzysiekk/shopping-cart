import { createContext, useState } from "react";
import NavBar from "./components/NavBar";
import { Link } from "react-router-dom";
import { CartProvider, useCart } from "./components/CartProvider";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <div className="main-header">
          <h1 className="main-header">
            Browse our richest and fanciest collections on Shooppy!
          </h1>
        </div>
        <div className="button-section">
          <h2> Explore our offers now!</h2>

          <Link to="/shop">Online shop</Link>
        </div>
      </main>
    </>
  );
}

export default App;
