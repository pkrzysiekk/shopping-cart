import { useContext, useEffect, useState } from "react";

import NavBar from "./NavBar";
import Card from "./Card";
import { useCart } from "./CartProvider";

function ShopPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      fetch("https://fakestoreapi.com/products?limit=8")
        .then((res) => res.json())
        .then((json) => setProducts(json));
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
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  );
}

export default ShopPage;
