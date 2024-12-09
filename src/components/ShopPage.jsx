import { useContext, useEffect, useState } from "react";

import NavBar from "./NavBar";
import Card from "./Card";
import { useCart } from "./CartProvider";

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      fetch("https://fakestoreapi.com/products?limit=8")
        .then((res) => res.json())
        .then((json) => setProducts(json))
        .then(() => setIsLoaded(true));
    };
    fetchProducts();
  }, []);
  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <>
      <NavBar />
      <main>
        <h1>Our products:</h1>
        <div className="products-container">
          {isLoaded ? (
            products.map((product) => (
              <Card key={product.id} product={product} />
            ))
          ) : (
            <p className="loading-element">Loading...</p>
          )}
        </div>
      </main>
    </>
  );
}

export default ShopPage;
